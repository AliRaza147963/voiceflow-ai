import { testimonials } from '../data';

function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="section-header centered">
        <div className="section-tag reveal">✦ Testimonials</div>
        <h2 className="section-title reveal">Loved by engineering teams</h2>
        <p className="section-sub reveal">Don't take our word for it—hear from builders who ship with us every day.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card reveal" key={t.name} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: t.color }}>{t.name[0]}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;