import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import progress from "rollup-plugin-progress";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      // CommonJS Output
      file: "./dist/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      // Browser / ES6 output
      file: "./dist/index.es.js",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: [
        "./dist/",
      ],
    }),
    progress(),
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
    terser({
      ecma: 5,
    }),
    copy({
      targets: [
        { src: "examples/*", dest: "dist/examples" },
      ],
    }),
  ],
};
