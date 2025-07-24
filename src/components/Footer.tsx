import { Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">HGL博客</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              专注于DirectX 11和PhysX游戏引擎开发，记录C++底层编程和引擎架构的学习心得。
              希望我的经验能帮助到更多的游戏开发者朋友。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  博客
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  联系
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">技术分类</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog?category=directx" className="text-gray-300 hover:text-white transition-colors">
                  DirectX 11
                </a>
              </li>
              <li>
                <a href="/blog?category=physx" className="text-gray-300 hover:text-white transition-colors">
                  PhysX物理
                </a>
              </li>
              <li>
                <a href="/blog?category=hlsl" className="text-gray-300 hover:text-white transition-colors">
                  HLSL着色器
                </a>
              </li>
              <li>
                <a href="/blog?category=cpp" className="text-gray-300 hover:text-white transition-colors">
                  C++引擎
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} HGL博客. 保留所有权利.
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer