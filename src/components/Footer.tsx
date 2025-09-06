const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} HGL博客 - 专注于游戏引擎开发技术分享
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="https://github.com/hgl-pong"
              className="text-gray-400 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              联系邮箱
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer