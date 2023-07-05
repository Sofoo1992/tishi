const fs = require('fs');
const path = require('path');

class RemoveImageSpacesPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    // 监听 webpack 构建结果
    compiler.hooks.done.tap('RemoveImageSpacesPlugin', (stats) => {
      // 获取输出目录路径
      const outputPath = stats.compilation.outputOptions.path;

      // 遍历输出目录下的所有文件
      const walk = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory()) {
            walk(filePath);
          } else if (
            /(\.png|\.jpe?g|\.gif|\.webp)(\?.*)?$/.test(file) &&
            /\s/.test(file)
          ) {
            const newPath = path.join(dir, file.replace(/\s/g, ''));

            // 重命名文件
            fs.rename(filePath, newPath, (err) => {
              if (err) {
                console.error(`Error renaming file ${filePath}: ${err}`);
              } else {
                console.log(`File ${filePath} renamed to ${newPath}`);
              }
            });
          }
        });
      };

      walk(outputPath);
    });
  }
}

module.exports = RemoveImageSpacesPlugin;
