import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        Blue: "#639AFF",
        Green: "#1AD37A",
        lightBlue: "#05D1ED",
        Pink: "#FF71C6",
        Red: "#FF7070",
        Yellow: "#FFB547",
        Orange: "#FFA188",
        Purple: "#B79CFF",
      },
    },
  },
  plugins: [],
}
export default config
