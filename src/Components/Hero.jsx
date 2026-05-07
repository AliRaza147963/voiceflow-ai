function Hero() {
  return (
    <section className="hero" id="hero">
      <div>
        <div className="hero-eyebrow reveal">
          <span className="hero-eyebrow-dot" />
          Now in Public Beta — Join 10,000+ developers
        </div>
        <h1 className="hero-headline reveal">
          Build AI Voice<br />Agents that<br />
          <span className="grad">Actually Work</span>
        </h1>
        <p className="hero-sub reveal">
          VoiceFlow AI gives you ultra-low latency voice APIs, real-time
          transcription, and intelligent call handling—so you can ship in hours, not months.
        </p>
        <div className="hero-ctas reveal">
          <button className="hero-btn-primary">Start Building Free <span>→</span></button>
          <button className="hero-btn-secondary">▶ Watch Demo</button>
        </div>
        <div className="hero-stats reveal">
          {[['10K+','Developers'],['99.9%','Uptime SLA'],['<200ms','Avg Latency']].map(([num, label]) => (
            <div key={label}>
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual reveal-right">
        <div className="hero-orb" />
        <div className="hero-card-main">
          <div className="hero-card-top">
            <div className="hero-card-badge"><span className="live-dot" /> Live call</div>
            <div className="hero-wave">
              {[30,60,100,70,50,85,60,40].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="hero-card-metrics">
            {[['1,240','Calls Today',''],['98.4%','Accuracy',''],['<180ms','Latency','green'],['4.9★','Avg CSAT','green']].map(([val, label, color]) => (
              <div className="metric-item" key={label}>
                <div className={`metric-val${color ? ` ${color}` : ''}`}>{val}</div>
                <div className="metric-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-card-float float-1">
          <div className="float-icon purple">🤖</div>
          <div><div className="float-val">Agent Active</div><div className="float-label">Handling 34 calls</div></div>
        </div>
        <div className="hero-card-float float-2">
          <div className="float-icon green">⚡</div>
          <div><div className="float-val">Zero Setup</div><div className="float-label">Deploy in 5 min</div></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;