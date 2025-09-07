'use client'

import Image from 'next/image'
import { ArrowRight, Code2, Database, Cpu, Github, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import Typography from './ui/Typography'
import Button from './ui/Button'
import Card from './ui/Card'
import ProfessionalBackground from './ui/ProfessionalBackground'

const Hero = () => {
  const specializations = [
    { name: 'DirectX 11', icon: <Code2 size={20} />, description: '图形渲染' },
    { name: 'PhysX', icon: <Database size={20} />, description: '物理引擎' },
    { name: 'HLSL', icon: <Cpu size={20} />, description: '着色器编程' }
  ]

  const stats = [
    { value: '5+', label: '年开发经验' },
    { value: '50+', label: '项目经验' },
    { value: '10k+', label: '代码提交' }
  ]

  return (
    <Section variant="professional" padding="xl" className="min-h-screen flex items-center relative overflow-hidden">
      <ProfessionalBackground variant="geometric" />
      
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              专业游戏引擎开发工程师
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <Typography variant="h1" color="professional" className="leading-tight">
                <span className="block">构建高性能</span>
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  游戏引擎
                </span>
              </Typography>
              
              <Typography variant="body" color="secondary" className="text-lg max-w-xl">
                专注于DirectX 11图形编程、PhysX物理引擎和C++游戏引擎开发。
                分享底层技术实现和性能优化经验，助力游戏开发者提升技术水平。
              </Typography>
            </div>

            {/* Specializations */}
            <div className="flex flex-wrap gap-3">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-blue-600">{spec.icon}</div>
                  <div>
                    <div className="font-medium text-gray-900">{spec.name}</div>
                    <div className="text-xs text-gray-500">{spec.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <Typography variant="h3" color="accent" className="font-bold">
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color="muted">
                    {stat.label}
                  </Typography>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="professional" 
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                className="group"
              >
                查看技术博客
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<Github size={20} />}
              >
                GitHub 项目
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-6 pt-4 border-t border-gray-200"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">中国</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">联系合作</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Avatar & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Avatar Card */}
            <Card variant="professional" padding="lg" className="relative overflow-hidden">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Avatar */}
                <div className="relative">
                  <motion.div
                    className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/avatar.jpg"
                      alt="HGL - 游戏引擎开发工程师"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-2">
                  <Typography variant="h4" color="professional">
                    HGL
                  </Typography>
                  <Typography variant="body" color="muted">
                    Senior Game Engine Developer
                  </Typography>
                </div>

                {/* Professional Metrics */}
                <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <Typography variant="h5" color="accent">
                      98%
                    </Typography>
                    <Typography variant="caption" color="muted">
                      项目成功率
                    </Typography>
                  </div>
                  <div className="text-center">
                    <Typography variant="h5" color="accent">
                      24h
                    </Typography>
                    <Typography variant="caption" color="muted">
                      响应时间
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Professional Badge */}
            </Card>

            {/* Floating Tech Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -left-4 z-10"
            >
              <Card variant="glass" padding="sm" className="backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-blue-600" />
                  <span className="text-sm font-medium">C++ 开发者</span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -right-4 z-10"
            >
              <Card variant="glass" padding="sm" className="backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-teal-600" />
                  <span className="text-sm font-medium">DirectX 11</span>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">探索更多</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Hero