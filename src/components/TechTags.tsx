interface TechTagsProps {
  tags: string[]
  selectedTags?: string[]
  onTagClick?: (tag: string) => void
  variant?: 'default' | 'clickable' | 'filter'
}

const TechTags = ({ 
  tags, 
  selectedTags = [], 
  onTagClick, 
  variant = 'default' 
}: TechTagsProps) => {
  const getTagStyle = (tag: string) => {
    const isSelected = selectedTags.includes(tag)
    
    switch (variant) {
      case 'clickable':
        return `cursor-pointer transition-all ${
          isSelected 
            ? 'bg-white/20 text-white shadow-md' 
            : 'bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white'
        }`
      case 'filter':
        return `cursor-pointer transition-all ${
          isSelected 
            ? 'bg-white/20 text-white shadow-md' 
            : 'bg-black/30 text-gray-200 border border-white/20 hover:border-white/30 hover:text-white'
        }`
      default:
        return 'bg-white/10 text-gray-200'
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          onClick={() => onTagClick?.(tag)}
          className={`px-3 py-1 rounded-full text-sm font-medium ${getTagStyle(tag)}`}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TechTags