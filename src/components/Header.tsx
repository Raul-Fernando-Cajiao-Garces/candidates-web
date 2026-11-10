import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <span className="header-logo-badge">T</span>
          <h1 className="header-title">TalentHub</h1>
        </div>
        <p className="header-subtitle">Candidatos</p>
      </div>
    </header>
  )
}
