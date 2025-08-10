interface InlineCodeProps {
  children: React.ReactNode
  className?: string
}

const InlineCode = ({ children, className = '' }: InlineCodeProps) => {
  return (
    <code 
      className={`
        bg-white/10 text-gray-200 px-2 py-1 rounded font-medium
        transition-colors duration-200 hover:bg-white/20
        ${className}
      `}
      style={{ 
        fontFamily: 'Fira Code, Monaco, Consolas, "Ubuntu Mono", monospace',
        fontSize: '0.875em'
      }}
    >
      {children}
    </code>
  )
}

export default InlineCode
