/* eslint-disable import/no-extraneous-dependencies */
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const rules = require("./webpack.rules");

rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader"
    ]
});

rules.push({
    test: /\.vue$/,
    loader: "vue-loader"
});

// rules.push({
//     test: /\.js$/,
//     exclude: /(node_modules)/,
//     use: {
//         loader: "babel-loader"
//     }
// });

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        },
        extensions: [".js", ".vue"]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
