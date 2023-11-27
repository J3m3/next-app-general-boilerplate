# next-app-linter-boilerplate

> A boilerplate wrapping create-next-app with general FE environment setup.

This boilerplate provides integrated setup for...

- [Prettier](https://prettier.io/)
- [ESlint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [Storybook](https://storybook.js.org/)

# CSS Variations

Want to use [SCSS](https://sass-lang.com/) for styling? Refer to [the main branch](https://github.com/J3m3/next-app-linter-boilerplate). It also contains [stylelint](https://stylelint.io/) for linting, and [clsx](https://github.com/lukeed/clsx/tree/master) & [cva](https://cva.style/docs) utilities for component styling.

Want to use [Vanilla-extract](https://vanilla-extract.style/) for styling? Refer to [the vanilla-extract branch]().

# Note

This boilerplate uses [pnpm](https://pnpm.io/) as a package manager. Here's some "npx" equivalents for pnpm.

```bash
# Running executables inside your downloaded dependencies
npx eslint --fix file.ts
pnpm exec eslint --fix file.ts

# Running executable commands in packages you want to download transiently
npx storybook@latest init
pnpm dlx storybook@latest init
```

# Reference

https://stackoverflow.com/questions/75413361/can-i-use-npx-with-pnpm
