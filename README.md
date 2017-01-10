# rollup.js

>he next-generation JavaScript module bundler

## 阅读链接

+   [https://github.com/rollup/rollup](rollup.js)
+   [http://rollupjs.org/guide/#what-is-rollup](
rollup.js guide)
+   [https://github.com/rollup/rollup/wiki/Plugins](plugins)



## command line api

>rollup src/main.js --output bundle.js # or rollup main.js -o bundle.js

>rollup src/main.js --output bundle.js --format cjs

`format`值有` amd, cjs, es, iife, umd`

## 使用config配置文件

通过`--config`或者`-c`标志来使用配置文件

>rollup --config # rollup -c

也可以在配置文件的同时，继续输出文件

>rollup -c -o bundle-2.js # 会在执行配置文件的同时，产生一个bundle-2.js

当然，也可以指定一个配置文件

>rollup --config rollup.config.dev.js
>rollup --config rollup.config.prod.js


## 使用插件

1. 在项目中添加`package.json`，然后安装开发依赖`npm i -D rollup-plugin-json`
2. 
