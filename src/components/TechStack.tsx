const TechStack = () => {
  const techStacks = [
    { name: 'C++', level: 95, color: 'bg-blue-600' },
    { name: 'DirectX 11', level: 90, color: 'bg-blue-500' },
    { name: 'PhysX', level: 85, color: 'bg-green-600' },
    { name: 'HLSL', level: 88, color: 'bg-yellow-600' },
    { name: 'Win32 API', level: 80, color: 'bg-gray-600' },
    { name: '自研引擎', level: 85, color: 'bg-purple-600' },
    { name: '3D数学', level: 90, color: 'bg-red-600' },
    { name: 'Visual Studio', level: 85, color: 'bg-blue-800' },
  ]

  const categories = [
    {
      title: '图形编程',
      techs: ['DirectX 11', 'HLSL', 'Shader编程', '渲染管线'],
      icon: '🎨'
    },
    {
      title: '物理引擎',
      techs: ['PhysX', '碰撞检测', '刚体动力学', '约束系统'],
      icon: '⚡'
    },
    {
      title: '引擎开发',
      techs: ['C++', '自研引擎', '资源管理', '性能优化'],
      icon: '🎮'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">技术栈</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我熟悉的游戏引擎开发技术和工具
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.title} className="card text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Levels */}
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            技能熟练度
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {techStacks.map((tech) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{tech.name}</span>
                  <span className="text-sm text-gray-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${tech.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack