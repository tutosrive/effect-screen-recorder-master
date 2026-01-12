import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <section className="about-header">
          <h1 className="page-title">
            Acerca de <span className="gradient-text">ESRM</span>
          </h1>
          <p className="page-subtitle">
            Effect Screen Recorder Master - Grabación profesional con efectos en tiempo real
          </p>
        </section>

        {/* About Content */}
        <section className="about-content section">
          <div className="about-grid">
            <div className="about-text glass-strong">
              <h2>¿Qué es ESRM?</h2>
              <p>
                ESRM (Effect Screen Recorder Master) es un programa de grabación de pantalla 
                con <strong>efectos visuales en tiempo real</strong>. Desarrollado 100% con 
                asistencia de ChatGPT, está escrito en Python con interfaz gráfica en CustomTkinter.
              </p>
              <p>
                Utiliza FFmpeg para realizar las grabaciones, ofreciendo una calidad profesional 
                con múltiples opciones de configuración para ajustar la salida de video según 
                tus necesidades.
              </p>
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
          <h2 className="section-title">Características Detalladas</h2>
          
          <div className="feature-detail-grid">
            <div className="feature-detail glass">
              <div className="feature-header">
                <span className="feature-icon">🎚️</span>
                <h3>Ajustes en Tiempo Real</h3>
              </div>
              <ul>
                <li>Brillo - Ajuste de luminosidad</li>
                <li>Contraste - Control de diferencia tonal</li>
                <li>Saturación - Intensidad de colores</li>
                <li>Gamma - Corrección de tonos medios</li>
                <li>Tono (Hue) - Rotación de colores</li>
                <li>Nitidez - Definición de bordes</li>
              </ul>
            </div>

            <div className="feature-detail glass">
              <div className="feature-header">
                <span className="feature-icon">🖥️</span>
                <h3>Vista Previa Avanzada</h3>
              </div>
              <ul>
                <li>Panel interactivo 1:1</li>
                <li>Efectos aplicados en tiempo real</li>
                <li>Soporte para imágenes como preview</li>
                <li>Soporte para GIF animados</li>
                <li>Sistema de recorte inteligente (cover)</li>
                <li>Vista previa antes de grabar</li>
              </ul>
            </div>

            <div className="feature-detail glass">
              <div className="feature-header">
                <span className="feature-icon">⚙️</span>
                <h3>Configuración Profesional</h3>
              </div>
              <ul>
                <li>Detección automática de micrófono</li>
                <li>Presets FFmpeg (ultrafast a medium)</li>
                <li>Guardado automático de ajustes</li>
                <li>Configuración persistente en JSON</li>
                <li>Interfaz oscura moderna</li>
                <li>CustomTkinter UI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="tech-stack section">
          <h2 className="section-title">Stack Tecnológico</h2>
          <div className="tech-grid">
            <div className="tech-card glass">
              <span className="tech-icon">🐍</span>
              <h4>Python 3.11.6+</h4>
              <p>Lenguaje principal</p>
            </div>
            <div className="tech-card glass">
              <span className="tech-icon">🎬</span>
              <h4>FFmpeg</h4>
              <p>Motor de grabación</p>
            </div>
            <div className="tech-card glass">
              <span className="tech-icon">🖼️</span>
              <h4>CustomTkinter</h4>
              <p>Interfaz gráfica</p>
            </div>
            <div className="tech-card glass">
              <span className="tech-icon">📦</span>
              <h4>PyPI</h4>
              <p>Distribución</p>
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
              <p>Autor y Desarrollador</p>
              <div className="author-links">
                <a href="https://github.com/tutosrive" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
                <a href="https://www.youtube.com/@tutosrive" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  YouTube
                </a>
                <a href="mailto:srmtrg.ser@gmail.com" className="btn btn-primary">
                  Contacto
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
