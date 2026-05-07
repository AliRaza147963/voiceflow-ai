import { codeLines } from '../data';

function CodeDemo() {
  return (
    <section className="demo-section section-alt" id="demo">
      <div className="demo-inner">
        <div className="demo-info reveal-left">
          <div className="section-tag">✦ Developer First</div>
          <h2 className="section-title">Ship voice in minutes,<br />not months</h2>
          <p className="section-sub">Our SDK is designed for real developers. Clean APIs, TypeScript-first, and docs that actually make sense.</p>
          <ul className="demo-feature-list">
            <li>TypeScript &amp; Python SDKs with full type safety</li>
            <li>WebSocket streaming with automatic reconnection</li>
            <li>Built-in VAD (Voice Activity Detection)</li>
            <li>Webhook support for async event handling</li>
            <li>OpenAPI spec — generate your own client</li>
          </ul>
        </div>
        <div className="reveal-right">
          <div className="code-window">
            <div className="code-titlebar">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-filename">agent.ts</span>
            </div>
            <div className="code-body">
              {codeLines.map(({ ln, tokens }) => (
                <div className="code-line" key={ln}>
                  <span className="code-ln">{ln}</span>
                  <span>
                    {tokens.map((tok, i) => (
                      <span key={i} className={tok.t}>{tok.v}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeDemo;