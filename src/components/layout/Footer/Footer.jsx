import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./footer.css";
import logoWhiteImage from "../assets/logo-white.png";
const contacts = [
  { icon: faLocationDot, info: "742 Evergreen Terrace, Springfield, IL 62704, USA", label: "Address" },
  { icon: faPhone, info: "+1 (555) 123-4567", label: "Phone" },
  { icon: faEnvelope, info: "info@littlelemon.com", label: "Email" },
];

const socials = [
  { icon: faFacebook, name: "facebook", label: "Facebook" },
  { icon: faInstagram, name: "instagram", label: "Instagram" },
  { icon: faLinkedin, name: "linkedin", label: "LinkedIn" },
];

const currentYear = new Date().getFullYear();

const Footer = ({ navLinks }) => {
  return (
    <footer className="site-footer" role="contentinfo">
      <img
        className="site-footer-logo"
        src={logoWhiteImage}
        alt="Little Lemon restaurant logo"
      />
      <nav className="site-footer-nav" aria-label="Footer navigation">
        <h4>Sitemap</h4>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <HashLink to={navLink.path} aria-label={`Go to ${navLink.name} page`}>
                {navLink.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-footer-contact">
        <h4>Contact us</h4>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} aria-hidden="true" />
              <span className="sr-only">{contact.label}: </span>
              {contact.info}
            </p>
          ))}
        </address>
      </div>
      <div className="site-footer-social">
        <h4>Connect with us</h4>
        <div role="group" aria-label="Social media links">
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.label} page (opens in new tab)`}
            >
              <FontAwesomeIcon icon={social.icon} size="lg" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="site-footer-copyright">
          <p className="copyright">
            &copy; Copyright {currentYear}{' '}
            <a
              className="github-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shoaibmansoor"
              aria-label="Visit ShoaibMansoor's GitHub profile (opens in new tab)"
            >
              Shoaib Mansoor
            </a>
            . <br/>Sharing is appreciated with attribution.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
