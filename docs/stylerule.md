# Styleファイルの整理と共通化

- [ ] stylesディレクトリ作成
- [ ] styles/commonにあるscssファイルを自動importするように設定

tailwindcssや、Sassで使っている変数やmixinのファイルをstylesファイルにまとめる
### ディレクトリ構成
```
src
├── app
│   ├── Sample.tsx
│   ├── favicon.ico
│   ├── globals.scss
│   ├── layout.module.scss
│   ├── layout.tsx
│   └── page.tsx
└── styles //共通のStyleファイル
    ├── common // プロジェクト全体で扱うscssファイル
    │   ├── _mq.scss // メディアクエリのmixinを定義
    │   └── _variables.scss // 変数を管理
    └── tailwind.css // TailwindCSSkk
```
## スタイルルール
### app/global.scss
リセットcssを含む共通の設定
```scss
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#root {
  width: 100%;
  min-width: 1000px;
  min-height: 100%;
}
```
### styles/common
共通のscssファイルを作成
####  _variables.scss：共通の変数
``` scss
$primary-color: #3498db;
```
####  _mq.scss：メディアクエリのmixinファイル //後述
  ``` scss
  $breakpoints: (
    // 480px以上 スマホの横向き
    'sm': '(min-width: 480px)',
    // 600px以上 タブレットの縦向き
    'md': '(min-width: 600px)',
    // 960px以上 ノートPC
    'lg': '(min-width: 960px)',
    // 1280px以上 デスクおtップPC
    'xl': '(min-width: 1280px)'
  );
  
  @mixin mq($breakpoint) {
    @media #{map-get($breakpoints, $breakpoint)} {
      @content;
    }
  }
  ```
### sytles/tailwind.css：tailwind関連のimportや@aprayを設定
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

...ここに@applyなどを記述
```

## Sassの共通ファイルを自動importできるように設定
#### next.config.jsでstyles/commonディレクトリ内に置かれた共通のscssファイルを自動でimportするように設定
``` js
const fs = require('fs');
const path = require('path');

// stylesディレクトリ内のすべてのSCSSファイルをリストアップ
const stylesDir = path.join(__dirname, 'src', 'styles', 'common');
const scssFiles = fs.readdirSync(stylesDir).filter(file => file.endsWith('.scss'));

// @import文を動的に生成
const imports = scssFiles.map(file => `@import '@/styles/common/${file}';`).join('\n');

module.exports = {
  sassOptions: {
    additionalData: imports
  }
}
```
この設定を追加することで、各scssファイルで`@use`を書かなくても変数やmixinを使うことができる

# レスポンシブ対応(モバイルファースト)
- [ ] TailwindCSSのメディアクエリをカスタマイズ
- [ ] Sassのメディアクエリのmixinファイルを作成

TailwindCSSとSassの方で共通のbreakpointを指定するようにする
breakpoint：（画面のサイズが~px以上になったらこのstyleを当てる）

## TailwindCSS：breakpointをカスタマイズ
#### tailwind.config.jsを以下のように修正
``` js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
+     screens: { //追記
        sm: '480px',
        // => @media (min-width: 480px) { ... }

        md: '600px',
        // => @media (min-width: 600px) { ... }

        lg: '960px',
        // => @media (min-width: 960px) { ... }

        xl: '1280px'
        // => @media (min-width: 1280px) { ... }
      }
    }
  },
  plugins: []
}
export default config
```

## Sass：メディアクエリのmixinファイルを作成
#### 先ほど作成したstyles/common/_mq.scssに記述
``` scss
$breakpoints: (
  // 480px以上 スマホの横向き
  'sm': '(min-width: 480px)',
  // 600px以上 タブレットの縦向き
  'md': '(min-width: 600px)',
  // 960px以上 ノートPC
  'lg': '(min-width: 960px)',
  // 1280px以上 デスクおtップPC
  'xl': '(min-width: 1280px)'
);

@mixin mq($breakpoint) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}
```