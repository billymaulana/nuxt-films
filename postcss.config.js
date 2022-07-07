const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");

module.exports = {
  plugins: [
    postcssJitProps(OpenProps),
    // postcssJitProps({
    //   files: ["src/assets/scss/variables.scss"],
    // }),
    // require("postcss-custom-media")({
    //   importFrom: ["open-props/open-props.css"],
    // }),
    require("autoprefixer"),
  ],
};
