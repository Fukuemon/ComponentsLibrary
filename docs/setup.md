# ESLint導入
- [ ] TypeScriptの設定とimport関連のpluginのインストール
- [ ] .eslintrc.jsに設定追記
- [ ] .eslintignoreに除外ファイル定義

#### 1 TypeScript関連のpluginとparserインストール
```
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
#### 2 .eslintrc.jsに設定追記
デフォルトは.eslintrc.jsonだが、.eslintrc.jsに置き換える
```
module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
  plugins: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error", //宣言されてるけど使用されてない変数をエラーに
    "@typescript-eslint/no-explicit-any": "warn", // any型の場合に警告を出す
    "@typescript-eslint/no-unsafe-call": "error", // 型安全性が確保されてない関数を呼び出した場合にエラーに
    "@typescript-eslint/no-unsafe-member-access": "error", //オブジェクトのメンバーへの型安全性が確保されていないアクセスを検出
    "@typescript-eslint/no-unsafe-return": "error", // 型安全性が確保されていない値の返却を検出
  },
};
```

#### 3 import関連のpluginインストール
```
$ npm i -D eslint-plugin-unused-imports
```

#### 4 .eslintrc.jsに設定追加
```
module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended', 
    'next/core-web-vitals',
  ],
  plugins: ['unused-imports'], //追加
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    "import/order": [ //追加
      "error",
      {
        // インポートを以下のカテゴリに分類
        groups: [
          "builtin", // Node.jsの組み込みモジュール
          "external", // node_modulesからのインポート
          "internal", // 同じパッケージ内の他のモジュールからのインポート
          "parent", // 現在のディレクトリの親ディレクトリからのインポート
          "sibling", // 同じディレクトリ内の他のモジュールからのインポート
          "index", // 現在のディレクトリのインデックスファイルからのインポート
          "object", // オブジェクトのインポート
          "type", // TypeScriptの型のインポート
        ],
        // 特定のインポートパターンをカスタムグループに分類
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}", // このパターンに一致するインポート
            group: "builtin", // 上記のインポートをbuiltinグループとして扱う。
            position: "before", // そのグループの前に配置
          },
        ],
        // pathGroupsの設定から特定のインポートタイプを除外
        pathGroupsExcludedImportTypes: ["builtin"], // builtinタイプのインポートを除外。
        // インポート文のアルファベット順にソート
        alphabetize: {
          order: "asc", //
        },
      },
    ],
  }
}
```
#### 5 .eslintignoreで管理対象外ファイルを定義
```
node_modules
.next
out
public
.prettierrc.js
.eslintrc.js
tailwind.config.js
next.config.js
postcss.config.js
```


# Prettier導入
- [ ] Prettierインストール
- [ ] .prettierrcファイルに設定追加
- [ ] .eslintrc.jsにprettier追加
- [ ] .prettierignoreで管理対象から省くファイル定義

#### 1 Prettierインストール
```
npm i -D prettier eslint-config-prettier
```

#### 2 ..prettierrcにルール追記
```
{
  "printWidth": 120, // 120文字以上で改行
  "jsxBracketSameLine": false, // jsxの閉じタグを新しい行に
  "tabWidth": 2, // インデントのスペース
  "trailingComma": "none", // 配列やオブジェクトの最後の要素にカンマはつけない
  "semi": false, // 分の終わりにセミコロンを追加しない
  "singleQuote": true // 文字列はシングルクォートで囲む
}
```

#### 3 .eslint.jsにprettier追加
```
extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
```

#### 4 管理対象から省くファイル定義
```
node_modules
.next
dist
out
public/
*.md
```

# Sass + Stylelint導入
- [ ] SassとStylelintインストール
- [ ] Stylelintの設定
- [ ] .stylelint.jsに記述

#### 1 SassとStylelintインストール
```
npm i --save-dev sass
```
```
npm i -D stylelint stylelint-config-standard-scss stylelint-config-recess-order stylelint-config-recommended-scss
```

#### 2 .stylelintrc.jsを作成し。設定追加
```
module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-recommended-scss'],
  rules: {
    // ::before, ::afterのコロンを2つにする
    'selector-pseudo-element-colon-notation': 'double',
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    'scss/selector-no-union-class-name': true,
    // シングルクォーテーションに統一
    'string-quotes': 'single',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'layer', 'responsive', 'screen', 'tailwind'] //Tailwind関連のエラーを無視
      }
    ]
  },
  ignoreFiles: ['**/node_modules/**']
}

```

# pacage.jsonにスクリプト追加
```
"scripts: {
	//..省略
  // Next.jsのESLintを使って、'src'ディレクトリ内のファイルをリントする
  "lint": "next lint --dir src",

  // Next.jsのESLintを使って、プロジェクト内のファイルのリントエラーを自動修正する
  "lint:fix": "next lint --fix",

  // Prettierを使って、指定されたファイルタイプのファイルを自動フォーマットする
  // .gitignoreにリストされているファイルは無視される
  "format": "prettier --write './**/*.{js,jsx,ts,tsx,json}'",

  // Stylelintを使って、指定されたファイルタイプのスタイルファイルをリントする
  "lint:style": "stylelint '**/*.{css,scss,sass}'",

  // Stylelintを使って、指定されたファイルタイプのスタイルファイルのリントエラーを自動修正する
  "lint:style:fix": "stylelint --fix '**/*.{css,scss,sass}'"
}
```

# TailwindCSSのためのリンター設定

- [ ] pluginインストール
- [ ] .eslintrc.jsに記述
#### pluginインストール
```
$ npm i -D eslint-plugin-tailwindcss
```
#### .eslint.jsに追加
```
extends: [
	"plugin:tailwindcss/recommended",
]
```

# 保存時にリンターとフォーマッターが効くように設定
- [ ] .vscodeディレクトリ作成
- [ ] settings.jsonに設定記述

.vscode/settings.jsonを追加し、以下を記述
```
"scripts: {
	//..省略
  // Next.jsのESLintを使って、'src'ディレクトリ内のファイルをリントする
  "lint": "next lint --dir src",

  // Next.jsのESLintを使って、プロジェクト内のファイルのリントエラーを自動修正する
  "lint:fix": "next lint --fix",

  // Prettierを使って、指定されたファイルタイプのファイルを自動フォーマットする
  // .gitignoreにリストされているファイルは無視される
  "format": "prettier --write './**/*.{js,jsx,ts,tsx,json}'",

  // Stylelintを使って、指定されたファイルタイプのスタイルファイルをリントする
  "lint:style": "stylelint '**/*.{css,scss,sass}'",

  // Stylelintを使って、指定されたファイルタイプのスタイルファイルのリントエラーを自動修正する
  "lint:style:fix": "stylelint --fix '**/*.{css,scss,sass}'"
}
```