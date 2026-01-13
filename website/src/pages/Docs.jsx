import { useLanguage } from '../i18n/useLanguage'
import './Docs.css'

const Docs = () => {
  const { t } = useLanguage()

  return (
    <div className="docs">
      <div className="container">
        {/* Header */}
        <section className="docs-header">
          <h1 className="page-title">
            <span className="gradient-text">{t.docs.title}</span>
          </h1>
          <p className="page-subtitle">
            {t.docs.subtitle}
          </p>
        </section>

        {/* Quick Start */}
        <section className="docs-section section">
          <div className="docs-card glass-strong">
            <h2>🚀 {t.docs.quickStart}</h2>
            <p>{t.docs.quickStartDesc}</p>
            
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>{t.docs.installFFmpeg}</h4>
                <p>{t.docs.installFFmpegDesc}</p>
                <a 
                  href="https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  {t.docs.downloadFFmpeg}
                </a>
              </div>
            </div>

            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>{t.docs.installESRM}</h4>
                <p>{t.docs.installESRMDesc}</p>
                <pre><code>pip install effect-srm</code></pre>
              </div>
            </div>

            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>{t.docs.runESRM}</h4>
                <p>{t.docs.runESRMDesc}</p>
                <pre><code>esrm</code></pre>
                <p>{t.docs.altCommands}</p>
                <pre><code>srm</code></pre>
                <pre><code>effect-screen-recorder-master</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="docs-section">
          <h2 className="section-title">⚡ {t.docs.basicUsage}</h2>
          <div className="usage-grid">
            <div className="usage-card glass">
              <span className="usage-number">1</span>
              <h4>{t.docs.selectDirectory}</h4>
              <p>{t.docs.selectDirectoryDesc}</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">2</span>
              <h4>{t.docs.chooseAudio}</h4>
              <p>{t.docs.chooseAudioDesc}</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">3</span>
              <h4>{t.docs.adjustEffects}</h4>
              <p>{t.docs.adjustEffectsDesc}</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">4</span>
              <h4>{t.docs.startRecording}</h4>
              <p>{t.docs.startRecordingDesc}</p>
            </div>
            <div className="usage-card glass">
              <span className="usage-number">5</span>
              <h4>{t.docs.stopAndSave}</h4>
              <p>{t.docs.stopAndSaveDesc}</p>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="docs-section section">
          <h2 className="section-title">⚙️ {t.docs.configuration}</h2>
          <div className="config-card glass-strong">
            <h3>{t.docs.configFile}</h3>
            <p>{t.docs.configFileDesc}</p>
            <pre className="config-code"><code>{`{
  "output_path": "C:\\\\Users\\\\Usuario\\\\Videos",
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
          <h2 className="section-title">🎚️ {t.docs.effectsReference}</h2>
          <div className="effects-table glass">
            <table>
              <thead>
                <tr>
                  <th>{t.docs.effect}</th>
                  <th>{t.docs.description}</th>
                  <th>{t.docs.range}</th>
                  <th>{t.docs.defaultValue}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Brightness</strong></td>
                  <td>{t.docs.brightnessDesc}</td>
                  <td>-1.0 a 1.0</td>
                  <td>0.0</td>
                </tr>
                <tr>
                  <td><strong>Contrast</strong></td>
                  <td>{t.docs.contrastDesc}</td>
                  <td>0.0 a 2.0</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td><strong>Saturation</strong></td>
                  <td>{t.docs.saturationDesc}</td>
                  <td>0.0 a 3.0</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td><strong>Gamma</strong></td>
                  <td>{t.docs.gammaDesc}</td>
                  <td>0.1 a 3.0</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td><strong>Hue</strong></td>
                  <td>{t.docs.hueDesc}</td>
                  <td>-180 a 180</td>
                  <td>0.0</td>
                </tr>
                <tr>
                  <td><strong>Sharpness</strong></td>
                  <td>{t.docs.sharpnessDesc}</td>
                  <td>0.0 a 3.0</td>
                  <td>1.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FFmpeg Presets */}
        <section className="docs-section section">
          <h2 className="section-title">🎬 {t.docs.ffmpegPresets}</h2>
          <div className="presets-grid">
            <div className="preset-card glass">
              <h4>ultrafast</h4>
              <p>{t.docs.ultrafastDesc}</p>
            </div>
            <div className="preset-card glass">
              <h4>superfast</h4>
              <p>{t.docs.superfastDesc}</p>
            </div>
            <div className="preset-card glass">
              <h4>veryfast</h4>
              <p>{t.docs.veryfastDesc}</p>
            </div>
            <div className="preset-card glass">
              <h4>fast</h4>
              <p>{t.docs.fastDesc}</p>
            </div>
            <div className="preset-card glass">
              <h4>medium</h4>
              <p>{t.docs.mediumDesc}</p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="docs-section section">
          <h2 className="section-title">📦 {t.docs.systemRequirements}</h2>
          <div className="requirements-grid">
            <div className="requirement-card glass">
              <span className="req-icon">💻</span>
              <h4>{t.docs.operatingSystem}</h4>
              <p>{t.docs.windowsTested}</p>
            </div>
            <div className="requirement-card glass">
              <span className="req-icon">🐍</span>
              <h4>{t.docs.python}</h4>
              <p>{t.docs.pythonVersion}</p>
            </div>
            <div className="requirement-card glass">
              <span className="req-icon">🎬</span>
              <h4>FFmpeg</h4>
              <p>{t.docs.ffmpegRequired}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Docs
