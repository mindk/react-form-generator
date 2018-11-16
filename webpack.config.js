var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                    },
                },
            },
        ]
    },
    externals: {
        'react': 'commonjs react'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {

            // Support React Native Web
            // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
            'react-native': 'react-native-web',

            // Custom Aliases
            'Components': path.resolve(__dirname, './src/components/'),
            'Constants': path.resolve(__dirname, './src/constants/'),
            'Layouts': path.resolve(__dirname, './src/layouts/'),
            'Types': path.resolve(__dirname, './src/types/'),
            'Utils': path.resolve(__dirname, './src/utils/'),
        },
    },
};
