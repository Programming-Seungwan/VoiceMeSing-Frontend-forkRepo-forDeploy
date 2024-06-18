import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#1BD760',
        backgroundNavy: '#0c0c11',
        lightNavy: '#232333',
        lightGray: '#a9a9a9',
      },
    },
  },
  plugins: [],
};
export default config;
