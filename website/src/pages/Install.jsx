import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Install.css'

const CodeBlock = ({ code, id, onCopy, copiedCommand }) => (
  <div className="code-block-wrapper">
    <pre><code>{code}</code></pre>
    <button 
      className={`copy-btn ${copiedCommand === id ? 'copied' : ''}`}
      onClick={() => onCopy(code, id)}
      aria-label="Copiar comando"
    >
      {copiedCommand === id ? '✓' : '📋'}
    </button>
  </div>
)

const Install = () => {
  const [copiedCommand, setCopiedCommand] = useState('')

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCommand(id)
      setTimeout(() => setCopiedCommand(''), 2000)
    })
  }

  return (
    <div className="install">
      <div className="container">
        {/* Header */}
        <section className="install-header">
          <h1 className="page-title">
            <span className="gradient-text">Instalación</span>
          </h1>
          <p className="page-subtitle">
            Múltiples formas de instalar ESRM
          </p>
        </section>

        {/* Install Methods */}
        <section className="install-methods section">
          {/* PyPI Method */}
          <div className="method-card glass-strong">
            <div className="method-badge pypi">Recomendado</div>
            <div className="method-icon">📦</div>
            <h2>Instalar con PyPI</h2>
            <p>La forma más fácil de instalar ESRM. Requiere Python 3.11.6+</p>
            
            <div className="install-step">
              <h4>1. Verifica que tienes Python instalado</h4>
              <CodeBlock code="python --version" id="python-version" onCopy={copyToClipboard} copiedCommand={copiedCommand} />
            </div>
            
            <div className="install-step">
              <h4>2. Instala ESRM con pip</h4>
              <CodeBlock code="pip install effect-srm" id="pip-install" onCopy={copyToClipboard} copiedCommand={copiedCommand} />
            </div>
            
            <div className="install-step">
              <h4>3. Ejecuta ESRM</h4>
              <CodeBlock code="esrm" id="esrm-run" onCopy={copyToClipboard} copiedCommand={copiedCommand} />
              <p className="step-note">También puedes usar: <code>srm</code> o <code>effect-screen-recorder-master</code></p>
            </div>

            <a 
              href="https://pypi.org/project/effect-srm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver en PyPI
            </a>
          </div>

          {/* Executable Method */}
          <div className="method-card glass-strong">
            <div className="method-badge exe">Sin Python</div>
            <div className="method-icon">💻</div>
            <h2>Instalador .EXE</h2>
            <p>Descarga e instala sin necesidad de tener Python. Ideal para usuarios que prefieren instaladores tradicionales.</p>
            
            <div className="install-step">
              <h4>1. Descarga el instalador</h4>
              <p>Descarga la última versión desde SourceForge.</p>
            </div>
            
            <div className="install-step">
              <h4>2. Ejecuta el instalador</h4>
              <p>Sigue las instrucciones del asistente de instalación.</p>
            </div>
            
            <div className="install-step">
              <h4>3. Abre ESRM</h4>
              <p>Busca ESRM en el menú de inicio o ejecuta desde el escritorio.</p>
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
            <div className="method-badge dev">Desarrollo</div>
            <div className="method-icon">🛠️</div>
            <h2>Instalación Local</h2>
            <p>Clona el repositorio para contribuir o modificar el código.</p>
            
            <div className="install-step">
              <h4>1. Clona el repositorio</h4>
              <CodeBlock code="git clone https://github.com/tutosrive/E-SRM.git" id="git-clone" onCopy={copyToClipboard} copiedCommand={copiedCommand} />
            </div>
            
            <div className="install-step">
              <h4>2. Instala dependencias</h4>
              <CodeBlock code="pip install -r requirements.txt" id="pip-requirements" onCopy={copyToClipboard} copiedCommand={copiedCommand} />
            </div>
            
            <div className="install-step">
              <h4>3. Ejecuta la aplicación</h4>
              <CodeBlock code="python code/__main__.py" id="python-run" onCopy={copyToClipboard} copiedCommand={copiedCommand} />
            </div>

            <a 
              href="https://github.com/tutosrive/E-SRM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Ver Repositorio
            </a>
          </div>
        </section>

        {/* FFmpeg Requirement */}
        <section className="ffmpeg-section section">
          <div className="ffmpeg-card glass-strong">
            <div className="ffmpeg-icon">🎬</div>
            <div className="ffmpeg-content">
              <h2>⚠️ Requisito Importante: FFmpeg</h2>
              <p>
                ESRM requiere <strong>FFmpeg</strong> instalado y configurado en el PATH del sistema 
                para funcionar correctamente. FFmpeg es el motor que permite la grabación de video.
              </p>
              <div className="ffmpeg-steps">
                <div className="ffmpeg-step">
                  <span>1</span>
                  <p>Descarga FFmpeg desde el sitio oficial</p>
                </div>
                <div className="ffmpeg-step">
                  <span>2</span>
                  <p>Extrae el archivo en una carpeta (ej: C:\ffmpeg)</p>
                </div>
                <div className="ffmpeg-step">
                  <span>3</span>
                  <p>Añade la carpeta bin al PATH del sistema</p>
                </div>
                <div className="ffmpeg-step">
                  <span>4</span>
                  <p>Verifica con: <code>ffmpeg -version</code></p>
                </div>
              </div>
              <a 
                href="https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Descargar FFmpeg
              </a>
            </div>
          </div>
        </section>

        {/* Video Tutorial */}
        <section className="tutorial-section section">
          <h2 className="section-title">📹 Video Tutorial</h2>
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
            <h3>¿Necesitas ayuda?</h3>
            <p>Revisa la documentación o contacta con soporte.</p>
            <div className="help-buttons">
              <Link to="/docs" className="btn btn-secondary">
                Ver Documentación
              </Link>
              <a href="mailto:srmtrg.ser@gmail.com" className="btn btn-primary">
                Contactar Soporte
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Install
