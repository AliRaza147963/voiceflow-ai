import { features } from '../data';

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div className="feature-card reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="feature-icon">{icon}</div>
      <div className="feature-title">{title}</div>
      <div className="feature-desc">{desc}</div>
    </div>
  );
}

function Features() {
  return (
    <section className="section section-alt" id="features">
      <div className="section-header centered">
        <div className="section-tag reveal">✦ Features</div>
        <h2 className="section-title reveal">Everything you need to ship voice AI</h2>
        <p className="section-sub reveal">Production-ready primitives for developers who don't want to reinvent the wheel.</p>
      </div>
      <div className="features-grid">
        {features.map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 80} />)}
      </div>
    </section>
  );
}

export default Features;