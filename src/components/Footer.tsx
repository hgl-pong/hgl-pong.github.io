'use client'

import { Github, Mail, Linkedin, Code2, Heart, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import Typography from './ui/Typography'
import Button from './ui/Button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: '首页', href: '/' },
    { name: '技术博客', href: '/blog' },
    { name: '项目展示', href: '/projects' },
    { name: '关于我', href: '/about' },
  ]

  const categories = [
    { name: 'DirectX 11', href: '/blog?category=directx' },
    { name: 'PhysX物理', href: '/blog?category=physx' },
    { name: 'HLSL着色器', href: '/blog?category=hlsl' },
    { name: 'C++引擎', href: '/blog?category=cpp' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com', color: 'hover:text-gray-900' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:contact@example.com', color: 'hover:text-red-600' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <Section padding="lg" maxWidth="xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                <Code2 size={24} className="text-white" />
              </div>
              <div>
                <Typography variant="h4" color="professional">
                  HGL
                </Typography>
                <Typography variant="caption" color="muted">
                  Game Engine Developer
                </Typography>
              </div>
            </div>

            <Typography variant="body" color="secondary" className="max-w-md leading-relaxed">
              专注于DirectX 11和PhysX游戏引擎开发，致力于分享高质量的技术内容和实战经验。
              帮助更多开发者掌握游戏引擎底层技术。
            </Typography>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white border border-gray-200 rounded-lg text-gray-600 ${social.color} transition-all duration-300 hover:shadow-md`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h6" color="professional" className="mb-4">
              快速导航
            </Typography>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="h6" color="professional" className="mb-4">
              技术分类
            </Typography>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-8"
        >
          <div className="text-center max-w-2xl mx-auto">
            <Typography variant="h4" color="professional" className="mb-4">
              订阅技术更新
            </Typography>
            <Typography variant="body" color="secondary" className="mb-6">
              获取最新的游戏引擎开发技术文章和实战经验分享
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button variant="professional">
                订阅更新
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200"
        >
          <Typography variant="caption" color="muted">
            © {currentYear} HGL. 保留所有权利.
          </Typography>
          
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <Typography variant="caption" color="muted">
              Made with
            </Typography>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 mx-1" />
            </motion.div>
            <Typography variant="caption" color="muted">
              using Next.js
            </Typography>
          </div>
        </motion.div>
      </Section>
    </footer>
  )
}

export default Footer