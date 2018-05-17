var gulp = require("gulp");
var typescript = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");
var browserSync = require("browser-sync").create();

// TypeScriptをコンパイル
gulp.task("compile:ts", function () {
    var options =
    {
        out: "main.js"
    };
    return gulp.src(["src/ts/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(typescript(options))
        .js
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/js"));
});

// distフォルダを空にする
gulp.task("clean:dist", function () {
    return del.sync(["dist/*"]);
});

// HTMLをsrcからdistにコピー
gulp.task("copy:html", function () {
    return gulp.src(["src/*.html"])
        .pipe(gulp.dest("dist/"));
});

// ts,htmlが編集されたらタスクを再実行
gulp.task("watch", function ()
{
    gulp.watch(
        [
            "src/ts/*.ts",
            "src/*.html"
        ],
        [
            "compile:ts",
            "copy:html"
        ]);
});

// filesで指定したファイルが更新された時にリロードする
gulp.task("server", function()
{
    browserSync.init(
        {
            server: 
            {
                baseDir: "dist"
            },
            files: ["dist/*"]
        }
    );
})

gulp.task("default",
    [
        "clean:dist",
        "compile:ts",
        "copy:html",
        "server",
        "watch"
    ]);
