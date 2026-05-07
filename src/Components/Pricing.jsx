import { plans } from '../data';

function PricingCard({ plan }) {
  return (
    <div className={`pricing-card reveal${plan.featured ? ' featured' : ''}`}>
      
      {/* Top Badges */}
      {plan.featured && <div className="pricing-badge">Most Popular</div>}
      {plan.discount && <div className="pricing-discount">{plan.discount}</div>}

      {/* Plan Name */}
      <div className="pricing-plan">{plan.name}</div>

      {/* Price */}
      <div className="pricing-price">
        {plan.price === 'Custom' ? (
          'Custom'
        ) : (
          <>
            <sup>$</sup>{plan.price}
          </>
        )}
      </div>

      {/* Period */}
      <div className="pricing-period">{plan.period}</div>

      {/* Extra Note (NEW) */}
      {plan.note && <div className="pricing-note">{plan.note}</div>}

      <div className="pricing-divider" />

      {/* Features */}
      <ul className="pricing-features">
        {plan.features.map((f) => (
          <li key={f}>
            <span className="pricing-check">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className={`pricing-btn ${plan.btn}`}>
        {plan.btnLabel}
      </button>
    </div>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-header centered">
        <div className="section-tag reveal">✦ Pricing</div>
        <h2 className="section-title reveal">Simple, predictable pricing</h2>
        <p className="section-sub reveal">
          Start monthly or save big with yearly plans. No hidden fees.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((p) => (
          <PricingCard key={p.name} plan={p} />
        ))}
      </div>
    </section>
  );
}

export default Pricing;