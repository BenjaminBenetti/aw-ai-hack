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

// Copy all assets recursively
async function copyAssets(srcDir: string, destDir: string) {
  await Deno.mkdir(destDir, { recursive: true });
  
  for await (const entry of Deno.readDir(srcDir)) {
    const srcPath = `${srcDir}/${entry.name}`;
    const destPath = `${destDir}/${entry.name}`;
    
    if (entry.isDirectory) {
      await copyAssets(srcPath, destPath);
    } else if (entry.isFile) {
      await Deno.copyFile(srcPath, destPath);
    }
  }
}

await copyAssets("./src/assets", "./dist");

console.log("Build completed successfully!");
await esbuild.stop();