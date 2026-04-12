import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const serviceItems = [
    { label: 'AI Tools', path: '/services' },
    { label: 'TechnoHealth App', path: '/services' },
    { label: 'Supported Devices', path: '/services' },
    { label: 'APIs & SDKs', path: '/services' }
  ];

  const navLinks = [
    { label: 'Services', hasDropdown: true },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Docs', path: '/docs' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 shadow-lg' 
          : 'bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0">
            <img src="/Images/Icon3.png" alt="TechnoHealth" className="h-11 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  // Services Dropdown
                  <div
                    onMouseEnter={() => setShowServicesMenu(true)}
                    onMouseLeave={() => setShowServicesMenu(false)}
                  >
                    <button
                      className={`px-4 py-2 rounded-lg transition-all font-medium text-sm flex items-center gap-1.5 ${
                        showServicesMenu
                          ? 'text-white bg-cyan-600'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${showServicesMenu ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown Menu Triangle */}
                    {showServicesMenu && (
                      <div className="absolute top-full right-1/2 translate-x-1/2 mt-0">
                        {/* Triangle pointer */}
                        <div className="h-2 w-6 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 clip-path-triangle mx-auto" 
                          style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            width: '12px',
                            height: '6px'
                          }}>
                        </div>
                        
                        {/* Dropdown items */}
                        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 border border-slate-700 rounded-lg shadow-xl py-2 w-48 backdrop-blur-sm">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setShowServicesMenu(false)}
                              className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                isActive(item.path)
                                  ? 'text-cyan-400 bg-white/5'
                                  : 'text-slate-200 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular nav links
                  <Link
                    to={link.path || '#'}
                    className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                      isActive(link.path || '')
                        ? 'text-white bg-cyan-600'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Get Started Button */}
            <Link
              to="/auth"
              className="ml-4 px-5 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all font-semibold text-sm shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button (placeholder for future mobile implementation) */}
          <div className="md:hidden">
            <button className="p-2 text-slate-200 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
