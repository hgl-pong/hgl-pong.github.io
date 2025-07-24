'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface SearchBoxProps {
  onSearch: (query: string) => void
  placeholder?: string
}

const SearchBox = ({ onSearch, placeholder = "搜索文章..." }: SearchBoxProps) => {
  const [query, setQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery('')
    onSearch('')
    setIsExpanded(false)
  }

  return (
    <div className="relative">
      <div className={`flex items-center transition-all duration-300 ${
        isExpanded ? 'w-full' : 'w-auto'
      }`}>
        <div className="relative flex-1">
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={20} 
          />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
      
      {/* 搜索建议 */}
      {query && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="p-2">
            <div className="text-sm text-gray-500 mb-2">搜索建议</div>
            <div className="space-y-1">
              {['DirectX 11', 'PhysX', 'HLSL', 'C++引擎'].filter(item => 
                item.toLowerCase().includes(query.toLowerCase())
              ).map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSearch(suggestion)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox