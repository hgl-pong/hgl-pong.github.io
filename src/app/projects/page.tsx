import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import PageTransition from '@/components/PageTransition'

export default function Projects() {
  const projects = [
    {
      title: 'DirectX 11 渲染引擎',
      description: '基于DirectX 11开发的高性能3D渲染引擎，支持PBR材质、实时光照和后期处理',
      tags: ['DirectX 11', 'C++', '3D渲染', 'PBR'],
      status: '开发中',
      progress: 75
    },
    {
      title: 'PhysX 物理系统集成',
      description: '将PhysX物理引擎集成到自定义游戏引擎中，实现刚体动力学、碰撞检测和约束求解',
      tags: ['PhysX', 'C++', '物理引擎', '碰撞检测'],
      status: '已完成',
      progress: 100
    },
    {
      title: 'HLSL 着色器系统',
      description: '模块化的HLSL着色器系统，支持材质编辑、特效处理和GPU粒子系统',
      tags: ['HLSL', 'GPU计算', '着色器', '特效'],
      status: '开发中',
      progress: 60
    },
    {
      title: '游戏引擎架构',
      description: '基于ECS架构设计的游戏引擎框架，包含实体系统、组件管理和场景管理',
      tags: ['ECS架构', '游戏引擎', 'C++', '架构设计'],
      status: '规划中',
      progress: 30
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已完成':
        return 'bg-green-100 text-green-800 border-green-200'
      case '开发中':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case '规划中':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              项目展示
              <span className="block text-3xl md:text-4xl font-normal text-gray-600 mt-4">
                Game Development Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              展示我在游戏引擎开发领域的技术项目，涵盖图形渲染、物理模拟、着色器编程等核心技术
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h2>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>开发进度</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          project.progress === 100 ? 'bg-green-500' :
                          project.progress >= 60 ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                技术栈
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                项目中使用的核心技术和开发工具
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: '图形技术',
                  items: ['DirectX 11', 'HLSL', 'PBR材质', '后期处理', 'GPU计算']
                },
                {
                  title: '物理模拟',
                  items: ['PhysX', '刚体动力学', '碰撞检测', '约束求解', '物理材质']
                },
                {
                  title: '开发工具',
                  items: ['C++17', 'Visual Studio', 'CMake', 'Git', 'Perforce']
                }
              ].map((tech, index) => (
                <div
                  key={tech.title}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </PageTransition>
  )
}