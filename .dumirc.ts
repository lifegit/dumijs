import { defineConfig } from 'dumi';

export default defineConfig({
  mfsu: false,
  presets: ['@dumijs/preset-vue'],
  vue: {
    compiler: {
      babelStandaloneCDN: 'https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.22.17/babel.min.js'
    },
    checkerOptions: {
      ignore: ['InternalType'],
    },
  },
  themeConfig: {
    name: 'a',
  },
});
