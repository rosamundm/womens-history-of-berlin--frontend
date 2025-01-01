import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer>
      <div>
        <span>
          © Rosamund Mather {new Date().getFullYear()} unless stated otherwise.
        </span>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/news">
              News
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/impressum">
              Impressum
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
