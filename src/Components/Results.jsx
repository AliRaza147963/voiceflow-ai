const Results = () => {
  const stats = [
    { number: "10x", label: "Faster Performance" },
    { number: "70%", label: "Cost Reduction" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "<200ms", label: "Response Time" }
  ];

  return (
    <section className="results">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">Results</span>
          <h2 className="section-title">Proven Results</h2>
          <p className="section-sub">
            Real impact you can measure after using our platform.
          </p>
        </div>

        <div className="results-grid">
          {stats.map((item, i) => (
            <div key={i} className="result-card reveal">
              <div className="result-number">{item.number}</div>
              <div className="result-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;