import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import './Install.css'

const CodeBlock = ({ code, id, onCopy, copiedCommand, copyLabel }) => (
  <div className="code-block-wrapper">
    <pre><code>{code}</code></pre>
    <button 
      className={`copy-btn ${copiedCommand === id ? 'copied' : ''}`}
      onClick={() => onCopy(code, id)}
      aria-label={copyLabel}
    >
      {copiedCommand === id ? '✓' : '📋'}
    </button>
  </div>
)

const Install = () => {
  const [copiedCommand, setCopiedCommand] = useState('')
  const { t } = useLanguage()

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedCommand(id)
        setTimeout(() => setCopiedCommand(''), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
      })
  }

  return (
    <div className="install">
      <div className="container">
        {/* Header */}
        <section className="install-header">
          <h1 className="page-title">
            <span className="gradient-text">{t.install.title}</span>
          </h1>
          <p className="page-subtitle">
            {t.install.subtitle}
          </p>
        </section>

        {/* Install Methods */}
        <section className="install-methods section">
          {/* PyPI Method */}
          <div className="method-card glass-strong">
            <div className="method-badge pypi">{t.install.recommended}</div>
            <div className="method-icon">📦</div>
            <h2>{t.install.installWithPyPI}</h2>
            <p>{t.install.pypiDesc}</p>
            
            <div className="install-step">
              <h4>1. {t.install.verifyPython}</h4>
              <CodeBlock code="python --version" id="python-version" onCopy={copyToClipboard} copiedCommand={copiedCommand} copyLabel={t.install.copyCommand} />
            </div>
            
            <div className="install-step">
              <h4>2. {t.install.installWithPip}</h4>
              <CodeBlock code="pip install effect-srm" id="pip-install" onCopy={copyToClipboard} copiedCommand={copiedCommand} copyLabel={t.install.copyCommand} />
            </div>
            
            <div className="install-step">
              <h4>3. {t.install.runESRM}</h4>
              <CodeBlock code="esrm" id="esrm-run" onCopy={copyToClipboard} copiedCommand={copiedCommand} copyLabel={t.install.copyCommand} />
              <p className="step-note">{t.install.alsoUse} <code>srm</code> o <code>effect-screen-recorder-master</code></p>
            </div>

            <a 
              href="https://pypi.org/project/effect-srm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.install.viewOnPyPI}
            </a>
          </div>

          {/* Executable Method */}
          <div className="method-card glass-strong">
            <div className="method-badge exe">{t.install.noPython}</div>
            <div className="method-icon">💻</div>
            <h2>{t.install.exeInstaller}</h2>
            <p>{t.install.exeDesc}</p>
            
            <div className="install-step">
              <h4>1. {t.install.downloadInstaller}</h4>
              <p>{t.install.downloadInstallerDesc}</p>
            </div>
            
            <div className="install-step">
              <h4>2. {t.install.runInstaller}</h4>
              <p>{t.install.runInstallerDesc}</p>
            </div>
            
            <div className="install-step">
              <h4>3. {t.install.openESRM}</h4>
              <p>{t.install.openESRMDesc}</p>
            </div>

            <a 
              href="https://sourceforge.net/projects/e-srm/files/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-download"
            >
              SourceForge
            </a>
          </div>

          {/* Local Development */}
          <div className="method-card glass-strong">
            <div className="method-badge dev">{t.install.development}</div>
            <div className="method-icon">🛠️</div>
            <h2>{t.install.localInstall}</h2>
            <p>{t.install.localDesc}</p>
            
            <div className="install-step">
              <h4>1. {t.install.cloneRepo}</h4>
              <CodeBlock code="git clone https://github.com/tutosrive/E-SRM.git" id="git-clone" onCopy={copyToClipboard} copiedCommand={copiedCommand} copyLabel={t.install.copyCommand} />
            </div>
            
            <div className="install-step">
              <h4>2. {t.install.installDeps}</h4>
              <CodeBlock code="pip install -r requirements.txt" id="pip-requirements" onCopy={copyToClipboard} copiedCommand={copiedCommand} copyLabel={t.install.copyCommand} />
            </div>
            
            <div className="install-step">
              <h4>3. {t.install.runApp}</h4>
              <CodeBlock code="python code/__main__.py" id="python-run" onCopy={copyToClipboard} copiedCommand={copiedCommand} copyLabel={t.install.copyCommand} />
            </div>

            <a 
              href="https://github.com/tutosrive/E-SRM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {t.install.viewRepo}
            </a>
          </div>
        </section>

        {/* FFmpeg Requirement */}
        <section className="ffmpeg-section section">
          <div className="ffmpeg-card glass-strong">
            <div className="ffmpeg-icon">🎬</div>
            <div className="ffmpeg-content">
              <h2>⚠️ {t.install.importantRequirement}</h2>
              <p dangerouslySetInnerHTML={{ __html: t.install.ffmpegDesc }} />
              <div className="ffmpeg-steps">
                <div className="ffmpeg-step">
                  <span>1</span>
                  <p>{t.install.ffmpegStep1}</p>
                </div>
                <div className="ffmpeg-step">
                  <span>2</span>
                  <p>{t.install.ffmpegStep2}</p>
                </div>
                <div className="ffmpeg-step">
                  <span>3</span>
                  <p>{t.install.ffmpegStep3}</p>
                </div>
                <div className="ffmpeg-step">
                  <span>4</span>
                  <p>{t.install.ffmpegStep4} <code>ffmpeg -version</code></p>
                </div>
              </div>
              <a 
                href="https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.install.downloadFFmpeg}
              </a>
            </div>
          </div>
        </section>

        {/* Video Tutorial */}
        <section className="tutorial-section section">
          <h2 className="section-title">📹 {t.install.videoTutorial}</h2>
          <div className="video-container glass">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/bPfVOSHWAnc" 
              title="ESRM Installation Tutorial" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Need Help */}
        <section className="help-section section">
          <div className="help-card glass">
            <h3>{t.install.needHelp}</h3>
            <p>{t.install.needHelpDesc}</p>
            <div className="help-buttons">
              <Link to="/docs" className="btn btn-secondary">
                {t.install.viewDocs}
              </Link>
              <a href="mailto:srmtrg.ser@gmail.com" className="btn btn-primary">
                {t.install.contactSupport}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Install
