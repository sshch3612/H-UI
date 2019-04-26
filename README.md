
## webpack配置

### loader配置

>js编译配置 babel babel-loader

>css编译配置  css-loader  style-loader  less-loader

>css Modules   options{modules:true}

> 静态文件加载 file-loader  url-loader

### devServer
>devServer.hot 启用模块热替换功能

>inline 实时预览功能

>historyApiFallback 针对任何命中的路由都返回一个对应的HTML文件

>contentBase 服务器的文件根目录

>headers  HTTP响应中注入一些HTTP响应头

>host

>port

>allowedHosts [] 白名单host

>https 


>compress 启动gzip压缩

>open  首次启动要打开的浏览器/网址

### webpack文件变更,自动编译
>nodemon --watch webpack.config.js --exec \" webp“

###  编译进度显示
>webpack-dev-server --progress --colors