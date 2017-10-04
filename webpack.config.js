module.exports = {
    entry: "./js/script.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};