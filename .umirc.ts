import { defineConfig } from 'dumi';
import path from 'path';

process.env.BABEL_ENV = 'dumi';

export default defineConfig({
  publicPath: '/anna-native/',
  base: '/anna-native',
  title: 'Anna Native',
  mode: 'site',
  logo: 'https://smebimage.fuliaoyi.com/Fpnmnf0ZwkicXQEXlrLZXBLY4hA9',
  favicon: 'https://smebimage.fuliaoyi.com/Fpnmnf0ZwkicXQEXlrLZXBLY4hA9',
  navs: [
    null,
    { title: 'Eurus', path: 'https://github.com/AnnaSearl/eurus' },
    { title: 'GitHub', path: 'https://github.com/AnnaSearl/anna-native' },
  ],
  theme: {
    '@c-primary': '#9966FF',
  },
  exportStatic: {},
  outputPath: 'website',
  extraPostCSSPlugins: [],
  extraBabelPlugins: [],
  alias: {
    'anna-native': path.resolve(__dirname, 'components'),
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // jsx 内联样式 px2rem
  },
  styles: [
    `
    .__dumi-default-device > iframe {
      background-color: #F4F4F4;
    }
    .__dumi-default-mobile-demo-layout {
      font-size: 14px;
    }
    .__dumi-default-mobile-demo-layout > div > div {
      margin-bottom: 10px;
    }
    .icon.icon-link {
      display: none;
    }
    .__dumi-default-navbar-logo{
      font-size: 20px !important;
      padding-left: 52px !important;
    }
    .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a.active{
      background: rgba(153, 102, 255, 0.1) !important;
    }
    .markdown *:not(pre) code {
      margin: 0 1px;
      padding: .2em .4em !important;
      font-size: .9em;
      color: rgba(0, 0, 0, 0.85) !important;
      background: #f2f4f5 !important;
      border: 1px solid #f0f0f0;
      border-radius: 3px;
      font-family: sfmono-regular,Consolas,liberation mono,Menlo,Courier,monospace;
    }
    .markdown table td:nth-child(3) {
      color: #9966FF;
      font-size: 13px;
      word-break: break-all;
    }
    .markdown table td:nth-child(3) > code {
      color: #9966FF !important;
      background-color: #F6F6F6 !important;
      font-size: 13px;
      word-break: break-all;
      margin-bottom: 6px;
    }
    .anna-btn:not(.anna-btn-disabled):hover .anna-btn-mask {
      box-sizing: border-box;
      position: absolute;
      top: -1PX;
      right: -1PX;
      bottom: -1PX;
      left: -1PX;
      content: '';
      background-color: rgba(255, 255, 255, 0.35);
      border-radius: inherit;
      pointer-events: none;
      transition: background-color 0.3s;
    }

    `,
  ],
});
