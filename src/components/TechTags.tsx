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
        return `cursor-pointer transition-colors ${
          isSelected 
            ? 'bg-primary-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
        }`
      case 'filter':
        return `cursor-pointer transition-all ${
          isSelected 
            ? 'bg-primary-600 text-white shadow-md' 
            : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-300 hover:text-primary-600'
        }`
      default:
        return 'bg-gray-100 text-gray-700'
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