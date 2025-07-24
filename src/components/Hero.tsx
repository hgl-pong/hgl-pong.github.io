import Image from 'next/image'
import { Github, Mail, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/avatar.jpg"
                alt="个人头像"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HGL
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            游戏引擎开发工程师，专注于DirectX 11图形编程和PhysX物理引擎开发
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
            热爱游戏引擎底层技术，专注于DirectX 11渲染技术和PhysX物理模拟。
            在这里分享C++游戏引擎开发经验、HLSL着色器编程和物理引擎集成心得。
          </p>

          {/* Contact Info */}
          <div className="flex justify-center items-center space-x-6 text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>中国</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>联系邮箱</span>
            </div>
            <div className="flex items-center space-x-2">
              <Github size={18} />
              <span>GitHub</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="/blog"
              className="btn-primary"
            >
              查看博客
            </a>
            <a
              href="/about"
              className="btn-secondary"
            >
              了解更多
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero