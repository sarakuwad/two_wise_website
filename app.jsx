const { useState, useEffect, useMemo } = React;

// --- Official Logo Component ---
const WiseOwlLogo = ({ className = "h-10 w-auto", full = false }) => (
  <img 
    src={full ? "./logo.png" : "./logo-owl.png"} 
    alt="Two Wise Academy" 
    className={`${className} object-contain`} 
  />
);

// Lucide icon helper component using lucide-react or SVG equivalents
const Icon = ({ name, className = "w-5 h-5", color }) => {
  const icons = {
    check: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    arrowRight: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
      </svg>
    ),
    whatsapp: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.19-.173.289l-.26.309c-.087.087-.179.182-.077.357.101.174.453.748.973 1.211.671.597 1.237.782 1.411.869.174.087.275.073.377-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.203.043.072.043.419-.101.824z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.526 3.662 1.438 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.574 0-3.056-.442-4.324-1.212l-.31-.19-3.064.859.873-2.98-.207-.327A8.17 8.17 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
      </svg>
    ),
    instagram: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    mapPin: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    phone: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    bookOpen: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    users: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    sparkles: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
      </svg>
    ),
    award: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    target: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    messageSquare: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    menu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    ),
    x: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ),
    lightbulb: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
      </svg>
    ),
    compass: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
    clipboardCheck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="m9 14 2 2 4-4"></path>
      </svg>
    ),
    smile: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
    shieldCheck: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    graduationCap: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    calculator: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
        <line x1="8" x2="16" y1="6" y2="6"></line>
        <line x1="16" x2="16" y1="14" y2="18"></line>
        <path d="M16 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M8 18h.01"></path>
      </svg>
    ),
    microscope: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h8"></path>
        <path d="M3 22h18"></path>
        <path d="m14 22 3-3 3 3"></path>
        <circle cx="12" cy="6" r="3"></circle>
        <path d="M12 9v9"></path>
        <path d="M9 15h6"></path>
      </svg>
    ),
    languages: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 8 6 6"></path>
        <path d="m4 14 6-6 2-3"></path>
        <path d="M2 5h12"></path>
        <path d="M7 2h1"></path>
        <path d="m22 22-5-10-5 10"></path>
        <path d="M14 18h6"></path>
      </svg>
    ),
    globe: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    cpu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M2 9h2"></path>
        <path d="M20 15h2"></path>
        <path d="M20 9h2"></path>
        <path d="M9 2v2"></path>
        <path d="M9 20v2"></path>
      </svg>
    ),
    heartHandshake: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9"></path>
        <path d="m14 13 1.09-1.09c.8-.8 2.08-.82 2.91.01l0 0a2.1 2.1 0 0 1 0 2.97L15 18"></path>
      </svg>
    )
  };
  return icons[name] || null;
};

// --- Main App Component ---
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState('ALL');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  
  // Enquiry form state
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    grade: 'Grade 8',
    board: 'ICSE',
    subjects: ['Mathematics', 'Science'],
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll listener for sticky nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "9049650666";
  const whatsappUrl = "https://wa.me/919049650666?text=Hi%20Two%20Wise%20Academy!%20I%20would%20like%20to%20enquire%20about%20academic%20coaching%20for%20my%20child.";

  // Form subject toggle
  const toggleSubject = (subject) => {
    setFormData(prev => {
      const exists = prev.subjects.includes(subject);
      if (exists) {
        return { ...prev, subjects: prev.subjects.filter(s => s !== subject) };
      } else {
        return { ...prev, subjects: [...prev.subjects, subject] };
      }
    });
  };

  // Form submit handler with validation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.parentName.trim()) errors.parentName = "Please enter parent's name";
    if (!formData.studentName.trim()) errors.studentName = "Please enter student's name";
    
    // Validate phone number (at least 10 digits)
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (formData.subjects.length === 0) {
      errors.subjects = "Please select at least one subject";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
  };

  // Build custom WhatsApp link with the submitted details
  const generatedWhatsAppLink = useMemo(() => {
    const text = `Hi Two Wise Academy! I would like to enquire about classroom coaching in Pune.\n\n` +
      `Parent Name: ${formData.parentName}\n` +
      `Student Name: ${formData.studentName}\n` +
      `Grade: ${formData.grade}\n` +
      `Board: ${formData.board}\n` +
      `Subjects: ${formData.subjects.join(', ')}\n` +
      (formData.message ? `Notes: ${formData.message}` : '');
    return `https://wa.me/919049650666?text=${encodeURIComponent(text)}`;
  }, [formData]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-charcoal selection:bg-brand-lavender selection:text-brand-charcoal font-sans">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-brand-lavender/60 border-b border-brand-lavender/80 px-4 py-2 text-xs font-medium text-brand-charcoal text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-mintDark animate-pulse"></span>
        <span>Admissions Open for 2026–27 • Offline Classroom Coaching in Pune • Grades 4 to 12 (ICSE, CBSE, IB, IGCSE)</span>
        <button 
          onClick={() => scrollToSection('contact')}
          className="ml-2 underline font-semibold hover:text-brand-lavenderDark hidden sm:inline"
        >
          Book a Consultation →
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & NAVIGATION */}
      {/* ========================================================================= */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'nav-glass shadow-soft border-b border-gray-100 py-3' : 'bg-white/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <img 
                src="./logo.png" 
                alt="Two Wise Academy" 
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <a href="#hero" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors">
                Home
              </a>
              <a href="#about" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors">
                About Us
              </a>
              <a href="#boards" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors">
                Programs
              </a>
              <a href="#approach" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors">
                Our Approach
              </a>
              <a href="#why-us" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors">
                Why Two Wise
              </a>
              <a href="#faculty" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors">
                Faculty
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors">
                Contact
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-brand-mint/70 hover:bg-brand-mint border border-emerald-200/60 rounded-xl transition-all"
                title="Chat on WhatsApp"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-emerald-600" />
                <span>9049650666</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm bg-brand-charcoal text-white hover:bg-black transition-all shadow-sm hover:shadow active:scale-95"
              >
                <span>Enquire Now</span>
                <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-charcoal text-white"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                <Icon name={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-gray-100 bg-white/98 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              <a 
                onClick={() => scrollToSection('hero')} 
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection('about')} 
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
              >
                About Us
              </a>
              <a 
                onClick={() => scrollToSection('boards')} 
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
              >
                Programs (Boards)
              </a>
              <a 
                onClick={() => scrollToSection('approach')} 
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
              >
                Our Approach
              </a>
              <a 
                onClick={() => scrollToSection('why-us')} 
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
              >
                Why Two Wise
              </a>
              <a 
                onClick={() => scrollToSection('faculty')} 
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
              >
                Faculty & Mentors
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
              >
                Contact
              </a>
            </div>

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-mint text-emerald-900 font-semibold text-sm"
              >
                <Icon name="whatsapp" className="w-5 h-5 text-emerald-700" />
                <span>WhatsApp: +91 90496 50666</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 rounded-xl bg-brand-charcoal text-white font-semibold text-sm shadow-sm"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
        {/* Subtle background ambient pastel circles */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 left-5 w-80 h-80 bg-brand-blue/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-peach/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender/70 border border-brand-lavenderDark/20 text-xs font-semibold text-brand-charcoal">
                <span className="w-2 h-2 rounded-full bg-brand-lavenderDark"></span>
                <span>Offline Classroom Coaching • Pune, Maharashtra</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.12]">
                Learn Smart. <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Think Wise.</span>
                  {/* Subtle pastel underline accent */}
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/80 -z-0 rounded-md"></span>
                </span>
              </h1>

              {/* Supporting Headline */}
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-gray-700">
                Building brighter minds, one concept at a time.
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                Personalised classroom learning for students from <strong className="text-brand-charcoal font-semibold">Grades 4–12</strong> across <span className="font-semibold text-brand-charcoal">ICSE, CBSE, IB</span> and <span className="font-semibold text-brand-charcoal">IGCSE</span> boards.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => scrollToSection('boards')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-heading font-semibold text-base bg-brand-charcoal text-white hover:bg-black transition-all shadow-soft hover:shadow-soft-lg active:scale-95"
                >
                  <span>Explore Our Programs</span>
                  <Icon name="arrowRight" className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-heading font-semibold text-base bg-brand-lavender hover:bg-brand-lavender/80 text-brand-charcoal border border-brand-lavenderDark/10 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Enquire Now</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-0.5">
                  <span className="font-heading font-bold text-lg text-brand-charcoal block">4 Boards</span>
                  <span className="text-xs text-gray-500">ICSE, CBSE, IB, IGCSE</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-heading font-bold text-lg text-brand-charcoal block">Grades 4–12</span>
                  <span className="text-xs text-gray-500">All Subjects Covered</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-heading font-bold text-lg text-brand-charcoal block">Small Batches</span>
                  <span className="text-xs text-gray-500">Individual Attention</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-heading font-bold text-lg text-brand-charcoal block">Pune Center</span>
                  <span className="text-xs text-gray-500">Offline Classrooms</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Composition with floating academic elements */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Classroom Illustration Card */}
                <div className="relative rounded-3xl p-6 sm:p-8 bg-white border border-gray-100 shadow-soft-lg overflow-hidden">
                  
                  {/* Subtle top background inside card */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-lavender/30 to-transparent -z-0"></div>

                  {/* Header inside card */}
                  <div className="relative z-10 flex items-center justify-between pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-brand-lavender flex items-center justify-center">
                        <Icon name="graduationCap" className="w-5 h-5 text-brand-charcoal" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-brand-charcoal">The Two Wise Classroom</h4>
                        <p className="text-xs text-gray-500">Engaging • Offline • Pune</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-mint text-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                      Active Batches
                    </span>
                  </div>

                  {/* Contemporary Classroom Vector Graphic */}
                  <div className="relative z-10 my-6 py-4">
                    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm">
                      {/* Classroom floor & wall */}
                      <rect x="10" y="20" width="380" height="200" rx="16" fill="#F8FAFC" />
                      <path d="M10 170L390 170" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                      
                      {/* Modern Whiteboard */}
                      <rect x="70" y="35" width="260" height="90" rx="10" fill="#FFFFFF" stroke="#EAE5FA" strokeWidth="3" />
                      <line x1="90" y1="55" x2="160" y2="55" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" />
                      <line x1="90" y1="70" x2="230" y2="70" stroke="#DFEDFA" strokeWidth="4" strokeLinecap="round" />
                      <line x1="90" y1="85" x2="190" y2="85" stroke="#DFEDFA" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="280" cy="80" r="22" fill="#FFF3D6" />
                      <path d="M272 80L278 86L290 74" stroke="#F7B731" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="90" y="105" fill="#252525" fontSize="11" fontWeight="600" fontFamily="sans-serif">Concept Clarity &gt; Rote Learning</text>

                      {/* Collaborative Classroom Desks */}
                      <rect x="60" y="155" width="110" height="42" rx="8" fill="#DFEDFA" />
                      <rect x="230" y="155" width="110" height="42" rx="8" fill="#FCE8DD" />

                      {/* Student 1 (Desk Left) */}
                      <circle cx="115" cy="140" r="14" fill="#6C5CE7" />
                      <circle cx="115" cy="136" r="6" fill="#FFFFFF" />
                      {/* Notebook */}
                      <rect x="95" y="162" width="24" height="16" rx="2" fill="#FFFFFF" stroke="#252525" strokeWidth="1" />

                      {/* Student 2 (Desk Right) */}
                      <circle cx="285" cy="140" r="14" fill="#20BF6B" />
                      <circle cx="285" cy="136" r="6" fill="#FFFFFF" />
                      {/* Tablet / Book */}
                      <rect x="265" y="162" width="26" height="16" rx="3" fill="#FFFFFF" stroke="#252525" strokeWidth="1" />

                      {/* Teacher / Mentor */}
                      <circle cx="200" cy="115" r="16" fill="#252525" />
                      <circle cx="200" cy="110" r="7" fill="#FFFFFF" />
                      <path d="M192 135C192 125 208 125 208 135" stroke="#252525" strokeWidth="3" />
                      {/* Pointer / Light */}
                      <path d="M210 120L230 100" stroke="#6C5CE7" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Micro Indicators / Pills inside */}
                  <div className="relative z-10 grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-brand-mint/50 border border-emerald-100">
                      <Icon name="users" className="w-4 h-4 text-emerald-700" />
                      <span className="text-xs font-semibold text-emerald-900">8–10 Students Max</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-brand-yellow/60 border border-amber-100">
                      <Icon name="sparkles" className="w-4 h-4 text-amber-700" />
                      <span className="text-xs font-semibold text-amber-900">Zero Rote Learning</span>
                    </div>
                  </div>

                </div>

                {/* Floating Academic Element 1: Top Left */}
                <div className="absolute -top-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-soft animate-float flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-lavender flex items-center justify-center">
                    <Icon name="target" className="w-4 h-4 text-brand-charcoal" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-charcoal block leading-none">Concept First</span>
                    <span className="text-[10px] text-gray-500">Every Topic Understood</span>
                  </div>
                </div>

                {/* Floating Academic Element 2: Bottom Right */}
                <div className="absolute -bottom-5 -right-3 sm:-right-6 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-soft animate-float-reverse flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center">
                    <Icon name="compass" className="w-4 h-4 text-brand-charcoal" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-charcoal block leading-none">All 4 Curricula</span>
                    <span className="text-[10px] text-gray-500">ICSE • CBSE • IB • IGCSE</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: INTRODUCTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 bg-white relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-peach/80 border border-amber-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              Our Educational Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Education That Goes Beyond Textbooks.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Two Wise Academy, we believe every student learns differently. Our approach combines structured academic guidance, individual attention and conceptual learning to help students develop the confidence to excel.
            </p>
          </div>

          {/* Three Visual Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Highlight 1: Understand Better */}
            <div className="p-8 rounded-3xl bg-brand-lavender/60 border border-brand-lavenderDark/10 hover-card-lift space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                <Icon name="lightbulb" className="w-7 h-7 text-brand-lavenderDark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                Understand Better
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We break down complex formulas and theories into relatable everyday concepts. No blindly memorising steps without understanding why they work.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-gray-700">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-brand-lavenderDark" />
                  <span>First-principles conceptual foundation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-brand-lavenderDark" />
                  <span>Interactive question-and-answer dialogue</span>
                </li>
              </ul>
            </div>

            {/* Highlight 2: Learn Smarter */}
            <div className="p-8 rounded-3xl bg-brand-blue/60 border border-brand-blueDark/10 hover-card-lift space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                <Icon name="target" className="w-7 h-7 text-brand-blueDark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                Learn Smarter
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Master active learning habits, effective revision pacing, and clear problem-solving frameworks that save hours of unproductive cramming.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-gray-700">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-brand-blueDark" />
                  <span>Structured step-by-step study methods</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-brand-blueDark" />
                  <span>Targeted practice on high-yield questions</span>
                </li>
              </ul>
            </div>

            {/* Highlight 3: Grow Confidently */}
            <div className="p-8 rounded-3xl bg-brand-mint/60 border border-brand-mintDark/10 hover-card-lift space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                <Icon name="smile" className="w-7 h-7 text-brand-mintDark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                Grow Confidently
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When doubts are welcomed and mistakes become learning opportunities, students naturally develop self-reliance, curiosity, and examination poise.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-gray-700">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-brand-mintDark" />
                  <span>Judgment-free doubt clarification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-brand-mintDark" />
                  <span>Confidence to tackle unfamiliar problems</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: BOARDS WE CATER TO */}
      {/* ========================================================================= */}
      <section id="boards" className="py-20 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-blue/80 border border-blue-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              Targeted Board Excellence
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              One Academy. Multiple Curricula.
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Comprehensive academic support across leading educational boards.
            </p>
          </div>

          {/* Four Board Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: ICSE */}
            <div className="p-7 rounded-3xl bg-brand-lavender/50 border border-purple-200/40 hover-card-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-purple-700">
                    ICSE
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm">
                    Grades 4–12
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal">
                    ICSE Board
                  </h3>
                  <p className="text-xs text-purple-900/70 font-medium">CISCE — ICSE (Grades 4–10) & ISC (Grades 11–12)</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In-depth subject mastery with strong emphasis on English language precision, descriptive scientific reasoning, and analytical Mathematics.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                    <span>Detailed board exam answering techniques</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                    <span>Project & practical application guidance</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, board: 'ICSE' }));
                    scrollToSection('contact');
                  }}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-purple-50 text-brand-charcoal font-semibold text-xs border border-purple-200 transition-colors"
                >
                  Enquire for ICSE →
                </button>
              </div>
            </div>

            {/* Card 2: CBSE */}
            <div className="p-7 rounded-3xl bg-brand-blue/50 border border-blue-200/40 hover-card-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-blue-700">
                    CBSE
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm">
                    Grades 4–12
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal">
                    CBSE Board
                  </h3>
                  <p className="text-xs text-blue-900/70 font-medium">Central Board of Secondary Education</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Solid NCERT foundation, competency-based question preparation, and critical conceptual clarity building strong fundamentals for higher grades.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>NCERT line-by-line concept mastery</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Exemplar & case-based questions practice</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, board: 'CBSE' }));
                    scrollToSection('contact');
                  }}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-blue-50 text-brand-charcoal font-semibold text-xs border border-blue-200 transition-colors"
                >
                  Enquire for CBSE →
                </button>
              </div>
            </div>

            {/* Card 3: IB */}
            <div className="p-7 rounded-3xl bg-brand-peach/50 border border-orange-200/40 hover-card-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-orange-600">
                    IB
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm">
                    Grades 4–12
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal">
                    IB (MYP & DP)
                  </h3>
                  <p className="text-xs text-orange-900/70 font-medium">International Baccalaureate</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Inquiry-based learning tailored to IB criteria (A, B, C, D), global context integration, analytical writing, and independent research skills.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span>Criterion-referenced assessment prep</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span>Interdisciplinary & MYP eAssessment readiness</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, board: 'IB' }));
                    scrollToSection('contact');
                  }}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-orange-50 text-brand-charcoal font-semibold text-xs border border-orange-200 transition-colors"
                >
                  Enquire for IB →
                </button>
              </div>
            </div>

            {/* Card 4: IGCSE */}
            <div className="p-7 rounded-3xl bg-brand-mint/50 border border-emerald-200/40 hover-card-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-emerald-700">
                    IGCSE
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm">
                    Grades 4–12
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal">
                    Cambridge IGCSE
                  </h3>
                  <p className="text-xs text-emerald-900/70 font-medium">Cambridge — IGCSE & A-Levels (Grades 4–12)</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Practical comprehension, structured past paper mastery, mark-scheme precision, and deep command-term understanding for Cambridge assessments.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Topic-wise past paper drill & examiner tips</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Core & Extended curriculum support</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, board: 'IGCSE' }));
                    scrollToSection('contact');
                  }}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-brand-charcoal font-semibold text-xs border border-emerald-200 transition-colors"
                >
                  Enquire for IGCSE →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: SUBJECTS */}
      {/* ========================================================================= */}
      <section id="subjects" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-yellow/80 border border-amber-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              Holistic Academic Coverage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              All Subjects. One Learning Destination.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From strengthening fundamentals to mastering advanced concepts, we provide academic support across all subjects and curriculum requirements.
            </p>
            
            {/* Explicit Notice Badge */}
            <div className="inline-block p-3 rounded-2xl bg-brand-lavender/40 border border-purple-200/40 text-xs font-medium text-brand-charcoal mt-2">
              <strong className="font-semibold text-purple-900">Note:</strong> We cater to <em>all subjects</em> across your child's syllabus. If a particular subject is not listed below, our faculty accommodates it within your board curriculum!
            </div>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Subject 1: Mathematics */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center">
                  <Icon name="calculator" className="w-6 h-6 text-brand-lavenderDark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal">Mathematics</h3>
                  <span className="text-xs text-gray-500 font-medium">Grades 4 to 12</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Arithmetic, Pre-Algebra, Geometry, Trigonometry, Statistics, Mensuration, and Word Problems deconstructed through step-by-step logic.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Conceptual Clarity</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Step-by-Step Proofs</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Speed & Accuracy</span>
              </div>
            </div>

            {/* Subject 2: Science */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center">
                  <Icon name="microscope" className="w-6 h-6 text-brand-blueDark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal">Science</h3>
                  <span className="text-xs text-gray-500 font-medium">Physics • Chemistry • Biology</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                General Science for primary grades; segregated Physics, Chemistry, Biology for middle and secondary. Real-life demonstrations & clear diagrams.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Visual Diagrams</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Numerical Problem Solving</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Scientific Reasoning</span>
              </div>
            </div>

            {/* Subject 3: English */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-peach flex items-center justify-center">
                  <Icon name="bookOpen" className="w-6 h-6 text-brand-peachDark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal">English</h3>
                  <span className="text-xs text-gray-500 font-medium">Language & Literature</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Grammar mastery, comprehension synthesis, creative essay writing, letter/notice formats, Shakespearean drama & poetry analysis.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Vocabulary Expansion</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Creative Composition</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Grammar Rules</span>
              </div>
            </div>

            {/* Subject 4: Social Studies */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center">
                  <Icon name="globe" className="w-6 h-6 text-brand-mintDark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal">Social Studies</h3>
                  <span className="text-xs text-gray-500 font-medium">History • Civics • Geography</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Engaging narrative timelines, political systems, topographical map reading, weather systems, and environmental case studies.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Timeline Mapping</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Topo Map Skills</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Structured Answers</span>
              </div>
            </div>

            {/* Subject 5: Languages */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center">
                  <Icon name="languages" className="w-6 h-6 text-brand-yellowDark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal">Languages</h3>
                  <span className="text-xs text-gray-500 font-medium">Regional & Foreign Options</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Hindi, Marathi, Sanskrit, French, German, and Spanish. Emphasis on grammar, correct pronunciation, sentence framing, and literature.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Hindi & Marathi</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">French & German</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Reading & Writing</span>
              </div>
            </div>

            {/* Subject 6: Curriculum-Specific Subjects */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center">
                  <Icon name="cpu" className="w-6 h-6 text-brand-lavenderDark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-charcoal">Curriculum-Specific</h3>
                  <span className="text-xs text-gray-500 font-medium">Computers, Economics & More</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Computer Applications (Java, Python, ICT), Commercial Studies, Economics, Environmental Management, and board electives.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Computer Apps</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Economics</span>
                <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600">Commercial Studies</span>
              </div>
            </div>

          </div>

          {/* Quick Enquire CTA for subjects */}
          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal font-semibold text-sm transition-colors"
            >
              <span>Have a specific subject or textbook requirement? Ask us directly</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: WHY CHOOSE TWO WISE? */}
      {/* ========================================================================= */}
      <section id="why-us" className="py-20 bg-gray-50/50 relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-lavender/80 border border-purple-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              The Two Wise Advantage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Because Every Student Deserves to Be Understood.
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We replace overwhelming tuition batches with personal mentorship, clarity and consistent academic growth.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Individual Attention */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center">
                <Icon name="heartHandshake" className="w-6 h-6 text-brand-lavenderDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Individual Attention</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Teaching that recognises every student's strengths and learning needs. No student is left behind in a sea of faces.
              </p>
            </div>

            {/* 2. Small Batches */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center">
                <Icon name="users" className="w-6 h-6 text-brand-blueDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Small Batches</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                A more interactive classroom environment with meaningful student participation, discussions and personal mentoring.
              </p>
            </div>

            {/* 3. Regular Tests & Assessments */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-peach flex items-center justify-center">
                <Icon name="clipboardCheck" className="w-6 h-6 text-brand-peachDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Regular Tests & Assessments</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Monitor academic progress and identify areas for improvement through structured, diagnostic chapter-wise tests.
              </p>
            </div>

            {/* 4. Doubt-Solving Sessions */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center">
                <Icon name="messageSquare" className="w-6 h-6 text-brand-mintDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Doubt-Solving Sessions</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Encourage students to ask questions freely and understand concepts thoroughly without hesitation or fear.
              </p>
            </div>

            {/* 5. Personalised Study Plans */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center">
                <Icon name="target" className="w-6 h-6 text-brand-yellowDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Personalised Study Plans</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structured academic guidance based on individual learning requirements, school timelines and revision milestones.
              </p>
            </div>

            {/* 6. Parent-Teacher Feedback */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center">
                <Icon name="sparkles" className="w-6 h-6 text-brand-lavenderDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Parent-Teacher Feedback</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Keep parents informed about their child's learning journey with timely, constructive and transparent communication.
              </p>
            </div>

            {/* 7. Exam Preparation */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center">
                <Icon name="award" className="w-6 h-6 text-brand-blueDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Exam Preparation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Focused preparation to help students approach school exams and board examinations with confidence and clarity.
              </p>
            </div>

            {/* 8. Experienced Faculty */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center">
                <Icon name="graduationCap" className="w-6 h-6 text-brand-mintDark" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-charcoal">Experienced Faculty</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Learn under the guidance of experienced educators who specialise in curriculum frameworks and modern teaching methods.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: OUR LEARNING APPROACH */}
      {/* ========================================================================= */}
      <section id="approach" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-mint/80 border border-emerald-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              Pedagogical Framework
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Smart Learning. Step by Step.
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              A structured four-phase methodology engineered for long-term retention and conceptual mastery.
            </p>
          </div>

          {/* Desktop Horizontal Journey / Mobile Timeline */}
          <div className="relative">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-brand-lavender via-brand-blue to-brand-mint -translate-y-8 -z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              
              {/* STEP 01 */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-lavender text-purple-900">
                      STEP 01
                    </span>
                    <span className="w-8 h-8 rounded-full bg-brand-lavender/50 flex items-center justify-center text-xs font-bold text-brand-charcoal">
                      1
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                    Understand
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Understand each student's academic requirements and learning style. We identify specific learning gaps before diving into syllabus topics.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-medium text-purple-800 flex items-center gap-1.5">
                  <Icon name="check" className="w-3.5 h-3.5" />
                  <span>Diagnostic assessment & gap analysis</span>
                </div>
              </div>

              {/* STEP 02 */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-blue text-blue-900">
                      STEP 02
                    </span>
                    <span className="w-8 h-8 rounded-full bg-brand-blue/50 flex items-center justify-center text-xs font-bold text-brand-charcoal">
                      2
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                    Strengthen
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Build a strong foundation through conceptual clarity. Complex principles are mapped to real-world examples with deep classroom discussions.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-medium text-blue-800 flex items-center gap-1.5">
                  <Icon name="check" className="w-3.5 h-3.5" />
                  <span>First-principles concept mastery</span>
                </div>
              </div>

              {/* STEP 03 */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-peach text-orange-900">
                      STEP 03
                    </span>
                    <span className="w-8 h-8 rounded-full bg-brand-peach/50 flex items-center justify-center text-xs font-bold text-brand-charcoal">
                      3
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                    Practise
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Reinforce understanding through regular practice, assignments and assessments. Students solve problems with increasing difficulty gradients.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-medium text-orange-800 flex items-center gap-1.5">
                  <Icon name="check" className="w-3.5 h-3.5" />
                  <span>Curated question banks & drills</span>
                </div>
              </div>

              {/* STEP 04 */}
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-mint text-emerald-900">
                      STEP 04
                    </span>
                    <span className="w-8 h-8 rounded-full bg-brand-mint/50 flex items-center justify-center text-xs font-bold text-brand-charcoal">
                      4
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                    Progress
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Review progress, address challenges and continuously improve. Feedback loops with students and parents ensure consistent academic growth.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-50 text-xs font-medium text-emerald-800 flex items-center gap-1.5">
                  <Icon name="check" className="w-3.5 h-3.5" />
                  <span>Continuous progress evaluation</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: MEET OUR FOUNDERS & FACULTY */}
      {/* ========================================================================= */}
      <section id="faculty" className="py-20 bg-white relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-lavender/80 border border-purple-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              Leadership & Educators
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Meet the Mentors Behind Two Wise.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Founded by passionate, experienced educators dedicated to student-centric guidance, conceptual clarity, and building genuine academic confidence.
            </p>
          </div>

          {/* Founders Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* 1. Reva Mehta */}
            <div className="p-8 sm:p-10 rounded-4xl bg-brand-lavender/40 border border-purple-200/60 shadow-soft hover-card-lift flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* Header Profile Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white text-purple-900 shadow-sm border border-purple-100">
                      Co-Founder & Director
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-charcoal pt-1">
                      Reva Mehta
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-purple-900/80">
                      Senior-Secondary Educator & Academic Director
                    </p>
                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-white shadow-soft flex items-center justify-center shrink-0 border border-purple-100">
                    <span className="font-heading font-extrabold text-xl text-purple-800">RM</span>
                  </div>
                </div>

                {/* Badges / Credentials */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-700 shadow-sm border border-purple-100 flex items-center gap-1.5">
                    <Icon name="graduationCap" className="w-4 h-4 text-purple-700" />
                    <span>MBA, SIBM Pune</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-700 shadow-sm border border-purple-100 flex items-center gap-1.5">
                    <Icon name="award" className="w-4 h-4 text-purple-700" />
                    <span>6+ Years Teaching Experience</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-700 shadow-sm border border-purple-100 flex items-center gap-1.5">
                    <Icon name="bookOpen" className="w-4 h-4 text-purple-700" />
                    <span>Ex-Symbiosis International School</span>
                  </span>
                </div>

                {/* Bio / Description */}
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                  An MBA graduate from the prestigious Symbiosis Institute of Business Management (SIBM), Pune, Reva brings over six years of senior-secondary teaching experience, including teaching at Symbiosis International School. She specializes in higher-grade analytical thinking, rigorous curriculum mastery, and examination strategy across ICSE, CBSE, IB, and IGCSE boards.
                </p>

                {/* Mentorship Ethos Quote */}
                <div className="p-4 rounded-2xl bg-white/80 border border-purple-200/50">
                  <p className="text-xs italic text-gray-700 leading-relaxed">
                    “True learning begins when students understand the 'why' behind every concept. We deconstruct complex theories into intuitive, relatable logic so students build permanent mastery.”
                  </p>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="pt-4 border-t border-purple-200/40 grid grid-cols-2 gap-3 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Senior-Secondary Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Analytical Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Board Exam Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>1-on-1 Concept Mentoring</span>
                </div>
              </div>
            </div>

            {/* 2. Diya Shah */}
            <div className="p-8 sm:p-10 rounded-4xl bg-brand-peach/40 border border-orange-200/60 shadow-soft hover-card-lift flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* Header Profile Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white text-orange-900 shadow-sm border border-orange-100">
                      Co-Founder & Educator
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-charcoal pt-1">
                      Diya Shah
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-orange-900/80">
                      Foundational Stage & Upper-Primary Specialist
                    </p>
                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-white shadow-soft flex items-center justify-center shrink-0 border border-orange-100">
                    <span className="font-heading font-extrabold text-xl text-orange-700">DS</span>
                  </div>
                </div>

                {/* Badges / Credentials */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-700 shadow-sm border border-orange-100 flex items-center gap-1.5">
                    <Icon name="graduationCap" className="w-4 h-4 text-orange-700" />
                    <span>BBA in Finance</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-700 shadow-sm border border-orange-100 flex items-center gap-1.5">
                    <Icon name="award" className="w-4 h-4 text-orange-700" />
                    <span>6+ Years Teaching Experience</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-700 shadow-sm border border-orange-100 flex items-center gap-1.5">
                    <Icon name="smile" className="w-4 h-4 text-orange-700" />
                    <span>Upper-Primary & Foundation Expert</span>
                  </span>
                </div>

                {/* Bio / Description */}
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                  A BBA Finance graduate with over six years of dedicated teaching experience, Diya specializes in foundational learning for upper-primary and middle-school students. Her teaching methodology focuses on demystifying core concepts, igniting curiosity, and creating a supportive classroom where asking questions is always celebrated.
                </p>

                {/* Mentorship Ethos Quote */}
                <div className="p-4 rounded-2xl bg-white/80 border border-orange-200/50">
                  <p className="text-xs italic text-gray-700 leading-relaxed">
                    “When children feel heard and encouraged, learning naturally shifts from an intimidating chore to an exciting, joyful journey of discovery.”
                  </p>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="pt-4 border-t border-orange-200/40 grid grid-cols-2 gap-3 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-orange-700 shrink-0" />
                  <span>Foundational Concept Building</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-orange-700 shrink-0" />
                  <span>Interactive Visual Teaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-orange-700 shrink-0" />
                  <span>Judgment-Free Doubt Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-orange-700 shrink-0" />
                  <span>Student Confidence Building</span>
                </div>
              </div>
            </div>

          </div>

          {/* Recognition Banner: Inauguration by Frank Freese */}
          <div className="mt-12 p-6 rounded-3xl bg-brand-mint/40 border border-emerald-200/60 shadow-soft flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center shrink-0">
              <Icon name="award" className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-heading font-bold text-sm text-emerald-950">
                Inaugurated by Distinguished Academic Leaders
              </h4>
              <p className="text-xs text-emerald-900/80 leading-relaxed">
                Two Wise Academy was inaugurated in the presence of esteemed chief guest <strong>Mr. Frank Freese</strong> (former Principal of The Bishop's School, Pune) and <strong>Hon. Mrs. Siddhi Avinash Shilimkar</strong> (Corporator), commending the founders' progressive vision for conceptual, student-centric coaching.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: PARENT AND STUDENT SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gray-50/50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-peach/80 border border-orange-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              A Partnership in Learning
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Designed for Parents. Built for Students.
            </h2>
          </div>

          {/* Split Section with two contrasting pastel backgrounds */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* For Parents */}
            <div className="p-8 sm:p-10 rounded-4xl bg-brand-blue/50 border border-blue-200/50 shadow-soft flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-blue-900 shadow-sm">
                  <Icon name="shieldCheck" className="w-4 h-4 text-blue-600" />
                  <span>FOR PARENTS</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-snug">
                  Confidence That Comes from Knowing Your Child Is Supported.
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  As parents, watching your child struggle with heavy portions, homework battles, or exam stress is difficult. Two Wise Academy steps in as a dedicated academic partner you can rely on.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm font-semibold text-brand-charcoal block">Transparent Academic Feedback</strong>
                      <span className="text-xs text-gray-600">Regular updates on progress, test performance, and conceptual growth.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm font-semibold text-brand-charcoal block">Reduced Homework Friction</strong>
                      <span className="text-xs text-gray-600">Structured study discipline so learning happens effectively during coaching hours.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm font-semibold text-brand-charcoal block">Safe, Modern Classroom Environment</strong>
                      <span className="text-xs text-gray-600">Bright, comfortable offline classrooms in Pune with respectful faculty.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-blue-200/40">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-white hover:bg-blue-50 text-blue-900 border border-blue-200 transition-colors shadow-sm"
                >
                  <span>Schedule a Parent Consultation</span>
                  <Icon name="arrowRight" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* For Students */}
            <div className="p-8 sm:p-10 rounded-4xl bg-brand-peach/50 border border-orange-200/50 shadow-soft flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-orange-900 shadow-sm">
                  <Icon name="sparkles" className="w-4 h-4 text-orange-600" />
                  <span>FOR STUDENTS</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-snug">
                  Learning Can Be Interesting. And We Make It So.
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  No boring lectures, no endless copying from boards, and absolutely no scolding for asking questions. We make complex concepts click with fun discussions and practical understanding.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm font-semibold text-brand-charcoal block">Zero Fear of Doubts</strong>
                      <span className="text-xs text-gray-600">Ask the same question five times until it completely makes sense to you.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm font-semibold text-brand-charcoal block">Friendly Mentors, Not Stiff Tutors</strong>
                      <span className="text-xs text-gray-600">Teachers who listen, cheer your improvements, and make learning enjoyable.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm font-semibold text-brand-charcoal block">Confidence for School Exams</strong>
                      <span className="text-xs text-gray-600">Know exactly how to approach tricky questions and write crisp answers.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-orange-200/40">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-white hover:bg-orange-50 text-orange-900 border border-orange-200 transition-colors shadow-sm"
                >
                  <span>Experience a Classroom Session</span>
                  <Icon name="arrowRight" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 relative overflow-hidden bg-brand-lavender/70 border-y border-brand-lavenderDark/20">
        {/* Soft background accents */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-peach/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="w-14 h-14 mx-auto rounded-3xl bg-white shadow-soft flex items-center justify-center">
            <WiseOwlLogo className="w-9 h-9" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Ready to Make Learning Smarter?
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Give your child the academic support, guidance and confidence to reach their potential. Offline classroom coaching in Pune for Grades 4–12.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-heading font-semibold text-base bg-brand-charcoal text-white hover:bg-black transition-all shadow-soft active:scale-95"
            >
              <span>Enquire Now</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-heading font-semibold text-base bg-white text-emerald-900 border border-emerald-300 hover:bg-emerald-50 transition-all shadow-soft active:scale-95"
            >
              <Icon name="whatsapp" className="w-5 h-5 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: CONTACT / ENQUIRY */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-mint/80 border border-emerald-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Let's Start Their Learning Journey.
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Fill out the enquiry form below or message us directly on WhatsApp. We look forward to welcoming you to Two Wise Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Functional Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-soft-lg">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-brand-mint flex items-center justify-center">
                    <Icon name="check" className="w-8 h-8 text-emerald-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      We have received your enquiry for <strong className="text-brand-charcoal">{formData.studentName}</strong> ({formData.grade}, {formData.board}). Our academic counselor will contact you shortly.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Connect with Pre-filled Form Details */}
                  <div className="p-4 rounded-2xl bg-brand-mint/50 border border-emerald-200 max-w-md mx-auto space-y-3">
                    <p className="text-xs font-medium text-emerald-900">
                      Want an instant response? You can also forward these details directly to our WhatsApp:
                    </p>
                    <a
                      href={generatedWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
                    >
                      <Icon name="whatsapp" className="w-5 h-5" />
                      <span>Send Enquiry via WhatsApp Now</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        parentName: '',
                        studentName: '',
                        phone: '',
                        grade: 'Grade 8',
                        board: 'ICSE',
                        subjects: ['Mathematics', 'Science'],
                        message: ''
                      });
                    }}
                    className="text-xs text-gray-500 hover:text-brand-charcoal underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent's Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Parent's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${formErrors.parentName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm`}
                      />
                      {formErrors.parentName && (
                        <p className="text-xs text-red-500">{formErrors.parentName}</p>
                      )}
                    </div>

                    {/* Student's Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Student's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aryan Sharma"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${formErrors.studentName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm`}
                      />
                      {formErrors.studentName && (
                        <p className="text-xs text-red-500">{formErrors.studentName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Phone Number (WhatsApp) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-sm text-gray-400 font-medium">+91</span>
                        <input
                          type="tel"
                          placeholder="90496 50666"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border ${formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-xs text-red-500">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Grade / Standard */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Grade / Standard <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm text-gray-800"
                      >
                        {[4, 5, 6, 7, 8, 9, 10, 11, 12].map(g => (
                          <option key={g} value={`Grade ${g}`}>Grade {g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Educational Board Selection */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                      Educational Board <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {['ICSE', 'CBSE', 'IB', 'IGCSE'].map(b => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, board: b })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                            formData.board === b
                              ? 'bg-brand-charcoal text-white shadow-sm'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subjects Interested In */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
                      Subjects Interested In <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Mathematics', 'Science', 'English', 'Social Studies', 'Languages', 'Computer Applications', 'All Subjects'].map(sub => {
                        const active = formData.subjects.includes(sub);
                        return (
                          <button
                            key={sub}
                            type="button"
                            onClick={() => toggleSubject(sub)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                              active
                                ? 'bg-brand-lavender text-purple-950 border border-purple-300'
                                : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-purple-700' : 'bg-gray-400'}`}></span>
                            <span>{sub}</span>
                          </button>
                        );
                      })}
                    </div>
                    {formErrors.subjects && (
                      <p className="text-xs text-red-500">{formErrors.subjects}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Message / Learning Goals (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about specific concepts your child needs assistance with or current school syllabus..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-brand-charcoal hover:bg-black text-white font-heading font-semibold text-sm transition-all shadow-soft active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry</span>
                    <Icon name="arrowRight" className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-gray-500 text-center">
                    Your details are safe. We will never spam or share your contact number.
                  </p>

                </form>
              )}

            </div>

            {/* Right Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* WhatsApp Card */}
              <div className="p-7 rounded-3xl bg-brand-mint/60 border border-emerald-200 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center text-emerald-600">
                    <Icon name="whatsapp" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-emerald-950">Chat Directly on WhatsApp</h3>
                    <p className="text-xs text-emerald-800">Quick answers for batches & fees</p>
                  </div>
                </div>

                <p className="text-xs text-emerald-900 leading-relaxed">
                  Have quick questions regarding timings, batch availability, or diagnostic sessions? Reach us instantly on WhatsApp.
                </p>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
                  >
                    <Icon name="whatsapp" className="w-4 h-4" />
                    <span>WhatsApp: +91 90496 50666</span>
                  </a>
                </div>
              </div>

              {/* Offline Academy Location Card */}
              <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center text-brand-charcoal">
                    <Icon name="mapPin" className="w-6 h-6 text-brand-lavenderDark" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-charcoal">Academy Location</h3>
                    <p className="text-xs text-gray-500">Offline Classroom Coaching</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-brand-charcoal leading-snug">
                    Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Centrally accessible offline classroom setup designed for modern, student-friendly interactive coaching.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Two+Wise+Academy+Prasad+Apartments+TMV+Colony+Gultekdi+Pune+411037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-charcoal hover:underline pt-1 text-purple-700"
                  >
                    <span>Get Directions on Google Maps</span>
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Classroom Mode:</span>
                  <span className="font-semibold text-brand-charcoal">Offline In-Person Batches</span>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-peach flex items-center justify-center text-brand-peachDark">
                    <Icon name="instagram" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-charcoal">Follow Our Journey</h3>
                    <p className="text-xs text-gray-500">Classroom glimpses & study tips</p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  Join our growing community on Instagram for conceptual breakdowns, student updates, and learning motivation.
                </p>

                <div className="pt-1">
                  <a
                    href="https://www.instagram.com/twowise_academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-pink-600 hover:text-pink-700 hover:underline"
                  >
                    <span>@twowise_academy on Instagram</span>
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="./logo.png" 
                  alt="Two Wise Academy" 
                  className="h-14 sm:h-16 w-auto object-contain" 
                />
              </div>

              <p className="font-heading font-semibold text-sm text-brand-charcoal tracking-wide">
                "Learn Smart. Think Wise."
              </p>

              <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
                Two Wise Academy is a contemporary offline classroom coaching academy based in Pune, Maharashtra. Empowering students across ICSE, CBSE, IB, and IGCSE curricula (Grades 4–12) with conceptual clarity, individual attention, and academic confidence.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-brand-mint/70 hover:bg-brand-mint text-emerald-800 flex items-center justify-center transition-colors"
                  title="WhatsApp"
                >
                  <Icon name="whatsapp" className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/twowise_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-brand-peach/70 hover:bg-brand-peach text-orange-900 flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <Icon name="instagram" className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li><a href="#hero" className="hover:text-brand-charcoal hover:underline">Home</a></li>
                <li><a href="#about" className="hover:text-brand-charcoal hover:underline">About Us</a></li>
                <li><a href="#boards" className="hover:text-brand-charcoal hover:underline">Programs</a></li>
                <li><a href="#approach" className="hover:text-brand-charcoal hover:underline">Our Approach</a></li>
                <li><a href="#why-us" className="hover:text-brand-charcoal hover:underline">Why Two Wise</a></li>
                <li><a href="#faculty" className="hover:text-brand-charcoal hover:underline">Faculty & Mentors</a></li>
                <li><a href="#contact" className="hover:text-brand-charcoal hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Curricula & Grades */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Curricula & Grades
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>ICSE & ISC Board (Grades 4–12)</li>
                <li>CBSE Board (Grades 4–12)</li>
                <li>IB Curriculum (Grades 4–12)</li>
                <li>IGCSE & Cambridge A-Levels (Grades 4–12)</li>
                <li>All Core & Elective Subjects</li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Contact & Location
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="phone" className="w-4 h-4 text-gray-400" />
                  <a href="tel:+919049650666" className="hover:text-brand-charcoal">+91 90496 50666</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="whatsapp" className="w-4 h-4 text-emerald-600" />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-charcoal">WhatsApp: 9049650666</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="instagram" className="w-4 h-4 text-pink-600" />
                  <a href="https://www.instagram.com/twowise_academy/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-charcoal">@twowise_academy</a>
                </li>
                <li className="flex items-start gap-2 pt-1">
                  <Icon name="mapPin" className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© 2026 Two Wise Academy. All Rights Reserved.</p>
            <p className="flex items-center gap-3">
              <span>Offline Classroom Coaching in Pune</span>
              <span>•</span>
              <span>"Learn Smart. Think Wise."</span>
            </p>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* FLOATING WHATSAPP BUTTON */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center group">
        {/* Tooltip on hover */}
        <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-brand-charcoal text-white text-xs font-medium shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Chat with Two Wise Academy
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Two Wise Academy on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-soft-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping-slow pointer-events-none"></span>
          <Icon name="whatsapp" className="w-7 h-7 relative z-10" />
        </a>
      </div>

    </div>
  );
}

// Mount the React Application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
