# cv-editor

> 一个有注册登录功能的在线简历编辑器

## 技术栈
- vue-cli
- vue router
- elementUi
- leancloud数据库

## 项目简介
- 用vue-cli + elementUi搭建
- 使用leancloud作为数据库存储用户信息
- 可用邮箱进行注册登录（未加验证，只要符合邮箱格式即可，如 1@1.com）
- 登录、注册页面使用vue-router进行跳转
- 各项信息使用vue子组件进行编辑

## 主要功能
- 注册、登录，将编辑好的内容保存到数据库
- 分享链接给其他人查看
- 打印
- 换肤，主要部分颜色均可自定义

## 使用
- 克隆项目 `git clone https://github.com/luke19950111/cv-editor.git`
- 安装依赖 `npm install`
- 运行 `npm run dev`


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
