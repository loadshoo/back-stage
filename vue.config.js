module.exports = {
    devServer: {
        // assetsSubDirectory: 'static',
        // assetsPublicPath: '/',
        proxy: { //axios跨域处理
            '/api': { //此处并非和url一致
                target: 'http://192.168.50.202:3000',
                changeOrigin: true, //允许跨域
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}