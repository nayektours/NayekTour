import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from './AppIcon';
import Button from './ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/state-discovery', label: 'Explore States' },
    { path: '/package-details', label: 'Packages' },
    { path: '/journey-planner', label: 'Plan Journey' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="header-container">
          <div className="header-content">
            <Link to="/homepage" className="header-logo" onClick={handleMobileMenuClose}>
              <div className="header-logo-icon">
                <Icon name="Compass" size={24} color="#FFFFFF" />
              </div>
              <span className="header-logo-text">Nayek Tours</span>
            </Link>

            <nav className="header-nav">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
                >
                  {item?.label}
                </Link>
              ))}
            </nav>

            <div className="header-actions">
              <Button
                variant="default"
                size="default"
                iconName="Send"
                iconPosition="right"
                className="hidden lg:inline-flex"
                onClick={() => navigate('/enquiry-form')}
              >
                Enquire Now
              </Button>

              <button
                className="header-mobile-toggle"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div 
            className="mobile-menu-overlay"
            onClick={handleMobileMenuClose}
            aria-hidden="true"
          />
          <div className="mobile-menu-content animate-slide-in-right">
            <div className="mobile-menu-header">
              <Link to="/homepage" className="header-logo" onClick={handleMobileMenuClose}>
                <div className="header-logo-icon">
                  <Icon name="Compass" size={24} color="#FFFFFF" />
                </div>
                <span className="header-logo-text">Nayek Tours</span>
              </Link>
              <button
                onClick={handleMobileMenuClose}
                className="p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <nav className="mobile-menu-nav">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                  onClick={handleMobileMenuClose}
                >
                  {item?.label}
                </Link>
              ))}
              <Link
                to="/enquiry-form"
                className="mobile-menu-link"
                onClick={handleMobileMenuClose}
              >
                Enquire Now
              </Link>
            </nav>

            <div className="px-4 py-6 border-t border-border">
              <Button
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="right"
                fullWidth
                onClick={() => {
                  handleMobileMenuClose();
                  navigate('/enquiry-form');
                }}
              >
                Start Planning Your Journey
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;