import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Github, Mail, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700">
            <Image
              src="/avatar.jpg"
              alt="个人头像"
              width={128}
              height={128}
              className="object-cover"
              priority
              loading="eager"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            HGL
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
            游戏引擎开发工程师
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Specialization Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['DirectX 11', 'PhysX物理引擎', 'HLSL着色器', 'C++'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          热爱游戏引擎底层技术，专注于DirectX 11渲染技术和PhysX物理模拟。
          在这里分享C++游戏引擎开发经验、HLSL着色器编程和物理引擎集成心得。
        </p>

        {/* Contact Info */}
        <div className="flex justify-center items-center gap-8 text-gray-400 mb-12">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span className="text-sm">中国</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span className="text-sm">联系邮箱</span>
          </div>
          <div className="flex items-center gap-2">
            <Github size={18} />
            <span className="text-sm">GitHub</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center gap-2"
          >
            查看博客
            <ChevronRight size={20} />
          </Link>
          <Link
            href="/about"
            className="btn-secondary inline-flex items-center gap-2"
          >
            了解更多
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}