const {
  useState,
  useEffect,
  useMemo
} = React;

// --- Official Logo Component ---
const WiseOwlLogo = ({
  className = "h-10 w-auto",
  full = false
}) => /*#__PURE__*/React.createElement("img", {
  src: full ? "./logo-dark.png" : "./logo-owl-dark.png",
  alt: "Two Wise Academy",
  className: `${className} object-contain`
});

// Lucide icon helper component using SVG equivalents
const Icon = ({
  name,
  className = "w-5 h-5"
}) => {
  const icons = {
    check: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    arrowRight: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    whatsapp: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.19-.173.289l-.26.309c-.087.087-.179.182-.077.357.101.174.453.748.973 1.211.671.597 1.237.782 1.411.869.174.087.275.073.377-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.203.043.072.043.419-.101.824z"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2C6.477 2 2 6.477 2 12c0 1.892.526 3.662 1.438 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.574 0-3.056-.442-4.324-1.212l-.31-.19-3.064.859.873-2.98-.207-.327A8.17 8.17 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z"
    })),
    instagram: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5"
    })),
    mapPin: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    phone: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })),
    bookOpen: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
    })),
    users: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    sparkles: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
    })),
    award: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "7"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
    })),
    target: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    })),
    messageSquare: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })),
    menu: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })),
    x: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    lightbulb: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 18h6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 22h4"
    })),
    compass: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
    })),
    clipboardCheck: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 14 2 2 4-4"
    })),
    smile: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 14s1.5 2 4 2 4-2 4-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })),
    shieldCheck: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })),
    graduationCap: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 10v6M2 10l10-5 10 5-10 5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12v5c3 3 9 3 12 0v-5"
    })),
    calculator: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      x2: "16",
      y1: "6",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      x2: "16",
      y1: "14",
      y2: "18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 14h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 14h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 18h.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 18h.01"
    })),
    microscope: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 18h8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 22h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m14 22 3-3 3 3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "6",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 9v9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 15h6"
    })),
    languages: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m5 8 6 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m4 14 6-6 2-3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 5h12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 2h1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 22-5-10-5 10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 18h6"
    })),
    globe: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })),
    cpu: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "16",
      height: "16",
      x: "4",
      y: "4",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      width: "6",
      height: "6",
      x: "9",
      y: "9",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 2v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 20v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 15h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 9h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 15h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 9h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 2v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 20v2"
    })),
    heartHandshake: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m14 13 1.09-1.09c.8-.8 2.08-.82 2.91.01l0 0a2.1 2.1 0 0 1 0 2.97L15 18"
    }))
  };
  return icons[name] || null;
};

// --- Main App Component ---
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  const toggleSubject = subject => {
    setFormData(prev => {
      const exists = prev.subjects.includes(subject);
      if (exists) {
        return {
          ...prev,
          subjects: prev.subjects.filter(s => s !== subject)
        };
      } else {
        return {
          ...prev,
          subjects: [...prev.subjects, subject]
        };
      }
    });
  };

  // Form submit handler with validation
  const handleFormSubmit = e => {
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
    const text = `Hi Two Wise Academy! I would like to enquire about classroom coaching in Pune.\n\n` + `Parent Name: ${formData.parentName}\n` + `Student Name: ${formData.studentName}\n` + `Grade: ${formData.grade}\n` + `Board: ${formData.board}\n` + `Subjects: ${formData.subjects.join(', ')}\n` + (formData.message ? `Notes: ${formData.message}` : '');
    return `https://wa.me/919049650666?text=${encodeURIComponent(text)}`;
  }, [formData]);
  const scrollToSection = id => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col bg-[#0A0E0C] text-gray-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans relative overflow-x-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#0D1511] border-b border-emerald-900/40 px-4 py-2.5 text-xs font-medium text-emerald-200/90 text-center flex items-center justify-center gap-2 relative z-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"
  }), /*#__PURE__*/React.createElement("span", null, "Admissions Open for 2026–27 • Offline Classroom Coaching in Pune • Grades 4 to 12 (ICSE, CBSE, IB, IGCSE)"), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "ml-2 underline font-semibold text-emerald-300 hover:text-emerald-200 hidden sm:inline"
  }, "Book a Consultation →")), /*#__PURE__*/React.createElement("header", {
    className: `sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'nav-glass-dark border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-[#0A0E0C]/90 py-4'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center gap-3 group focus:outline-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/20 transition-transform duration-300 group-hover:scale-105"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo.png",
    alt: "Two Wise Academy",
    className: "h-9 sm:h-10 w-auto object-contain"
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex items-center space-x-1 lg:space-x-1.5"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#hero",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "About Us"), /*#__PURE__*/React.createElement("a", {
    href: "#boards",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Programs"), /*#__PURE__*/React.createElement("a", {
    href: "#approach",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Our Approach"), /*#__PURE__*/React.createElement("a", {
    href: "#why-us",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Why Two Wise"), /*#__PURE__*/React.createElement("a", {
    href: "#faculty",
    className: "px-3 py-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 hover:bg-emerald-950/40 rounded-xl transition-colors"
  }, "Faculty"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 rounded-xl transition-all shadow-[0_0_15px_rgba(52,211,153,0.1)]",
    title: "Chat on WhatsApp"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "9049650666")), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_25px_rgba(110,231,183,0.3)] hover:shadow-[0_0_35px_rgba(110,231,183,0.5)] active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Enquire Now"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex md:hidden items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-400 text-gray-950"
  }, "Enquire"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    className: "p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none",
    "aria-label": "Toggle menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mobileMenuOpen ? "x" : "menu",
    className: "w-6 h-6"
  }))))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden border-b border-white/10 bg-[#0A0E0C]/98 px-4 pt-3 pb-6 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-1"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('hero'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('about'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "About Us"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('boards'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Programs (Boards)"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('approach'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Our Approach"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('why-us'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Why Two Wise"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('faculty'),
    className: "px-3 py-2.5 text-base font-medium text-emerald-300 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Faculty & Mentors"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('contact'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-white/10 flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 font-semibold text-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-5 h-5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp: +91 90496 50666")), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full py-3 rounded-xl bg-emerald-400 text-gray-950 font-bold text-sm shadow-glow-green"
  }, "Enquire Now")))), /*#__PURE__*/React.createElement("section", {
    id: "hero",
    className: "relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-dark-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-10 right-10 w-[480px] h-[480px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-10 left-5 w-[420px] h-[420px] bg-rose-500/8 rounded-full blur-[140px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 left-1/3 w-[360px] h-[360px] bg-teal-500/8 rounded-full blur-[150px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.15)]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
  }), /*#__PURE__*/React.createElement("span", null, "Offline Classroom Coaching • Gultekdi, Pune")), /*#__PURE__*/React.createElement("h1", {
    className: "font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
  }, "Learn Smart. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-r from-emerald-300 via-teal-200 to-rose-300 bg-clip-text text-transparent"
  }, "Think Wise."), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-400/60 via-teal-400/60 to-rose-400/60 rounded-full blur-[1px]"
  }))), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-xl sm:text-2xl font-semibold text-gray-200"
  }, "Building brighter minds, one concept at a time."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed"
  }, "Personalised classroom learning for students from ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-300 font-semibold"
  }, "Grades 4–12"), " across ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-rose-300"
  }, "ICSE"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-emerald-300"
  }, "CBSE"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-amber-200"
  }, "IB"), " and ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-teal-300"
  }, "IGCSE"), " boards."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('boards'),
    className: "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-heading font-bold text-base bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_30px_rgba(110,231,183,0.35)] hover:shadow-[0_0_40px_rgba(110,231,183,0.5)] active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Explore Our Programs"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-heading font-semibold text-base bg-white/5 hover:bg-white/10 text-white border border-rose-400/30 hover:border-rose-400/60 transition-all shadow-[0_0_20px_rgba(253,164,175,0.15)] active:scale-95"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-rose-200"
  }, "Enquire Now"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#111714]/80 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-emerald-300 block"
  }, "4 Boards"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "ICSE, CBSE, IB, IGCSE")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#111714]/80 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-rose-300 block"
  }, "Grades 4–12"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "All Subjects Covered")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#111714]/80 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-emerald-300 block"
  }, "Small Batches"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "Individual Attention")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-2xl bg-[#111714]/80 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-rose-300 block"
  }, "Pune Center"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "Gultekdi Classrooms")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-md lg:max-w-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-3xl p-6 sm:p-8 bg-[#121915]/90 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-500/10 to-transparent -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex items-center justify-between pb-6 border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduationCap",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "The Two Wise Classroom"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Engaging • Offline • Gultekdi, Pune"))), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950 border border-emerald-500/40 text-emerald-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
  }), "Active Batches")), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 my-6 py-4"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 240",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full h-auto drop-shadow-lg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "20",
    width: "380",
    height: "200",
    rx: "16",
    fill: "#0C120F",
    stroke: "#1F2E25",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 170L390 170",
    stroke: "#1F2E25",
    strokeWidth: "1.5",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "70",
    y: "35",
    width: "260",
    height: "90",
    rx: "10",
    fill: "#131D18",
    stroke: "#34D399",
    strokeWidth: "1.5",
    strokeOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "90",
    y1: "55",
    x2: "160",
    y2: "55",
    stroke: "#34D399",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "90",
    y1: "70",
    x2: "230",
    y2: "70",
    stroke: "#FDA4AF",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeOpacity: "0.8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "90",
    y1: "85",
    x2: "190",
    y2: "85",
    stroke: "#6EE7B7",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "280",
    cy: "80",
    r: "22",
    fill: "#1C2E24",
    stroke: "#34D399",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M272 80L278 86L290 74",
    stroke: "#86EFAC",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "90",
    y: "105",
    fill: "#86EFAC",
    fontSize: "11",
    fontWeight: "600",
    fontFamily: "sans-serif"
  }, "Concept Clarity > Rote Learning"), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "155",
    width: "110",
    height: "42",
    rx: "8",
    fill: "#18251E",
    stroke: "#2D4235",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "230",
    y: "155",
    width: "110",
    height: "42",
    rx: "8",
    fill: "#241B1F",
    stroke: "#4A2E38",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "115",
    cy: "140",
    r: "14",
    fill: "#34D399"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "115",
    cy: "136",
    r: "6",
    fill: "#0A0E0C"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "95",
    y: "162",
    width: "24",
    height: "16",
    rx: "2",
    fill: "#121D17",
    stroke: "#34D399",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "285",
    cy: "140",
    r: "14",
    fill: "#FB7185"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "285",
    cy: "136",
    r: "6",
    fill: "#0A0E0C"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "265",
    y: "162",
    width: "26",
    height: "16",
    rx: "3",
    fill: "#1E1418",
    stroke: "#FB7185",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "115",
    r: "16",
    fill: "#F3F4F6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "110",
    r: "7",
    fill: "#0A0E0C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M192 135C192 125 208 125 208 135",
    stroke: "#F3F4F6",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M210 120L230 100",
    stroke: "#86EFAC",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 grid grid-cols-2 gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-emerald-200"
  }, "8–10 Students Max")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 p-2.5 rounded-xl bg-rose-950/70 border border-rose-500/30"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-rose-200"
  }, "Zero Rote Learning")))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-[#141C18]/90 border border-emerald-500/30 shadow-glow-green backdrop-blur-xl animate-float flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-white block leading-none"
  }, "Concept First"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-emerald-300/80"
  }, "Every Topic Understood"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-5 -right-3 sm:-right-6 p-3.5 rounded-2xl bg-[#1A1417]/90 border border-rose-500/30 shadow-glow-red backdrop-blur-xl animate-float-reverse flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 rounded-xl bg-rose-950 border border-rose-500/40 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-white block leading-none"
  }, "All 4 Curricula"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-rose-300/80"
  }, "Grades 4–12 Support")))))))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-20 bg-[#0B100D] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-xs font-bold tracking-wide uppercase text-rose-300 shadow-[0_0_15px_rgba(253,164,175,0.15)]"
  }, "Our Educational Philosophy"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "Education That Goes Beyond Textbooks."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300 leading-relaxed"
  }, "At Two Wise Academy, we believe every student learns differently. Our approach combines structured academic guidance, individual attention and conceptual learning to help students develop the confidence to excel.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 rounded-3xl bg-[#121915]/90 border border-emerald-500/20 shadow-glow-green hover:border-emerald-400/40 hover-card-lift space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lightbulb",
    className: "w-7 h-7"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Understand Better"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "We break down complex formulas and theories into relatable everyday concepts. No blindly memorising steps without understanding why they work."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 pt-2 text-xs font-medium text-gray-300"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "First-principles conceptual foundation")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Interactive question-and-answer dialogue")))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 rounded-3xl bg-[#181316]/90 border border-rose-500/20 shadow-glow-red hover:border-rose-400/40 hover-card-lift space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    className: "w-7 h-7"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Learn Smarter"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Master active learning habits, effective revision pacing, and clear problem-solving frameworks that save hours of unproductive cramming."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 pt-2 text-xs font-medium text-gray-300"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Structured step-by-step study methods")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Targeted practice on high-yield questions")))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 rounded-3xl bg-[#131917]/90 border border-teal-500/20 shadow-[0_0_30px_rgba(45,212,191,0.1)] hover:border-teal-400/40 hover-card-lift space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-teal-950/80 border border-teal-500/30 flex items-center justify-center text-teal-300 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smile",
    className: "w-7 h-7"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Grow Confidently"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "When doubts are welcomed and mistakes become learning opportunities, students naturally develop self-reliance, curiosity, and examination poise."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 pt-2 text-xs font-medium text-gray-300"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-teal-400"
  }), /*#__PURE__*/React.createElement("span", null, "Judgment-free doubt clarification")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-teal-400"
  }), /*#__PURE__*/React.createElement("span", null, "Confidence to tackle unfamiliar problems"))))))), /*#__PURE__*/React.createElement("section", {
    id: "boards",
    className: "py-20 bg-[#0A0E0C] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold tracking-wide uppercase text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
  }, "Targeted Board Excellence"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "One Academy. Multiple Curricula."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300"
  }, "Comprehensive academic support across leading educational boards for Grades 4 to 12.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-[#121915]/90 border border-emerald-500/25 shadow-glow-green hover:border-emerald-400/50 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center font-heading font-black text-lg text-emerald-300"
  }, "ICSE"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-[#1A2520] text-emerald-200 border border-emerald-500/20"
  }, "Grades 4–12")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-white"
  }, "ICSE & ISC"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-emerald-300/70 font-medium"
  }, "CISCE — ICSE (Grades 4–10) & ISC (Grades 11–12)")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "In-depth subject mastery with strong emphasis on English language precision, descriptive scientific reasoning, and analytical Mathematics."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Detailed board exam answering techniques")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Project & practical application guidance")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setFormData(prev => ({
        ...prev,
        board: 'ICSE'
      }));
      scrollToSection('contact');
    },
    className: "w-full py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-200 font-semibold text-xs border border-emerald-500/30 transition-colors"
  }, "Enquire for ICSE / ISC →"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-[#181316]/90 border border-rose-500/25 shadow-glow-red hover:border-rose-400/50 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-rose-950 border border-rose-500/30 flex items-center justify-center font-heading font-black text-lg text-rose-300"
  }, "CBSE"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-[#261A1E] text-rose-200 border border-rose-500/20"
  }, "Grades 4–12")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-white"
  }, "CBSE Board"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-300/70 font-medium"
  }, "Central Board of Secondary Education")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Solid NCERT foundation, competency-based question preparation, and critical conceptual clarity building strong fundamentals for higher grades."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "NCERT line-by-line concept mastery")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Exemplar & case-based questions practice")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setFormData(prev => ({
        ...prev,
        board: 'CBSE'
      }));
      scrollToSection('contact');
    },
    className: "w-full py-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 font-semibold text-xs border border-rose-500/30 transition-colors"
  }, "Enquire for CBSE →"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-[#151714]/90 border border-amber-500/20 hover:border-amber-400/40 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-amber-950 border border-amber-500/30 flex items-center justify-center font-heading font-black text-lg text-amber-300"
  }, "IB"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-[#262217] text-amber-200 border border-amber-500/20"
  }, "Grades 4–12")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-white"
  }, "IB (MYP & DP)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-amber-300/70 font-medium"
  }, "International Baccalaureate")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Inquiry-based learning tailored to IB criteria (A, B, C, D), global context integration, analytical writing, and independent research skills."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-amber-400"
  }), /*#__PURE__*/React.createElement("span", null, "Criterion-referenced assessment prep")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-amber-400"
  }), /*#__PURE__*/React.createElement("span", null, "Interdisciplinary & MYP/DP readiness")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setFormData(prev => ({
        ...prev,
        board: 'IB'
      }));
      scrollToSection('contact');
    },
    className: "w-full py-2.5 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-200 font-semibold text-xs border border-amber-500/30 transition-colors"
  }, "Enquire for IB →"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-[#121817]/90 border border-teal-500/20 hover:border-teal-400/40 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-teal-950 border border-teal-500/30 flex items-center justify-center font-heading font-black text-lg text-teal-300"
  }, "IGCSE"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-[#182522] text-teal-200 border border-teal-500/20"
  }, "Grades 4–12")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-white"
  }, "Cambridge IGCSE"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-teal-300/70 font-medium"
  }, "Cambridge — IGCSE & A-Levels (Grades 4–12)")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Practical comprehension, structured past paper mastery, mark-scheme precision, and deep command-term understanding for Cambridge assessments."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-teal-400"
  }), /*#__PURE__*/React.createElement("span", null, "Topic-wise past paper drill & examiner tips")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-teal-400"
  }), /*#__PURE__*/React.createElement("span", null, "Core & Extended curriculum support")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setFormData(prev => ({
        ...prev,
        board: 'IGCSE'
      }));
      scrollToSection('contact');
    },
    className: "w-full py-2.5 rounded-xl bg-teal-950/60 hover:bg-teal-900/80 text-teal-200 font-semibold text-xs border border-teal-500/30 transition-colors"
  }, "Enquire for IGCSE →")))))), /*#__PURE__*/React.createElement("section", {
    id: "subjects",
    className: "py-20 bg-[#0B100D] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold tracking-wide uppercase text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
  }, "Holistic Academic Coverage"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "All Subjects. One Learning Destination."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300 leading-relaxed"
  }, "From strengthening fundamentals to mastering advanced concepts, we provide academic support across all subjects and curriculum requirements for Grades 4–12."), /*#__PURE__*/React.createElement("div", {
    className: "inline-block p-3 rounded-2xl bg-[#141C18] border border-emerald-500/25 text-xs font-medium text-emerald-200 mt-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "font-semibold text-emerald-300"
  }, "Note:"), " We cater to ", /*#__PURE__*/React.createElement("em", null, "all subjects"), " across your child's syllabus. If a particular subject is not listed below, our faculty accommodates it within your board curriculum!")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-emerald-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calculator",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Mathematics"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-400/80 font-medium"
  }, "Grades 4 to 12"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed mb-4"
  }, "Arithmetic, Pre-Algebra, Geometry, Trigonometry, Calculus, Statistics, Mensuration, and Applied Math deconstructed through step-by-step logic."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Conceptual Clarity"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Step-by-Step Proofs"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Speed & Accuracy"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-rose-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "microscope",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Science"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-rose-400/80 font-medium"
  }, "Physics • Chemistry • Biology"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed mb-4"
  }, "General Science for middle school; segregated Physics, Chemistry, Biology for secondary & senior secondary. Real-life demonstrations & clear diagrams."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Visual Diagrams"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Numerical Problem Solving"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Scientific Reasoning"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-emerald-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookOpen",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "English"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-400/80 font-medium"
  }, "Language & Literature"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed mb-4"
  }, "Grammar mastery, comprehension synthesis, creative essay writing, letter/notice formats, Shakespearean drama & poetry analysis."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Vocabulary Expansion"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Creative Composition"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Grammar Rules"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-rose-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Social Studies"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-rose-400/80 font-medium"
  }, "History • Civics • Geography"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed mb-4"
  }, "Engaging narrative timelines, political systems, topographical map reading, weather systems, and environmental case studies."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Timeline Mapping"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Topo Map Skills"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Structured Answers"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-emerald-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "languages",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Languages"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-400/80 font-medium"
  }, "Regional & Foreign Options"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed mb-4"
  }, "Hindi, Marathi, Sanskrit, French, German, and Spanish. Emphasis on grammar, correct pronunciation, sentence framing, and literature."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Hindi & Marathi"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "French & German"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Reading & Writing"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-rose-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cpu",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Curriculum-Specific"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-rose-400/80 font-medium"
  }, "Computers, Economics & More"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed mb-4"
  }, "Computer Applications (Java, Python, ICT), Commercial Studies, Economics, Environmental Management, and senior secondary electives."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Computer Apps"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Economics"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300"
  }, "Commercial Studies")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 text-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#16201A] hover:bg-[#1D2B23] text-emerald-200 border border-emerald-500/25 font-semibold text-sm transition-colors shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Have a specific subject or textbook requirement? Ask us directly"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "why-us",
    className: "py-20 bg-[#0A0E0C] relative border-y border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-xs font-bold tracking-wide uppercase text-rose-300 shadow-[0_0_15px_rgba(253,164,175,0.15)]"
  }, "The Two Wise Advantage"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "Because Every Student Deserves to Be Understood."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300"
  }, "We replace overwhelming tuition batches with personal mentorship, clarity and consistent academic growth.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-emerald-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heartHandshake",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Individual Attention"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Teaching that recognises every student's strengths and learning needs. No student is left behind in a sea of faces.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-rose-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Small Batches"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "A more interactive classroom environment with meaningful student participation, discussions and personal mentoring.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-emerald-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboardCheck",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Regular Tests & Assessments"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Monitor academic progress and identify areas for improvement through structured, diagnostic chapter-wise tests.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-rose-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "messageSquare",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Doubt-Solving Sessions"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Encourage students to ask questions freely and understand concepts thoroughly without hesitation or fear.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-emerald-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Personalised Study Plans"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Structured academic guidance based on individual learning requirements, school timelines and revision milestones.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-rose-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Parent-Teacher Feedback"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Keep parents informed about their child's learning journey with timely, constructive and transparent communication.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-emerald-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Exam Preparation"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Focused preparation to help students approach school exams and board examinations with confidence and clarity.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121815]/90 border border-white/8 shadow-soft hover-card-lift hover:border-rose-500/30 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduationCap",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Experienced Faculty"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Learn under the direct mentorship of co-founders Reva Mehta (MBA, SIBM Pune) and Diya Shah (BBA Finance)."))))), /*#__PURE__*/React.createElement("section", {
    id: "approach",
    className: "py-20 bg-[#0B100D] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold tracking-wide uppercase text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
  }, "Pedagogical Framework"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "Smart Learning. Step by Step."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300"
  }, "A structured four-phase methodology engineered for long-term retention and conceptual mastery.")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-emerald-500/40 via-rose-500/40 to-emerald-500/40 -translate-y-8 -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121915]/90 border border-emerald-500/25 shadow-glow-green hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-emerald-950 text-emerald-300 border border-emerald-500/30"
  }, "STEP 01"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-300"
  }, "1")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Understand"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Understand each student's academic requirements and learning style. We identify specific learning gaps before diving into syllabus topics.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-white/5 text-xs font-medium text-emerald-300 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Diagnostic assessment & gap analysis"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#181316]/90 border border-rose-500/25 shadow-glow-red hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-rose-950 text-rose-300 border border-rose-500/30"
  }, "STEP 02"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-xs font-bold text-rose-300"
  }, "2")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Strengthen"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Build a strong foundation through conceptual clarity. Complex principles are mapped to real-world examples with deep classroom discussions.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-white/5 text-xs font-medium text-rose-300 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "First-principles concept mastery"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#121915]/90 border border-emerald-500/25 shadow-glow-green hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-emerald-950 text-emerald-300 border border-emerald-500/30"
  }, "STEP 03"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-300"
  }, "3")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Practise"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Reinforce understanding through regular practice, assignments and assessments. Students solve problems with increasing difficulty gradients.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-white/5 text-xs font-medium text-emerald-300 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Curated question banks & drills"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#181316]/90 border border-rose-500/25 shadow-glow-red hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-rose-950 text-rose-300 border border-rose-500/30"
  }, "STEP 04"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-xs font-bold text-rose-300"
  }, "4")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Progress"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Review progress, address challenges and continuously improve. Feedback loops with students and parents ensure consistent academic growth.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-white/5 text-xs font-medium text-rose-300 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Continuous progress evaluation"))))))), /*#__PURE__*/React.createElement("section", {
    id: "faculty",
    className: "py-20 bg-[#0A0E0C] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold tracking-wide uppercase text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
  }, "Leadership & Educators"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "Meet the Mentors Behind Two Wise."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300 leading-relaxed"
  }, "Founded by passionate, experienced educators dedicated to student-centric guidance, conceptual clarity, and building genuine academic confidence.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 sm:p-10 rounded-4xl bg-[#121915]/95 border border-emerald-500/30 shadow-glow-green hover-card-lift flex flex-col justify-between space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40"
  }, "Co-Founder & Director"), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white pt-1"
  }, "Reva Mehta"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm font-semibold text-emerald-300/80"
  }, "Senior-Secondary Educator & Academic Director")), /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-3xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-extrabold text-xl text-emerald-300"
  }, "RM"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 pt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1.5 rounded-xl bg-[#17231E] border border-emerald-500/30 text-xs font-semibold text-emerald-200 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduationCap",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "MBA, SIBM Pune")), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1.5 rounded-xl bg-[#17231E] border border-emerald-500/30 text-xs font-semibold text-emerald-200 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "6+ Years Teaching Experience")), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1.5 rounded-xl bg-[#17231E] border border-emerald-500/30 text-xs font-semibold text-emerald-200 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookOpen",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Ex-Symbiosis International School"))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-300 leading-relaxed pt-2"
  }, "An MBA graduate from the prestigious Symbiosis Institute of Business Management (SIBM), Pune, Reva brings over six years of senior-secondary teaching experience, including teaching at Symbiosis International School. She specializes in higher-grade analytical thinking, rigorous curriculum mastery, and examination strategy across ICSE, CBSE, IB, and IGCSE boards."), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-[#0C120F] border border-emerald-500/20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs italic text-emerald-100/90 leading-relaxed"
  }, "“True learning begins when students understand the 'why' behind every concept. We deconstruct complex theories into intuitive, relatable logic so students build permanent mastery.”"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-emerald-500/20 grid grid-cols-2 gap-3 text-xs font-medium text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-emerald-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Senior-Secondary Strategy")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-emerald-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Analytical Problem Solving")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-emerald-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Board Exam Excellence")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-emerald-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "1-on-1 Concept Mentoring")))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 sm:p-10 rounded-4xl bg-[#181316]/95 border border-rose-500/30 shadow-glow-red hover-card-lift flex flex-col justify-between space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] font-bold bg-rose-950 text-rose-300 border border-rose-500/40"
  }, "Co-Founder & Educator"), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white pt-1"
  }, "Diya Shah"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm font-semibold text-rose-300/80"
  }, "Foundational Stage & Upper-Primary Specialist")), /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-3xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center shrink-0 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-extrabold text-xl text-rose-300"
  }, "DS"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 pt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1.5 rounded-xl bg-[#261A1F] border border-rose-500/30 text-xs font-semibold text-rose-200 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduationCap",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "BBA in Finance")), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1.5 rounded-xl bg-[#261A1F] border border-rose-500/30 text-xs font-semibold text-rose-200 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "6+ Years Teaching Experience")), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1.5 rounded-xl bg-[#261A1F] border border-rose-500/30 text-xs font-semibold text-rose-200 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smile",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Upper-Primary & Foundation Expert"))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-300 leading-relaxed pt-2"
  }, "A BBA Finance graduate with over six years of dedicated teaching experience, Diya specializes in foundational learning for upper-primary and middle-school students. Her teaching methodology focuses on demystifying core concepts, igniting curiosity, and creating a supportive classroom where asking questions is always celebrated."), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-[#120B0E] border border-rose-500/20"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs italic text-rose-100/90 leading-relaxed"
  }, "“When children feel heard and encouraged, learning naturally shifts from an intimidating chore to an exciting, joyful journey of discovery.”"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-rose-500/20 grid grid-cols-2 gap-3 text-xs font-medium text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-rose-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Foundational Concept Building")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-rose-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Interactive Visual Teaching")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-rose-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Judgment-Free Doubt Solving")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-rose-400 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "Student Confidence Building"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 p-6 rounded-3xl bg-[#0E1712] border border-emerald-500/30 shadow-soft flex flex-col sm:flex-row items-center gap-4 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-emerald-200"
  }, "Inaugurated by Distinguished Academic Leaders"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Two Wise Academy was inaugurated in the presence of esteemed chief guest ", /*#__PURE__*/React.createElement("strong", null, "Mr. Frank Freese"), " (former Principal of The Bishop's School, Pune) and ", /*#__PURE__*/React.createElement("strong", null, "Hon. Mrs. Siddhi Avinash Shilimkar"), " (Corporator), commending the founders' progressive vision for conceptual, student-centric coaching."))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 bg-[#0B100D] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold tracking-wide uppercase text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
  }, "A Partnership in Learning"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "Designed for Parents. Built for Students.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 sm:p-10 rounded-4xl bg-[#101915]/90 border border-emerald-500/25 shadow-glow-green flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-xs font-bold text-emerald-300 border border-emerald-500/30"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "FOR PARENTS")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug"
  }, "Confidence That Comes from Knowing Your Child Is Supported."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base leading-relaxed"
  }, "As parents, watching your child struggle with heavy portions, homework battles, or exam stress is difficult. Two Wise Academy steps in as a dedicated academic partner you can rely on."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3.5 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-emerald-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-white block"
  }, "Transparent Academic Feedback"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-300"
  }, "Regular updates on progress, test performance, and conceptual growth."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-emerald-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-white block"
  }, "Reduced Homework Friction"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-300"
  }, "Structured study discipline so learning happens effectively during coaching hours."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-emerald-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-white block"
  }, "Safe, Modern Classroom Environment"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-300"
  }, "Bright, comfortable offline classrooms at Gultekdi, Pune with respectful faculty."))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 mt-6 border-t border-emerald-500/20"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-500/30 transition-colors shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Schedule a Parent Consultation"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 sm:p-10 rounded-4xl bg-[#191216]/90 border border-rose-500/25 shadow-glow-red flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950 text-xs font-bold text-rose-300 border border-rose-500/30"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "FOR STUDENTS")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug"
  }, "Learning Can Be Interesting. And We Make It So."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base leading-relaxed"
  }, "No boring lectures, no endless copying from boards, and absolutely no scolding for asking questions. We make complex concepts click with fun discussions and practical understanding."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3.5 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-rose-950 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-rose-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-white block"
  }, "Zero Fear of Doubts"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-300"
  }, "Ask the same question five times until it completely makes sense to you."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-rose-950 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-rose-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-white block"
  }, "Friendly Mentors, Not Stiff Tutors"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-300"
  }, "Teachers who listen, cheer your improvements, and make learning enjoyable."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-rose-950 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-rose-400"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-white block"
  }, "Confidence for School & Board Exams"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-300"
  }, "Know exactly how to approach tricky questions and write crisp answers."))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 mt-6 border-t border-rose-500/20"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-500/30 transition-colors shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Experience a Classroom Session"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 relative overflow-hidden bg-gradient-to-r from-[#0C1510] via-[#141014] to-[#0D1612] border-y border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-glow-green border border-white/20 inline-flex items-center mx-auto"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo.png",
    alt: "Two Wise",
    className: "h-12 w-auto object-contain"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "Ready to Make Learning Smarter?"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
  }, "Give your child the academic support, guidance and confidence to reach their potential. Offline classroom coaching in Pune for Grades 4–12."), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-heading font-bold text-base bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_30px_rgba(110,231,183,0.35)] active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Enquire Now"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-heading font-semibold text-base bg-white/5 text-rose-200 border border-rose-400/40 hover:bg-white/10 transition-all shadow-glow-red active:scale-95"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-5 h-5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Chat on WhatsApp"))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-20 bg-[#0A0E0C] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-bold tracking-wide uppercase text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
  }, "Get In Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
  }, "Let's Start Their Learning Journey."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300"
  }, "Fill out the enquiry form below or message us directly on WhatsApp. We look forward to welcoming you to Two Wise Academy.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 bg-[#121815]/95 p-6 sm:p-10 rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
  }, isSubmitted ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 mx-auto rounded-3xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shadow-glow-green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-8 h-8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-white"
  }, "Thank You for Reaching Out!"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-300 max-w-md mx-auto"
  }, "We have received your enquiry for ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-300"
  }, formData.studentName), " (", formData.grade, ", ", formData.board, "). Our academic counselor will contact you shortly.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 max-w-md mx-auto space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-medium text-emerald-200"
  }, "Want an instant response? You can also forward these details directly to our WhatsApp:"), /*#__PURE__*/React.createElement("a", {
    href: generatedWhatsAppLink,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 text-gray-950 font-bold text-sm transition-all shadow-glow-green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-5 h-5 text-gray-950"
  }), /*#__PURE__*/React.createElement("span", null, "Send Enquiry via WhatsApp Now"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
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
    },
    className: "text-xs text-gray-400 hover:text-white underline"
  }, "Submit another enquiry")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-300"
  }, "Parent's Name ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose-400"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. Rahul Sharma",
    value: formData.parentName,
    onChange: e => setFormData({
      ...formData,
      parentName: e.target.value
    }),
    className: `w-full px-4 py-3 rounded-xl bg-[#0B100E] border ${formErrors.parentName ? 'border-rose-500 bg-rose-950/20' : 'border-white/10'} focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white placeholder-gray-500`
  }), formErrors.parentName && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-400"
  }, formErrors.parentName)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-300"
  }, "Student's Name ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose-400"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. Aryan Sharma",
    value: formData.studentName,
    onChange: e => setFormData({
      ...formData,
      studentName: e.target.value
    }),
    className: `w-full px-4 py-3 rounded-xl bg-[#0B100E] border ${formErrors.studentName ? 'border-rose-500 bg-rose-950/20' : 'border-white/10'} focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white placeholder-gray-500`
  }), formErrors.studentName && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-400"
  }, formErrors.studentName))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-300"
  }, "Phone Number (WhatsApp) ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose-400"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute left-3 top-3 text-sm text-gray-400 font-medium"
  }, "+91"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "90496 50666",
    value: formData.phone,
    onChange: e => setFormData({
      ...formData,
      phone: e.target.value
    }),
    className: `w-full pl-12 pr-4 py-3 rounded-xl bg-[#0B100E] border ${formErrors.phone ? 'border-rose-500 bg-rose-950/20' : 'border-white/10'} focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white placeholder-gray-500`
  })), formErrors.phone && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-400"
  }, formErrors.phone)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-300"
  }, "Grade / Standard ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose-400"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: formData.grade,
    onChange: e => setFormData({
      ...formData,
      grade: e.target.value
    }),
    className: "w-full px-4 py-3 rounded-xl bg-[#0B100E] border border-white/10 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white"
  }, [4, 5, 6, 7, 8, 9, 10, 11, 12].map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: `Grade ${g}`,
    className: "bg-[#0A0E0C] text-white"
  }, "Grade ", g))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-300 block"
  }, "Educational Board ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose-400"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5"
  }, ['ICSE', 'CBSE', 'IB', 'IGCSE'].map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    type: "button",
    onClick: () => setFormData({
      ...formData,
      board: b
    }),
    className: `py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${formData.board === b ? 'bg-gradient-to-r from-emerald-400 to-teal-300 text-gray-950 shadow-glow-green font-extrabold' : 'bg-[#0B100E] text-gray-300 border border-white/10 hover:border-white/20'}`
  }, b)))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-300 block"
  }, "Subjects Interested In ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose-400"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ['Mathematics', 'Science', 'English', 'Social Studies', 'Languages', 'Computer Applications', 'All Subjects'].map(sub => {
    const active = formData.subjects.includes(sub);
    return /*#__PURE__*/React.createElement("button", {
      key: sub,
      type: "button",
      onClick: () => toggleSubject(sub),
      className: `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${active ? 'bg-emerald-950 text-emerald-200 border border-emerald-500/40 shadow-glow-green' : 'bg-[#0B100E] text-gray-300 border border-white/10 hover:border-white/20'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `w-1.5 h-1.5 rounded-full ${active ? 'bg-emerald-400' : 'bg-gray-500'}`
    }), /*#__PURE__*/React.createElement("span", null, sub));
  })), formErrors.subjects && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-400"
  }, formErrors.subjects)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-300"
  }, "Message / Learning Goals (Optional)"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Tell us about specific concepts your child needs assistance with or current school syllabus...",
    value: formData.message,
    onChange: e => setFormData({
      ...formData,
      message: e.target.value
    }),
    className: "w-full px-4 py-3 rounded-xl bg-[#0B100E] border border-white/10 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm text-white placeholder-gray-500"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 font-heading font-bold text-sm transition-all shadow-[0_0_30px_rgba(110,231,183,0.35)] hover:shadow-[0_0_40px_rgba(110,231,183,0.5)] active:scale-95 flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "Submit Enquiry"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-400 text-center"
  }, "Your details are safe. We will never spam or share your contact number."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-[#0E1712]/90 border border-emerald-500/30 shadow-glow-green space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Chat Directly on WhatsApp"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-emerald-300"
  }, "Quick answers for batches & fees"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Have quick questions regarding timings, batch availability, or diagnostic sessions? Reach us instantly on WhatsApp."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 text-gray-950 font-bold text-sm transition-all shadow-glow-green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp: +91 90496 50666")))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-[#121815]/90 border border-white/10 shadow-soft space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Academy Location"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Offline Classroom Coaching"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-sm text-gray-300"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-white leading-snug"
  }, "Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 leading-relaxed"
  }, "Centrally accessible offline classroom setup designed for modern, student-friendly interactive coaching."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/maps/search/?api=1&query=Two+Wise+Academy+Prasad+Apartments+TMV+Colony+Gultekdi+Pune+411037",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-emerald-200 hover:underline pt-1"
  }, /*#__PURE__*/React.createElement("span", null, "Get Directions on Google Maps"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-white/5 flex items-center justify-between text-xs text-gray-400"
  }, /*#__PURE__*/React.createElement("span", null, "Classroom Mode:"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-emerald-300"
  }, "Offline In-Person Batches"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-[#181316]/90 border border-rose-500/20 shadow-soft space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-rose-950 border border-rose-500/30 flex items-center justify-center text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, "Follow Our Journey"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Classroom glimpses & study tips"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 leading-relaxed"
  }, "Join our growing community on Instagram for conceptual breakdowns, student updates, and learning motivation."), /*#__PURE__*/React.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/twowise_academy/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300 hover:underline"
  }, /*#__PURE__*/React.createElement("span", null, "@twowise_academy on Instagram"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })))))))), /*#__PURE__*/React.createElement("footer", {
    className: "bg-[#070A09] border-t border-white/5 pt-16 pb-12 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-sm border border-white/20 inline-flex items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo.png",
    alt: "Two Wise Academy",
    className: "h-12 w-auto object-contain"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "font-heading font-semibold text-sm text-gray-200 tracking-wide"
  }, "\"Learn Smart. Think Wise.\""), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 max-w-sm leading-relaxed"
  }, "Two Wise Academy is a contemporary offline classroom coaching academy based in Pune, Maharashtra. Empowering students across ICSE, CBSE, IB, and IGCSE curricula (Grades 4–12) with conceptual clarity, individual attention, and academic confidence."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center transition-colors hover:bg-emerald-900",
    title: "WhatsApp"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/twowise_academy/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-9 h-9 rounded-xl bg-rose-950 border border-rose-500/30 text-rose-300 flex items-center justify-center transition-colors hover:bg-rose-900",
    title: "Instagram"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xs uppercase tracking-wider text-emerald-300"
  }, "Navigation"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-xs text-gray-400"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#hero",
    className: "hover:text-white hover:underline"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "hover:text-white hover:underline"
  }, "About Us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#boards",
    className: "hover:text-white hover:underline"
  }, "Programs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#approach",
    className: "hover:text-white hover:underline"
  }, "Our Approach")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#why-us",
    className: "hover:text-white hover:underline"
  }, "Why Two Wise")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faculty",
    className: "hover:text-white hover:underline"
  }, "Faculty & Mentors")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "hover:text-white hover:underline"
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xs uppercase tracking-wider text-rose-300"
  }, "Curricula & Grades"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-xs text-gray-400"
  }, /*#__PURE__*/React.createElement("li", null, "ICSE & ISC Board (Grades 4–12)"), /*#__PURE__*/React.createElement("li", null, "CBSE Board (Grades 4–12)"), /*#__PURE__*/React.createElement("li", null, "IB Curriculum (Grades 4–12)"), /*#__PURE__*/React.createElement("li", null, "IGCSE & Cambridge A-Levels (Grades 4–12)"), /*#__PURE__*/React.createElement("li", null, "All Core & Elective Subjects"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xs uppercase tracking-wider text-emerald-300"
  }, "Contact & Location"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-gray-400"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:+919049650666",
    className: "hover:text-white"
  }, "+91 90496 50666")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-white"
  }, "WhatsApp: 9049650666")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/twowise_academy/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-white"
  }, "@twowise_academy")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2 pt-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, "Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037"))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4"
  }, /*#__PURE__*/React.createElement("p", null, "© 2026 Two Wise Academy. All Rights Reserved."), /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-400/80"
  }, "Offline Classroom Coaching in Pune"), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("span", {
    className: "text-rose-300/80"
  }, "\"Learn Smart. Think Wise.\""))))), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 right-6 z-50 flex items-center group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-[#111714] border border-emerald-500/30 text-emerald-200 text-xs font-medium shadow-[0_0_20px_rgba(0,0,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
  }, "Chat with Two Wise Academy"), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Chat with Two Wise Academy on WhatsApp",
    className: "relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 shadow-[0_0_30px_rgba(52,211,153,0.4)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping-slow pointer-events-none"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-7 h-7 relative z-10"
  }))));
}

// Mount the React Application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(/*#__PURE__*/React.createElement(App, null));