const path = require('path')

module.exports = {
    configureWebpack: () => ({
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'resolve-url-loader',
                        'sass-loader',
                    ],
                    include: path.resolve(__dirname, '../src'),
                },
            ]
        },
        watch: true,
    })
}