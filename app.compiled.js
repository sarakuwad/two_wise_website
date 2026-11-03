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
  src: full ? "./logo.png" : "./logo-owl.png",
  alt: "Two Wise Academy",
  className: `${className} object-contain`
});

// Lucide icon helper component using lucide-react or SVG equivalents
const Icon = ({
  name,
  className = "w-5 h-5",
  color
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
    className: "min-h-screen flex flex-col bg-white text-brand-charcoal selection:bg-brand-lavender selection:text-brand-charcoal font-sans"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-lavender/60 border-b border-brand-lavender/80 px-4 py-2 text-xs font-medium text-brand-charcoal text-center flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-2 h-2 rounded-full bg-brand-mintDark animate-pulse"
  }), /*#__PURE__*/React.createElement("span", null, "Admissions Open for 2026–27 • Offline Classroom Coaching in Pune • Grades 1 to 10 (ICSE, CBSE, IB, IGCSE)"), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "ml-2 underline font-semibold hover:text-brand-lavenderDark hidden sm:inline"
  }, "Book a Consultation →")), /*#__PURE__*/React.createElement("header", {
    className: `sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'nav-glass shadow-soft border-b border-gray-100 py-3' : 'bg-white/95 py-4'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center gap-3 group focus:outline-none"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo.png",
    alt: "Two Wise Academy",
    className: "h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex items-center space-x-1 lg:space-x-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#hero",
    className: "px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors"
  }, "About Us"), /*#__PURE__*/React.createElement("a", {
    href: "#boards",
    className: "px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors"
  }, "Programs"), /*#__PURE__*/React.createElement("a", {
    href: "#approach",
    className: "px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors"
  }, "Our Approach"), /*#__PURE__*/React.createElement("a", {
    href: "#why-us",
    className: "px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors"
  }, "Why Two Wise"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-charcoal hover:bg-gray-50 rounded-xl transition-colors"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-brand-mint/70 hover:bg-brand-mint border border-emerald-200/60 rounded-xl transition-all",
    title: "Chat on WhatsApp"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4 text-emerald-600"
  }), /*#__PURE__*/React.createElement("span", null, "9049650666")), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm bg-brand-charcoal text-white hover:bg-black transition-all shadow-sm hover:shadow active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Enquire Now"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex md:hidden items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-charcoal text-white"
  }, "Enquire"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    className: "p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none",
    "aria-label": "Toggle menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mobileMenuOpen ? "x" : "menu",
    className: "w-6 h-6"
  }))))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden border-b border-gray-100 bg-white/98 px-4 pt-2 pb-6 space-y-3 animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-1"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('hero'),
    className: "px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('about'),
    className: "px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
  }, "About Us"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('boards'),
    className: "px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
  }, "Programs (Boards)"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('approach'),
    className: "px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
  }, "Our Approach"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('why-us'),
    className: "px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
  }, "Why Two Wise"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('contact'),
    className: "px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-brand-lavender/40 rounded-xl cursor-pointer"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-gray-100 flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-mint text-emerald-900 font-semibold text-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-5 h-5 text-emerald-700"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp: +91 90496 50666")), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full py-3 rounded-xl bg-brand-charcoal text-white font-semibold text-sm shadow-sm"
  }, "Enquire Now")))), /*#__PURE__*/React.createElement("section", {
    id: "hero",
    className: "relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-10 w-96 h-96 bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-10 left-5 w-80 h-80 bg-brand-blue/40 rounded-full blur-3xl pointer-events-none -z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/2 right-1/3 w-64 h-64 bg-brand-peach/30 rounded-full blur-3xl pointer-events-none -z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender/70 border border-brand-lavenderDark/20 text-xs font-semibold text-brand-charcoal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-brand-lavenderDark"
  }), /*#__PURE__*/React.createElement("span", null, "Offline Classroom Coaching • Pune, Maharashtra")), /*#__PURE__*/React.createElement("h1", {
    className: "font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.12]"
  }, "Learn Smart. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative z-10"
  }, "Think Wise."), /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/80 -z-0 rounded-md"
  }))), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-xl sm:text-2xl font-semibold text-gray-700"
  }, "Building brighter minds, one concept at a time."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed"
  }, "Personalised classroom learning for students from ", /*#__PURE__*/React.createElement("strong", {
    className: "text-brand-charcoal font-semibold"
  }, "Grades 1–10"), " across ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-brand-charcoal"
  }, "ICSE, CBSE, IB"), " and ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-brand-charcoal"
  }, "IGCSE"), " boards."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('boards'),
    className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-heading font-semibold text-base bg-brand-charcoal text-white hover:bg-black transition-all shadow-soft hover:shadow-soft-lg active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Explore Our Programs"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-heading font-semibold text-base bg-brand-lavender hover:bg-brand-lavender/80 text-brand-charcoal border border-brand-lavenderDark/10 transition-all hover:scale-[1.02] active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Enquire Now"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-brand-charcoal block"
  }, "4 Boards"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500"
  }, "ICSE, CBSE, IB, IGCSE")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-brand-charcoal block"
  }, "Grades 1–10"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500"
  }, "All Subjects Covered")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-brand-charcoal block"
  }, "Small Batches"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500"
  }, "Individual Attention")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-brand-charcoal block"
  }, "Pune Center"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500"
  }, "Offline Classrooms")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-md lg:max-w-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-3xl p-6 sm:p-8 bg-white border border-gray-100 shadow-soft-lg overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-lavender/30 to-transparent -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex items-center justify-between pb-6 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-brand-lavender flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduationCap",
    className: "w-5 h-5 text-brand-charcoal"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-brand-charcoal"
  }, "The Two Wise Classroom"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Engaging • Offline • Pune"))), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-mint text-emerald-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"
  }), "Active Batches")), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 my-6 py-4"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 240",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full h-auto drop-shadow-sm"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "20",
    width: "380",
    height: "200",
    rx: "16",
    fill: "#F8FAFC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 170L390 170",
    stroke: "#E2E8F0",
    strokeWidth: "2",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "70",
    y: "35",
    width: "260",
    height: "90",
    rx: "10",
    fill: "#FFFFFF",
    stroke: "#EAE5FA",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "90",
    y1: "55",
    x2: "160",
    y2: "55",
    stroke: "#6C5CE7",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "90",
    y1: "70",
    x2: "230",
    y2: "70",
    stroke: "#DFEDFA",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "90",
    y1: "85",
    x2: "190",
    y2: "85",
    stroke: "#DFEDFA",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "280",
    cy: "80",
    r: "22",
    fill: "#FFF3D6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M272 80L278 86L290 74",
    stroke: "#F7B731",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "90",
    y: "105",
    fill: "#252525",
    fontSize: "11",
    fontWeight: "600",
    fontFamily: "sans-serif"
  }, "Concept Clarity > Rote Learning"), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "155",
    width: "110",
    height: "42",
    rx: "8",
    fill: "#DFEDFA"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "230",
    y: "155",
    width: "110",
    height: "42",
    rx: "8",
    fill: "#FCE8DD"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "115",
    cy: "140",
    r: "14",
    fill: "#6C5CE7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "115",
    cy: "136",
    r: "6",
    fill: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "95",
    y: "162",
    width: "24",
    height: "16",
    rx: "2",
    fill: "#FFFFFF",
    stroke: "#252525",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "285",
    cy: "140",
    r: "14",
    fill: "#20BF6B"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "285",
    cy: "136",
    r: "6",
    fill: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "265",
    y: "162",
    width: "26",
    height: "16",
    rx: "3",
    fill: "#FFFFFF",
    stroke: "#252525",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "115",
    r: "16",
    fill: "#252525"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "110",
    r: "7",
    fill: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M192 135C192 125 208 125 208 135",
    stroke: "#252525",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M210 120L230 100",
    stroke: "#6C5CE7",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 grid grid-cols-2 gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 p-2.5 rounded-xl bg-brand-mint/50 border border-emerald-100"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    className: "w-4 h-4 text-emerald-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-emerald-900"
  }, "8–10 Students Max")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 p-2.5 rounded-xl bg-brand-yellow/60 border border-amber-100"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    className: "w-4 h-4 text-amber-700"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-amber-900"
  }, "Zero Rote Learning")))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-soft animate-float flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-xl bg-brand-lavender flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    className: "w-4 h-4 text-brand-charcoal"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-brand-charcoal block leading-none"
  }, "Concept First"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-500"
  }, "Every Topic Understood"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-5 -right-3 sm:-right-6 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-soft animate-float-reverse flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    className: "w-4 h-4 text-brand-charcoal"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-brand-charcoal block leading-none"
  }, "All 4 Curricula"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-500"
  }, "ICSE • CBSE • IB • IGCSE")))))))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-20 bg-white relative border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-full bg-brand-peach/80 border border-amber-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal"
  }, "Our Educational Philosophy"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "Education That Goes Beyond Textbooks."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-600 leading-relaxed"
  }, "At Two Wise Academy, we believe every student learns differently. Our approach combines structured academic guidance, individual attention and conceptual learning to help students develop the confidence to excel.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 rounded-3xl bg-brand-lavender/60 border border-brand-lavenderDark/10 hover-card-lift space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lightbulb",
    className: "w-7 h-7 text-brand-lavenderDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Understand Better"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "We break down complex formulas and theories into relatable everyday concepts. No blindly memorising steps without understanding why they work."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 pt-2 text-xs font-medium text-gray-700"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-brand-lavenderDark"
  }), /*#__PURE__*/React.createElement("span", null, "First-principles conceptual foundation")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-brand-lavenderDark"
  }), /*#__PURE__*/React.createElement("span", null, "Interactive question-and-answer dialogue")))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 rounded-3xl bg-brand-blue/60 border border-brand-blueDark/10 hover-card-lift space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    className: "w-7 h-7 text-brand-blueDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Learn Smarter"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Master active learning habits, effective revision pacing, and clear problem-solving frameworks that save hours of unproductive cramming."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 pt-2 text-xs font-medium text-gray-700"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-brand-blueDark"
  }), /*#__PURE__*/React.createElement("span", null, "Structured step-by-step study methods")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-brand-blueDark"
  }), /*#__PURE__*/React.createElement("span", null, "Targeted practice on high-yield questions")))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 rounded-3xl bg-brand-mint/60 border border-brand-mintDark/10 hover-card-lift space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smile",
    className: "w-7 h-7 text-brand-mintDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Grow Confidently"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "When doubts are welcomed and mistakes become learning opportunities, students naturally develop self-reliance, curiosity, and examination poise."), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 pt-2 text-xs font-medium text-gray-700"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-brand-mintDark"
  }), /*#__PURE__*/React.createElement("span", null, "Judgment-free doubt clarification")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-brand-mintDark"
  }), /*#__PURE__*/React.createElement("span", null, "Confidence to tackle unfamiliar problems"))))))), /*#__PURE__*/React.createElement("section", {
    id: "boards",
    className: "py-20 bg-gray-50/50 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-full bg-brand-blue/80 border border-blue-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal"
  }, "Targeted Board Excellence"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "One Academy. Multiple Curricula."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-600"
  }, "Comprehensive academic support across leading educational boards.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-brand-lavender/50 border border-purple-200/40 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-purple-700"
  }, "ICSE"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm"
  }, "Grades 1–10")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-brand-charcoal"
  }, "ICSE Board"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-purple-900/70 font-medium"
  }, "Council for the Indian School Certificate")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "In-depth subject mastery with strong emphasis on English language precision, descriptive scientific reasoning, and analytical Mathematics."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-purple-600"
  }), /*#__PURE__*/React.createElement("span", null, "Detailed board exam answering techniques")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-purple-600"
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
    className: "w-full py-2.5 rounded-xl bg-white hover:bg-purple-50 text-brand-charcoal font-semibold text-xs border border-purple-200 transition-colors"
  }, "Enquire for ICSE →"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-brand-blue/50 border border-blue-200/40 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-blue-700"
  }, "CBSE"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm"
  }, "Grades 1–10")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-brand-charcoal"
  }, "CBSE Board"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-blue-900/70 font-medium"
  }, "Central Board of Secondary Education")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Solid NCERT foundation, competency-based question preparation, and critical conceptual clarity building strong fundamentals for higher grades."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-blue-600"
  }), /*#__PURE__*/React.createElement("span", null, "NCERT line-by-line concept mastery")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-blue-600"
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
    className: "w-full py-2.5 rounded-xl bg-white hover:bg-blue-50 text-brand-charcoal font-semibold text-xs border border-blue-200 transition-colors"
  }, "Enquire for CBSE →"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-brand-peach/50 border border-orange-200/40 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-orange-600"
  }, "IB"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm"
  }, "Grades 1–10")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-brand-charcoal"
  }, "IB (PYP & MYP)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-orange-900/70 font-medium"
  }, "International Baccalaureate")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Inquiry-based learning tailored to IB criteria (A, B, C, D), global context integration, analytical writing, and independent research skills."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-orange-500"
  }), /*#__PURE__*/React.createElement("span", null, "Criterion-referenced assessment prep")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-orange-500"
  }), /*#__PURE__*/React.createElement("span", null, "Interdisciplinary & MYP eAssessment readiness")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setFormData(prev => ({
        ...prev,
        board: 'IB'
      }));
      scrollToSection('contact');
    },
    className: "w-full py-2.5 rounded-xl bg-white hover:bg-orange-50 text-brand-charcoal font-semibold text-xs border border-orange-200 transition-colors"
  }, "Enquire for IB →"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-brand-mint/50 border border-emerald-200/40 hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center font-heading font-black text-lg text-emerald-700"
  }, "IGCSE"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-charcoal shadow-sm"
  }, "Grades 1–10")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-xl font-bold text-brand-charcoal"
  }, "Cambridge IGCSE"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-emerald-900/70 font-medium"
  }, "Cambridge Assessment International")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Practical comprehension, structured past paper mastery, mark-scheme precision, and deep command-term understanding for Cambridge assessments."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 pt-2 text-xs text-gray-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-600"
  }), /*#__PURE__*/React.createElement("span", null, "Topic-wise past paper drill & examiner tips")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-600"
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
    className: "w-full py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-brand-charcoal font-semibold text-xs border border-emerald-200 transition-colors"
  }, "Enquire for IGCSE →")))))), /*#__PURE__*/React.createElement("section", {
    id: "subjects",
    className: "py-20 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-full bg-brand-yellow/80 border border-amber-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal"
  }, "Holistic Academic Coverage"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "All Subjects. One Learning Destination."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-600 leading-relaxed"
  }, "From strengthening fundamentals to mastering advanced concepts, we provide academic support across all subjects and curriculum requirements."), /*#__PURE__*/React.createElement("div", {
    className: "inline-block p-3 rounded-2xl bg-brand-lavender/40 border border-purple-200/40 text-xs font-medium text-brand-charcoal mt-2"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "font-semibold text-purple-900"
  }, "Note:"), " We cater to ", /*#__PURE__*/React.createElement("em", null, "all subjects"), " across your child's syllabus. If a particular subject is not listed below, our faculty accommodates it within your board curriculum!")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calculator",
    className: "w-6 h-6 text-brand-lavenderDark"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Mathematics"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500 font-medium"
  }, "Grades 1 to 10"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed mb-4"
  }, "Arithmetic, Pre-Algebra, Geometry, Trigonometry, Statistics, Mensuration, and Word Problems deconstructed through step-by-step logic."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Conceptual Clarity"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Step-by-Step Proofs"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Speed & Accuracy"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "microscope",
    className: "w-6 h-6 text-brand-blueDark"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Science"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500 font-medium"
  }, "Physics • Chemistry • Biology"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed mb-4"
  }, "General Science for primary grades; segregated Physics, Chemistry, Biology for middle and secondary. Real-life demonstrations & clear diagrams."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Visual Diagrams"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Numerical Problem Solving"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Scientific Reasoning"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-peach flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookOpen",
    className: "w-6 h-6 text-brand-peachDark"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "English"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500 font-medium"
  }, "Language & Literature"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed mb-4"
  }, "Grammar mastery, comprehension synthesis, creative essay writing, letter/notice formats, Shakespearean drama & poetry analysis."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Vocabulary Expansion"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Creative Composition"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Grammar Rules"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    className: "w-6 h-6 text-brand-mintDark"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Social Studies"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500 font-medium"
  }, "History • Civics • Geography"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed mb-4"
  }, "Engaging narrative timelines, political systems, topographical map reading, weather systems, and environmental case studies."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Timeline Mapping"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Topo Map Skills"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Structured Answers"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "languages",
    className: "w-6 h-6 text-brand-yellowDark"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Languages"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500 font-medium"
  }, "Regional & Foreign Options"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed mb-4"
  }, "Hindi, Marathi, Sanskrit, French, German, and Spanish. Emphasis on grammar, correct pronunciation, sentence framing, and literature."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Hindi & Marathi"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "French & German"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Reading & Writing"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cpu",
    className: "w-6 h-6 text-brand-lavenderDark"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Curriculum-Specific"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500 font-medium"
  }, "Computers, Economics & More"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed mb-4"
  }, "Computer Applications (Java, Python, ICT), Commercial Studies, Economics, Environmental Management, and board electives."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Computer Apps"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Economics"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] font-medium text-gray-600"
  }, "Commercial Studies")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 text-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-brand-charcoal font-semibold text-sm transition-colors"
  }, /*#__PURE__*/React.createElement("span", null, "Have a specific subject or textbook requirement? Ask us directly"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "why-us",
    className: "py-20 bg-gray-50/50 relative border-y border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-full bg-brand-lavender/80 border border-purple-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal"
  }, "The Two Wise Advantage"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "Because Every Student Deserves to Be Understood."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-600"
  }, "We replace overwhelming tuition batches with personal mentorship, clarity and consistent academic growth.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heartHandshake",
    className: "w-6 h-6 text-brand-lavenderDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Individual Attention"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Teaching that recognises every student's strengths and learning needs. No student is left behind in a sea of faces.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    className: "w-6 h-6 text-brand-blueDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Small Batches"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "A more interactive classroom environment with meaningful student participation, discussions and personal mentoring.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-peach flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboardCheck",
    className: "w-6 h-6 text-brand-peachDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Regular Tests & Assessments"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Monitor academic progress and identify areas for improvement through structured, diagnostic chapter-wise tests.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "messageSquare",
    className: "w-6 h-6 text-brand-mintDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Doubt-Solving Sessions"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Encourage students to ask questions freely and understand concepts thoroughly without hesitation or fear.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    className: "w-6 h-6 text-brand-yellowDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Personalised Study Plans"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Structured academic guidance based on individual learning requirements, school timelines and revision milestones.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    className: "w-6 h-6 text-brand-lavenderDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Parent-Teacher Feedback"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Keep parents informed about their child's learning journey with timely, constructive and transparent communication.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-6 h-6 text-brand-blueDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Exam Preparation"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Focused preparation to help students approach school exams and board examinations with confidence and clarity.")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduationCap",
    className: "w-6 h-6 text-brand-mintDark"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Experienced Faculty"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Learn under the guidance of experienced educators who specialise in curriculum frameworks and modern teaching methods."))))), /*#__PURE__*/React.createElement("section", {
    id: "approach",
    className: "py-20 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-full bg-brand-mint/80 border border-emerald-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal"
  }, "Pedagogical Framework"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "Smart Learning. Step by Step."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-600"
  }, "A structured four-phase methodology engineered for long-term retention and conceptual mastery.")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-brand-lavender via-brand-blue to-brand-mint -translate-y-8 -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-lavender text-purple-900"
  }, "STEP 01"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-brand-lavender/50 flex items-center justify-center text-xs font-bold text-brand-charcoal"
  }, "1")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Understand"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Understand each student's academic requirements and learning style. We identify specific learning gaps before diving into syllabus topics.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-gray-50 text-xs font-medium text-purple-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Diagnostic assessment & gap analysis"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-blue text-blue-900"
  }, "STEP 02"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-brand-blue/50 flex items-center justify-center text-xs font-bold text-brand-charcoal"
  }, "2")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Strengthen"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Build a strong foundation through conceptual clarity. Complex principles are mapped to real-world examples with deep classroom discussions.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-gray-50 text-xs font-medium text-blue-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "First-principles concept mastery"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-peach text-orange-900"
  }, "STEP 03"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-brand-peach/50 flex items-center justify-center text-xs font-bold text-brand-charcoal"
  }, "3")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Practise"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Reinforce understanding through regular practice, assignments and assessments. Students solve problems with increasing difficulty gradients.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-gray-50 text-xs font-medium text-orange-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Curated question banks & drills"))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-white border border-gray-100 shadow-soft hover-card-lift flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-extrabold font-heading bg-brand-mint text-emerald-900"
  }, "STEP 04"), /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-full bg-brand-mint/50 flex items-center justify-center text-xs font-bold text-brand-charcoal"
  }, "4")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Progress"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm leading-relaxed"
  }, "Review progress, address challenges and continuously improve. Feedback loops with students and parents ensure consistent academic growth.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-gray-50 text-xs font-medium text-emerald-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "Continuous progress evaluation"))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 bg-gray-50/50 relative border-t border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-full bg-brand-peach/80 border border-orange-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal"
  }, "A Partnership in Learning"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "Designed for Parents. Built for Students.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 sm:p-10 rounded-4xl bg-brand-blue/50 border border-blue-200/50 shadow-soft flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-blue-900 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    className: "w-4 h-4 text-blue-600"
  }), /*#__PURE__*/React.createElement("span", null, "FOR PARENTS")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-snug"
  }, "Confidence That Comes from Knowing Your Child Is Supported."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm sm:text-base leading-relaxed"
  }, "As parents, watching your child struggle with heavy portions, homework battles, or exam stress is difficult. Two Wise Academy steps in as a dedicated academic partner you can rely on."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3.5 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-blue-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-brand-charcoal block"
  }, "Transparent Academic Feedback"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-600"
  }, "Regular updates on progress, test performance, and conceptual growth."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-blue-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-brand-charcoal block"
  }, "Reduced Homework Friction"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-600"
  }, "Structured study discipline so learning happens effectively during coaching hours."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-blue-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-brand-charcoal block"
  }, "Safe, Modern Classroom Environment"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-600"
  }, "Bright, comfortable offline classrooms in Pune with respectful faculty."))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 mt-6 border-t border-blue-200/40"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-white hover:bg-blue-50 text-blue-900 border border-blue-200 transition-colors shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Schedule a Parent Consultation"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 sm:p-10 rounded-4xl bg-brand-peach/50 border border-orange-200/50 shadow-soft flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-orange-900 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    className: "w-4 h-4 text-orange-600"
  }), /*#__PURE__*/React.createElement("span", null, "FOR STUDENTS")), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-snug"
  }, "Learning Can Be Interesting. And We Make It So."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 text-sm sm:text-base leading-relaxed"
  }, "No boring lectures, no endless copying from boards, and absolutely no scolding for asking questions. We make complex concepts click with fun discussions and practical understanding."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3.5 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-orange-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-brand-charcoal block"
  }, "Zero Fear of Doubts"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-600"
  }, "Ask the same question five times until it completely makes sense to you."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-orange-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-brand-charcoal block"
  }, "Friendly Mentors, Not Stiff Tutors"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-600"
  }, "Teachers who listen, cheer your improvements, and make learning enjoyable."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5 text-orange-600"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs sm:text-sm font-semibold text-brand-charcoal block"
  }, "Confidence for School Exams"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-600"
  }, "Know exactly how to approach tricky questions and write crisp answers."))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 mt-6 border-t border-orange-200/40"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-xs bg-white hover:bg-orange-50 text-orange-900 border border-orange-200 transition-colors shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Experience a Classroom Session"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-20 relative overflow-hidden bg-brand-lavender/70 border-y border-brand-lavenderDark/20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/40 rounded-full blur-3xl pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-1/4 w-80 h-80 bg-brand-peach/40 rounded-full blur-3xl pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 mx-auto rounded-3xl bg-white shadow-soft flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(WiseOwlLogo, {
    className: "w-9 h-9"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "Ready to Make Learning Smarter?"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
  }, "Give your child the academic support, guidance and confidence to reach their potential. Offline classroom coaching in Pune for Grades 1–10."), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-heading font-semibold text-base bg-brand-charcoal text-white hover:bg-black transition-all shadow-soft active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Enquire Now"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-heading font-semibold text-base bg-white text-emerald-900 border border-emerald-300 hover:bg-emerald-50 transition-all shadow-soft active:scale-95"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-5 h-5 text-emerald-600"
  }), /*#__PURE__*/React.createElement("span", null, "Chat on WhatsApp"))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-20 bg-white relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto space-y-4 mb-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3.5 py-1.5 rounded-full bg-brand-mint/80 border border-emerald-200/50 text-xs font-bold tracking-wide uppercase text-brand-charcoal"
  }, "Get In Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight"
  }, "Let's Start Their Learning Journey."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-600"
  }, "Fill out the enquiry form below or message us directly on WhatsApp. We look forward to welcoming you to Two Wise Academy.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-soft-lg"
  }, isSubmitted ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10 space-y-6 animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 mx-auto rounded-3xl bg-brand-mint flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-8 h-8 text-emerald-700"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl font-bold text-brand-charcoal"
  }, "Thank You for Reaching Out!"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-600 max-w-md mx-auto"
  }, "We have received your enquiry for ", /*#__PURE__*/React.createElement("strong", {
    className: "text-brand-charcoal"
  }, formData.studentName), " (", formData.grade, ", ", formData.board, "). Our academic counselor will contact you shortly.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-brand-mint/50 border border-emerald-200 max-w-md mx-auto space-y-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-medium text-emerald-900"
  }, "Want an instant response? You can also forward these details directly to our WhatsApp:"), /*#__PURE__*/React.createElement("a", {
    href: generatedWhatsAppLink,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-5 h-5"
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
    className: "text-xs text-gray-500 hover:text-brand-charcoal underline"
  }, "Submit another enquiry")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-700"
  }, "Parent's Name ", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. Rahul Sharma",
    value: formData.parentName,
    onChange: e => setFormData({
      ...formData,
      parentName: e.target.value
    }),
    className: `w-full px-4 py-3 rounded-xl bg-gray-50 border ${formErrors.parentName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm`
  }), formErrors.parentName && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-red-500"
  }, formErrors.parentName)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-700"
  }, "Student's Name ", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g. Aryan Sharma",
    value: formData.studentName,
    onChange: e => setFormData({
      ...formData,
      studentName: e.target.value
    }),
    className: `w-full px-4 py-3 rounded-xl bg-gray-50 border ${formErrors.studentName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm`
  }), formErrors.studentName && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-red-500"
  }, formErrors.studentName))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-700"
  }, "Phone Number (WhatsApp) ", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500"
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
    className: `w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border ${formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm`
  })), formErrors.phone && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-red-500"
  }, formErrors.phone)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-700"
  }, "Grade / Standard ", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: formData.grade,
    onChange: e => setFormData({
      ...formData,
      grade: e.target.value
    }),
    className: "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm text-gray-800"
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: `Grade ${g}`
  }, "Grade ", g))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-700 block"
  }, "Educational Board ", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5"
  }, ['ICSE', 'CBSE', 'IB', 'IGCSE'].map(b => /*#__PURE__*/React.createElement("button", {
    key: b,
    type: "button",
    onClick: () => setFormData({
      ...formData,
      board: b
    }),
    className: `py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${formData.board === b ? 'bg-brand-charcoal text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
  }, b)))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-700 block"
  }, "Subjects Interested In ", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ['Mathematics', 'Science', 'English', 'Social Studies', 'Languages', 'Computer Applications', 'All Subjects'].map(sub => {
    const active = formData.subjects.includes(sub);
    return /*#__PURE__*/React.createElement("button", {
      key: sub,
      type: "button",
      onClick: () => toggleSubject(sub),
      className: `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${active ? 'bg-brand-lavender text-purple-950 border border-purple-300' : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `w-1.5 h-1.5 rounded-full ${active ? 'bg-purple-700' : 'bg-gray-400'}`
    }), /*#__PURE__*/React.createElement("span", null, sub));
  })), formErrors.subjects && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-red-500"
  }, formErrors.subjects)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 text-left"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold uppercase tracking-wider text-gray-700"
  }, "Message / Learning Goals (Optional)"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Tell us about specific concepts your child needs assistance with or current school syllabus...",
    value: formData.message,
    onChange: e => setFormData({
      ...formData,
      message: e.target.value
    }),
    className: "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lavenderDark/30 text-sm"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-3.5 rounded-2xl bg-brand-charcoal hover:bg-black text-white font-heading font-semibold text-sm transition-all shadow-soft active:scale-95 flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "Submit Enquiry"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-500 text-center"
  }, "Your details are safe. We will never spam or share your contact number."))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-brand-mint/60 border border-emerald-200 shadow-soft space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center text-emerald-600"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-emerald-950"
  }, "Chat Directly on WhatsApp"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-emerald-800"
  }, "Quick answers for batches & fees"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-emerald-900 leading-relaxed"
  }, "Have quick questions regarding timings, batch availability, or diagnostic sessions? Reach us instantly on WhatsApp."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp: +91 90496 50666")))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-lavender flex items-center justify-center text-brand-charcoal"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-6 h-6 text-brand-lavenderDark"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Academy Location"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Offline Classroom Coaching"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-sm text-gray-700"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-brand-charcoal leading-snug"
  }, "Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 leading-relaxed"
  }, "Centrally accessible offline classroom setup designed for modern, student-friendly interactive coaching."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/maps/search/?api=1&query=Two+Wise+Academy+Prasad+Apartments+TMV+Colony+Gultekdi+Pune+411037",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1.5 text-xs font-semibold text-brand-charcoal hover:underline pt-1 text-purple-700"
  }, /*#__PURE__*/React.createElement("span", null, "Get Directions on Google Maps"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500"
  }, /*#__PURE__*/React.createElement("span", null, "Classroom Mode:"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-brand-charcoal"
  }, "Offline In-Person Batches"))), /*#__PURE__*/React.createElement("div", {
    className: "p-7 rounded-3xl bg-white border border-gray-100 shadow-soft space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-brand-peach flex items-center justify-center text-brand-peachDark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-brand-charcoal"
  }, "Follow Our Journey"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500"
  }, "Classroom glimpses & study tips"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 leading-relaxed"
  }, "Join our growing community on Instagram for conceptual breakdowns, student updates, and learning motivation."), /*#__PURE__*/React.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/twowise_academy/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 text-xs font-bold text-pink-600 hover:text-pink-700 hover:underline"
  }, /*#__PURE__*/React.createElement("span", null, "@twowise_academy on Instagram"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })))))))), /*#__PURE__*/React.createElement("footer", {
    className: "bg-white border-t border-gray-100 pt-16 pb-12 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo.png",
    alt: "Two Wise Academy",
    className: "h-14 sm:h-16 w-auto object-contain"
  })), /*#__PURE__*/React.createElement("p", {
    className: "font-heading font-semibold text-sm text-brand-charcoal"
  }, "Tagline: \"Learn Smart. Think Wise.\""), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600 max-w-sm leading-relaxed"
  }, "Two Wise Academy is a contemporary offline classroom coaching academy based in Pune, Maharashtra. Empowering students across ICSE, CBSE, IB, and IGCSE curricula (Grades 1–10) with conceptual clarity, individual attention, and academic confidence."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-9 h-9 rounded-xl bg-brand-mint/70 hover:bg-brand-mint text-emerald-800 flex items-center justify-center transition-colors",
    title: "WhatsApp"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/twowise_academy/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-9 h-9 rounded-xl bg-brand-peach/70 hover:bg-brand-peach text-orange-900 flex items-center justify-center transition-colors",
    title: "Instagram"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal"
  }, "Navigation"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-xs text-gray-600"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#hero",
    className: "hover:text-brand-charcoal hover:underline"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "hover:text-brand-charcoal hover:underline"
  }, "About Us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#boards",
    className: "hover:text-brand-charcoal hover:underline"
  }, "Programs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#approach",
    className: "hover:text-brand-charcoal hover:underline"
  }, "Our Approach")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#why-us",
    className: "hover:text-brand-charcoal hover:underline"
  }, "Why Two Wise")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "hover:text-brand-charcoal hover:underline"
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal"
  }, "Curricula & Grades"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-xs text-gray-600"
  }, /*#__PURE__*/React.createElement("li", null, "ICSE Board (Grades 1–10)"), /*#__PURE__*/React.createElement("li", null, "CBSE Board (Grades 1–10)"), /*#__PURE__*/React.createElement("li", null, "IB Curriculum (Grades 1–10)"), /*#__PURE__*/React.createElement("li", null, "IGCSE Board (Grades 1–10)"), /*#__PURE__*/React.createElement("li", null, "All Core & Elective Subjects"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xs uppercase tracking-wider text-brand-charcoal"
  }, "Contact & Location"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2.5 text-xs text-gray-600"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    className: "w-4 h-4 text-gray-400"
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:+919049650666",
    className: "hover:text-brand-charcoal"
  }, "+91 90496 50666")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4 text-emerald-600"
  }), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-brand-charcoal"
  }, "WhatsApp: 9049650666")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4 text-pink-600"
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/twowise_academy/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-brand-charcoal"
  }, "@twowise_academy")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2 pt-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-4 h-4 text-gray-400 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, "Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037"))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4"
  }, /*#__PURE__*/React.createElement("p", null, "© 2026 Two Wise Academy. All Rights Reserved."), /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", null, "Offline Classroom Coaching in Pune"), /*#__PURE__*/React.createElement("span", null, "•"), /*#__PURE__*/React.createElement("span", null, "\"Learn Smart. Think Wise.\""))))), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 right-6 z-50 flex items-center group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-brand-charcoal text-white text-xs font-medium shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
  }, "Chat with Two Wise Academy"), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Chat with Two Wise Academy on WhatsApp",
    className: "relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-soft-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping-slow pointer-events-none"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-7 h-7 relative z-10"
  }))));
}

// Mount the React Application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(/*#__PURE__*/React.createElement(App, null));