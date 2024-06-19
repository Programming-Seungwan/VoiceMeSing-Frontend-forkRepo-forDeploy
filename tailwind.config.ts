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
        backgroundNavy: '#0F0F16',
        lightNavy: '#232333',
        lightGray: '#a9a9a9',
        hoverGray: '#46464a',
      },
      boxShadow: {
        sideNavBarShadow: '4px 0 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
