import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Search, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

// LanguageSwitcher Component
const LanguageSwitcher = ({ i18n, isScrolled }: { i18n: any; isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="ml-4 relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all text-sm font-medium ${
          isScrolled
            ? "bg-white text-primary-600 hover:bg-gray-100"
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
      >
        <Globe size={18} />
        {i18n.language === "en" ? t("header_lang_english") : t("header_lang_nepali")}
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg z-50 overflow-hidden text-sm">
          <button
            onClick={() => {
              i18n.changeLanguage("en");
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 hover:bg-primary-50 ${
              i18n.language === "en"
                ? "bg-primary-50 text-primary-600 font-medium"
                : "text-gray-700"
            }`}
          >
            {t("header_lang_english")}
          </button>
          <button
            onClick={() => {
              i18n.changeLanguage("ne");
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 hover:bg-primary-50 ${
              i18n.language === "ne"
                ? "bg-primary-50 text-primary-600 font-medium"
                : "text-gray-700"
            }`}
          >
            {t("header_lang_nepali")}
          </button>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServicesDropdown = () =>
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
    }
  };

  const handleSuggestionClick = (suggestionTitleKey: string, pathOverride?: string) => {
    setIsSearchOpen(false);
    const suggestionTitle = t(suggestionTitleKey); 

    let path: string;
    if (pathOverride) {
      path = pathOverride;
    } else {
      switch (suggestionTitleKey) {
        case "header_search_service_personal_care_title":
          path = "/services/personal-care-assistance"; 
          break;
        case "header_search_service_meal_prep_title":
          path = "/services/meal-preparation-services"; 
          break;
        case "header_search_service_housekeeping_title":
          path = "/services/light-housekeeping"; 
          break;
        case "header_search_service_health_support_title":
          path = "/services/health-support"; // Corrected path
          break;
        case "header_search_service_companionship_title":
          path = "/services/companionship-services"; 
          break;
        case "header_search_link_about_care_title":
          path = "/about";
          break;
        case "header_search_link_contact_info_title":
          path = "/contact";
          break;
        // For links that don't have specific pages, a general search is fine
        case "header_search_link_service_areas_title": 
        case "header_search_link_care_plans_title": 
        default:
          path = `/search?q=${encodeURIComponent(suggestionTitle)}`;
          break;
      }
    }
    navigate(path);
    setSearchQuery(""); 
  };

  const searchSuggestions = [
    { titleKey: "header_search_service_personal_care_title", badgeKey: "header_search_badge_service_text", path: "/services/personal-care-assistance" },
    { titleKey: "header_search_service_meal_prep_title", badgeKey: "header_search_badge_service_text", path: "/services/meal-preparation-services" },
    { titleKey: "header_search_service_housekeeping_title", badgeKey: "header_search_badge_service_text", path: "/services/light-housekeeping" },
    { titleKey: "header_search_service_health_support_title", badgeKey: "header_search_badge_service_text", path: "/services/health-support" },
    { titleKey: "header_search_service_companionship_title", badgeKey: "header_search_badge_service_text", path: "/services/companionship-services" }
  ];

  const quickLinks = [
    { titleKey: "header_search_link_about_care_title", typeKey: "header_search_badge_page_text", path: "/about" },
    { titleKey: "header_search_link_contact_info_title", typeKey: "header_search_badge_contact_text", path: "/contact" },
    { titleKey: "header_search_link_service_areas_title", typeKey: "header_search_badge_info_text" }, // No specific path, will use default search
    { titleKey: "header_search_link_care_plans_title", typeKey: "header_search_badge_guide_text" } // No specific path, will use default search
  ];

  const filteredSuggestions = searchQuery
    ? [...searchSuggestions, ...quickLinks].filter(suggestion =>
        t(suggestion.titleKey).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-primary-500"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4C1D95"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  <path d="M12 5 8.5 9.5"></path>
                  <path d="m12 5 3.5 4.5"></path>
                </svg>
              </div>
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-primary-500" : "text-white"
                }`}
              >
                {t("header_everest_homecare")}
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/" className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? isScrolled ? "text-primary-500" : "text-white font-bold"
                    : isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
                }`}>
                {t("header_nav_home")}
              </NavLink>

              <div className="relative group">
                <button onClick={toggleServicesDropdown} className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                  isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
                }`}>
                  {t("header_nav_services")}
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Link to="/services/primary-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500">{t("header_services_dropdown_personal_care")}</Link>
                  <Link to="/services/specialized-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500">{t("header_services_dropdown_meal_preparation")}</Link>
                  <Link to="/services/home-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500">{t("header_services_dropdown_housekeeping")}</Link>
                  <Link to="/services/preventive-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500">{t("header_services_dropdown_health_support")}</Link>
                  <Link to="/services/preventive-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500">{t("header_services_dropdown_companionship")}</Link>
                </div>
              </div>

              <NavLink to="/blog" className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? isScrolled ? "text-primary-500" : "text-white font-bold"
                    : isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
                }`}>{t("header_nav_blog")}</NavLink>

              <NavLink to="/about" className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? isScrolled ? "text-primary-500" : "text-white font-bold"
                    : isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
                }`}>{t("header_nav_about_us")}</NavLink>

              <NavLink to="/contact" className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? isScrolled ? "text-primary-500" : "text-white font-bold"
                    : isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
                }`}>{t("contact_us")}</NavLink>

              {/* Language Switcher */}
              <LanguageSwitcher i18n={i18n} isScrolled={isScrolled} />
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button onClick={toggleSearch} className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
              }`}>
                <Search size={20} />
              </button>
              <a href="tel:9709007721" className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
                isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
              }`}>
                <Phone size={20} />
                9709007721
              </a>
            </div>

            <button onClick={toggleMenu} className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-neutral-700 hover:text-primary-500" : "text-white hover:text-neutral-200"
            }`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-8">
          <nav className="flex flex-col items-center space-y-6 mb-8">
            <NavLink to="/" className="text-xl font-medium text-neutral-700 hover:text-primary-500" onClick={toggleMenu}>{t("header_nav_home")}</NavLink>
            
            {/* Mobile Services Dropdown - Simplified for now, can be enhanced later */}
            <div className="relative group">
              <button onClick={(e) => { e.stopPropagation(); setIsServicesDropdownOpen(!isServicesDropdownOpen); }} className="text-xl font-medium text-neutral-700 hover:text-primary-500 flex items-center">
                {t("header_nav_services")}
                <ChevronDown size={20} className={`ml-1 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2 w-full bg-gray-50 rounded-lg shadow-lg py-2 text-center">
                  <Link to="/services/primary-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500" onClick={toggleMenu}>{t("header_services_dropdown_personal_care")}</Link>
                  <Link to="/services/specialized-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500" onClick={toggleMenu}>{t("header_services_dropdown_meal_preparation")}</Link>
                  <Link to="/services/home-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500" onClick={toggleMenu}>{t("header_services_dropdown_housekeeping")}</Link>
                  <Link to="/services/preventive-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500" onClick={toggleMenu}>{t("header_services_dropdown_health_support")}</Link>
                  <Link to="/services/preventive-care" className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-500" onClick={toggleMenu}>{t("header_services_dropdown_companionship")}</Link>
                </div>
              )}
            </div>

            <NavLink to="/blog" className="text-xl font-medium text-neutral-700 hover:text-primary-500" onClick={toggleMenu}>{t("header_nav_blog")}</NavLink>
            <NavLink to="/about" className="text-xl font-medium text-neutral-700 hover:text-primary-500" onClick={toggleMenu}>{t("header_nav_about_us")}</NavLink>
            <NavLink to="/contact" className="text-xl font-medium text-neutral-700 hover:text-primary-500" onClick={toggleMenu}>{t("contact_us")}</NavLink>
          </nav>

          <div className="flex flex-col items-center space-y-6 w-full max-w-xs">
             {/* Search Button in Mobile Menu */}
            <button 
              onClick={() => {
                toggleMenu(); // Close menu
                toggleSearch(); // Open search
              }} 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              <Search size={20} />
              {t("header_mobile_search_button")} 
            </button>

            {/* Call Button in Mobile Menu */}
            <a 
              href="tel:9709007721" 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors"
            >
              <Phone size={20} />
              9709007721
            </a>
            
            {/* Language Switcher in Mobile Menu */}
            <div className="mt-auto pt-8"> {/* Pushes switcher to bottom if menu is flex-grow */}
                <LanguageSwitcher i18n={i18n} isScrolled={true} /> {/* isScrolled true for consistent styling */}
            </div>
          </div>
        </div>
      )}

      {/* 🔍 Professional Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            {/* Search Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <Search className="text-primary-500 flex-shrink-0" size={20} />
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("header_search_placeholder")}
                    className="w-full py-3 pl-12 pr-4 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-primary-500 text-neutral-800 placeholder-neutral-400 text-lg"
                    autoFocus
                  />
                </form>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {searchQuery && filteredSuggestions.length > 0 && (
              <div className="mt-6 pr-2 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                <ul className="space-y-2">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleSuggestionClick(suggestion.titleKey, (suggestion as any).path)}
                        className="w-full text-left p-3 hover:bg-primary-50 rounded-md transition-colors flex justify-between items-center group"
                      >
                        <span className="text-neutral-700 group-hover:text-primary-600">{t(suggestion.titleKey)}</span>
                        <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full group-hover:bg-primary-100 group-hover:text-primary-600">
                          {t((suggestion as any).badgeKey || (suggestion as any).typeKey)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {searchQuery && filteredSuggestions.length === 0 && (
                <div className="mt-6 text-center text-neutral-500">
                  {t('header_search_no_results_text', { query: searchQuery })}
                </div>
            )}

            {!searchQuery && (
              <div className="mt-6 pr-2 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                <h3 className="text-sm font-semibold text-neutral-500 mb-3 px-2">{t('header_search_popular_services_title')}</h3>
                <ul className="space-y-1 mb-6">
                  {searchSuggestions.map((suggestion, index) => (
                    <li key={`popular-${index}`}>
                      <button 
                        onClick={() => handleSuggestionClick(suggestion.titleKey, suggestion.path)}
                        className="w-full text-left p-3 hover:bg-primary-50 rounded-md transition-colors flex justify-between items-center group"
                      >
                        <span className="text-neutral-700 group-hover:text-primary-600">{t(suggestion.titleKey)}</span>
                        <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full group-hover:bg-primary-100 group-hover:text-primary-600">
                          {t(suggestion.badgeKey)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-semibold text-neutral-500 mb-3 px-2">{t('header_search_quick_links_title')}</h3>
                <ul className="space-y-1">
                  {quickLinks.map((link, index) => (
                    <li key={`quick-${index}`}>
                      <button
                        onClick={() => handleSuggestionClick(link.titleKey, link.path)}
                        className="w-full text-left p-3 hover:bg-primary-50 rounded-md transition-colors flex justify-between items-center group"
                      >
                        <span className="text-neutral-700 group-hover:text-primary-600">{t(link.titleKey)}</span>
                        <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full group-hover:bg-primary-100 group-hover:text-primary-600">
                          {t(link.typeKey)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Search Tips */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded">
                  ⌘K
                </kbd>
                <span>{t("header_search_tip_search")}</span>
                <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded ml-4">
                  ESC
                </kbd>
                <span>{t("header_search_tip_close")}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};

export default Header;