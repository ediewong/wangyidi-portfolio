# Portfolio Site

一个用 `Next.js` 搭建、可直接部署到 `Vercel` 的作品集网站骨架。

## 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 先改哪里

最重要的内容集中在 [`lib/site-data.ts`](./lib/site-data.ts)：

- 你的名字、定位、简介
- 联系方式和社交链接
- 3 个项目案例内容
- About 页面里的介绍和原则

页面结构已经准备好：

- `/` 首页
- `/work` 作品列表
- `/work/[slug]` 项目详情
- `/about` 关于我
- `/contact` 联系方式

## 部署到 Vercel

1. 把代码推到 GitHub 仓库。
2. 登录 [Vercel](https://vercel.com/)，点击 `Add New...` -> `Project`。
3. 导入你的 GitHub 仓库，Framework 选择会自动识别为 `Next.js`。
4. 在环境变量里添加 `NEXT_PUBLIC_SITE_URL`，值填你的线上地址。
   例子：`https://your-name.vercel.app`
5. 点击部署。
6. 部署完成后，在 Vercel 的 `Domains` 里绑定你自己的域名。

## 上线前检查

- 把示例文案替换成你自己的真实项目内容
- 把 `mailto:`、GitHub、LinkedIn、Behance 链接换成你自己的
- 如果有简历 PDF，可以放到 `public/` 目录并更新链接
- 用手机和电脑各看一遍版式
- 重新运行一次 `npm run build`
