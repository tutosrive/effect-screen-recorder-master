import './License.css'

const License = () => {
  return (
    <div className="license">
      <div className="container">
        {/* Header */}
        <section className="license-header">
          <h1 className="page-title">
            <span className="gradient-text">Licencia</span>
          </h1>
          <p className="page-subtitle">
            ESRM está bajo licencia MIT
          </p>
        </section>

        {/* License Badge */}
        <section className="license-badge-section section">
          <div className="license-badge-card glass-strong">
            <img 
              src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" 
              alt="MIT License"
            />
            <h2>MIT License</h2>
            <p>Una de las licencias de código abierto más permisivas</p>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="permissions section">
          <h2 className="section-title">¿Qué puedes hacer?</h2>
          <div className="permissions-grid">
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>Uso Comercial</h4>
              <p>Puedes usar ESRM en proyectos comerciales.</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>Modificación</h4>
              <p>Puedes modificar el código fuente.</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>Distribución</h4>
              <p>Puedes distribuir copias del software.</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>Uso Privado</h4>
              <p>Puedes usar el software de forma privada.</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>Sublicencia</h4>
              <p>Puedes otorgar sublicencias.</p>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="conditions section">
          <h2 className="section-title">Condiciones</h2>
          <div className="condition-card glass-strong">
            <div className="condition-icon">📋</div>
            <div className="condition-content">
              <h3>Atribución Requerida</h3>
              <p>
                El aviso de copyright y la licencia deben incluirse en todas las copias 
                o partes sustanciales del software.
              </p>
              <pre className="attribution-code"><code>{`"Effect Screen Recorder Master (ESRM) v0.1.0 © 2025 Tutos Rive - Licencia MIT"`}</code></pre>
            </div>
          </div>
        </section>

        {/* License Text */}
        <section className="license-text section">
          <h2 className="section-title">Texto Completo de la Licencia</h2>
          <div className="license-content glass-strong">
            <pre className="license-pre"><code>{`MIT License

Copyright (c) 2025 Tutos Rive

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}</code></pre>
          </div>
        </section>

        {/* Limitations */}
        <section className="limitations section">
          <h2 className="section-title">Limitaciones</h2>
          <div className="limitations-grid">
            <div className="limitation-card glass">
              <span className="limitation-icon">⚠️</span>
              <h4>Sin Garantía</h4>
              <p>El software se proporciona "tal cual", sin garantía de ningún tipo.</p>
            </div>
            <div className="limitation-card glass">
              <span className="limitation-icon">⚠️</span>
              <h4>Sin Responsabilidad</h4>
              <p>Los autores no son responsables de daños o reclamaciones.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="license-cta section">
          <div className="cta-card glass">
            <h3>Ver Licencia en GitHub</h3>
            <p>Consulta el archivo LICENSE original en el repositorio.</p>
            <a 
              href="https://github.com/tutosrive/E-SRM/blob/main/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver en GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default License
