const path = require("path");
const webpack = require("webpack");

const webpackConfig = {
    entry: './src',
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env",
                        "@babel/preset-react",
                        "@emotion/babel-preset-css-prop"
                    ],
                    plugins: [
                        [
                            "@emotion/babel-plugin",
                            {
                                // sourceMap is on by default but source maps are dead code eliminated in production
                                "sourceMap": false,
                                "autoLabel": "dev-only",
                                "labelFormat": "[filename]-zzz-[local]",
                                "cssPropOptimization": true
                            }
                        ]
                    ]
                }
            }
        ]
    }
};

const cb = (err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }
    console.log(stats.toString({
        chunks: false,  // Makes the build much quieter
        colors: true    // Shows colors in the console
    }));
};

const compiler = webpack(webpackConfig);
compiler.run(cb);
//compiler.watch({}, cb);