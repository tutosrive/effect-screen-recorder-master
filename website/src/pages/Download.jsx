import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import './Download.css'

const Download = () => {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
      })
  }

  return (
    <div className="download">
      <div className="container">
        {/* Header */}
        <section className="download-header">
          <h1 className="page-title">
            <span className="gradient-text">{t.download.title}</span>
          </h1>
          <p className="page-subtitle">
            {t.download.subtitle}
          </p>
        </section>

        {/* Main Download */}
        <section className="main-download section">
          <div className="download-hero glass-strong">
            <div className="download-info">
              <div className="version-badge">
                <img src="https://img.shields.io/pypi/v/effect-srm?label=ESRM&style=for-the-badge" alt="Version" />
              </div>
              <h2>ESRM v0.1.0</h2>
              <p>{t.download.professionalRecording}</p>
              <ul className="download-features">
                <li>✓ {t.download.realTimeAdjustments}</li>
                <li>✓ {t.download.advancedPreview}</li>
                <li>✓ {t.download.multiplePresets}</li>
                <li>✓ {t.download.modernDarkUI}</li>
              </ul>
            </div>
            <div className="download-actions">
              <a 
                href="https://sourceforge.net/projects/e-srm/files/latest/download"
                target="_blank"
                rel="noopener noreferrer"
                className="download-main-btn"
              >
                <img 
                  alt="Download ESRM" 
                  src="https://a.fsdn.com/con/app/sf-download-button" 
                  width="276" 
                  height="48"
                />
              </a>
              <p className="download-note">{t.download.downloadFrom}</p>
            </div>
          </div>
        </section>

        {/* Download Options */}
        <section className="download-options section">
          <h2 className="section-title">{t.download.downloadOptions}</h2>
          <div className="options-grid">
            {/* SourceForge */}
            <div className="option-card glass">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>SourceForge</h3>
              <p>{t.download.sourceforgeDesc}</p>
              <a 
                href="https://sourceforge.net/projects/e-srm/files/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-download"
              >
                {t.download.goToSourceforge}
              </a>
            </div>

            {/* PyPI */}
            <div className="option-card glass">
              <div className="option-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.384a.784.784 0 1 1 0-1.569.784.784 0 1 1 0 1.569z"/>
                  <path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-4.464 10.343a.784.784 0 1 1 0 1.57.784.784 0 0 1 0-1.57z"/>
                </svg>
              </div>
              <h3>PyPI</h3>
              <p>{t.download.pypiDesc}</p>
              <div className="code-block-wrapper">
                <pre className="option-code"><code>pip install effect-srm</code></pre>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={() => copyToClipboard('pip install effect-srm')}
                  aria-label={t.install.copyCommand}
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>
              <a 
                href="https://pypi.org/project/effect-srm/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.download.viewOnPyPI}
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="download-stats section">
          <div className="stats-row">
            <a href="https://pepy.tech/projects/effect-srm" target="_blank" rel="noopener noreferrer" className="stat-item glass">
              <img src="https://static.pepy.tech/badge/effect-srm" alt="Total Downloads" />
              <span>{t.download.totalDownloads}</span>
            </a>
            <div className="stat-item glass">
              <img src="https://img.shields.io/badge/FFmpeg-Required-orange.svg" alt="FFmpeg Required" />
              <span>{t.download.requiresFFmpeg}</span>
            </div>
            <div className="stat-item glass">
              <img src="https://img.shields.io/badge/Windows-10-blue.svg" alt="Windows 10" />
              <span>{t.download.testedSystem}</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="download-cta section">
          <div className="cta-card glass-strong">
            <h3>{t.download.firstTime}</h3>
            <p>{t.download.firstTimeDesc}</p>
            <Link to="/install" className="btn btn-primary">
              {t.download.viewInstallGuide}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Download
