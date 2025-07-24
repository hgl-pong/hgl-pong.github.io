# DirectX 11 & PhysX 专题技术博客

> 专注于DirectX 11图形编程和PhysX物理引擎开发的现代化技术博客

## 🎯 项目简介

这是一个专门为DirectX 11和PhysX游戏引擎开发技术打造的个人博客网站。采用现代化的Web技术栈构建，提供深度的技术内容和优秀的用户体验。

## ✨ 主要特性

- 🎨 **现代化设计** - 响应式布局，适配所有设备
- 📝 **专业内容** - 深度的DirectX 11和PhysX技术文章
- 🚀 **高性能** - Next.js静态生成，快速加载
- 🔍 **智能搜索** - 文章搜索和分类筛选
- 📖 **阅读体验** - 目录导航、进度条、代码高亮
- 📱 **移动优化** - 完美的移动端体验

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: GitHub Pages

## 🎯 专业领域

### 核心技术
- **DirectX 11** (90%) - 图形编程、渲染管线、性能优化
- **PhysX** (85%) - 物理引擎、碰撞检测、物理模拟
- **C++** (95%) - 引擎架构、内存管理、性能调优
- **HLSL** (88%) - 着色器编程、PBR材质、光照计算

### 技术文章
- DirectX 11渲染管线深度解析
- PhysX物理引擎集成实战
- HLSL着色器编程技巧
- C++游戏引擎架构设计

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/hgl-pong/hgl-pong.github.io.git

# 进入项目目录
cd hgl-pong.github.io

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📁 项目结构

```
├── src/
│   ├── app/                    # Next.js页面
│   │   ├── blog/              # 博客系统
│   │   ├── about/             # 关于页面
│   │   ├── contact/           # 联系页面
│   │   └── page.tsx           # 首页
│   └── components/            # 可复用组件
├── public/                    # 静态资源
├── .github/workflows/        # GitHub Actions
└── 配置文件
```

## 🎨 主要组件

- **Header** - 导航头部
- **Hero** - 首页英雄区域
- **TechStack** - 技术栈展示
- **LatestPosts** - 最新文章
- **SearchBox** - 智能搜索
- **ArticleCard** - 文章卡片
- **TableOfContents** - 目录导航
- **ReadingProgress** - 阅读进度
- **CodeBlock** - 代码展示

## 📝 内容管理

### 添加新文章

1. 在 `src/app/blog/` 下创建新的文章目录
2. 添加 `page.tsx` 文件
3. 更新博客列表页面的文章数据

### 文章结构

```typescript
// 文章页面示例
export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        {/* 文章内容 */}
      </main>
      <Footer />
    </>
  )
}
```

## 🔧 配置说明

### Next.js配置

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Tailwind配置

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { /* 自定义颜色 */ }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
```

## 🚀 部署

### GitHub Pages自动部署

项目配置了GitHub Actions自动部署工作流：

1. 推送代码到main分支
2. GitHub Actions自动构建
3. 部署到GitHub Pages
4. 访问 `https://hgl-pong.github.io`

### 手动部署

```bash
# 构建静态文件
npm run build

# 部署到GitHub Pages
# (GitHub Actions会自动处理)
```

## 📊 性能优化

- ✅ 静态站点生成 (SSG)
- ✅ 图片优化
- ✅ 代码分割
- ✅ CSS优化
- ✅ 懒加载
- ✅ 缓存策略

## 🎯 SEO优化

- ✅ 语义化HTML
- ✅ Meta标签优化
- ✅ 结构化数据
- ✅ 移动端友好
- ✅ 快速加载
- ✅ 无障碍访问

## 📱 响应式设计

- **桌面端** (1024px+) - 完整功能展示
- **平板端** (768px-1023px) - 适配布局
- **移动端** (320px-767px) - 优化体验

## 🔍 搜索功能

- 文章标题搜索
- 技术标签筛选
- 分类导航
- 搜索建议

## 📖 阅读体验

- 目录导航
- 阅读进度条
- 代码语法高亮
- 复制代码功能
- 回到顶部
- 文章导航

## 🎨 设计系统

### 颜色方案
- **主色调**: DirectX蓝色系
- **辅助色**: 灰色系
- **强调色**: 各技术分类专属色

### 字体系统
- **标题**: 系统默认字体栈
- **正文**: 优化的可读性字体
- **代码**: 等宽字体

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目！

### 开发流程

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 📄 许可证

本项目采用 ISC 许可证。

## 📞 联系方式

- **GitHub**: [@hgl-pong](https://github.com/hgl-pong)
- **博客**: [https://hgl-pong.github.io](https://hgl-pong.github.io)

---

**专注DirectX 11图形编程和PhysX物理引擎开发 | 分享游戏引擎技术经验**