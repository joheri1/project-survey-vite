import gitHubLogo from '../assets/github-logo.png';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="github-links">
          {/* Anna's GitHub */}
          <div className="github-profile">
            <img src={gitHubLogo} alt="GitHub Logo" className="footer-logo" />
            <a href="https://github.com/Anna2024WebDev" aria-label="Link to Anna's GitHub account" target="_blank" rel="noopener noreferrer">
              Anna2024WebDev
            </a>
          </div>
          {/* Fanny's GitHub */}
          <div className="github-profile">
            <img src={gitHubLogo} alt="GitHub Logo" className="footer-logo" />
            <a href="https://github.com/Fannyhenriques" aria-label="Link to Fanny's GitHub account" target="_blank" rel="noopener noreferrer">
              FannyHenriques
            </a>
          </div>
          {/* Johanna's GitHub */}
          <div className="github-profile">
            <img src={gitHubLogo} alt="GitHub Logo" className="footer-logo" />
            <a href="https://github.com/Joheri1" aria-label="Link to Johanna's GitHub account" target="_blank" rel="noopener noreferrer">
              Joheri1
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <h3>© 2024 Copyright - Developed by Anna Hansen, Fanny Henriques, and Johanna Eriksson</h3>
      </div>
    </footer>
  );
}

export default Footer;

