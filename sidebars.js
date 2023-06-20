/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 const fs = require('fs')
 const path = require('path')
 const summaryFile = path.join('docs/SUMMARY.md');
 
 const generateSitemap = () => {
     const fileContent = fs.readFileSync(summaryFile, 'utf-8');
     const lines = fileContent.split('\n')
     const map = []
 
     lines.forEach(line => {
         if (!line.trim().startsWith('*')) {
             return
         }
 
         const spaceLength = (line.length - line.trimStart().length) / 2
 
         if (spaceLength === 0) {
             const item = parseItem(line);
 
             if (!item) {
                 return
             }
 
             map.push(item)
         } else if (spaceLength === 1) {
             const item = parseItem(line)
 
             if (!item) {
                 return
             }
 
             const last = map[map.length - 1];
 
             last.type = "category";
             last.items = last.items || []
             last.id && delete last.id
             last.link = {
              type: 'generated-index'
             }
 
             last.items.push(item.id)
         } else {
             console.error("未支持三层目录结构解析")
         }
     })
 
     return map
 }
 
 // * [基础篇](docs/basic/README.md)
 const parseItem = (item) => {
     const res = /\*\s+\[(.*)\]\((docs\/)?(.*)\.md\)/.exec(item.trim())
 
     if (!res) {
         return null
     }
 
     return {
         label: res[1],
         id: res[3],
         type: 'doc'
     }
 }
 
 // @ts-check
 
 /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
 const sidebars = {
   chatGPT: generateSitemap(),
 }

 
 module.exports = sidebars
 