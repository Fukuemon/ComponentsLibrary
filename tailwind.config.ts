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
      screens: {
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
