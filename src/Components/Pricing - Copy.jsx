import { plans } from '../data';

function PricingCard({ plan }) {
  return (
    <div className={`pricing-card reveal${plan.featured ? ' featured' : ''}`}>
      {plan.featured && <div className="pricing-badge">Most Popular</div>}
      <div className="pricing-plan">{plan.name}</div>
      <div className="pricing-price">
        {plan.price === 'Custom' ? 'Custom' : <><sup>$</sup>{plan.price}</>}
      </div>
      <div className="pricing-period">{plan.period}</div>
      <div className="pricing-divider" />
      <ul className="pricing-features">
        {plan.features.map((f) => (
          <li key={f}><span className="pricing-check">✓</span>{f}</li>
        ))}
      </ul>
      <button className={`pricing-btn ${plan.btn}`}>{plan.btnLabel}</button>
    </div>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-header centered">
        <div className="section-tag reveal">✦ Pricing</div>
        <h2 className="section-title reveal">Simple, predictable pricing</h2>
        <p className="section-sub reveal">Start free. Scale as you grow. No hidden fees, no surprises.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((p) => <PricingCard key={p.name} plan={p} />)}
      </div>
    </section>
  );
}

export default Pricing;