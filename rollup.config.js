const babel = require("@rollup/plugin-babel");
const json = require("@rollup/plugin-json");
const del = require("rollup-plugin-delete");
const external = require("rollup-plugin-peer-deps-external");
const typescript = require("rollup-plugin-typescript2");
const pkg = require("./package.json");

exports.default = {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.dependencies || {}),
};
