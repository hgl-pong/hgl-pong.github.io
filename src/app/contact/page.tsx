import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Github, MessageCircle, MapPin } from 'lucide-react'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: '邮箱联系',
      description: '工作合作或技术交流',
      contact: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: <Github className="w-8 h-8 text-white" />,
      title: 'GitHub',
      description: '查看我的开源项目',
      contact: 'github.com/hgl-pong',
      link: 'https://github.com/hgl-pong'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: '技术讨论',
      description: '游戏引擎开发交流',
      contact: '欢迎技术讨论',
      link: '#'
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: '位置',
      description: '目前所在地',
      contact: '中国',
      link: '#'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black/40 py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">联系我</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              欢迎与我交流游戏引擎开发技术，或讨论合作机会
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {method.description}
                  </p>
                  <a
                    href={method.link}
                    className="text-gray-200 hover:text-white font-medium text-sm transition-colors"
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-black/40 border-t border-white/10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">发送消息</h2>
              <p className="text-gray-300">
                有任何问题或想法，欢迎通过下面的表单联系我
              </p>
            </div>

            <form className="card">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-white/20 bg-black/30 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-white/20 bg-black/30 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    placeholder="您的邮箱地址"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-white/20 bg-black/30 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  placeholder="消息主题"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  消息内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-white/20 bg-black/30 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  placeholder="请输入您的消息内容..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  发送消息
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}