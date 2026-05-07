const Problem = () => {
  const problems = [
    {
      title: "Slow Performance",
      desc: "Your current system takes too long to process requests."
    },
    {
      title: "High Costs",
      desc: "Scaling infrastructure is expensive and inefficient."
    },
    {
      title: "Complex Setup",
      desc: "Developers waste time configuring tools instead of building."
    }
  ];

  return (
    <section className="problem">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">Problem</span>
          <h2 className="section-title">What’s Holding You Back?</h2>
          <p className="section-sub">
            These are the common issues teams face while building modern apps.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((item, i) => (
            <div key={i} className="problem-card reveal">
              <h3 className="problem-title">{item.title}</h3>
              <p className="problem-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;