import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge glass">
              <span className="badge-dot"></span>
              Versión 0.1.0 Disponible
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Effect Screen</span>
              <br />
              Recorder Master
            </h1>
            <p className="hero-description">
              Grabación de pantalla profesional con efectos visuales en tiempo real. 
              Ajusta brillo, contraste, saturación y más mientras grabas.
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
                Descargar Ahora
              </a>
              <Link to="/docs" className="btn btn-secondary">
                Ver Documentación
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
          <h2 className="section-title">Características Principales</h2>
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon">🎚️</div>
              <h3>Ajustes en Tiempo Real</h3>
              <p>Brillo, contraste, saturación, gamma, tono y nitidez. 6 controles deslizantes con precisión decimal.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🖥️</div>
              <h3>Vista Previa Avanzada</h3>
              <p>Panel interactivo 1:1 con efectos aplicados en tiempo real y soporte para imágenes/GIF.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">⚙️</div>
              <h3>Configuración Profesional</h3>
              <p>Detección automática de dispositivos de audio, presets FFmpeg y guardado automático en JSON.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">🎨</div>
              <h3>Interfaz Moderna</h3>
              <p>Diseño oscuro elegante construido con CustomTKinter para una experiencia visual premium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section className="quick-install section">
        <div className="container">
          <div className="install-card glass-strong">
            <div className="install-content">
              <h2>Instalación Rápida</h2>
              <p>Instala ESRM en segundos con pip</p>
              <pre className="install-code">
                <code>pip install effect-srm</code>
              </pre>
              <p className="install-note">
                Requiere Python 3.11.6+ y FFmpeg en PATH
              </p>
              <Link to="/install" className="btn btn-primary">
                Ver Más Opciones
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
              <span>Descargas PyPI</span>
            </div>
            <div className="stat-card glass">
              <img src="https://img.shields.io/badge/Python-3.11.6%2B-blue.svg" alt="Python Version" />
              <span>Python 3.11.6+</span>
            </div>
            <div className="stat-card glass">
              <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License MIT" />
              <span>Licencia MIT</span>
            </div>
            <div className="stat-card glass">
              <img src="https://img.shields.io/pypi/v/effect-srm?label=ESRM" alt="Version" />
              <span>Última Versión</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
