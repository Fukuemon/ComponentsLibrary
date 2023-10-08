/** @type {import('next').NextConfig} */
const fs = require('fs')
const path = require('path')

// stylesディレクトリ内のすべてのSCSSファイルをリストアップ
const stylesDir = path.join(__dirname, 'src', 'styles', 'common')
const scssFiles = fs.readdirSync(stylesDir).filter((file) => file.endsWith('.scss'))

// @import文を動的に生成
const imports = scssFiles.map((file) => `@import '@/styles/common/${file}';`).join('\n')

module.exports = {
  sassOptions: {
    additionalData: imports
  }
}
