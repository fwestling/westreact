import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

import packageJSON from "./package.json";
const input = "./src/index.js";
const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, ".min.js");

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      json(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      json(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      uglify(),
    ],
  },
  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      sourcemap: true,
      name: "westreact",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core",
      },
    },
    plugins: [
      json(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      name: "westreact",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core",
      },
      sourcemap: true,
    },
    plugins: [
      json(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
    plugins: [
      json(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      exports: "named",
      sourcemap: true,
    },
    plugins: [
      json(),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];
