module.exports = {
  purge: [
    './**/*.html'
  ],
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              "code::before": { content: '' },
              "code::after": { content: '' },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
