import fs from "fs";
import path from "path";

const imagesdir = path.join(process.cwd(), "static/images");

const files = fs.readdirSync(imagesdir);

files.forEach((file) => {
  const res = /\((.*)\)/.exec(file);

  console.log(res)

  if (res && res[1]) {
    fs.copyFileSync(path.join(imagesdir, file), path.join(imagesdir, `image-${res[1]}.png`))
    fs.unlinkSync(path.join(imagesdir, file))
  }
});
