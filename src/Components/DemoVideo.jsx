const DemoVideo = () => {
  return (
    <section className="demo-video">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">Demo</span>
          <h2 className="section-title">See It In Action</h2>
          <p className="section-sub">
            Watch how our product works in real-time and how it can help you scale faster.
          </p>
        </div>

       <div className="demo-video-frame reveal">
<iframe
  src="https://www.youtube.com/embed/8hly31xKli0"
  title="AI SaaS Demo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</div>
      </div>
    </section>
  );
};

export default DemoVideo;