import './Docs.css'

const Docs = () => {
  return (
    <div className="docs">
      <div className="container">
        {/* Header */}
        <section className="docs-header">
          <h1 className="page-title">
            <span className="gradient-text">Documentación</span>
          </h1>
          <p className="page-subtitle">
            Guía completa para usar ESRM
          </p>
        </section>

        {/* Quick Start */}
        <section className="docs-section section">
          <div className="docs-card glass-strong">
            <h2>🚀 Inicio Rápido</h2>
            <p>Sigue estos pasos para comenzar a usar ESRM:</p>
            
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Instalar FFmpeg</h4>
                <p>Descarga FFmpeg y añádelo al PATH de tu sistema.</p>
                <a 
                  href="https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Descargar FFmpeg
                </a>
              </div>
            </div>

            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Instalar ESRM</h4>
                <p>Usa pip para instalar desde PyPI:</p>
                <pre><code>pip install effect-srm</code></pre>
              </div>
            </div>

            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Ejecutar ESRM</h4>
                <p>Abre una terminal y ejecuta uno de los siguientes comandos:</p>
                <pre><code>esrm</code></pre>
                <p>Comandos alternativos:</p>
                <pre><code>srm</code></pre>
                <pre><code>effect-screen-recorder-master</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="docs-section">
          <h2 className="section-title">⚡ Uso Básico</h2>
          <div className="usage-grid">
            <div className="usage-card glass">
              <span className="usage-number">1</span>
              <h4>Seleccionar Directorio</h4>
              <p>Elige dónde se guardarán tus grabaciones.</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">2</span>
              <h4>Elegir Audio</h4>
              <p>Selecciona el dispositivo de audio (obligatorio).</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">3</span>
              <h4>Ajustar Efectos</h4>
              <p>Configura los efectos visuales a tu gusto.</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">4</span>
              <h4>Iniciar Grabación</h4>
              <p>Haz clic en iniciar y comienza a grabar.</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">5</span>
              <h4>Detener y Guardar</h4>
              <p>Detén la grabación y el archivo se guarda automáticamente.</p>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="docs-section section">
          <h2 className="section-title">⚙️ Configuración</h2>
          <div className="config-card glass-strong">
            <h3>Archivo de Configuración</h3>
            <p>ESRM guarda tu configuración automáticamente en un archivo JSON:</p>
            <pre className="config-code"><code>{`{
  "output_path": "C:\\Users\\Usuario\\Videos",
  "audio_device": "Micrófono (Dispositivo HD)",
  "preset": "fast",
  "brightness": 0.2,
  "contrast": 1.1,
  "saturation": 1.3,
  "gamma": 1.0,
  "hue": 0.0,
  "sharpness": 1.5
}`}</code></pre>
          </div>
        </section>

        {/* Effects Reference */}
        <section className="docs-section section">
          <h2 className="section-title">🎚️ Referencia de Efectos</h2>
          <div className="effects-table glass">
            <table>
              <thead>
                <tr>
                  <th>Efecto</th>
                  <th>Descripción</th>
                  <th>Rango</th>
                  <th>Valor Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Brightness</strong></td>
                  <td>Ajusta la luminosidad de la imagen</td>
                  <td>-1.0 a 1.0</td>
                  <td>0.0</td>
                </tr>
                <tr>
                  <td><strong>Contrast</strong></td>
                  <td>Control de la diferencia entre tonos claros y oscuros</td>
                  <td>0.0 a 2.0</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td><strong>Saturation</strong></td>
                  <td>Intensidad de los colores</td>
                  <td>0.0 a 3.0</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td><strong>Gamma</strong></td>
                  <td>Corrección de tonos medios</td>
                  <td>0.1 a 3.0</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td><strong>Hue</strong></td>
                  <td>Rotación del espectro de colores</td>
                  <td>-180 a 180</td>
                  <td>0.0</td>
                </tr>
                <tr>
                  <td><strong>Sharpness</strong></td>
                  <td>Definición y claridad de bordes</td>
                  <td>0.0 a 3.0</td>
                  <td>1.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FFmpeg Presets */}
        <section className="docs-section section">
          <h2 className="section-title">🎬 Presets FFmpeg</h2>
          <div className="presets-grid">
            <div className="preset-card glass">
              <h4>ultrafast</h4>
              <p>Máxima velocidad, menor compresión. Ideal para equipos con recursos limitados.</p>
            </div>
            <div className="preset-card glass">
              <h4>superfast</h4>
              <p>Muy rápido con algo más de compresión que ultrafast.</p>
            </div>
            <div className="preset-card glass">
              <h4>veryfast</h4>
              <p>Buen balance entre velocidad y tamaño de archivo.</p>
            </div>
            <div className="preset-card glass">
              <h4>fast</h4>
              <p>Recomendado para la mayoría de usuarios. Balance óptimo.</p>
            </div>
            <div className="preset-card glass">
              <h4>medium</h4>
              <p>Mayor calidad, más recursos. Mejor compresión final.</p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="docs-section section">
          <h2 className="section-title">📦 Requisitos del Sistema</h2>
          <div className="requirements-grid">
            <div className="requirement-card glass">
              <span className="req-icon">💻</span>
              <h4>Sistema Operativo</h4>
              <p>Windows 10 (probado)</p>
            </div>
            <div className="requirement-card glass">
              <span className="req-icon">🐍</span>
              <h4>Python</h4>
              <p>3.11.6 o superior</p>
            </div>
            <div className="requirement-card glass">
              <span className="req-icon">🎬</span>
              <h4>FFmpeg</h4>
              <p>Instalado y en PATH</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Docs
