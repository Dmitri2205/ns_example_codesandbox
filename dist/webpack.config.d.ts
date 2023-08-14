declare function _exports(): {
    mode: string;
    plugins: any[];
    optimization: {
        usedExports: boolean;
        innerGraph: boolean;
    };
    entry: string;
    module: {
        rules: ({
            test: RegExp;
            use: (string | {
                loader: string;
                options: {
                    importLoaders: number;
                    postcssOptions?: undefined;
                };
            } | {
                loader: string;
                options: {
                    postcssOptions: {
                        plugins: string[][];
                    };
                    importLoaders?: undefined;
                };
            })[];
            exclude?: undefined;
            type?: undefined;
        } | {
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
                options: {
                    presets: string[];
                    cacheDirectory: boolean;
                };
            };
            type?: undefined;
        } | {
            test: RegExp;
            use: string;
            exclude: RegExp;
            type?: undefined;
        } | {
            test: RegExp;
            use: string;
            exclude?: undefined;
            type?: undefined;
        } | {
            test: RegExp;
            type: string;
            use?: undefined;
            exclude?: undefined;
        })[];
    };
    resolve: {
        extensions: string[];
    };
    output: {
        filename: string;
        path: string;
        chunkFilename: string;
        publicPath: string;
    };
    devServer: {
        server: string;
        port: number;
        hot: boolean;
        historyApiFallback: boolean;
    };
    devtool: string;
};
export = _exports;
