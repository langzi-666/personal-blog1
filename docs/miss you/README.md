# Miss You - 个人项目博客

这是一个现代化的个人项目展示博客，用于展示和分享我的编程项目和技术经验。

## 🌟 特色功能

- **现代化设计**: 采用现代UI设计理念，简洁美观
- **响应式布局**: 完美适配桌面、平板和手机设备
- **项目展示**: 详细展示每个项目的功能、技术栈和源代码
- **交互体验**: 丰富的动画效果和用户交互
- **技术分享**: 包含详细的技术文档和运行指南

## 📁 项目结构

```
miss you/
├── index.html              # 主页面
├── assets/                 # 静态资源
│   ├── css/
│   │   └── style.css      # 主样式文件
│   └── js/
│       └── main.js        # 主JavaScript文件
├── 10/                    # Java项目展示
│   ├── index.html         # 项目详情页
│   ├── project.css        # 项目专用样式
│   ├── project.js         # 项目专用脚本
│   ├── README.md          # 项目文档
│   └── src/               # Java源代码
└── README.md              # 博客说明文档
```

## 🚀 快速开始

### 本地预览

1. **使用Python服务器**:
   ```bash
   cd "g:\OneDrive\Desktop\cursor\personal blog2\docs\miss you"
   python -m http.server 8080
   ```

2. **使用Node.js服务器**:
   ```bash
   npx http-server -p 8080
   ```

3. **使用Live Server扩展** (VS Code):
   - 安装Live Server扩展
   - 右键点击index.html选择"Open with Live Server"

### 访问博客

打开浏览器访问: `http://localhost:8080`

## 📱 页面介绍

### 主页 (index.html)
- **项目展示区**: 展示所有项目的卡片式布局
- **关于我**: 个人介绍和技能展示
- **联系方式**: 社交媒体和联系信息
- **响应式导航**: 平滑滚动和活动状态指示

### Java项目页 (10/index.html)
- **项目概览**: 功能特点和技术栈介绍
- **可视化演示**: 模拟窗口效果展示
- **源代码展示**: 语法高亮的代码片段
- **运行指南**: 详细的编译和运行说明

## 🎨 设计特色

### 视觉设计
- **渐变背景**: 使用CSS渐变创建现代感
- **圆角设计**: 统一的圆角风格提升美观度
- **阴影效果**: 多层次阴影增加立体感
- **动画过渡**: 平滑的hover和滚动动画

### 交互体验
- **平滑滚动**: 导航点击的平滑滚动效果
- **悬停反馈**: 丰富的鼠标悬停反馈
- **复制功能**: 一键复制联系信息和代码
- **返回顶部**: 智能显示的返回顶部按钮

## 🛠️ 技术栈

- **HTML5**: 语义化标签和现代HTML特性
- **CSS3**: Flexbox、Grid、动画和响应式设计
- **JavaScript ES6+**: 现代JavaScript特性和API
- **Font Awesome**: 图标库
- **Google Fonts**: Inter字体
- **Prism.js**: 代码语法高亮

## 📝 内容管理

### 添加新项目

1. 在主目录创建新的项目文件夹
2. 复制`10/`目录的结构作为模板
3. 修改`index.html`中的项目卡片信息
4. 更新项目详情页的内容

### 自定义样式

- 修改`assets/css/style.css`中的CSS变量来改变主题色彩
- 在项目目录中添加`project.css`来自定义项目页面样式

### 更新内容

- 编辑HTML文件更新文本内容
- 修改`assets/js/main.js`添加新的交互功能
- 更新项目的README.md文件

## 🌐 部署选项

### GitHub Pages
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择源分支和目录

### Netlify
1. 连接GitHub仓库到Netlify
2. 设置构建命令（如果需要）
3. 自动部署

### Vercel
1. 导入GitHub仓库到Vercel
2. 配置项目设置
3. 一键部署

## 📞 联系方式

如果你有任何问题或建议，欢迎通过以下方式联系：

- **Email**: your.email@example.com
- **GitHub**: @yourusername
- **Blog**: yourblog.com

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

**Made with ❤️ by [Your Name]**
