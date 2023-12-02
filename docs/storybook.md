# Storybookインストール

```scss
npx storybook@latest init
```

ESLintが使われている場合は、plguinの導入も推奨される

```scss
• Adding Storybook support to your "Next" app
  ✔ Getting the correct version of 9 packages
? We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: https://github.com/storybookjs/eslint-plugin-storybook#readme
```

yを選択

変更前のディレクトリ

```scss
(base) fuku079@fukuuranoMacBook-Air component-library % tree -aI "node_modules|.next|.git"
.
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .stylelintrc.js
├── .vscode
│   └── settings.json
├── README.md
├── docs
│   └── setup.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── Sample.tsx
│   │   ├── favicon.ico
│   │   ├── globals.scss
│   │   ├── layout.module.scss
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── styles
│       └── _variables.scss
├── tailwind.config.t
```

変更後のディレクトリ

```scss
tree -aI "node_modules|.next|.git"
.
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .storybook
│   ├── main.ts
│   └── preview.ts
├── .stylelintrc.js
├── .vscode
│   └── settings.json
├── README.md
├── docs
│   └── setup.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── Sample.tsx
│   │   ├── favicon.ico
│   │   ├── globals.scss
│   │   ├── layout.module.scss
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── stories
│   │   ├── Button.stories.ts
│   │   ├── Button.tsx
│   │   ├── Configure.mdx
│   │   ├── Header.stories.ts
│   │   ├── Header.tsx
│   │   ├── Page.stories.ts
│   │   ├── Page.tsx
│   │   ├── assets
│   │   │   ├── accessibility.png
│   │   │   ├── accessibility.svg
│   │   │   ├── addon-library.png
│   │   │   ├── assets.png
│   │   │   ├── context.png
│   │   │   ├── discord.svg
│   │   │   ├── docs.png
│   │   │   ├── figma-plugin.png
│   │   │   ├── github.svg
│   │   │   ├── share.png
│   │   │   ├── styling.png
│   │   │   ├── testing.png
│   │   │   ├── theming.png
│   │   │   ├── tutorials.svg
│   │   │   └── youtube.svg
│   │   ├── button.css
│   │   ├── header.css
│   │   └── page.css
│   └── styles
│       └── _variables.scss
├── tailwind.config.ts
└── tsconfig.json
```

### Storybookディレクトリ：設定

[What's a Story](https://storybook.js.org/docs/react/get-started/whats-a-story)

# 前設定

### storybookで、Sassの共通ファイルのaliasによるimportが使えるように設定する

storyに登録して、いざstorybookを確認しようとしたら以下のエラーが発生した

appRouterを使用している場合に、エイリアス@が使われるので、その設定も踏まえて

```tsx
info => Starting manager..
info Addon-docs: using MDX2
info => Using implicit CSS loaders
info => Using default Webpack5 setup
<i> [webpack-dev-middleware] wait until bundle finished
99% end closing watch compilationWARN Force closed preview build
ModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
SassError: Can't find stylesheet to import.
  ╷
1 │ @import '@/styles/common/_mq.scss';
  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  src/app/_components/SCSS/Button/style.module.scss 1:9  root stylesheet
    at processResult (/Users/fuku079/Product/Blog/component-library/node_modules/webpack/lib/NormalModule.js:764:19)
    at /Users/fuku079/Product/Blog/component-library/node_modules/webpack/lib/NormalModule.js:866:5
    at /Users/fuku079/Product/Blog/component-library/node_modules/loader-runner/lib/LoaderRunner.js:400:11
    at /Users/fuku079/Product/Blog/component-library/node_modules/loader-runner/lib/LoaderRunner.js:252:18
    at context.callback (/Users/fuku079/Product/Blog/component-library/node_modules/loader-runner/lib/LoaderRunner.js:124:13)
    at Object.loader (/Users/fuku079/Product/Blog/component-library/node_modules/sass-loader/dist/index.js:69:5)
SassError: SassError: Can't find stylesheet to import.
  ╷
1 │ @import '@/styles/common/_mq.scss';
  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  src/app/_components/SCSS/Button/style.module.scss 1:9  root stylesheet
    at Object.loader (/Users/fuku079/Product/Blog/component-library/node_modules/sass-loader/dist/index.js:69:14)

WARN Broken build, fix the error above.
WARN You may need to refresh the browser.
```

webpackが基盤となっているため、webpackFinalの関数を設定する事で、カスタマイズできる

**storybook/main.ts**

```tsx
import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    config.resolve ??= {}
    config.resolve.alias ??= {}
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  }
}
export default config
```

# Storiesの書き方

**ストーリー ＝ コンポーネントを描画するコンポーネント + メタデータ**

今回描画したいコンポーネントはこれ

```tsx
import { FC } from 'react'
import { clsx } from 'clsx'
import styles from './style.module.scss'

interface ButtonProps {
  label: string
  primary?: boolean
}

export const Button: FC<ButtonProps> = ({ label, primary, ...args }) => {
  return (
    <button className={clsx(styles.button, { [styles.primary]: primary })} {...args}>
      {label}
    </button>
  )
}
```

## Stories.ts|tsxについて

### CSFで記述される

CSF：ESMを用いてexportするオブジェクトの集合

一つの`default export`と、1つ以上の`named export`を用いて構成される

このボタンコンポーネントをStorybookに登録する

### export defaultとexport constの役割

### export default＝メタデータを定義する

```tsx
const meta: Meta<typeof Button> = {
  component: Button
}
```

• 対象コンポーネントのメタデータ及び各ストーリーの共通設定を定義

描画するコンポーネントや、型情報など

### export const＝コンポーネントを描画するコンポーネント

```tsx
export const Default: Story = {
  render: () => <Button label="てきすと" />
}
```

• コンポーネントのストーリーを定義する

## 書き方ガイド

### 1. 描画したいコンポーネントと必要なモジュールをimport

```tsx
import { StoryObj, Meta } from '@storybook/react'
import { Button } from './index'
```

### 2. 描画するコンポーネントの共通の設定を行うMeta情報の定義

```tsx
const meta: Meta<typeof Button> = {
  component: Button // 使いたいコンポーネントを定義
}
```

titleはstorybook上でみられる時の名前を定義できる

### 3. 描画するコンポーネントを作成

```tsx
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => <Button label="でふぉると" />
}
```

render関数を使って、コンポーネントを描画できる

### 描画したいコンポーネントは、いくつも追加できる

```tsx
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => <Button label="でふぉると" />
}

export const Primary: Story = {
  render: () => <Button label="ぷらいまりぃ" primary />
}
```

こんな感じでpropsによって変わるUIの変更をカタログ形式で見れるようになる

## 事前の設定

## Controlで

ArgTypesを使ってControlでpropsをいじれるようにしよう

```tsx
export const Default: Story = {
  render: (argTypes) => <Button {...argTypes}></Button>
}

export const Primary: Story = {
  argTypes: {
    label: {
      control: 'text',
      default: 'Button'
    },
    primary: {
      control: 'boolean',
      default: true
    }
  }
}
```

# Metaオブジェクトのプロパティについて

## title：コンポーネントのタイトル

`/`で階層構造にできるみたい

@7だとデフォルトで、ワークスペースのディレクトリ階層が反映されてる

## arg：デフォルトのプロパティを設定する

[Args](https://storybook.js.org/docs/react/writing-stories/args)

## argTypes：コンポーネントの各プロパティ（引数）をコントロール

[ArgTypes](https://storybook.js.org/docs/react/api/arg-types)

[【Storybook】meta / args / argTypes【自分用メモ】 - Qiita](https://qiita.com/tasty_uni/items/9ab9fdeb002b8dbb6264)

## parameters：Storybook上の機能や外観などを設定できる

[Parameters](https://storybook.js.org/docs/react/writing-stories/parameters)