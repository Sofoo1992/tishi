const sidemap = require('../sidebars').chatGPT

function loader(_source) {
    let source = _source

    if (typeof source !== "string") {
        return;
    }

    // if (source.includes(`alt="">`)) {
    //   source = source.replaceAll(`alt="">`, `alt=""/>`);
    // }
    source = source.replaceAll(/alt="([^>]*)"\s*>/g, a => {
        return a.substring(0, a.length - 1) + '/>';
    })

    if (source.includes("<br>")) {
      source = source.replaceAll("<br>", "<br />");
    }

    if (source.includes(`{% hint style="info" %}`)) {
        source = source.replaceAll(`{% hint style="info" %}`, ':::info\n')
    }

    if (source.includes(`{% hint style="warning" %}`)) {
        source = source.replaceAll(`{% hint style="warning" %}`, ':::warning\n')
    }

    if (source.includes(`{% endhint %}`)) {
        source = source.replaceAll(`{% endhint %}`, ':::')
    }

    source = source.replaceAll(`{% code overflow="wrap" %}`, '')
    source = source.replaceAll(`{% endcode %}`, '')

    source = source.replace(/<img src=".*assets\/([^"]*)"/g, ((_, p) => {
        return `<img src="/${p.replaceAll(' ', '')}"`
    }))

    source = source.replaceAll(/\(([a-zA-Z-_\/]*)\/\)/g, (_, a) => {
        return `(docs/category/${a})`
    })

     // style
    source = source.replaceAll(/style="([a-z:-;]*)"/g, (_, a,c,d) => {
        if (!a.includes(';') || !a.includes(':')) {
            return _
        }

        const styles = a.split(';');
        let styleObj = "style={{";

        styles.forEach(s => {
            if (!s) {
                return;
            }

            const [key,value] = s.split(':')

            styleObj += `${key}:\"${value}\",`
        })

        return styleObj.substring(0, styleObj.length - 1)  + "}}"
    })

    // mark
    source = source.replaceAll(/<mark\s+([^>]*)>\*\*([^<]*)\*\*<\/mark>/g, (_, a, b) => {
        return `<strong><mark ${a}>${b}</mark></strong>`
    })

    // 视频
    /**
     * {% embed url="https://www.bilibili.com/video/BV1ws4y117S4?t=10.8" %}
学会写提示语，就能摆脱职场内卷？AI浪潮下，提示语工程师还能火多久？ChatGPT带火的新职业
{% endembed %}
     */
    source = source.replaceAll(/\{%\s+embed\s+url="([^}]*)"\s*\%}\n\s*(.*)\n\s*\{% endembed %\}/mg, (_, a, b) => {
        return `<div style={{textAlign: 'center', paddingBottom: '56.25%', width: '100%', position: 'relative'}}> 
<iframe width="100%" height='100%' style={{position: 'absolute', top: 0, left: 0}} src="${a}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
        <div style={{textAlign: 'center',fontSize: '12px', color: 'rgb(136, 153, 168)', marginTop: '8px'}}>${b.trim()}</div>`
    })

    // \<xml> => <xml\>
    source = source.replaceAll('\\<xml>', '<xml\\>')

    return source
}

module.exports = loader