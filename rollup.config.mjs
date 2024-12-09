import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };

export default [
  // JavaScript & CSS Build
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main, // CommonJS build
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module, // ES Module build
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.stories.tsx",
          "**/*.stories.ts",
        ],
      }),
      postcss({
        extensions: [".css"],
        extract: true, // Extracts CSS into a separate file
      }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"], // Mark peer dependencies as external
  },
  // TypeScript Declarations
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/], // Exclude CSS from type declarations
  },
];
