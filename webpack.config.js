module.exports = {
    entry: "./app/components/Main.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_module|bower_components)/,
                loader: 'babel'
            }
        ]
    }
};