import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
}

export const SearchBar = ({
  value,
  onChange,
  placeholder = 'Buscar por nombre o ciudad...',
  label = 'Buscar candidato por nombre o ciudad',
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <div className="search-bar-field">
        <span className="search-bar-icon" aria-hidden="true">
          🔍
        </span>
        <input
          type="search"
          className="search-bar-input"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-label={label}
        />
        {value.length > 0 && (
          <button
            type="button"
            className="search-bar-clear"
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
