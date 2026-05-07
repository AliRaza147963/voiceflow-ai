import { useState } from 'react';
import { faqs } from '../data';

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" id="faq">
      <div className="section-header centered">
        <div className="section-tag reveal">✦ FAQ</div>
        <h2 className="section-title reveal">Frequently asked questions</h2>
        <p className="section-sub reveal">Can't find what you're looking for? Reach out to our team.</p>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div className={`faq-item reveal${open === i ? ' open' : ''}`} key={i}
            style={{ transitionDelay: `${i * 60}ms` }}>
            <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
              {f.q}<span className="faq-icon">+</span>
            </button>
            <div className="faq-answer"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;