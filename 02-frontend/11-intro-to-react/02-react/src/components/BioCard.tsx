export default function BioCard() {
  return (
    <div className="card">
      <div className="profile">
        <div className="image">
          <img
            src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Photo profile."
          />
        </div>
        <p className="name">John Doe</p>
        <p className="location">Palmerah, Indonesia</p>
        <p className="bio">
          Motivation is bullshit. Do it tired, do it scared, do it anyway.
        </p>
      </div>
      <div className="links">
        <a href="https://github.com" target="_blank">
          GitHub
        </a>
        <a href="https://frontendmentor.com">FrontEnd Mentor</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://x.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </div>
  );
}
