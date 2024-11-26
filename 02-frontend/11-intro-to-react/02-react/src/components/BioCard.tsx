import "./BioCard.css";

interface Prop {
  name: string;
  location: string;
  bio: string;
  photoPic: string;
  cardBg?: string;
  linkBg?: string;
}

export default function BioCard(prop: Prop) {
  console.log(prop);

  return (
    <div className="card" style={{ backgroundColor: prop.cardBg }}>
      <div className="profile">
        <div className="image-container">
          <img src={prop.photoPic} alt="Photo profile." />
        </div>
        <p className="name">{prop.name}</p>
        <p className="location">{prop.location}</p>
        <p className="bio">{prop.bio}</p>
      </div>
      <div className="links">
        <a
          style={{ backgroundColor: prop.linkBg }}
          href="https://github.com"
          target="_blank"
        >
          GitHub
        </a>
        <a
          style={{ backgroundColor: prop.linkBg }}
          href="https://frontendmentor.com"
        >
          FrontEnd Mentor
        </a>
        <a style={{ backgroundColor: prop.linkBg }} href="https://linkedin.com">
          LinkedIn
        </a>
        <a style={{ backgroundColor: prop.linkBg }} href="https://x.com">
          Twitter
        </a>
        <a
          style={{ backgroundColor: prop.linkBg }}
          href="https://instagram.com"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
