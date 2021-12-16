import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/client/index.js",
  output: {
    file: "./dist/bundle.min.js",
    format: "iife",
    name: "bundle",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    terser({ mangle: true }),
  ],
};
