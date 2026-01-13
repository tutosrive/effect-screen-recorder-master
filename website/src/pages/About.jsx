import { useLanguage } from '../i18n/useLanguage'
import './About.css'

const About = () => {
  const { t } = useLanguage()

  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <section className="about-header">
          <h1 className="page-title">
            {t.about.title} <span className="gradient-text">ESRM</span>
          </h1>
          <p className="page-subtitle">
            {t.about.subtitle}
          </p>
        </section>

        {/* About Content */}
        <section className="about-content section">
          <div className="about-grid">
            <div className="about-text glass-strong">
              <h2>{t.about.whatIs}</h2>
              <p dangerouslySetInnerHTML={{ __html: t.about.whatIsDesc1 }} />
              <p>{t.about.whatIsDesc2}</p>
            </div>

            <div className="about-image glass">
              <img 
                src="https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/esrm/esrm.png" 
                alt="ESRM Interface" 
              />
            </div>
          </div>
        </section>

        {/* Features Detail */}
        <section className="features-detail section">
          <h2 className="section-title">{t.about.detailedFeatures}</h2>
          
          <div className="feature-detail-grid">
            <div className="feature-detail glass">
              <div className="feature-header">
                <span className="feature-icon">🎚️</span>
                <h3>{t.about.realTimeAdjustments}</h3>
              </div>
              <ul>
                <li>{t.about.brightness}</li>
                <li>{t.about.contrast}</li>
                <li>{t.about.saturation}</li>
                <li>{t.about.gamma}</li>
                <li>{t.about.hue}</li>
                <li>{t.about.sharpness}</li>
              </ul>
            </div>

            <div className="feature-detail glass">
              <div className="feature-header">
                <span className="feature-icon">🖥️</span>
                <h3>{t.about.advancedPreview}</h3>
              </div>
              <ul>
                <li>{t.about.interactivePanel}</li>
                <li>{t.about.realTimeEffects}</li>
                <li>{t.about.imageSupport}</li>
                <li>{t.about.gifSupport}</li>
                <li>{t.about.smartCrop}</li>
                <li>{t.about.previewBefore}</li>
              </ul>
            </div>

            <div className="feature-detail glass">
              <div className="feature-header">
                <span className="feature-icon">⚙️</span>
                <h3>{t.about.professionalConfig}</h3>
              </div>
              <ul>
                <li>{t.about.autoMic}</li>
                <li>{t.about.ffmpegPresets}</li>
                <li>{t.about.autoSave}</li>
                <li>{t.about.jsonConfig}</li>
                <li>{t.about.darkInterface}</li>
                <li>{t.about.customTkinter}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="tech-stack section">
          <h2 className="section-title">{t.about.techStack}</h2>
          <div className="tech-grid">
            <div className="tech-card glass">
              <span className="tech-icon">🐍</span>
              <h4>Python 3.11.6+</h4>
              <p>{t.about.mainLanguage}</p>
            </div>
            <div className="tech-card glass">
              <span className="tech-icon">🎬</span>
              <h4>FFmpeg</h4>
              <p>{t.about.recordingEngine}</p>
            </div>
            <div className="tech-card glass">
              <span className="tech-icon">🖼️</span>
              <h4>CustomTkinter</h4>
              <p>{t.about.graphicInterface}</p>
            </div>
            <div className="tech-card glass">
              <span className="tech-icon">📦</span>
              <h4>PyPI</h4>
              <p>{t.about.distribution}</p>
            </div>
          </div>
        </section>

        {/* Author */}
        <section className="author section">
          <div className="author-card glass-strong">
            <img 
              src="https://avatars.githubusercontent.com/u/108991712" 
              alt="Tutos Rive" 
              className="author-avatar"
            />
            <div className="author-info">
              <h3>Tutos Rive</h3>
              <p>{t.about.authorDeveloper}</p>
              <div className="author-links">
                <a href="https://github.com/tutosrive" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
                <a href="https://www.youtube.com/@tutosrive" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  YouTube
                </a>
                <a href="mailto:srmtrg.ser@gmail.com" className="btn btn-primary">
                  {t.about.contact}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
