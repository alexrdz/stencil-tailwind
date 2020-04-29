import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import postcssPlugin from "rollup-plugin-postcss";

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.ts",
    "./src/**/*.tsx"
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

// https://stenciljs.com/docs/config
const isProduction = process.env.NODE_ENV === "production";
console.log("isProduction", isProduction, process.env.NODE_ENV);

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/"
    }
  ],
  plugins: [
    postcss({
      plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
      ]
    })
  ],
  rollupPlugins: {
    before: [
      postcssPlugin({
        extract: "/www/build/app.css"
      })
    ]
  }
};
