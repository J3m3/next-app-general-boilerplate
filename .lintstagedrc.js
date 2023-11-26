const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['prettier --write --cache', buildEslintCommand],
  'src/**/*.{css,scss}': ['prettier --write --cache', 'pnpm exec stylelint --fix --cache'],
};
