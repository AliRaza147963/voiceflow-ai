const CallSimulation = () => {
  return (
    <section className="call-sim">
      <h2>Try It Yourself</h2>
      <p>Listen to how the AI handles a real customer call.</p>

      <button onClick={() => alert("Play demo call here")}>
        ▶ Listen to Demo Call
      </button>
    </section>
  );
};

export default CallSimulation;