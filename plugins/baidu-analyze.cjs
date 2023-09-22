function baiduAnalyzePlugin() {
    const isProd = process.env.NODE_ENV === 'production';

    return {
        name: 'baidu-analyze-plugin',
        injectHtmlTags() {
            if (!isProd) {
                return {}
            }

            return {
                headTags: [
                    {
                        tagName: 'script',
                        innerHTML: `var _hmt = _hmt || [];
                        (function() {
                         var hm = document.createElement("script");
                         hm.src = "https://hm.baidu.com/hm.js?7ccc3aaf97761013d647900344b9bd6c";
                         var s = document.getElementsByTagName("script")[0]; 
                         s.parentNode.insertBefore(hm, s);
                        })();`
                    }
                ]
            }
        }
    }
}

module.exports = baiduAnalyzePlugin