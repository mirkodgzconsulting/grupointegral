/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:    '#0A2540',
        accent:     '#635BFF',
        success:    '#0B8A5F',
        'bg-section': '#F6F9FC',
        'bg-accent':  '#EEF2FF',
        'text-body':  '#425466',
        border:     '#E6E6EF',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['20px', { lineHeight: '1.35', fontWeight: '600' }],
      },
      borderRadius: {
        btn:  '6px',
        card: '12px',
      },
      boxShadow: {
        card: '0 1px 4px 0 rgba(10,37,64,0.06)',
        nav:  '0 1px 8px 0 rgba(10,37,64,0.08)',
      },
    },
  },
  plugins: [],
};
