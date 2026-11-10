import type { Candidate } from '../types/candidate'
import { CandidateCard } from './CandidateCard'
import './CandidateList.css'

interface CandidateListProps {
  candidates: Candidate[]
  favoriteIds: number[]
  onToggleFavorite: (id: number) => void
}

export const CandidateList = ({
  candidates,
  favoriteIds,
  onToggleFavorite,
}: CandidateListProps) => {
  return (
    <section className="candidate-list">
      <div className="candidate-list-grid">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            isFavorite={favoriteIds.includes(candidate.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}
