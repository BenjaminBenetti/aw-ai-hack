import * as esbuild from "https://deno.land/x/esbuild@v0.24.0/mod.js";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@0.11.0";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./src/main.tsx"],
  outdir: "./dist/",
  bundle: true,
  platform: "browser",
  format: "esm",
  target: "esnext",
  minify: false,
  sourcemap: true,
  treeShaking: true,
});

// Copy assets
await Deno.copyFile("./src/assets/index.html", "./dist/index.html");

console.log("Build completed successfully!");
await esbuild.stop();