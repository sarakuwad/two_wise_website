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

// Comprehensive Icon Component
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
    play: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3"
    })),
    pause: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "4",
      width: "4",
      height: "16"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "4",
      width: "4",
      height: "16"
    })),
    video: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "23 7 16 12 23 17 23 7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "5",
      width: "15",
      height: "14",
      rx: "2",
      ry: "2"
    })),
    image: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "21 15 16 10 5 21"
    })),
    heart: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    })),
    share2: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8.59",
      y1: "13.51",
      x2: "15.42",
      y2: "17.49"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.41",
      y1: "6.51",
      x2: "8.59",
      y2: "10.49"
    })),
    externalLink: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "15 3 21 3 21 9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })),
    calendar: /*#__PURE__*/React.createElement("svg", {
      className: className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
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

  // Board & division tabs
  const [activeBoard, setActiveBoard] = useState('icse');
  const [activeSubjectTab, setActiveSubjectTab] = useState('math');
  const [activeApproachStep, setActiveApproachStep] = useState(0);

  // Social Feed & Instagram state
  const [activeSocialFilter, setActiveSocialFilter] = useState('all');
  const [selectedInstagramPost, setSelectedInstagramPost] = useState(null);
  const [isPlayingReel, setIsPlayingReel] = useState(true);

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
    const text = `Hi Two Wise Academy! I would like to enquire about classroom coaching in Pune.

` + `Parent Name: ${formData.parentName}
` + `Student Name: ${formData.studentName}
` + `Grade: ${formData.grade}
` + `Board: ${formData.board}
` + `Subjects: ${formData.subjects.join(', ')}
` + (formData.message ? `Notes: ${formData.message}` : '');
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

  // ASH-Style Divisions Data (Grades 4 to 12)
  const schoolDivisions = [{
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
  }, {
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
  }, {
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
  }, {
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
  }];

  // Instagram Social Posts & Reels (ASH-Style Social Feed)
  const instagramFeed = [{
    id: "reel-frank-freese",
    type: "reel",
    duration: "0:48",
    views: "4.2k",
    likes: 384,
    comments: 52,
    date: "Inauguration Reel",
    title: "Historic Inauguration with Mr. Frank Freese",
    caption: "A truly historic day for Two Wise Academy! Honoured to have Mr. Frank Freese, legendary former Principal of The Bishop's School, Pune, inaugurate our learning spaces at Prasad Apartments, Gultekdi. Inspiring our faculty and students to learn smart and think wise! 🦉✨",
    hashtags: ['#TwoWiseAcademy', '#FrankFreese', '#BishopsPune', '#Inauguration', '#PuneTuitions', '#LearnSmartThinkWise'],
    link: frankFreeseReelUrl,
    isOfficialReel: true,
    tag: "Key Milestone",
    tagColor: "bg-emerald-950/70 text-emerald-300 border-emerald-500/30"
  }, {
    id: "reel-reva-math",
    type: "reel",
    duration: "1:12",
    views: "3.1k",
    likes: 295,
    comments: 38,
    date: "Classroom Insight",
    title: "Math Conceptual Breakdown with Reva Mehta",
    caption: "Formulas should never be memorised blindly when their visual geometry makes total sense! Watch Founder Reva Mehta (MBA SIBM Pune) break down tough ICSE & CBSE algebraic identities with intuitive sketches. 📐💡",
    hashtags: ['#MathMadeSimple', '#RevaMehta', '#ConceptFirst', '#ICSEMath', '#CBSEMath', '#TwoWiseWay'],
    link: frankFreeseReelUrl,
    isOfficialReel: false,
    tag: "Faculty Masterclass",
    tagColor: "bg-rose-950/70 text-rose-300 border-rose-500/30"
  }, {
    id: "photo-campus-tour",
    type: "photo",
    likes: 242,
    comments: 21,
    date: "Gultekdi Center",
    title: "Inside Our Modern Classrooms at Prasad Apartments",
    caption: "Distraction-free, air-conditioned, and ergonomically designed for small-group coaching (under 12 students per batch). Centrally located at Prasad Apartments, T.M.V. Colony, Gultekdi, Pune. 📚🌿",
    hashtags: ['#PuneClassrooms', '#Gultekdi', '#SmallBatches', '#StudyInPune', '#TwoWiseCampus'],
    link: officialInstagramUrl,
    isOfficialReel: false,
    tag: "Campus Life",
    tagColor: "bg-emerald-950/70 text-emerald-300 border-emerald-500/30"
  }, {
    id: "reel-diya-finance",
    type: "reel",
    duration: "0:56",
    views: "2.6k",
    likes: 218,
    comments: 29,
    date: "Foundation Spotlight",
    title: "Financial & Logical Intuition with Diya Shah",
    caption: "Co-Founder Diya Shah (BBA Finance) engaging Grades 4–8 students in commercial math and logic puzzles. Developing quantitative intuition early builds fearless learners! 🧠🔢",
    hashtags: ['#CriticalThinking', '#DiyaShah', '#FoundationYears', '#MiddleSchoolMath', '#SmartKids'],
    link: frankFreeseReelUrl,
    isOfficialReel: false,
    tag: "Faculty Masterclass",
    tagColor: "bg-rose-950/70 text-rose-300 border-rose-500/30"
  }, {
    id: "photo-diagnostic-camp",
    type: "photo",
    likes: 188,
    comments: 16,
    date: "Academic Assessment",
    title: "Personalised Diagnostic Mocks & 1-on-1 Feedback",
    caption: "Every learner has unique strengths and hidden bottlenecks. Our weekend diagnostic evaluations give parents a crystal-clear roadmap before school exams arrive. 🎯📊",
    hashtags: ['#PersonalisedLearning', '#BoardExamPrep', '#DiagnosticAssessment', '#Grades4to12'],
    link: officialInstagramUrl,
    isOfficialReel: false,
    tag: "Assessment Camp",
    tagColor: "bg-emerald-950/70 text-emerald-300 border-emerald-500/30"
  }, {
    id: "photo-doubt-clearing",
    type: "photo",
    likes: 265,
    comments: 34,
    date: "Student Culture",
    title: "The Confidence to Ask “Why?”: Doubt Clearing Sessions",
    caption: "In small batches of under 12, no student ever gets overlooked. Safe, supportive classrooms where questions are celebrated and answered completely. 🦉💚",
    hashtags: ['#DoubtClearing', '#StudentCare', '#InteractiveLearning', '#PuneTuitionCenter'],
    link: officialInstagramUrl,
    isOfficialReel: false,
    tag: "Student Culture",
    tagColor: "bg-emerald-950/70 text-emerald-300 border-emerald-500/30"
  }];

  // News & School Stories (ASH-Style News Column)
  const newsStories = [{
    id: "news-1",
    tag: "Special Inauguration",
    tagColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/30",
    date: "October 2026",
    title: "Inauguration by Mr. Frank Freese: A Proud Milestone for Two Wise Academy",
    summary: "Legendary former Principal of The Bishop's School, Pune, Mr. Frank Freese, graced Two Wise Academy to officially inaugurate our center in Gultekdi. He highlighted the transformative value of dedicated mentorship, concept clarity, and small-batch accountability.",
    author: "Two Wise Academy News Desk",
    linkAction: () => setSelectedInstagramPost(instagramFeed[0])
  }, {
    id: "news-2",
    tag: "Academic Insight",
    tagColor: "bg-rose-950/80 text-rose-300 border-rose-500/30",
    date: "Faculty Editorial",
    title: "Why Capping Batches Under 12 Unlocks Rapid Conceptual Breakthroughs",
    summary: "Reva Mehta (MBA SIBM Pune) shares pedagogical findings from 6+ years of classroom teaching: when teachers can observe every pen-stroke, student hesitations disappear in days instead of months.",
    author: "Reva Mehta, Co-Founder",
    linkAction: () => scrollToSection('faculty')
  }, {
    id: "news-3",
    tag: "Foundation Pedagogy",
    tagColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/30",
    date: "Methodology",
    title: "Connecting Classroom Numbers to Real-World Economics for Grades 4–8",
    summary: "Diya Shah (BBA Finance) explains how practical financial reasoning and puzzle-based arithmetic transform early middle school math from an intimidating chore into an exciting game.",
    author: "Diya Shah, Co-Founder",
    linkAction: () => scrollToSection('faculty')
  }, {
    id: "news-4",
    tag: "Enrollment Notice",
    tagColor: "bg-rose-950/80 text-rose-300 border-rose-500/30",
    date: "Admissions 2026–27",
    title: "Admissions Open for Grades 4–12: Book Your Free Diagnostic Assessment",
    summary: "Parents across Pune can now book an in-person diagnostic test and academic strategy session at Prasad Apartments, T.M.V. Colony, Gultekdi.",
    author: "Admissions Office",
    linkAction: () => scrollToSection('contact')
  }];

  // Filtered Social Posts
  const filteredSocialPosts = useMemo(() => {
    if (activeSocialFilter === 'reels') return instagramFeed.filter(p => p.type === 'reel');
    if (activeSocialFilter === 'photos') return instagramFeed.filter(p => p.type === 'photo');
    return instagramFeed;
  }, [activeSocialFilter]);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col bg-[#0A0E0C] text-gray-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans relative overflow-x-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#0D1511] border-b border-emerald-900/40 px-4 py-2 text-xs font-medium text-emerald-200/90 text-center flex items-center justify-center gap-2 relative z-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"
  }), /*#__PURE__*/React.createElement("span", null, "Admissions Open for 2026–27 • Offline Classroom Coaching in Gultekdi, Pune • Grades 4 to 12 (ICSE, CBSE, IB, IGCSE)"), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "ml-2 underline font-semibold text-emerald-300 hover:text-emerald-200 hidden sm:inline"
  }, "Enquire Now →")), /*#__PURE__*/React.createElement("header", {
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
    className: "hidden lg:flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#hero",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#divisions",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Divisions (4–12)"), /*#__PURE__*/React.createElement("a", {
    href: "#boards",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Curricula"), /*#__PURE__*/React.createElement("a", {
    href: "#faculty",
    className: "px-3 py-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 hover:bg-emerald-950/40 rounded-xl transition-colors"
  }, "Faculty"), /*#__PURE__*/React.createElement("a", {
    href: "#happenings",
    className: "px-3 py-2 text-sm font-medium text-rose-300 hover:text-rose-200 hover:bg-rose-950/40 rounded-xl transition-colors flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-3.5 h-3.5 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Happenings & Reels")), /*#__PURE__*/React.createElement("a", {
    href: "#why-us",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Why Us"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center gap-2.5"
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
    className: "flex lg:hidden items-center gap-2"
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
    className: "lg:hidden border-b border-white/10 bg-[#0A0E0C]/98 px-4 pt-3 pb-6 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-1"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('hero'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('divisions'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "School Divisions (Grades 4–12)"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('boards'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Curricula (ICSE, CBSE, IB, IGCSE)"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('faculty'),
    className: "px-3 py-2.5 text-base font-medium text-emerald-300 hover:bg-emerald-950/30 rounded-xl cursor-pointer"
  }, "Faculty & Mentors"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('happenings'),
    className: "px-3 py-2.5 text-base font-medium text-rose-300 hover:bg-rose-950/30 rounded-xl cursor-pointer flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Happenings & Reels")), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('why-us'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Why Two Wise"), /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToSection('contact'),
    className: "px-3 py-2.5 text-base font-medium text-gray-200 hover:bg-white/5 rounded-xl cursor-pointer"
  }, "Contact & Location")), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-white/10 flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center justify-center gap-2 py-3 text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 rounded-xl"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Chat on WhatsApp (9049650666)"))))), /*#__PURE__*/React.createElement("section", {
    id: "hero",
    className: "relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-dark-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-10 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-40 right-4 w-[420px] h-[420px] bg-rose-500/8 rounded-full blur-[160px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-10 left-4 w-[460px] h-[460px] bg-teal-500/8 rounded-full blur-[160px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111A15] border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.15)]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.9)]"
  }), /*#__PURE__*/React.createElement("span", null, "Admissions Open for Grades 4–12 • Offline Coaching in Gultekdi, Pune")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
  }, "Welcome to Two Wise Academy, ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-r from-emerald-300 via-teal-200 to-rose-300 bg-clip-text text-transparent"
  }, "where learning comes to life")), /*#__PURE__*/React.createElement("p", {
    className: "font-heading text-xl sm:text-2xl font-semibold text-rose-200/90 tracking-wide"
  }, "“Learn Smart. Think Wise.”")), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
  }, "Personalised offline classroom coaching at ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-300 font-semibold"
  }, "Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037"), " for students from ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-white"
  }, "Grades 4–12"), " across ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-rose-300"
  }, "ICSE"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-emerald-300"
  }, "CBSE"), ", ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-teal-300"
  }, "IB"), " and ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-amber-200"
  }, "IGCSE"), " boards."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-heading font-bold text-base bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_35px_rgba(110,231,183,0.4)] hover:shadow-[0_0_45px_rgba(110,231,183,0.6)] active:scale-95"
  }, /*#__PURE__*/React.createElement("span", null, "Schedule Free Assessment"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedInstagramPost(instagramFeed[0]),
    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-heading font-semibold text-base bg-[#141B17] hover:bg-[#1A241F] text-white border border-rose-400/30 hover:border-rose-400/60 transition-all shadow-[0_0_25px_rgba(253,164,175,0.15)] active:scale-95 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center group-hover:scale-110 transition-transform"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    className: "w-3 h-3 text-rose-300 fill-rose-300"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-rose-200"
  }, "Watch Inauguration Reel 🎬")), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-heading font-semibold text-sm bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-300 border border-emerald-500/30 transition-all active:scale-95"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp Direct"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-emerald-300 block"
  }, "4 Global Boards"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "ICSE, CBSE, IB, IGCSE")), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-rose-300 block"
  }, "Grades 4–12"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "Comprehensive Coaching")), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-emerald-300 block"
  }, "< 12 Students"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "Personalised Small Batches")), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 rounded-2xl bg-[#111714]/90 border border-white/5 space-y-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-bold text-lg text-rose-300 block"
  }, "Gultekdi Center"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "Prasad Apts, Pune-411037"))))), /*#__PURE__*/React.createElement("section", {
    id: "divisions",
    className: "py-20 bg-[#0B100D] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-14 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Tailored Pathways for Every Stage")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "Structured for Every Milestone in a Student’s Journey"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base"
  }, "Inspired by premier international academies, our curriculum is partitioned into four distinct developmental divisions from Grades 4 through 12.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, schoolDivisions.map(division => /*#__PURE__*/React.createElement("div", {
    key: division.id,
    className: `rounded-3xl p-6 bg-gradient-to-b ${division.gradient} border border-white/10 ${division.accentBorder} hover-card-lift transition-all duration-300 flex flex-col justify-between relative group`
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-2xl bg-[#16211B] border border-white/10 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: division.icon,
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("span", {
    className: `px-3 py-1 rounded-full text-xs font-bold border ${division.badgeColor}`
  }, division.badge)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-xl text-white group-hover:text-emerald-300 transition-colors"
  }, division.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-rose-300"
  }, division.tagline)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-gray-300 leading-relaxed"
  }, division.description)), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 mt-6 border-t border-white/10 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-medium text-emerald-200/70 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/20 text-center"
  }, division.boards), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setActiveBoard(division.targetBoard);
      scrollToSection('boards');
    },
    className: "w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-emerald-400 hover:text-gray-950 text-gray-200 transition-all border border-white/10 hover:border-emerald-400"
  }, /*#__PURE__*/React.createElement("span", null, "Explore Curriculum"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3.5 h-3.5"
  })))))))), /*#__PURE__*/React.createElement("section", {
    id: "happenings",
    className: "py-24 bg-[#0A0E0C] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/3 left-10 w-[500px] h-[500px] bg-rose-500/8 rounded-full blur-[170px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[170px] pointer-events-none -z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 max-w-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-xs font-semibold text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-3.5 h-3.5 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Stay Connected with Two Wise")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "Recent Happenings at Two Wise Academy"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base"
  }, "Discover our latest campus milestones, faculty masterclasses, and daily classroom breakthroughs streamed directly from our Instagram feed.")), /*#__PURE__*/React.createElement("a", {
    href: officialInstagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#141B17] hover:bg-[#1A251F] border border-white/10 hover:border-emerald-500/40 text-white transition-all shadow-glow-green self-start md:self-auto group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-5 h-5 text-white"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-white group-hover:text-emerald-300 transition-colors"
  }, "@twowise_academy"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-400"
  }, "Follow on Instagram ↗")))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-xl text-white flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-5 h-5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Stories & Milestones")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-300/80 font-medium"
  }, "From the Founders")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#131E18] via-[#101713] to-[#0D1310] border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all hover-card-lift space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
  }, "Official Inauguration"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    className: "w-3.5 h-3.5 text-gray-400"
  }), /*#__PURE__*/React.createElement("span", null, "October 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xl sm:text-2xl text-white leading-snug"
  }, "Inauguration by Mr. Frank Freese: A Historic Beginning"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-gray-300 leading-relaxed"
  }, "Two Wise Academy was deeply honoured to welcome legendary educationist ", /*#__PURE__*/React.createElement("strong", null, "Mr. Frank Freese"), ", former Principal of ", /*#__PURE__*/React.createElement("em", null, "The Bishop's School, Pune"), ", to inaugurate our learning center at Prasad Apartments, Gultekdi. His inspiring address to founders Reva Mehta and Diya Shah ignited our mission to provide uncompromising classroom excellence.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-white/10 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedInstagramPost(instagramFeed[0]),
    className: "inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
  }, /*#__PURE__*/React.createElement("span", null, "Watch Inauguration Reel"), /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    className: "w-3.5 h-3.5 fill-emerald-300"
  })), /*#__PURE__*/React.createElement("a", {
    href: frankFreeseReelUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-xs text-gray-400 hover:text-white inline-flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "Open Reel"), /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    className: "w-3 h-3"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, newsStories.slice(1).map(story => /*#__PURE__*/React.createElement("div", {
    key: story.id,
    onClick: story.linkAction,
    className: "rounded-2xl p-4 sm:p-5 bg-[#121915]/80 hover:bg-[#16211B] border border-white/5 hover:border-emerald-500/20 transition-all cursor-pointer group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${story.tagColor}`
  }, story.tag), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-gray-400"
  }, story.date)), /*#__PURE__*/React.createElement("h5", {
    className: "font-heading font-semibold text-sm sm:text-base text-gray-100 group-hover:text-emerald-300 transition-colors line-clamp-2"
  }, story.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed"
  }, story.summary), /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 flex items-center justify-between text-[11px] text-gray-500 group-hover:text-gray-300"
  }, /*#__PURE__*/React.createElement("span", null, story.author), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-400 group-hover:translate-x-1 transition-transform"
  }, "Read story →")))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111814] p-4 rounded-2xl border border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600 flex items-center justify-center shadow-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-5 h-5 text-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "@twowise_academy"), /*#__PURE__*/React.createElement("span", {
    className: "w-3.5 h-3.5 rounded-full bg-emerald-400 text-gray-950 flex items-center justify-center text-[9px] font-bold"
  }, "✓")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Offline Classroom Moments & Masterclasses"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 self-start sm:self-auto bg-[#0A0E0C] p-1 rounded-xl border border-white/10"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveSocialFilter('all'),
    className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeSocialFilter === 'all' ? 'bg-emerald-400 text-gray-950 font-bold' : 'text-gray-400 hover:text-white'}`
  }, "All (", instagramFeed.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveSocialFilter('reels'),
    className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${activeSocialFilter === 'reels' ? 'bg-rose-400 text-gray-950 font-bold' : 'text-gray-400 hover:text-white'}`
  }, /*#__PURE__*/React.createElement("span", null, "Reels 🎬")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveSocialFilter('photos'),
    className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${activeSocialFilter === 'photos' ? 'bg-emerald-400 text-gray-950 font-bold' : 'text-gray-400 hover:text-white'}`
  }, /*#__PURE__*/React.createElement("span", null, "Photos 📸")))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, filteredSocialPosts.map(post => /*#__PURE__*/React.createElement("div", {
    key: post.id,
    onClick: () => setSelectedInstagramPost(post),
    className: "rounded-2xl bg-[#121915] border border-white/10 hover:border-emerald-500/40 p-4 space-y-3 cursor-pointer hover-card-lift transition-all group relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#16221B] via-[#101814] to-[#1E151A] border border-white/5 flex flex-col justify-between p-3.5 group-hover:brightness-110 transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between z-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${post.tagColor}`
  }, post.tag), post.type === 'reel' ? /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/70 text-rose-300 border border-rose-500/30 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "video",
    className: "w-3 h-3 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, post.duration)) : /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/70 text-emerald-300 border border-emerald-500/30 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    className: "w-3 h-3 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Photo"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center my-auto z-10"
  }, post.type === 'reel' ? /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-rose-500/80 transition-all shadow-lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    className: "w-5 h-5 fill-current ml-0.5"
  })) : /*#__PURE__*/React.createElement("div", {
    className: "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo-owl-dark.png",
    alt: "Two Wise",
    className: "w-7 h-auto opacity-70"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-[11px] text-white/90 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold truncate max-w-[140px]"
  }, post.title), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-0.5 text-rose-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    className: "w-3 h-3 fill-rose-300"
  }), /*#__PURE__*/React.createElement("span", null, post.likes)))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 line-clamp-2 leading-relaxed"
  }, post.caption), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1 pt-1"
  }, post.hashtags.slice(0, 3).map((tag, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "text-[10px] font-medium text-emerald-300/80"
  }, tag)))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400"
  }, /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-400 group-hover:underline flex items-center gap-1 font-semibold"
  }, /*#__PURE__*/React.createElement("span", null, post.type === 'reel' ? 'Watch Reel' : 'View Post'), /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    className: "w-3 h-3"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#121915] to-rose-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-0.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-white"
  }, "Join 1,400+ parents and students on Instagram"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-400"
  }, "Daily syllabus updates, tips from Reva Mehta & Diya Shah, and exam prep insights.")), /*#__PURE__*/React.createElement("a", {
    href: officialInstagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all flex items-center gap-1.5 shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-3.5 h-3.5 text-rose-400"
  }), /*#__PURE__*/React.createElement("span", null, "Follow @twowise_academy"))))))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-20 bg-[#0B100D] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Our Educational Philosophy")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight"
  }, "Education That Goes ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-r from-emerald-300 to-rose-300 bg-clip-text text-transparent"
  }, "Beyond Textbooks.")), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-gray-300 leading-relaxed"
  }, "At Two Wise Academy, we believe real academic mastery starts with genuine understanding. When students understand the ", /*#__PURE__*/React.createElement("em", null, "“why”"), " behind every equation, historical event, and scientific principle, confidence replaces anxiety."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-2"
  }, [{
    title: "No Rote Memorisation",
    desc: "We deconstruct principles so students can tackle unfamiliar problems with composure."
  }, {
    title: "Bespoke Personal Attention",
    desc: "Every student's baseline is assessed, crafting a custom learning pace."
  }, {
    title: "Small Batches, Big Results",
    desc: "Capped batch sizes guarantee every question is answered immediately."
  }, {
    title: "Continuous Diagnostic Feedback",
    desc: "Transparent progress reviews for parents without surprise exam panic."
  }].map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-3 p-3 rounded-2xl bg-[#111714] border border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-3.5 h-3.5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-semibold text-sm text-white"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, item.desc)))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-8 bg-gradient-to-br from-[#121915] to-[#161719] border border-white/10 shadow-2xl relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-glow-green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-lg text-white"
  }, "The Two Wise Standard"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Offline Classroom Excellence in Pune"))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-300 italic border-l-2 border-emerald-400 pl-4"
  }, "“True wisdom is knowing how to think, not just what to think. Our mission is to transform students into independent, confident thinkers for life.”"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 pt-4 border-t border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-[#0A0E0C] border border-white/5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-extrabold text-2xl text-emerald-300 block"
  }, "Grades 4–12"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "Foundation to Board Prelims")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-[#0A0E0C] border border-white/5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-extrabold text-2xl text-rose-300 block"
  }, "100% Offline"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "Interactive Classroom Coaching"))))))))), /*#__PURE__*/React.createElement("section", {
    id: "boards",
    className: "py-20 bg-[#0A0E0C] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-14 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookOpen",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Multi-Curriculum Expertise")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "One Academy. Multiple Curricula."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base"
  }, "Every educational board follows distinct exam formats and assessment criteria. Our mentors tailor instruction specifically to each curriculum from Grades 4 through 12.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-2 mb-10"
  }, [{
    id: 'icse',
    name: 'ICSE & ISC Board',
    grades: 'Grades 4–12',
    badge: 'Analytical Rigour'
  }, {
    id: 'cbse',
    name: 'CBSE Board',
    grades: 'Grades 4–12',
    badge: 'Concept & Application'
  }, {
    id: 'ib',
    name: 'IB (MYP & DP)',
    grades: 'Grades 4–12',
    badge: 'Inquiry-Based'
  }, {
    id: 'igcse',
    name: 'Cambridge (IGCSE & A-Levels)',
    grades: 'Grades 4–12',
    badge: 'Global Standards'
  }].map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: () => setActiveBoard(tab.id),
    className: `px-5 py-3 rounded-2xl font-heading text-sm font-semibold transition-all flex items-center gap-2 ${activeBoard === tab.id ? 'bg-emerald-400 text-gray-950 shadow-glow-green font-bold' : 'bg-[#121915] text-gray-300 hover:text-white border border-white/5 hover:border-white/20'}`
  }, /*#__PURE__*/React.createElement("span", null, tab.name), /*#__PURE__*/React.createElement("span", {
    className: `text-[11px] px-2 py-0.5 rounded-full ${activeBoard === tab.id ? 'bg-emerald-950 text-emerald-200' : 'bg-white/5 text-gray-400'}`
  }, tab.grades)))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-8 sm:p-10 bg-[#121915] border border-white/10 shadow-2xl"
  }, activeBoard === 'icse' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
  }, "Council for the Indian School Certificate Examinations (CISCE)"), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white"
  }, "ICSE (Grades 4–10) & ISC (Grades 11–12)"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Known for its detailed syllabus and exhaustive language requirements, the ICSE curriculum demands strong conceptual clarity, comprehensive writing, and rigorous numerical problem solving."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
  }, ["Exhaustive coverage of Selina & concise textbook problems", "10-year past ICSE/ISC paper solving & board marking scheme practice", "Focus on scientific derivations and descriptive answer frameworks", "Structured English language grammar, comprehension & literature drills"].map((point, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-2.5 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, point))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "ICSE/ISC Subjects Covered"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ["Mathematics", "Physics", "Chemistry", "Biology", "English Literature & Lang", "History & Civics", "Geography", "Economics", "Commercial Studies", "Computer Applications"].map((sub, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "px-3 py-1 rounded-xl text-xs bg-emerald-950/40 text-emerald-300 border border-emerald-500/20"
  }, sub))), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-emerald-400 text-gray-950 hover:brightness-105 transition-all text-center block"
  }, "Enquire for ICSE/ISC Batches →"))), activeBoard === 'cbse' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-950/80 text-rose-300 border border-rose-500/30"
  }, "Central Board of Secondary Education"), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white"
  }, "CBSE Board (Grades 4–12)"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Aligned closely with NCERT, CBSE emphasizes structured concept application, competency-based questions, and solid foundations for national competitive examinations."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
  }, ["Line-by-line NCERT mastery with Exemplar problem analysis", "Competency-focused case-based questions training", "Regular chapter tests with error analysis journals", "Integrated foundation for future competitive exams"].map((point, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-2.5 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-rose-400 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, point))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "CBSE Subjects Covered"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ["Mathematics", "Science (Phy/Chem/Bio)", "Social Science", "English Core", "Accountancy", "Business Studies", "Economics", "Applied Mathematics", "Computer Science"].map((sub, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "px-3 py-1 rounded-xl text-xs bg-rose-950/40 text-rose-300 border border-rose-500/20"
  }, sub))), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-rose-400 text-gray-950 hover:brightness-105 transition-all text-center block"
  }, "Enquire for CBSE Batches →"))), activeBoard === 'ib' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 text-amber-300 border border-amber-500/30"
  }, "International Baccalaureate Organisation"), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white"
  }, "IB Middle Years (MYP) & Diploma Programme (DP)"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "The IB curriculum prioritizes critical inquiry, criteria-referenced assessment, research-backed essays, and global contexts. Our mentors guide students through both content mastery and criterion-based scoring rubrics."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
  }, ["Criterion A, B, C, D rubric breakdown and alignment", "Guidance on Internal Assessments (IA) and Extended Essays (EE)", "Higher Level (HL) and Standard Level (SL) tailored modules", "Inquiry-driven scientific experimentation and paper analysis"].map((point, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-2.5 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-amber-400 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, point))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "IB Pathways Supported"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ["IB MYP Mathematics", "IB MYP Sciences", "IB DP Math (AA & AI)", "IB DP Physics (HL/SL)", "IB DP Chemistry (HL/SL)", "IB DP Economics", "IB DP Business Management", "TOK & IA Mentorship"].map((sub, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "px-3 py-1 rounded-xl text-xs bg-amber-950/40 text-amber-300 border border-amber-500/20"
  }, sub))), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-amber-400 text-gray-950 hover:brightness-105 transition-all text-center block"
  }, "Enquire for IB Mentorship →"))), activeBoard === 'igcse' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-950/80 text-teal-300 border border-teal-500/30"
  }, "Cambridge Assessment International Education (CAIE)"), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading text-2xl sm:text-3xl font-extrabold text-white"
  }, "Cambridge IGCSE & International A-Levels"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm leading-relaxed"
  }, "Renowned worldwide for international benchmarking, Cambridge IGCSE and A-Levels demand precision in experimental science, structured command terms, and rigorous past-paper mastery."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
  }, ["Extensive practice with Paper 2 (MCQ), Paper 4 (Theory), and Paper 6 (ATP)", "Cambridge Command Words decoding (Evaluate, Discuss, Explain)", "Structured topical past-paper compilation practice", "Cambridge Lower Secondary checkpoint foundation for Grades 6–8"].map((point, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-2.5 text-xs text-gray-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-teal-400 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, point))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 p-6 rounded-2xl bg-[#0A0E0C] border border-white/5 space-y-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "Cambridge Subjects Covered"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ["Extended Mathematics (0580)", "Additional Mathematics (0606)", "Physics (0625)", "Chemistry (0620)", "Biology (0610)", "Economics (0455)", "Business Studies (0450)", "English as First/Second Lang"].map((sub, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "px-3 py-1 rounded-xl text-xs bg-teal-950/40 text-teal-300 border border-teal-500/20"
  }, sub))), /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollToSection('contact'),
    className: "w-full mt-4 py-3 rounded-xl font-heading font-bold text-xs bg-teal-400 text-gray-950 hover:brightness-105 transition-all text-center block"
  }, "Enquire for Cambridge Batches →")))))), /*#__PURE__*/React.createElement("section", {
    id: "subjects",
    className: "py-20 bg-[#0B100D] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-14 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Full Academic Breadth")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "All Subjects. One Learning Destination."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base"
  }, "From early foundational reading and numeracy in Grade 4 to advanced differential calculus and commercial economics in Grade 12.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, [{
    title: "Mathematics",
    badge: "Grades 4–12",
    desc: "Arithmetic, Algebra, Geometry, Trigonometry, Coordinate Geometry, Calculus, Statistics & Probability. Concept-first approach eliminates fear of numbers.",
    accent: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
    icon: "calculator"
  }, {
    title: "Sciences (Phy, Chem, Bio)",
    badge: "Grades 4–12",
    desc: "Integrated General Science for middle school; specialized Physics, Chemistry, and Biology modules for high school board exams and Cambridge ATP/practicals.",
    accent: "border-rose-400/30 text-rose-300 bg-rose-950/40",
    icon: "microscope"
  }, {
    title: "English Language & Literature",
    badge: "Grades 4–12",
    desc: "Grammar accuracy, creative composition, analytical essay frameworks, Shakespearean drama, poetry commentary, and reading comprehension.",
    accent: "border-teal-400/30 text-teal-300 bg-teal-950/40",
    icon: "languages"
  }, {
    title: "Commerce & Economics",
    badge: "Grades 9–12",
    desc: "Commercial Studies, Accountancy basics, Micro/Macro Economics, Business Studies, and applied case analysis for ICSE, CBSE, IB, and IGCSE.",
    accent: "border-amber-400/30 text-amber-300 bg-amber-950/40",
    icon: "award"
  }, {
    title: "Social Sciences & Humanities",
    badge: "Grades 4–10",
    desc: "Indian & World History, Civics & Governance, Physical & Economic Geography, Map work, and structured descriptive answer writing.",
    accent: "border-purple-400/30 text-purple-300 bg-purple-950/40",
    icon: "globe"
  }, {
    title: "Computer Applications & Coding",
    badge: "Grades 6–12",
    desc: "Java for ICSE/ISC, Python for CBSE, algorithmic problem solving, logic gates, computational thinking, and software design principles.",
    accent: "border-emerald-500/30 text-emerald-300 bg-emerald-950/40",
    icon: "cpu"
  }].map((sub, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-6 rounded-3xl bg-[#111714] border border-white/10 hover-card-lift transition-all space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: sub.icon,
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-0.5 rounded-full text-xs font-bold border ${sub.accent}`
  }, sub.badge)), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-lg text-white"
  }, sub.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 leading-relaxed"
  }, sub.desc)))))), /*#__PURE__*/React.createElement("section", {
    id: "why-us",
    className: "py-20 bg-[#0A0E0C] relative border-y border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-14 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shieldCheck",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "The Two Wise Difference")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "Because Every Student Deserves to Be Understood."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base"
  }, "Mass coaching factories fail because they treat diverse minds identically. We intentionally maintain small batches so teaching adapts to the learner.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  }, [{
    title: "Small, Interactive Batches",
    desc: "Strictly limited student intake per batch guarantees personalized eye-level coaching.",
    icon: "users",
    tag: "< 12 Students"
  }, {
    title: "Diagnostic Concept Mapping",
    desc: "We uncover root misconceptions from prior grades before building advanced topics.",
    icon: "target",
    tag: "Personalised"
  }, {
    title: "Doubt-Friendly Safe Spaces",
    desc: "No judgment, no hesitation. Students are celebrated for asking questions until concepts are clear.",
    icon: "messageSquare",
    tag: "Open Dialogue"
  }, {
    title: "Curriculum-Specific Test Banks",
    desc: "Strict adherence to official board syllabi and question formatting across ICSE, CBSE, IB, and IGCSE.",
    icon: "clipboardCheck",
    tag: "Exhaustive"
  }, {
    title: "Transparent Parent Partnership",
    desc: "Regular, meaningful progress reviews with parents to celebrate wins and address challenges early.",
    icon: "heartHandshake",
    tag: "Zero Surprises"
  }, {
    title: "Central Pune Location",
    desc: "Located at Prasad Apartments, T.M.V. Colony, Gultekdi with convenient accessibility.",
    icon: "mapPin",
    tag: "Gultekdi, Pune"
  }].map((pillar, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-6 rounded-3xl bg-[#111714] border border-white/10 hover-card-lift transition-all space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: pillar.icon,
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-rose-300 px-2 py-0.5 rounded-full bg-rose-950/50 border border-rose-500/20"
  }, pillar.tag)), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-base text-white"
  }, pillar.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 leading-relaxed"
  }, pillar.desc)))))), /*#__PURE__*/React.createElement("section", {
    id: "approach",
    className: "py-20 bg-[#0B100D] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-14 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lightbulb",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Proven Methodology")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "Smart Learning. Step by Step."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base"
  }, "Our 5-stage learning lifecycle ensures students transition seamlessly from initial comprehension to independent problem-solving and exam distinction.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-5 gap-4"
  }, [{
    step: "01",
    title: "Diagnostic Assessment",
    desc: "Map current conceptual grasp and identify foundational gaps."
  }, {
    step: "02",
    title: "Concept Demystification",
    desc: "Break complex topics into intuitive, first-principles logic."
  }, {
    step: "03",
    title: "Guided Problem Solving",
    desc: "Work through varied problem sets with instant mentor feedback."
  }, {
    step: "04",
    title: "Targeted Doubt Resolution",
    desc: "Dedicated 1-on-1 reviews until every ambiguity is resolved."
  }, {
    step: "05",
    title: "Exam Simulation & Mastery",
    desc: "Timed board-standard papers to build speed, accuracy & calm."
  }].map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-5 rounded-3xl bg-[#111714] border border-white/5 hover-card-lift transition-all space-y-2 relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading font-extrabold text-3xl text-emerald-400/40 block"
  }, st.step), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-sm text-white"
  }, st.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 leading-relaxed"
  }, st.desc)))))), /*#__PURE__*/React.createElement("section", {
    id: "faculty",
    className: "py-20 bg-[#0A0E0C] relative border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-3xl mx-auto mb-14 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Leadership & Mentorship")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "Meet the Mentors Behind Two Wise."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base"
  }, "Passionate educators who combine elite academic credentials with years of classroom experience across international and national curricula.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-8 bg-gradient-to-b from-[#141F18] to-[#101613] border border-emerald-500/30 hover-card-lift transition-all space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-heading font-bold text-2xl shadow-glow-green"
  }, "RM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-2xl text-white"
  }, "Reva Mehta"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-emerald-300"
  }, "Co-Founder & Lead Academic Mentor"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "MBA (SIBM Pune) • 6+ Years Experience"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed"
  }, /*#__PURE__*/React.createElement("p", null, "Former educator at ", /*#__PURE__*/React.createElement("strong", null, "Symbiosis International School"), " with extensive expertise in teaching Mathematics, Economics, and analytical sciences across ", /*#__PURE__*/React.createElement("strong", null, "ICSE, CBSE, and IB"), " curricula."), /*#__PURE__*/React.createElement("p", null, "Reva specializes in demystifying complex mathematical structures, ensuring students grasp underlying logic rather than relying on rote formulae.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-white/10 flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/20"
  }, "Mathematics Specialist"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/20"
  }, "Economics & Commerce"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/20"
  }, "IB & ICSE Mentor"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-8 bg-gradient-to-b from-[#1A1618] to-[#141214] border border-rose-500/30 hover-card-lift transition-all space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300 font-heading font-bold text-2xl shadow-glow-red"
  }, "DS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-2xl text-white"
  }, "Diya Shah"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-semibold text-rose-300"
  }, "Co-Founder & Pedagogical Director"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "BBA Finance • 6+ Years Experience"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed"
  }, /*#__PURE__*/React.createElement("p", null, "Specializing in foundational pedagogy and analytical thinking, Diya guides students through critical middle-school transitions (Grades 4–8) and secondary board preparation."), /*#__PURE__*/React.createElement("p", null, "With a sharp background in finance and quantitative reasoning, Diya focuses on building strong problem-solving habits, self-discipline, and confident exam performance.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-white/10 flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/20"
  }, "Foundation Specialist (Grades 4–8)"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/20"
  }, "Quantitative Reasoning"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/20"
  }, "CBSE & Cambridge Specialist")))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-950/30 via-[#121915] to-rose-950/20 border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    className: "w-8 h-8 text-emerald-300"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-emerald-400 uppercase tracking-wider"
  }, "Inaugurated by Educational Leadership"), /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-lg text-white"
  }, "Honoured to be Inaugurated by Mr. Frank Freese"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-gray-300 leading-relaxed"
  }, "Former Principal of ", /*#__PURE__*/React.createElement("strong", null, "The Bishop's School, Pune"), ", Mr. Frank Freese personally inaugurated Two Wise Academy, recognizing our focus on character, intellectual discipline, and student-centered mentorship."))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-20 bg-[#0A0E0C] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-3.5 h-3.5 text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "Visit Our Offline Center")), /*#__PURE__*/React.createElement("h2", {
    className: "font-heading text-3xl sm:text-4xl font-extrabold text-white"
  }, "Let's Start Their Learning Journey."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm sm:text-base leading-relaxed"
  }, "Schedule a diagnostic evaluation or visit our classroom setup at Gultekdi to discuss your child's academic roadmap with founders Reva Mehta and Diya Shah."), /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-[#111714] border border-white/10 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mapPin",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "Academy Location"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-300 font-medium mt-1"
  }, "Two Wise Academy, Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037"), /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com/?q=Prasad+Apartments+TMV+Colony+Gultekdi+Pune",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold mt-2"
  }, /*#__PURE__*/React.createElement("span", null, "Open in Google Maps"), /*#__PURE__*/React.createElement(Icon, {
    name: "externalLink",
    className: "w-3 h-3"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 pt-3 border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "Call / WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+919049650666",
    className: "text-xs text-gray-300 hover:text-white block mt-0.5"
  }, "+91 90496 50666"), /*#__PURE__*/React.createElement("a", {
    href: whatsappUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-xs text-emerald-400 hover:underline block mt-0.5"
  }, "Chat on WhatsApp →"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3 pt-3 border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-sm text-white"
  }, "Instagram Community"), /*#__PURE__*/React.createElement("a", {
    href: officialInstagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-xs text-rose-300 hover:underline block mt-0.5"
  }, "@twowise_academy ↗"))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl p-6 sm:p-8 bg-[#121915] border border-white/10 shadow-2xl"
  }, isSubmitted ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-green"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-8 h-8"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-2xl text-white"
  }, "Thank You for Reaching Out!"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-300 max-w-md mx-auto"
  }, "We have received your enquiry for ", /*#__PURE__*/React.createElement("strong", null, formData.studentName), " (", formData.grade, ", ", formData.board, "). Our mentors will contact you shortly."), /*#__PURE__*/React.createElement("div", {
    className: "pt-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: generatedWhatsAppLink,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 text-gray-950 font-heading font-bold text-sm shadow-glow-green hover:brightness-105"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Send Details on WhatsApp Instantly")))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-xl text-white"
  }, "Enquiry"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "Fill in the student details below to send an enquiry to our center.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-gray-300 mb-1"
  }, "Parent's Name *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.parentName,
    onChange: e => setFormData({
      ...formData,
      parentName: e.target.value
    }),
    placeholder: "e.g. Arjun Mehta",
    className: "w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
  }), formErrors.parentName && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-rose-400 mt-1"
  }, formErrors.parentName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-gray-300 mb-1"
  }, "Student's Name *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.studentName,
    onChange: e => setFormData({
      ...formData,
      studentName: e.target.value
    }),
    placeholder: "e.g. Harshwardhan Mehta",
    className: "w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
  }), formErrors.studentName && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-rose-400 mt-1"
  }, formErrors.studentName))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-gray-300 mb-1"
  }, "Mobile Number *"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: formData.phone,
    onChange: e => setFormData({
      ...formData,
      phone: e.target.value
    }),
    placeholder: "10-digit number",
    className: "w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
  }), formErrors.phone && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-rose-400 mt-1"
  }, formErrors.phone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-gray-300 mb-1"
  }, "Grade (4–12) *"), /*#__PURE__*/React.createElement("select", {
    value: formData.grade,
    onChange: e => setFormData({
      ...formData,
      grade: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
  }, ["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-gray-300 mb-1"
  }, "Curriculum / Board *"), /*#__PURE__*/React.createElement("select", {
    value: formData.board,
    onChange: e => setFormData({
      ...formData,
      board: e.target.value
    }),
    className: "w-full px-4 py-2.5 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ICSE"
  }, "ICSE & ISC"), /*#__PURE__*/React.createElement("option", {
    value: "CBSE"
  }, "CBSE"), /*#__PURE__*/React.createElement("option", {
    value: "IB"
  }, "IB (MYP / DP)"), /*#__PURE__*/React.createElement("option", {
    value: "IGCSE"
  }, "Cambridge (IGCSE / A-Levels)")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-gray-300 mb-1.5"
  }, "Select Subjects Needed *"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ["Mathematics", "Science (Phy/Chem/Bio)", "English", "Economics", "Commercial Studies", "Computer Applications"].map(sub => {
    const isSelected = formData.subjects.includes(sub);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: sub,
      onClick: () => toggleSubject(sub),
      className: `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${isSelected ? 'bg-emerald-400 text-gray-950 font-bold shadow-sm' : 'bg-[#0A0E0C] text-gray-400 border border-white/10 hover:border-white/20'}`
    }, sub);
  })), formErrors.subjects && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-rose-400 mt-1"
  }, formErrors.subjects)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-gray-300 mb-1"
  }, "Specific Goals or Questions (Optional)"), /*#__PURE__*/React.createElement("textarea", {
    rows: "2",
    value: formData.message,
    onChange: e => setFormData({
      ...formData,
      message: e.target.value
    }),
    placeholder: "e.g. Looking for concept strengthening in algebra and board exam past paper drills...",
    className: "w-full px-4 py-2 rounded-xl bg-[#0A0E0C] border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-400"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-3.5 rounded-2xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 text-gray-950 hover:brightness-105 transition-all shadow-[0_0_25px_rgba(110,231,183,0.3)]"
  }, "Submit Enquiry →"))))))), /*#__PURE__*/React.createElement("footer", {
    className: "bg-[#070B09] border-t border-white/5 py-12 text-gray-400 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-5 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 inline-block"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo.png",
    alt: "Two Wise Academy",
    className: "h-8 w-auto object-contain"
  })), /*#__PURE__*/React.createElement("p", {
    className: "font-heading text-sm font-semibold text-white"
  }, "“Learn Smart. Think Wise.”"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 max-w-sm leading-relaxed"
  }, "Personalised offline classroom coaching at Prasad Apartments, T.M.V. Colony, Gultekdi, Pune-411037 for students from Grades 4 to 12 across ICSE, CBSE, IB, and IGCSE.")), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-3 space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-white text-sm"
  }, "Quick Links"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#hero",
    className: "hover:text-emerald-300 transition-colors"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#divisions",
    className: "hover:text-emerald-300 transition-colors"
  }, "School Divisions (Grades 4–12)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#boards",
    className: "hover:text-emerald-300 transition-colors"
  }, "Curricula & Boards")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faculty",
    className: "hover:text-emerald-300 transition-colors"
  }, "Faculty & Founders")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#happenings",
    className: "hover:text-rose-300 transition-colors"
  }, "Happenings & Reels")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "hover:text-emerald-300 transition-colors"
  }, "Contact & Directions")))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-white text-sm"
  }, "Center Information"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300"
  }, /*#__PURE__*/React.createElement("strong", null, "Two Wise Academy"), /*#__PURE__*/React.createElement("br", null), "Prasad Apartments, T.M.V. Colony,", /*#__PURE__*/React.createElement("br", null), "Gultekdi, Pune-411037, Maharashtra."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 pt-1"
  }, "WhatsApp / Call: ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+919049650666",
    className: "text-emerald-300 hover:underline"
  }, "+91 90496 50666")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300"
  }, "Instagram: ", /*#__PURE__*/React.createElement("a", {
    href: officialInstagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-rose-300 hover:underline"
  }, "@twowise_academy")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]"
  }, /*#__PURE__*/React.createElement("p", null, "© ", new Date().getFullYear(), " Two Wise Academy. All rights reserved. Gultekdi, Pune."), /*#__PURE__*/React.createElement("p", null, "Learn Smart. Think Wise.")))), selectedInstagramPost && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn",
    onClick: () => setSelectedInstagramPost(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl bg-[#111714] border border-white/10 max-w-lg w-full overflow-hidden shadow-2xl relative",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-b border-white/10 flex items-center justify-between bg-[#151D18]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-rose-500 to-purple-600 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4 text-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-heading font-bold text-xs text-white"
  }, "@twowise_academy"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400"
  }, "Two Wise Academy • Pune"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedInstagramPost(null),
    className: "w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-video bg-gradient-to-br from-[#1A261F] via-[#121915] to-[#20151C] flex items-center justify-center p-6 text-center overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 z-10 max-w-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-full bg-black/60 border border-white/20 mx-auto flex items-center justify-center shadow-lg"
  }, selectedInstagramPost.type === 'reel' ? /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    className: "w-6 h-6 text-rose-300 fill-rose-300 ml-1"
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    className: "w-6 h-6 text-emerald-300"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-heading font-bold text-base text-white"
  }, selectedInstagramPost.title), /*#__PURE__*/React.createElement("span", {
    className: `inline-block px-3 py-0.5 rounded-full text-xs font-bold border ${selectedInstagramPost.tagColor}`
  }, selectedInstagramPost.tag)), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./logo-owl-dark.png",
    alt: "Two Wise",
    className: "w-48 h-auto"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 space-y-4 max-h-[40vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-gray-200 leading-relaxed"
  }, selectedInstagramPost.caption), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5 pt-1"
  }, selectedInstagramPost.hashtags.map((tag, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "text-xs font-medium text-emerald-400"
  }, tag))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1 text-rose-300 font-semibold"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    className: "w-3.5 h-3.5 fill-rose-300"
  }), /*#__PURE__*/React.createElement("span", null, selectedInstagramPost.likes, " likes")), /*#__PURE__*/React.createElement("span", null, selectedInstagramPost.comments, " comments")), /*#__PURE__*/React.createElement("span", null, selectedInstagramPost.date)), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: selectedInstagramPost.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-full py-3 rounded-2xl font-heading font-bold text-xs bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 text-white flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4 text-white"
  }), /*#__PURE__*/React.createElement("span", null, "Watch on Instagram ↗")))))));
}

// Mount the React Application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(/*#__PURE__*/React.createElement(App, null));