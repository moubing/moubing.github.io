---
slug: use-docusaurus
title: 部署docusaurus的心酸历程
authors: bing
tags: [部署网站, 无语, 小脑萎缩]
---

今天部署这个docusaurus弄了好久，导致这个的原因是我竟然忘记保存配置文件了，what the fuck!!!🤣🤣🤣就像是失去神经🤪，我感觉不到呼吸🤪，连空气都窒息🤪，why，why，I love you so！每秒钟胆颤心惊🤡，迎战你给的惊奇🤡，你与众不同的🤡 love,love,I want to girl!

**我现在来回顾一下这个网站是怎么部署的**

首先是下载`docusaurus`，[点击进入官网](https://docusaurus.io/)

```bash
npx create-docusaurus@latest my-website classic
// my-website只是一个目录名称，你可以任意修改
// classic是网站的风格，你也可以更改
```

:::info
你需要安装node，并且版本不低于18.0
:::

然后你可以需要进入该文件夹，使用`cd my-website`，`docusaurus`提供了很多方便快捷的命令：

```bash
npm start
npm run build
npm run deploy
// 还有很多，你可以到package.json中查看
```

现在去`github`创建一个仓库

:::tip
仓库名称尽量取成`<your github name>.github.io`，因为这样设置的话，后面成功部署后的域名就是这个，比如我的这个网站的域名就是`moubing.github.io`。不然得话你的域名就是`<your github name>.github.io/<repo name>`，这样要长一节
:::

接下来就是修改`docusaurus`的配置文件`docusaurus.config.js`，下面我将展示我的配置文件

```js
const config = {
    // 网站首页的title，不知道是什么就自己改一下
    title: "bing'swebsite", 
    // 网站首页title下面的话
    tagline: 'bing are cool', 
    // 网站的图标，就是tab上的那个小鳄鱼
    favicon: 'img/favicon.ico',
    // 注意换成你的域名
    url: 'https://moubing.github.io/',
    // 设置网站的根路径，其实我也不太懂，管他的随便写了
    baseUrl: '/', 
    // 写你的github账号名称
    organizationName: 'moubing', 
    // 写你的仓库名称
    project: 'moubing.github.io', 
    // 以前的版本需要这句话，但是我看了官方文档，新的版本你可以不写，gh-pages是默认值
    deploymentBranch: 'gh-pages', 
    i18n: {
        // i18n全称internationalization，国际化的意思
        // 它会影响时间和其他东西的格式
        defaultLocale: 'zh',
        locales: ['zh']
    }

}
```

:::note
还需要一个配置，你需要在你的电脑上设置一个环境变量`GIT_USER`，它的值设置为你的`github`账号名称（例如我的：`moubing`）
:::

配置好后运行`npm run deploy`，它会先自动打包，将这个打包文件夹`build`上传到你的仓库，自动部署相关事宜

按理来说，这已经算是弄好了，你可以试着在浏览器上输入你的域名看看

:::warning[这个很重要，我就是在这*浪费了很多时间*，还是细心一点]
修改完`docusaurus.config.js`文件后记得保存，保存在进行后面的操作，我就是因为没有保存，一直在那瞎搞，原本最开始就弄的差不多了😖😖😖
:::

当然还可能遇到一些问题，比如：

```bash
Failed to connect to github.com port 443 after 22130 ms: Couldn't connect to server
```

:::info[别急]
这个问题多半是代理和防火墙导致的，它是暂时的，跟网络有关，你可以试着把代理或者防火墙关掉，其实还是看运气，遇到它怎么尝试都还是解决不了，我的建议是过一会再来试一试
:::

```bash
fatal: unable to access 'https://github.com/facebook/docusaurus.git
```

:::info[仔细检查配置文件有没有写错的]
它说无法进入这个仓库（上面的仓库只是一个示例，你的情况可能不同），这就是仓库写错了，写成其他的仓库了，其他人的仓库你不能随便`push`，你没有权限
:::

搞这个的时候在播放潘玮柏的《U U U》,我搞完的时候也恰好放这首歌，这歌的歌词怎么这么符合我的心情，I'm crazy over u u u u u🤪， 如此疯狂的中了do do do do do🥰， I'm going crazy over u u u u u🤪， cause this is all about u oh yeah🥳 yeah🥳!!!






