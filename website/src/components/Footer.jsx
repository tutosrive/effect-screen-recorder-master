import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer glass">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img 
              src="https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/esrm/icon.ico" 
              alt="ESRM Logo" 
              className="footer-logo"
            />
            <div>
              <h3 className="footer-title">ESRM</h3>
              <p className="footer-subtitle">Effect Screen Recorder Master</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>{t.footer.navigation}</h4>
              <Link to="/">{t.footer.home}</Link>
              <Link to="/about">{t.footer.about}</Link>
              <Link to="/docs">{t.footer.documentation}</Link>
            </div>
            
            <div className="footer-section">
              <h4>{t.footer.resources}</h4>
              <Link to="/install">{t.footer.install}</Link>
              <Link to="/download">{t.footer.download}</Link>
              <Link to="/license">{t.footer.license}</Link>
            </div>
            
            <div className="footer-section">
              <h4>{t.footer.links}</h4>
              <a href="https://github.com/tutosrive/E-SRM" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://pypi.org/project/effect-srm/" target="_blank" rel="noopener noreferrer">PyPI</a>
              <a href="https://sourceforge.net/projects/e-srm/" target="_blank" rel="noopener noreferrer">SourceForge</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
          <div className="footer-social">
            <a href="https://github.com/dev2forge" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@dev2forge" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
