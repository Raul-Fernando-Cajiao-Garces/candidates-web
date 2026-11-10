import { useState } from 'react'
import { candidates as initialCandidates } from '../data/candidates'
import { SearchBar } from '../components/SearchBar'
import { CandidateList } from '../components/CandidateList'
import './CandidatesPage.css'

export const CandidatesPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  const handleToggleFavorite = (id: number) => {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favId) => favId !== id)
        : [...prevIds, id]
    )
  }

  const normalizedQuery = searchTerm.trim().toLowerCase()

  const filteredCandidates = initialCandidates.filter((candidate) => {
    if (!normalizedQuery) {
      return true
    }
    return (
      candidate.name.toLowerCase().includes(normalizedQuery) ||
      candidate.city.toLowerCase().includes(normalizedQuery)
    )
  })

  const resultsCount = filteredCandidates.length
  const counterText =
    resultsCount === 1 ? '1 resultado' : `${resultsCount} resultados`

  return (
    <main className="candidates-page">
      <div className="candidates-page-container">
        <div className="candidates-page-controls">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar por nombre o ciudad..."
            label="Buscar candidatos por nombre o ciudad"
          />
          <div className="candidates-page-status-bar">
            <p className="candidates-page-counter">{counterText}</p>
            {favoriteIds.length > 0 && (
              <span className="candidates-page-favorites-badge">
                ★ {favoriteIds.length}{' '}
                {favoriteIds.length === 1 ? 'favorito' : 'favoritos'}
              </span>
            )}
          </div>
        </div>

        {resultsCount > 0 ? (
          <CandidateList
            candidates={filteredCandidates}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : (
          <div className="candidates-page-empty">
            <span className="candidates-page-empty-icon" aria-hidden="true">
              🔍
            </span>
            <p className="candidates-page-empty-message">
              No se encontraron candidatos con ese término.
            </p>
            <p className="candidates-page-empty-hint">
              Intente con otro nombre o ciudad.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
