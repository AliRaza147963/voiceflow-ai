import { steps } from '../data';

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="section-header centered">
        <div className="section-tag reveal">✦ How It Works</div>
        <h2 className="section-title reveal">Three steps to production</h2>
        <p className="section-sub reveal">From zero to live voice agent in under 10 minutes.</p>
      </div>
      <div className="steps-grid">
        {steps.map((s, i) => (
          <div className="step-card reveal" key={s.n} style={{ transitionDelay: `${i * 120}ms` }}>
            <div className="step-num">{s.n}</div>
            <div className="step-title">{s.icon} {s.title}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;