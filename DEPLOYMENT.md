# DirectX 11 & PhysX 博客部署指南

## 项目概述

这是一个专注于DirectX 11和PhysX游戏引擎开发的个人技术博客网站，使用Next.js 14构建，支持GitHub Pages静态部署。

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **图标库**: Lucide React
- **部署平台**: GitHub Pages

## 本地开发

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 构建生产版本

```bash
npm run build
```

## GitHub Pages 部署

### 自动部署

项目已配置GitHub Actions自动部署工作流，每次推送到main分支时会自动构建和部署。

### 手动部署步骤

1. 确保所有更改已提交到main分支
2. GitHub Actions会自动触发构建
3. 构建完成后，网站会自动部署到GitHub Pages

### 部署配置

- **源分支**: main
- **构建目录**: out/
- **自定义域名**: 可在GitHub仓库设置中配置

## 项目结构

```
├── src/
│   ├── app/                    # Next.js App Router页面
│   │   ├── blog/              # 博客相关页面
│   │   ├── about/             # 关于页面
│   │   ├── contact/           # 联系页面
│   │   ├── layout.tsx         # 全局布局
│   │   └── page.tsx           # 首页
│   └── components/            # 可复用组件
├── public/                    # 静态资源
│   └── avatar.jpg            # 个人头像
├── .github/workflows/        # GitHub Actions配置
└── 配置文件
```

## 内容管理

### 添加新文章

1. 在 `src/app/blog/` 下创建新的文章目录
2. 创建 `page.tsx` 文件
3. 按照现有文章格式编写内容
4. 更新博客列表页面的文章数据

### 更新个人信息

- **头像**: 替换 `public/avatar.jpg`
- **个人简介**: 编辑 `src/components/Hero.tsx`
- **技能信息**: 编辑 `src/app/about/page.tsx`
- **联系方式**: 编辑 `src/app/contact/page.tsx`

## 性能优化

- 使用Next.js Image组件优化图片加载
- 启用静态生成提高加载速度
- Tailwind CSS按需加载减少文件大小
- 组件懒加载优化首屏渲染

## SEO优化

- 完整的meta标签配置
- 结构化数据标记
- 语义化HTML结构
- 移动端友好设计

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 故障排除

### 构建失败

1. 检查Node.js版本是否符合要求
2. 清除node_modules并重新安装依赖
3. 检查TypeScript类型错误

### 部署失败

1. 检查GitHub Actions日志
2. 确认仓库设置中Pages配置正确
3. 检查分支权限设置

## 联系支持

如有问题，请通过以下方式联系：

- GitHub Issues
- 邮箱联系
- 博客留言

---

© 2024 HGL博客. 专注DirectX 11和PhysX游戏引擎开发.