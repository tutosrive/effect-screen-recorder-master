import { useLanguage } from '../i18n/useLanguage'
import './License.css'

const License = () => {
  const { t } = useLanguage()

  return (
    <div className="license">
      <div className="container">
        {/* Header */}
        <section className="license-header">
          <h1 className="page-title">
            <span className="gradient-text">{t.license.title}</span>
          </h1>
          <p className="page-subtitle">
            {t.license.subtitle}
          </p>
        </section>

        {/* License Badge */}
        <section className="license-badge-section section">
          <div className="license-badge-card glass-strong">
            <img 
              src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" 
              alt="MIT License"
            />
            <h2>{t.license.mitLicense}</h2>
            <p>{t.license.mostPermissive}</p>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="permissions section">
          <h2 className="section-title">{t.license.whatCanYouDo}</h2>
          <div className="permissions-grid">
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>{t.license.commercialUse}</h4>
              <p>{t.license.commercialUseDesc}</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>{t.license.modification}</h4>
              <p>{t.license.modificationDesc}</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>{t.license.distribution}</h4>
              <p>{t.license.distributionDesc}</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>{t.license.privateUse}</h4>
              <p>{t.license.privateUseDesc}</p>
            </div>
            <div className="permission-card glass allowed">
              <span className="permission-icon">✓</span>
              <h4>{t.license.sublicense}</h4>
              <p>{t.license.sublicenseDesc}</p>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="conditions section">
          <h2 className="section-title">{t.license.conditions}</h2>
          <div className="condition-card glass-strong">
            <div className="condition-icon">📋</div>
            <div className="condition-content">
              <h3>{t.license.attributionRequired}</h3>
              <p>{t.license.attributionDesc}</p>
              <pre className="attribution-code"><code>{`"Effect Screen Recorder Master (ESRM) v0.1.0 © 2025 Dev2Forge - Licencia MIT"`}</code></pre>
            </div>
          </div>
        </section>

        {/* License Text */}
        <section className="license-text section">
          <h2 className="section-title">{t.license.fullLicenseText}</h2>
          <div className="license-content glass-strong">
            <pre className="license-pre"><code>{`MIT License

Copyright (c) 2025 Dev2Forge

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
          <h2 className="section-title">{t.license.limitations}</h2>
          <div className="limitations-grid">
            <div className="limitation-card glass">
              <span className="limitation-icon">⚠️</span>
              <h4>{t.license.noWarranty}</h4>
              <p>{t.license.noWarrantyDesc}</p>
            </div>
            <div className="limitation-card glass">
              <span className="limitation-icon">⚠️</span>
              <h4>{t.license.noLiability}</h4>
              <p>{t.license.noLiabilityDesc}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="license-cta section">
          <div className="cta-card glass">
            <h3>{t.license.viewOnGitHub}</h3>
            <p>{t.license.viewOnGitHubDesc}</p>
            <a 
              href="https://github.com/tutosrive/E-SRM/blob/main/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.license.viewInGitHub}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default License
