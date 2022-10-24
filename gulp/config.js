const SRC_PATH = 'src';
const DEST_PATH = 'build';

const config = {
  src: {
    root: SRC_PATH,
    sass: `${SRC_PATH}/scss`,
    scripts: `${SRC_PATH}/scripts`,
    pug: `${SRC_PATH}/pug`,
    fonts: `${SRC_PATH}/assets/fonts`,
    images: `${SRC_PATH}/assets/images`,
    iconsMono: `${SRC_PATH}/assets/icons/mono`,
    iconsMulti: `${SRC_PATH}/assets/icons/multi`,
  },
  dest: {
    root: DEST_PATH,
    html: DEST_PATH,
    css: `${DEST_PATH}/css`,
    scripts: `${DEST_PATH}/scripts`,
    fonts: `${DEST_PATH}/fonts`,
    images: `${DEST_PATH}/images`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
