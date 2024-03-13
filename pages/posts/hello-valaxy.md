---
title: Valaxy 个人小记
# date: 2024-03-12
# updated: 2024-03-12
comment: true
copyright: false
categories: 
  - 编程
tags:
  - 博客框架
# aplayer: true
# type: bilibili
excerpt: "静态博客框架 Valaxy 的个人使用笔记"
draft: true
end: false
---

## 准备
### 环境
- Node 14.18+
- pnpm

::: details 选择 pnpm 的原因

npm 会缓存此前下载的版本，因此可能

:::

### 安装
::: code-group
```sh [1. 创建项目]
pnpm create project-name
```

```sh [2. 安装依赖]
cd project-name
pnpm i
```
:::

## 使用
### 写作
[语言列表](https://shiki.style/languages#bundled-languages)

### 调试
```sh []
pnpm dev
```

### 部署
1. 选择 Github Repo，打开 Settings-> Action -> General -> Workflow permissions，选择 read and write permissions
2. 上传至 GitHub Repo
3. 打开 Settings -> Pages，选择 gh-pages 分支

```sh []
npm run build
```