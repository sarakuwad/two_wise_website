const { useState, useEffect, useMemo } = React;

// --- Official Logo Component ---
const WiseOwlLogo = ({ className = "h-10 w-auto", full = false }) => (
  <img 
    src={full ? "./logo-dark.png" : "./logo-owl-dark.png"} 
    alt="Two Wise Academy" 
    className={`${className} object-contain`} 
  />
);

// Comprehensive Icon Component
const Icon = ({ name, className = "w-5 h-5" }) => {
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
    play: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    ),
    pause: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    ),
    video: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    image: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
    heart: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    share2: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    ),
    externalLink: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    ),
    calendar: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
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
  
  // Board & division tabs
  const [activeBoard, setActiveBoard] = useState('icse');
  const [activeSubjectTab, setActiveSubjectTab] = useState('math');
  const [activeApproachStep, setActiveApproachStep] = useState(0);

  // Enquiry form state
  const [formData, setFormData] = useState({
    parentName: "",

    studentName: "",

    phone: "",

    grade: "Grade 8",

    board: "ICSE",

    subjects: ['Mathematics', 'Science'],
    message: ""

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
  const officialInstagramUrl = "https://www.instagram.com/twowise_academy/";
  const frankFreeseReelUrl = "https://www.instagram.com/reel/DcsV0ffIVuF/?mdxt=MW81YjljcHlrYnFjYw==";

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

  const generatedWhatsAppLink = useMemo(() => {
    const text = `Hi Two Wise Academy! I would like to enquire about classroom coaching in Pune.

` +
      `Parent Name: ${formData.parentName}
` +
      `Student Name: ${formData.studentName}
` +
      `Grade: ${formData.grade}
` +
      `Board: ${formData.board}
` +
      `Subjects: ${formData.subjects.join(', ')}
` +
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

  // ASH-Style Divisions Data (Grades 4 to 12)
  const schoolDivisions = [
    {
      id: "foundation",

      title: "Foundation Stage",

      badge: "Grades 4–5",

      badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-950/60",

      tagline: "Curiosity & Conceptual Roots",

      description: "Joyful, hands-on learning building reading intuition, number sense, and the confidence to ask “why?”.",

      boards: "ICSE • CBSE • Cambridge Primary",

      targetBoard: "cbse",

      gradient: "from-emerald-950/40 via-[#131D18] to-[#101713]",

      accentBorder: "hover:border-emerald-400/50",

      glow: "shadow-glow-green",

      icon: "smile"

    },
    {
      id: "middle",

      title: "Middle School",

      badge: "Grades 6–8",

      badgeColor: "border-rose-400/30 text-rose-300 bg-rose-950/60",

      tagline: "Logic & Subject Mastery",

      description: "Transitioning from memorisation to analytical logic, scientific inquiry, and structured problem-solving.",

      boards: "ICSE • CBSE • IB MYP • Cambridge",

      targetBoard: "icse",

      gradient: "from-rose-950/30 via-[#161719] to-[#121614]",

      accentBorder: "hover:border-rose-400/50",

      glow: "shadow-glow-red",

      icon: "lightbulb"

    },
    {
      id: "secondary",

      title: "Secondary Boards",

      badge: "Grades 9–10",

      badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-950/60",

      tagline: "Board Distinction & Rigour",

      description: "Comprehensive syllabus mastery, timed question bank drills, and personalised 1-on-1 doubt clearance.",

      boards: "ICSE Board • CBSE Board • IGCSE",

      targetBoard: "icse",

      gradient: "from-emerald-950/40 via-[#141E19] to-[#111714]",

      accentBorder: "hover:border-emerald-400/50",

      glow: "shadow-glow-green",

      icon: "target"

    },
    {
      id: "senior",

      title: "Senior Secondary",

      badge: "Grades 11–12",

      badgeColor: "border-rose-400/30 text-rose-300 bg-rose-950/60",

      tagline: "Advanced Analytical Rigour",

      description: "Deep subject immersion in Science & Commerce with integrated competitive test and higher-ed preparation.",

      boards: "ISC • CBSE • IB DP • A-Levels",

      targetBoard: "ib",

      gradient: "from-rose-950/30 via-[#17181A] to-[#121514]",

      accentBorder: "hover:border-rose-400/50",

      glow: "shadow-glow-red",

      icon: "graduationCap"

    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0E0C] text-gray-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans relative overflow-x-hidden">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0D1511] border-b border-emerald-900/40 px-4 py-2 text-xs font-medium text-emerald-200/90 text-center flex items-center justify-center gap-2 relative z-50">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
        <span>Admissions Open for 2026–27 • Offline Classroom Coaching in Gultekdi, Pune • Grades 4 to 12 (ICSE, CBSE, IB, IGCSE)</span>
        <button 
          onClick={() => scrollToSection('contact')}
          className="ml-2 underline font-semibold text-emerald-300 hover:text-emerald-200 hidden sm:inline"
        >
          Enquire Now →
        </button>
      </div>

      {/* ========================================================================= */}
      {/* HEADER & NAVIGATION */}
      {/* ========================================================================= */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'nav-glass-dark border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-[#0A0E0C]/90 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/20 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="./logo.png" 
                  alt="Two Wise Academy" 
                  className="h-9 sm:h-10 w-auto object-contain" 
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a href="#hero" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                Home
              </a>
              <a href="#divisions" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                Divisions (4–12)
              </a>
              <a href="#boards" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                Curricula
              </a>
              <a href="#faculty" className="px-3 py-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 hover:bg-emerald-950/40 rounded-xl transition-colors">
                Faculty
              </a>
              <a href="#why-us" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                Why Us
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                Contact
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 rounded-xl transition-all shadow-[0_0_15px_rgba(52,211,153,0.1)]"
                title="Chat on WhatsApp"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-emerald-400" />
                <span>9049650666</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_25px_rgba(110,231,183,0.3)] hover:shadow-[0_0_35px_rgba(110,231,183,0.5)] active:scale-95"
              >
                <span>Enquire Now</span>
                <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-400 text-gray-950"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
                aria-label="Toggle menu"
              >
                <Icon name={mobileMenuOpen ? "x" : "menu"} className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-[#0A0E0C]/98 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              <a 
                onClick={() => scrollToSection('hero')} 
                className="px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection('divisions')} 
                className="px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
              >
                School Divisions (Grades 4–12)
              </a>
              <a 
                onClick={() => scrollToSection('boards')} 
                className="px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
              >
                Curricula (ICSE, CBSE, IB, IGCSE)
              </a>
              <a 
                onClick={() => scrollToSection('faculty')} 
                className="px-3 py-2.5 text-base font-medium text-emerald-300 hover:bg-emerald-950/30 rounded-xl cursor-pointer"
              >
                Faculty & Mentors
              </a>
              <a 
                onClick={() => scrollToSection('why-us')} 
                className="px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
              >
                Why Two Wise
              </a>
              <a 
                onClick={() => scrollToSection('contact')} 
                className="px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
              >
                Contact & Location
              </a>
            </div>
            
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 rounded-xl"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (9049650666)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* SECTION 1: ASH.NL STYLE CINEMATIC OPENING (HERO BANNER) */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-dark-grid">
        {/* Luxury Radial Ambient Glowing Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none -z-0"></div>
        <div className="absolute top-40 right-4 w-[420px] h-[420px] bg-rose-500/8 rounded-full blur-[160px] pointer-events-none -z-0"></div>
        <div className="absolute bottom-10 left-4 w-[460px] h-[460px] bg-teal-500/8 rounded-full blur-[160px] pointer-events-none -z-0"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Pre-title Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111A15] border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.9)]"></span>
            <span>Admissions Open for Grades 4–12 • Offline Coaching in Gultekdi, Pune</span>
          </div>

          {/* ASH.nl Grand Statement Headline */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Welcome to Two Wise Academy, <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-rose-300 bg-clip-text text-transparent">
                where learning comes to life
              </span>
            </h1>

            {/* Sub-tagline */}
            <p className="font-heading text-xl sm:text-2xl font-semibold text-rose-200/90 tracking-wide">
              “Learn Smart. Think Wise.”
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Personalised offline classroom coaching at <strong className="text-emerald-300 font-semibold">Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037</strong> for students from <span className="font-semibold text-white">Grades 4–12</span> across <span className="font-semibold text-rose-300">ICSE</span>, <span className="font-semibold text-emerald-300">CBSE</span>, <span className="font-semibold text-teal-300">IB</span> and <span className="font-semibold text-amber-200">IGCSE</span> boards.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-heading font-bold text-base bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_35px_rgba(110,231,183,0.4)] hover:shadow-[0_0_45px_rgba(110,231,183,0.6)] active:scale-95"
            >
              <span>Schedule Free Assessment</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('boards')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-heading font-semibold text-base bg-[#141B17] hover:bg-[#1A241F] text-white border border-rose-400/30 hover:border-rose-400/60 transition-all shadow-[0_0_25px_rgba(253,164,175,0.15)] active:scale-95 group"
            >
              <span className="text-rose-200">Explore Curricula</span>
              <Icon name="arrowRight" className="w-4 h-4 text-rose-300" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-heading font-semibold text-sm bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-300 border border-emerald-500/30 transition-all active:scale-95"
            >
              <Icon name="whatsapp" className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Quick Pillars Trust Bar */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5">
              <span className="font-heading font-bold text-lg text-emerald-300 block">4 Global Boards</span>
              <span className="text-xs text-gray-400">ICSE, CBSE, IB, IGCSE</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5">
              <span className="font-heading font-bold text-lg text-rose-300 block">Grades 4–12</span>
              <span className="text-xs text-gray-400">Comprehensive Coaching</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5">
              <span className="font-heading font-bold text-lg text-emerald-300 block">&lt; 12 Students</span>
              <span className="text-xs text-gray-400">Personalised Small Batches</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5">
              <span className="font-heading font-bold text-lg text-rose-300 block">Gultekdi Center</span>
              <span className="text-xs text-gray-400">Prasad Apts, Pune-411037</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ASH.NL STYLE SCHOOL DIVISIONS (GRADES 4 TO 12) */}
      {/* ========================================================================= */}
      <section id="divisions" className="py-20 bg-[#0B100D] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Icon name="sparkles" className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tailored Pathways for Every Stage</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Structured for Every Milestone in a Student’s Journey
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Inspired by premier international academies, our curriculum is partitioned into four distinct developmental divisions from Grades 4 through 12.
            </p>
          </div>

          {/* 4 Division Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolDivisions.map((division) => (
              <div 
                key={division.id}
                className={`rounded-3xl p-6 bg-gradient-to-b ${division.gradient} border border-white/10 ${division.accentBorder} hover-card-lift transition-all duration-300 flex flex-col justify-between relative group`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Icon & Grade Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#16211B] border border-white/10 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
                      <Icon name={division.icon} className="w-5 h-5" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${division.badgeColor}`}>
                      {division.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-xs font-semibold text-rose-300">
                      {division.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {division.description}
                  </p>

                </div>

                {/* Bottom Curricula Tag & CTA */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                  <div className="text-[11px] font-medium text-emerald-200/70 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/20 text-center">
                    {division.boards}
                  </div>

                  <button
                    onClick={() => {
                      setActiveBoard(division.targetBoard);
                      scrollToSection('boards');
                    }}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-emerald-400 hover:text-gray-950 text-gray-200 transition-all border border-white/10 hover:border-emerald-400"
                  >
                    <span>Explore Curriculum</span>
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      

      {/* ========================================================================= */}
      {/* SECTION 4: ABOUT & PHILOSOPHY */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 bg-[#0B100D] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                <Icon name="compass" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Our Educational Philosophy</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Education That Goes <br />
                <span className="bg-gradient-to-r from-emerald-300 to-rose-300 bg-clip-text text-transparent">
                  Beyond Textbooks.
                </span>
              </h2>

              <p className="text-base text-gray-300 leading-relaxed">
                At Two Wise Academy, we believe real academic mastery starts with genuine understanding. When students understand the <em>“why”</em> behind every equation, historical event, and scientific principle, confidence replaces anxiety.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: "No Rote Memorisation", desc: "We deconstruct principles so students can tackle unfamiliar problems with composure." },
                  { title: "Bespoke Personal Attention", desc: "Every student's baseline is assessed, crafting a custom learning pace." },
                  { title: "Small Batches, Big Results", desc: "Capped batch sizes guarantee every question is answered immediately." },
                  { title: "Continuous Diagnostic Feedback", desc: "Transparent progress reviews for parents without surprise exam panic." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-[#111714] border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Icon name="check" className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#121915] to-[#161719] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-green">
                      <Icon name="award" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white">The Two Wise Standard</h4>
                      <p className="text-xs text-gray-400">Offline Classroom Excellence in Pune</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 italic border-l-2 border-emerald-400 pl-4">
                    “True wisdom is knowing how to think, not just what to think. Our mission is to transform students into independent, confident thinkers for life.”
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="p-4 rounded-2xl bg-[#0A0E0C] border border-white/5">
                      <span className="font-heading font-extrabold text-2xl text-emerald-300 block">Grades 4–12</span>
                      <span className="text-xs text-gray-400">Foundation to Board Prelims</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#0A0E0C] border border-white/5">
                      <span className="font-heading font-extrabold text-2xl text-rose-300 block">100% Offline</span>
                      <span className="text-xs text-gray-400">Interactive Classroom Coaching</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CURRICULA & BOARDS */}
      {/* ========================================================================= */}
      <section id="boards" className="py-20 bg-[#0A0E0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Icon name="bookOpen" className="w-3.5 h-3.5 text-emerald-400" />
              <span>Multi-Curriculum Expertise</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              One Academy. Multiple Curricula.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Every educational board follows distinct exam formats and assessment criteria. Our mentors tailor instruction specifically to each curriculum from Grades 4 through 12.
            </p>
          </div>

          {/* Board Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'icse', name: 'ICSE & ISC Board', grades: 'Grades 4–12', badge: 'Analytical Rigour' },
              { id: 'cbse', name: 'CBSE Board', grades: 'Grades 4–12', badge: 'Concept & Application' },
              { id: 'ib', name: 'IB (MYP & DP)', grades: 'Grades 4–12', badge: 'Inquiry-Based' },
              { id: 'igcse', name: 'Cambridge (IGCSE & A-Levels)', grades: 'Grades 4–12', badge: 'Global Standards' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveBoard(tab.id)}
                className={`px-5 py-3 rounded-2xl font-heading text-sm font-semibold transition-all flex items-center gap-2 ${activeBoard === tab.id ? 'bg-emerald-400 text-gray-950 shadow-glow-green font-bold' : 'bg-[#121915] text-gray-300 hover:text-white border border-white/5 hover:border-white/20'}`}
              >
                <span>{tab.name}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${activeBoard === tab.id ? 'bg-emerald-950 text-emerald-200' : 'bg-white/5 text-gray-400'}`}>
                  {tab.grades}
                </span>
              </button>
            ))}
          </div>

          {/* Board Detail Content */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#121915] border border-white/10 shadow-2xl">
            {activeBoard === 'icse' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                    Council for the Indian School Certificate Examinations (CISCE)
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    ICSE (Grades 4–10) & ISC (Grades 11–12)
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Known for its detailed syllabus and exhaustive language requirements, the ICSE curriculum demands strong conceptual clarity, comprehensive writing, and rigorous numerical problem solving.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Exhaustive coverage of Selina & concise textbook problems",
                      "10-year past ICSE/ISC paper solving & board marking scheme practice",
                      "Focus on scientific derivations and descriptive answer frameworks",
                      "Structured English language grammar, comprehension & literature drills"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Icon name="check" className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4">
                  <h4 className="font-heading font-bold text-sm text-white">ICSE/ISC Subjects Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Mathematics", "Physics", "Chemistry", "Biology", "English Literature & Lang", "History & Civics", "Geography", "Economics", "Commercial Studies", "Computer Applications"].map((sub, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl text-xs bg-emerald-950/40 text-emerald-300 border border-emerald-500/20">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-emerald-400 text-gray-950 hover:brightness-105 transition-all text-center block"
                  >
                    Enquire for ICSE/ISC Batches →
                  </button>
                </div>
              </div>
            )}

            {activeBoard === 'cbse' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-950/80 text-rose-300 border border-rose-500/30">
                    Central Board of Secondary Education
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    CBSE Board (Grades 4–12)
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Aligned closely with NCERT, CBSE emphasizes structured concept application, competency-based questions, and solid foundations for national competitive examinations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Line-by-line NCERT mastery with Exemplar problem analysis",
                      "Competency-focused case-based questions training",
                      "Regular chapter tests with error analysis journals",
                      "Integrated foundation for future competitive exams"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Icon name="check" className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4">
                  <h4 className="font-heading font-bold text-sm text-white">CBSE Subjects Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Mathematics", "Science (Phy/Chem/Bio)", "Social Science", "English Core", "Accountancy", "Business Studies", "Economics", "Applied Mathematics", "Computer Science"].map((sub, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl text-xs bg-rose-950/40 text-rose-300 border border-rose-500/20">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-rose-400 text-gray-950 hover:brightness-105 transition-all text-center block"
                  >
                    Enquire for CBSE Batches →
                  </button>
                </div>
              </div>
            )}

            {activeBoard === 'ib' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 text-amber-300 border border-amber-500/30">
                    International Baccalaureate Organisation
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    IB Middle Years (MYP) & Diploma Programme (DP)
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The IB curriculum prioritizes critical inquiry, criteria-referenced assessment, research-backed essays, and global contexts. Our mentors guide students through both content mastery and criterion-based scoring rubrics.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Criterion A, B, C, D rubric breakdown and alignment",
                      "Guidance on Internal Assessments (IA) and Extended Essays (EE)",
                      "Higher Level (HL) and Standard Level (SL) tailored modules",
                      "Inquiry-driven scientific experimentation and paper analysis"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Icon name="check" className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4">
                  <h4 className="font-heading font-bold text-sm text-white">IB Pathways Supported</h4>
                  <div className="flex flex-wrap gap-2">
                    {["IB MYP Mathematics", "IB MYP Sciences", "IB DP Math (AA & AI)", "IB DP Physics (HL/SL)", "IB DP Chemistry (HL/SL)", "IB DP Economics", "IB DP Business Management", "TOK & IA Mentorship"].map((sub, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl text-xs bg-amber-950/40 text-amber-300 border border-amber-500/20">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-amber-400 text-gray-950 hover:brightness-105 transition-all text-center block"
                  >
                    Enquire for IB Mentorship →
                  </button>
                </div>
              </div>
            )}

            {activeBoard === 'igcse' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-950/80 text-teal-300 border border-teal-500/30">
                    Cambridge Assessment International Education (CAIE)
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                    Cambridge IGCSE & International A-Levels
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Renowned worldwide for international benchmarking, Cambridge IGCSE and A-Levels demand precision in experimental science, structured command terms, and rigorous past-paper mastery.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Extensive practice with Paper 2 (MCQ), Paper 4 (Theory), and Paper 6 (ATP)",
                      "Cambridge Command Words decoding (Evaluate, Discuss, Explain)",
                      "Structured topical past-paper compilation practice",
                      "Cambridge Lower Secondary checkpoint foundation for Grades 6–8"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Icon name="check" className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4">
                  <h4 className="font-heading font-bold text-sm text-white">Cambridge Subjects Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Extended Mathematics (0580)", "Additional Mathematics (0606)", "Physics (0625)", "Chemistry (0620)", "Biology (0610)", "Economics (0455)", "Business Studies (0450)", "English as First/Second Lang"].map((sub, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl text-xs bg-teal-950/40 text-teal-300 border border-teal-500/20">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-teal-400 text-gray-950 hover:brightness-105 transition-all text-center block"
                  >
                    Enquire for Cambridge Batches →
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: SUBJECTS DIRECTORY */}
      {/* ========================================================================= */}
      <section id="subjects" className="py-20 bg-[#0B100D] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Icon name="target" className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Academic Breadth</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              All Subjects. One Learning Destination.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              From early foundational reading and numeracy in Grade 4 to advanced differential calculus and commercial economics in Grade 12.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mathematics",
                badge: "Grades 4–12",
                desc: "Arithmetic, Algebra, Geometry, Trigonometry, Coordinate Geometry, Calculus, Statistics & Probability. Concept-first approach eliminates fear of numbers.",
                accent: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
                icon: "calculator"
              },
              {
                title: "Sciences (Phy, Chem, Bio)",
                badge: "Grades 4–12",
                desc: "Integrated General Science for middle school; specialized Physics, Chemistry, and Biology modules for high school board exams and Cambridge ATP/practicals.",
                accent: "border-rose-400/30 text-rose-300 bg-rose-950/40",
                icon: "microscope"
              },
              {
                title: "English Language & Literature",
                badge: "Grades 4–12",
                desc: "Grammar accuracy, creative composition, analytical essay frameworks, Shakespearean drama, poetry commentary, and reading comprehension.",
                accent: "border-teal-400/30 text-teal-300 bg-teal-950/40",
                icon: "languages"
              },
              {
                title: "Commerce & Economics",
                badge: "Grades 9–12",
                desc: "Commercial Studies, Accountancy basics, Micro/Macro Economics, Business Studies, and applied case analysis for ICSE, CBSE, IB, and IGCSE.",
                accent: "border-amber-400/30 text-amber-300 bg-amber-950/40",
                icon: "award"
              },
              {
                title: "Social Sciences & Humanities",
                badge: "Grades 4–10",
                desc: "Indian & World History, Civics & Governance, Physical & Economic Geography, Map work, and structured descriptive answer writing.",
                accent: "border-purple-400/30 text-purple-300 bg-purple-950/40",
                icon: "globe"
              },
              {
                title: "Computer Applications & Coding",
                badge: "Grades 6–12",
                desc: "Java for ICSE/ISC, Python for CBSE, algorithmic problem solving, logic gates, computational thinking, and software design principles.",
                accent: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
                icon: "cpu"
              }
            ].map((sub, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#111714] border border-white/10 hover-card-lift transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon name={sub.icon} className="w-5 h-5" />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${sub.accent}`}>
                    {sub.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white">{sub.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: WHY TWO WISE ACADEMY */}
      {/* ========================================================================= */}
      <section id="why-us" className="py-20 bg-[#0A0E0C] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Icon name="shieldCheck" className="w-3.5 h-3.5 text-emerald-400" />
              <span>The Two Wise Difference</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Because Every Student Deserves to Be Understood.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Mass coaching factories fail because they treat diverse minds identically. We intentionally maintain small batches so teaching adapts to the learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Small, Interactive Batches", desc: "Strictly limited student intake per batch guarantees personalized eye-level coaching.", icon: "users", tag: "< 12 Students" },
              { title: "Diagnostic Concept Mapping", desc: "We uncover root misconceptions from prior grades before building advanced topics.", icon: "target", tag: "Personalised" },
              { title: "Doubt-Friendly Safe Spaces", desc: "No judgment, no hesitation. Students are celebrated for asking questions until concepts are clear.", icon: "messageSquare", tag: "Open Dialogue" },
              { title: "Curriculum-Specific Test Banks", desc: "Strict adherence to official board syllabi and question formatting across ICSE, CBSE, IB, and IGCSE.", icon: "clipboardCheck", tag: "Exhaustive" },
              { title: "Transparent Parent Partnership", desc: "Regular, meaningful progress reviews with parents to celebrate wins and address challenges early.", icon: "heartHandshake", tag: "Zero Surprises" },
              { title: "Central Pune Location", desc: "Located at Prasad Apartments, T.M.V. Colony, Gultekdi with convenient accessibility.", icon: "mapPin", tag: "Gultekdi, Pune" }
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#111714] border border-white/10 hover-card-lift transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon name={pillar.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-rose-300 px-2 py-0.5 rounded-full bg-rose-950/50 border border-rose-500/20">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-white">{pillar.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: 5-STEP LEARNING APPROACH */}
      {/* ========================================================================= */}
      <section id="approach" className="py-20 bg-[#0B100D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Icon name="lightbulb" className="w-3.5 h-3.5 text-emerald-400" />
              <span>Proven Methodology</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Smart Learning. Step by Step.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Our 5-stage learning lifecycle ensures students transition seamlessly from initial comprehension to independent problem-solving and exam distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Diagnostic Assessment", desc: "Map current conceptual grasp and identify foundational gaps." },
              { step: "02", title: "Concept Demystification", desc: "Break complex topics into intuitive, first-principles logic." },
              { step: "03", title: "Guided Problem Solving", desc: "Work through varied problem sets with instant mentor feedback." },
              { step: "04", title: "Targeted Doubt Resolution", desc: "Dedicated 1-on-1 reviews until every ambiguity is resolved." },
              { step: "05", title: "Exam Simulation & Mastery", desc: "Timed board-standard papers to build speed, accuracy & calm." }
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-3xl bg-[#111714] border border-white/5 hover-card-lift transition-all space-y-2 relative">
                <span className="font-heading font-extrabold text-3xl text-emerald-400/40 block">{st.step}</span>
                <h3 className="font-heading font-bold text-sm text-white">{st.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: FACULTY & FOUNDERS */}
      {/* ========================================================================= */}
      <section id="faculty" className="py-20 bg-[#0A0E0C] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Icon name="award" className="w-3.5 h-3.5 text-emerald-400" />
              <span>Leadership & Mentorship</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Meet the Mentors Behind Two Wise.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Passionate educators who combine elite academic credentials with years of classroom experience across international and national curricula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            
            {/* Reva Mehta */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#141F18] to-[#101613] border border-emerald-500/30 hover-card-lift transition-all space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-heading font-bold text-2xl shadow-glow-green">
                  RM
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">Reva Mehta</h3>
                  <p className="text-xs font-semibold text-emerald-300">Co-Founder & Lead Academic Mentor</p>
                  <p className="text-xs text-gray-400">MBA (SIBM Pune) • 6+ Years Experience</p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>
                  Former educator at <strong>Symbiosis International School</strong> with extensive expertise in teaching Mathematics, Economics, and analytical sciences across <strong>ICSE, CBSE, and IB</strong> curricula.
                </p>
                <p>
                  Reva specializes in demystifying complex mathematical structures, ensuring students grasp underlying logic rather than relying on rote formulae.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/20">Mathematics Specialist</span>
                <span className="px-3 py-1 rounded-full text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/20">Economics & Commerce</span>
                <span className="px-3 py-1 rounded-full text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/20">IB & ICSE Mentor</span>
              </div>
            </div>

            {/* Diya Shah */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#1A1618] to-[#141214] border border-rose-500/30 hover-card-lift transition-all space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300 font-heading font-bold text-2xl shadow-glow-red">
                  DS
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">Diya Shah</h3>
                  <p className="text-xs font-semibold text-rose-300">Co-Founder & Pedagogical Director</p>
                  <p className="text-xs text-gray-400">BBA Finance • 6+ Years Experience</p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>
                  Specializing in foundational pedagogy and analytical thinking, Diya guides students through critical middle-school transitions (Grades 4–8) and secondary board preparation.
                </p>
                <p>
                  With a sharp background in finance and quantitative reasoning, Diya focuses on building strong problem-solving habits, self-discipline, and confident exam performance.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/20">Foundation Specialist (Grades 4–8)</span>
                <span className="px-3 py-1 rounded-full text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/20">Quantitative Reasoning</span>
                <span className="px-3 py-1 rounded-full text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/20">CBSE & Cambridge Specialist</span>
              </div>
            </div>

          </div>

          {/* Mr. Frank Freese Keynote Tribute */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-950/30 via-[#121915] to-rose-950/20 border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 shrink-0">
              <Icon name="award" className="w-8 h-8 text-emerald-300" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Inaugurated by Educational Leadership</span>
              <h4 className="font-heading font-bold text-lg text-white">
                Honoured to be Inaugurated by Mr. Frank Freese
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Former Principal of <strong>The Bishop's School, Pune</strong>, Mr. Frank Freese personally inaugurated Two Wise Academy, recognizing our focus on character, intellectual discipline, and student-centered mentorship.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: CONTACT & ENQUIRY */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 bg-[#0A0E0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                <Icon name="mapPin" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Visit Our Offline Center</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                Let's Start Their Learning Journey.
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Schedule a diagnostic evaluation or visit our classroom setup at Gultekdi to discuss your child's academic roadmap with founders Reva Mehta and Diya Shah.
              </p>

              {/* Location Card */}
              <div className="p-6 rounded-3xl bg-[#111714] border border-white/10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Icon name="mapPin" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Academy Location</h4>
                    <p className="text-xs text-gray-300 font-medium mt-1">
                      Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037
                    </p>
                    <a
                      href="https://maps.google.com/?q=Prasad+Apartments+TMV+Colony+Gultekdi+Pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <Icon name="externalLink" className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                  <div className="w-10 h-10 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <Icon name="phone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Call / WhatsApp</h4>
                    <a href="tel:+919049650666" className="text-xs text-gray-300 hover:text-white block mt-0.5">
                      +91 90496 50666
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:underline block mt-0.5">
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                  <div className="w-10 h-10 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Icon name="instagram" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">Instagram Community</h4>
                    <a href={officialInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-300 hover:underline block mt-0.5">
                      @twowise_academy ↗
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-8 bg-[#121915] border border-white/10 shadow-2xl">
                
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-green">
                      <Icon name="check" className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white">Thank You for Reaching Out!</h3>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      We have received your enquiry for <strong>{formData.studentName}</strong> ({formData.grade}, {formData.board}). Our mentors will contact you shortly.
                    </p>
                    <div className="pt-4">
                      <a
                        href={generatedWhatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-gray-950 font-heading font-bold text-sm shadow-glow-green hover:brightness-105"
                      >
                        <Icon name="whatsapp" className="w-4 h-4" />
                        <span>Send Details on WhatsApp Instantly</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white">Enquiry</h3>
                      <p className="text-xs text-gray-400 mt-1">Fill in the student details below to send an enquiry to our center.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Parent's Name *</label>
                        <input
                          type="text"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Arjun Mehta"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                        />
                        {formErrors.parentName && <p className="text-[11px] text-rose-400 mt-1">{formErrors.parentName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Student's Name *</label>
                        <input
                          type="text"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="e.g. Harshwardhan Mehta"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                        />
                        {formErrors.studentName && <p className="text-[11px] text-rose-400 mt-1">{formErrors.studentName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Mobile Number *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit number"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                        />
                        {formErrors.phone && <p className="text-[11px] text-rose-400 mt-1">{formErrors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Grade (4–12) *</label>
                        <select
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                        >
                          {["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Curriculum / Board *</label>
                        <select
                          value={formData.board}
                          onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                        >
                          <option value="ICSE">ICSE & ISC</option>
                          <option value="CBSE">CBSE</option>
                          <option value="IB">IB (MYP / DP)</option>
                          <option value="IGCSE">Cambridge (IGCSE / A-Levels)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">Select Subjects Needed *</label>
                      <div className="flex flex-wrap gap-2">
                        {["Mathematics", "Science (Phy/Chem/Bio)", "English", "Economics", "Commercial Studies", "Computer Applications"].map((sub) => {
                          const isSelected = formData.subjects.includes(sub);
                          return (
                            <button
                              type="button"
                              key={sub}
                              onClick={() => toggleSubject(sub)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${isSelected ? 'bg-emerald-400 text-gray-950 font-bold shadow-sm' : 'bg-[#0A0E0C] text-gray-400 border border-white/10 hover:border-white/20'}`}
                            >
                              {sub}
                            </button>
                          );
                        })}
                      </div>
                      {formErrors.subjects && <p className="text-[11px] text-rose-400 mt-1">{formErrors.subjects}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Specific Goals or Questions (Optional)</label>
                      <textarea
                        rows="2"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Looking for concept strengthening in algebra and board exam past paper drills..."
                        className="w-full px-4 py-2 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-400"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_25px_rgba(110,231,183,0.3)]"
                    >
                      Submit Enquiry →
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="bg-[#070B09] border-t border-white/5 py-12 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-5 space-y-3">
              <div className="px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 inline-block">
                <img src="./logo.png" alt="Two Wise Academy" className="h-8 w-auto object-contain" />
              </div>
              <p className="font-heading text-sm font-semibold text-white">
                “Learn Smart. Think Wise.”
              </p>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Personalised offline classroom coaching at Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037 for students from Grades 4 to 12 across ICSE, CBSE, IB, and IGCSE.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <h4 className="font-heading font-bold text-white text-sm">Quick Links</h4>
              <ul className="space-y-1.5">
                <li><a href="#hero" className="hover:text-emerald-300 transition-colors">Home</a></li>
                <li><a href="#divisions" className="hover:text-emerald-300 transition-colors">School Divisions (Grades 4–12)</a></li>
                <li><a href="#boards" className="hover:text-emerald-300 transition-colors">Curricula & Boards</a></li>
                <li><a href="#faculty" className="hover:text-emerald-300 transition-colors">Faculty & Founders</a></li>
                <li><a href="#contact" className="hover:text-emerald-300 transition-colors">Contact & Directions</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-2">
              <h4 className="font-heading font-bold text-white text-sm">Center Information</h4>
              <p className="text-gray-300">
                <strong>Two Wise Academy</strong><br />
                Prasad Apartments, T.M.V. Colony,<br />
                Gultekdi, Pune-411037, Maharashtra.
              </p>
              <p className="text-gray-300 pt-1">
                WhatsApp / Call: <a href="tel:+919049650666" className="text-emerald-300 hover:underline">+91 90496 50666</a>
              </p>
              <p className="text-gray-300">
                Instagram: <a href={officialInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-rose-300 hover:underline">@twowise_academy</a>
              </p>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
            <p>© {new Date().getFullYear()} Two Wise Academy. All rights reserved. Gultekdi, Pune.</p>
            <p>Learn Smart. Think Wise.</p>
          </div>

        </div>
      </footer>

      </div>
  );
}

// Mount the React Application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
