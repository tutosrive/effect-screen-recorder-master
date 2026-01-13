import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge glass">
              <span className="badge-dot"></span>
              {t.home.version}
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">{t.home.heroTitle1}</span>
              <br />
              {t.home.heroTitle2}
            </h1>
            <p className="hero-description">
              {t.home.heroDescription}
            </p>
            <div className="hero-buttons">
              <a 
                href="https://sourceforge.net/projects/e-srm/files/latest/download" 
                className="btn btn-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 4h12v-2H6v2z"/>
                </svg>
                {t.home.downloadNow}
              </a>
              <Link to="/docs" className="btn btn-secondary">
                {t.home.viewDocs}
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper glass-strong">
              <img 
                src="https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/esrm/esrm.png" 
                alt="ESRM Interface" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">{t.home.mainFeatures}</h2>
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon">🎚️</div>
              <h3>{t.home.feature1Title}</h3>
              <p>{t.home.feature1Desc}</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🖥️</div>
              <h3>{t.home.feature2Title}</h3>
              <p>{t.home.feature2Desc}</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">⚙️</div>
              <h3>{t.home.feature3Title}</h3>
              <p>{t.home.feature3Desc}</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🎨</div>
              <h3>{t.home.feature4Title}</h3>
              <p>{t.home.feature4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section className="quick-install section">
        <div className="container">
          <div className="install-card glass-strong">
            <div className="install-content">
              <h2>{t.home.quickInstall}</h2>
              <p>{t.home.installWith}</p>
              <pre className="install-code">
                <code>pip install effect-srm</code>
              </pre>
              <p className="install-note">
                {t.home.requires}
              </p>
              <Link to="/install" className="btn btn-primary">
                {t.home.moreOptions}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass">
              <a href="https://pepy.tech/projects/effect-srm" target="_blank" rel="noopener noreferrer">
                <img src="https://static.pepy.tech/badge/effect-srm" alt="PyPI Downloads" />
              </a>
              <span>{t.home.pypiDownloads}</span>
            </div>
            <div className="stat-card glass">
              <img src="https://img.shields.io/badge/Python-3.11.6%2B-blue.svg" alt="Python Version" />
              <span>Python 3.11.6+</span>
            </div>
            <div className="stat-card glass">
              <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License MIT" />
              <span>{t.home.mitLicense}</span>
            </div>
            <div className="stat-card glass">
              <img src="https://img.shields.io/pypi/v/effect-srm?label=ESRM" alt="Version" />
              <span>{t.home.latestVersion}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
