import { trustedLogos } from '../data';

function TrustedBy() {
  return (
    <div className="trusted reveal">
      <div className="trusted-label">Trusted by teams at world-class companies</div>
      <div className="trusted-logos">
        {trustedLogos.map((logo) => (
          <div className="trusted-logo" key={logo}>{logo}</div>
        ))}
      </div>
    </div>
  );
}

export default TrustedBy;