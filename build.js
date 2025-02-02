import { build } from "esbuild";

await build({
    entryPoints: {
        worker: "./src/worker.js",
        config: "./src/config.js"
    },
    entryNames: "skyhigh.[name]",
    outdir: "./public/skyhigh",
    bundle: true,
    logLevel: "info",
    treeShaking: true,
    minify: true
});
