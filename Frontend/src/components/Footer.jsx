import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/homepage' },
        { label: 'Our Story', path: '/homepage' },
        { label: 'Team', path: '/homepage' },
        { label: 'Careers', path: '/homepage' },
      ],
    },
    destinations: {
      title: 'Destinations',
      links: [
        { label: 'Explore States', path: '/state-discovery' },
        { label: 'Popular Packages', path: '/package-details' },
        { label: 'Seasonal Tours', path: '/package-details' },
        { label: 'Custom Journeys', path: '/journey-planner' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { label: 'Help Center', path: '/homepage' },
        { label: 'Travel Guide', path: '/homepage' },
        { label: 'FAQs', path: '/homepage' },
        { label: 'Contact Us', path: '/enquiry-form' },
      ],
    },
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Youtube', icon: 'Youtube', url: '#' },
  ];

  const trustBadges = [
    { icon: 'Shield', text: 'Secure Booking' },
    { icon: 'Award', text: '15+ Years Experience' },
    { icon: 'Users', text: '10,000+ Happy Travelers' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <Link to="/homepage" className="flex items-center space-x-3 mb-4">
              <div className="header-logo-icon">
                <Icon name="Compass" size={24} color="#FFFFFF" />
              </div>
              <span className="header-logo-text">Nayek Tours</span>
            </Link>
            <p className="footer-description">
              Discover the authentic beauty of India through curated cultural experiences. 
              Your journey to incredible India starts here.
            </p>
            <div className="footer-social">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="footer-social-link"
                  aria-label={social?.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">{footerSections?.company?.title}</h3>
            <nav>
              {footerSections?.company?.links?.map((link) => (
                <Link
                  key={link?.label}
                  to={link?.path}
                  className="footer-link"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="footer-section-title">{footerSections?.destinations?.title}</h3>
            <nav>
              {footerSections?.destinations?.links?.map((link) => (
                <Link
                  key={link?.label}
                  to={link?.path}
                  className="footer-link"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="footer-section-title">{footerSections?.support?.title}</h3>
            <nav>
              {footerSections?.support?.links?.map((link) => (
                <Link
                  key={link?.label}
                  to={link?.path}
                  className="footer-link"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Nayek Tours. All rights reserved. Crafted with passion for Indian culture.
          </p>
          <div className="footer-trust-badges">
            {trustBadges?.map((badge) => (
              <div key={badge?.text} className="footer-trust-badge">
                <Icon name={badge?.icon} size={16} />
                <span>{badge?.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;