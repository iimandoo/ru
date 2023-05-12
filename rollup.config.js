"use strict";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import typescript from "rollup-plugin-typescript2";

const extentions = ["js", "jsx", "ts", "tsx"];
const external = ["react", "react-dom", "styled-components"];

process.env.BABEL_ENV = "production";

export default {
  input: "src/index.ts",
  output: {
    dir: './dist',
    format: 'cjs',
    exports: 'named',
  },
  plugins: [
    peerDepsExternal(),
    resolve({ extentions }),
    babel({
      extentions,
      include: ['src/**/*'],
      exclude: /node_modules/,
      babelHelpers: 'runtime',
    }),
    
    // babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    commonjs({ 
      include: /node_modules/
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    image(),
  ],
  external
}