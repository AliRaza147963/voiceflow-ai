const Solution = () => {
  const solutions = [
    {
      title: "Optimized Performance",
      desc: "Blazing fast response times with optimized backend."
    },
    {
      title: "Cost Efficient",
      desc: "Reduce infrastructure cost with smart scaling."
    },
    {
      title: "Easy Integration",
      desc: "Plug and play solution with minimal setup."
    }
  ];

  return (
    <section className="solution">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">Solution</span>
          <h2 className="section-title">We Fix It All</h2>
          <p className="section-sub">
            Our platform eliminates bottlenecks and boosts your productivity.
          </p>
        </div>

        <div className="solution-grid">
          {solutions.map((item, i) => (
            <div key={i} className="solution-card reveal">
              <div className="solution-icon">⚡</div>
              <h3 className="solution-title">{item.title}</h3>
              <p className="solution-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;