# next-app-general-boilerplate

> A boilerplate wrapping create-next-app with general FE environment setup.

This boilerplate provides integrated setup for...

- [Prettier](https://prettier.io/)
- [ESlint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## CSS Variations

Want to use [SCSS](https://sass-lang.com/) for styling? Refer to [the main branch](https://github.com/J3m3/next-app-general-boilerplate). It also contains [stylelint](https://stylelint.io/) for linting(allow kebap-case & BEM), and [clsx](https://github.com/lukeed/clsx/tree/master) & [cva](https://cva.style/docs) utilities for component styling.

Want to use [Vanilla-extract](https://vanilla-extract.style/) for styling? Refer to [the vanilla-extract branch](https://github.com/J3m3/next-app-general-boilerplate/tree/vanilla-extract).

## Getting Started

1. Clone this repository:

```bash
git clone --depth=1 git@github.com:J3m3/next-app-general-boilerplate.git your-project-name
cd your-project-name
```

2. Install all dependencies:

```bash
pnpm install
```

3. Run the local development server:

```bash
pnpm dev
```

## Note

This boilerplate uses [pnpm](https://pnpm.io/) as a package manager. Here's some "npx" equivalents for pnpm.

```bash
# Running executables inside your downloaded dependencies
npx eslint --fix file.ts
pnpm exec eslint --fix file.ts

# Running executable commands in packages you want to download transiently
npx storybook@latest init
pnpm dlx storybook@latest init
```

## Reference

https://stackoverflow.com/questions/75413361/can-i-use-npx-with-pnpm
