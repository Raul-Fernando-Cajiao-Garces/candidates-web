import type { Candidate } from '../types/candidate'
import './CandidateCard.css'

interface CandidateCardProps {
  candidate: Candidate
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

const formatExperience = (years: number): string => {
  if (years === 0) {
    return 'Sin experiencia'
  }
  if (years === 1) {
    return '1 año de experiencia'
  }
  return `${years} años de experiencia`
}

export const CandidateCard = ({
  candidate,
  isFavorite,
  onToggleFavorite,
}: CandidateCardProps) => {
  const favoriteButtonClass = isFavorite
    ? 'candidate-card-favorite-btn candidate-card-favorite-btn--active'
    : 'candidate-card-favorite-btn'

  return (
    <article className="candidate-card">
      <div className="candidate-card-header">
        <h3 className="candidate-card-title">{candidate.name}</h3>
        <p className="candidate-card-info">
          <span>📍</span>
          <span>{candidate.city}</span>
        </p>
        <p className="candidate-card-email">{candidate.email}</p>
        <p className="candidate-card-experience">
          <span>💼</span>
          <span>{formatExperience(candidate.experienceYears)}</span>
        </p>
      </div>

      <div className="candidate-card-skills">
        {candidate.skills.length > 0 ? (
          candidate.skills.map((skill) => (
            <span key={skill} className="candidate-card-skill-tag">
              {skill}
            </span>
          ))
        ) : (
          <span className="candidate-card-no-skills">Sin habilidades registradas</span>
        )}
      </div>

      <button
        type="button"
        aria-pressed={isFavorite}
        className={favoriteButtonClass}
        onClick={() => onToggleFavorite(candidate.id)}
      >
        <span>{isFavorite ? '★' : '☆'}</span>
        <span>{isFavorite ? 'En favoritos' : 'Agregar a favoritos'}</span>
      </button>
    </article>
  )
}
