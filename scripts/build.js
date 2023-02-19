import browserSync from "browser-sync";
import commandLineArgs from "command-line-args";
import { deleteSync } from "del";
import esbuild from "esbuild";
import mkdirp from "mkdirp";

const bs = browserSync.create();

const { serve } = commandLineArgs([{ name: "serve", type: Boolean }]);

deleteSync(["./dist", "*/dist"]);
mkdirp.sync("./dist");

(async () => {
  console.log("Compiling code...");

  await esbuild
    .build({
      entryPoints: ["./src/web-component-docs.js"],
      outfile: "dist/web-component-docs.min.js",
      incremental: serve,
      bundle: true,
      minify: true,
      sourcemap: true,
      watch: true,
    })
    .catch((err) => {
      console.error("🚨 Build failure:", err);
      process.exit(1);
    })
    .then((result) => {
      console.log("🎉 Project has been successfully built!");
      if (!serve) result.stop();
    });

  if (serve) {
    bs.init({
      open: false,
      single: true,
      notify: false,
      ghostMode: false,
      logPrefix: "Dev Server",
      server: {
        baseDir: "docs",
        routes: {
          "/dist": "./dist",
        },
      },
    });

    bs.watch(["docs/**/*.md", "dist/**/*.js"]).on("change", () => {
      bs.reload();
    });
  }
})();
