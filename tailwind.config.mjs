export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tuvi: {
          primary: '#0f766e',
          'primary-light': '#ccfbf1',
          'primary-lighter': '#f0fdfa',
          'primary-dark': '#115e59',
          accent: '#b45309',
          'accent-light': '#fef3c7',
          background: '#f4f7f2',
          surface: '#ffffff',
          'text-primary': '#111827',
          'text-secondary': '#4b5563',
          'text-tertiary': '#52667a',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        landing: '1100px',
      },
    },
  },
};
