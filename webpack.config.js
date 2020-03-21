const path = require('path');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs",
                    }
                }
            },
        ]
    },
    plugins: [
    ],
}
