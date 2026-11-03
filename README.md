# Two Wise Academy — Official Website

> **Brand Tagline:** *"Learn Smart. Think Wise."*  
> **Location:** Pune, Maharashtra, India  
> **Mode:** Offline Classroom Coaching  
> **Target Audience:** Parents & Students (Grades 1 to 10 across ICSE, CBSE, IB, and IGCSE)

---

## 🌟 Overview & Brand Identity

This repository contains the complete, modern, student-centric, and parent-friendly website for **TWO WISE ACADEMY**. Designed as a contemporary international educational startup, the visual aesthetic prioritizes generous whitespace, subtle pastel accents, rounded cards, soft shadows, and clean typography.

### 🎨 Brand Aesthetic & Colors
- **Primary Background:** Crisp Pure White (`#FFFFFF`)
- **Typography:** Dark Charcoal (`#252525`)
- **Soft Lavender:** `#EAE5FA` (Primary brand accent, ICSE card, highlight cards)
- **Pastel Blue:** `#DFEDFA` (CBSE card, Parent support card, secondary highlights)
- **Muted Peach:** `#FCE8DD` (IB card, Student encouragement card)
- **Soft Mint Green:** `#E2F0E8` (IGCSE card, WhatsApp & Success badges)
- **Pastel Yellow:** `#FFF3D6` (Hero accent underline, doubt-solving highlights)
- **Headings Font:** Plus Jakarta Sans
- **Body Font:** Inter

---

## 🚀 How to Run & Preview

### Option 1: Instant Direct Open (No Server Needed)
Double-click `index.html` in your file explorer. It will open directly in Google Chrome, Microsoft Edge, Firefox, or Safari with full styling and interactivity!

### Option 2: One-Click Local Server (Windows Batch)
Double-click `run_server.bat`. It will automatically launch a Python local server and open `http://localhost:8000` in your default browser.

### Option 3: Command Line
```powershell
python server.py
# or
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

---

## 📑 Website Sections Breakdown

1. **Header & Sticky Navigation:**
   - Custom TWO WISE typographic identity and stylized twin-wisdom owl crest SVG.
   - Smooth navigation links: Home, About Us, Programs, Our Approach, Why Two Wise, Contact.
   - Direct WhatsApp quick pill button (`+91 90496 50666`).
   - Prominent "Enquire Now" action button.
   - Responsive mobile slide-down menu.

2. **Section 1: Hero Section:**
   - **Main Headline:** "Learn Smart. Think Wise."
   - **Supporting Headline:** "Building brighter minds, one concept at a time."
   - **Description:** "Personalised classroom learning for students from Grades 1–10 across ICSE, CBSE, IB and IGCSE boards."
   - **CTAs:** "Explore Our Programs" and "Enquire Now".
   - **Visual Direction:** Modern classroom composition with whiteboard, collaborative desks, student indicators, and floating academic badges ("Concept First", "Small Batches 8-10 max", "Offline in Pune", "All 4 Curricula").

3. **Section 2: Introduction:**
   - **Heading:** "Education That Goes Beyond Textbooks."
   - Three visual highlight cards:
     * *Understand Better* (Soft Lavender)
     * *Learn Smarter* (Pastel Blue)
     * *Grow Confidently* (Soft Mint Green)

4. **Section 3: Boards We Cater To:**
   - **Heading:** "One Academy. Multiple Curricula."
   - Four distinctive cards:
     * **ICSE** (Grades 1–10)
     * **CBSE** (Grades 1–10)
     * **IB** (Grades 1–10, PYP & MYP)
     * **IGCSE** (Grades 1–10, Cambridge Assessment)
   - Each card features board-specific descriptions, grade tags, curriculum pillars, and direct enquiry shortcuts.

5. **Section 4: Subjects:**
   - **Heading:** "All Subjects. One Learning Destination."
   - Explicit note clarifying that **all subjects across all curricula** are covered.
   - Cards: Mathematics, Science (Physics, Chemistry, Biology), English (Language & Literature), Social Studies (History, Civics, Geography), Languages (Hindi, Marathi, French, German, Spanish, Sanskrit), Curriculum-Specific (Computer Applications, Economics, Commercial Studies).

6. **Section 5: Why Choose Two Wise?:**
   - **Heading:** "Because Every Student Deserves to Be Understood."
   - Eight feature cards:
     1. Individual Attention
     2. Small Batches (8–10 students)
     3. Regular Tests & Assessments
     4. Doubt-Solving Sessions
     5. Personalised Study Plans
     6. Parent-Teacher Feedback
     7. Exam Preparation
     8. Experienced Faculty

7. **Section 6: Our Learning Approach:**
   - **Heading:** "Smart Learning. Step by Step."
   - 4-step modern visual process:
     * STEP 01 — Understand
     * STEP 02 — Strengthen
     * STEP 03 — Practise
     * STEP 04 — Progress
   - Connected horizontal journey on desktop and vertical timeline on mobile.

8. **Section 7: Parent and Student Section:**
   - Split section with contrasting pastel backgrounds:
     * **For Parents:** "Confidence That Comes from Knowing Your Child Is Supported." (Transparent feedback, reduced homework friction, safe offline classrooms).
     * **For Students:** "Learning Can Be Interesting. And We Make It So." (Zero fear of doubts, friendly mentors, genuine exam confidence).

9. **Section 8: Call to Action:**
   - Full-width soft lavender section.
   - **Headline:** "Ready to Make Learning Smarter?"
   - Quick action buttons for "Enquire Now" and "Chat on WhatsApp".

10. **Section 9: Contact / Enquiry:**
    - **Heading:** "Let's Start Their Learning Journey."
    - **Functional Enquiry Form:**
      * Parent's Name
      * Student's Name
      * Phone Number (+91 format, 10-digit validation)
      * Grade / Standard (Grades 1 to 10)
      * Educational Board (ICSE / CBSE / IB / IGCSE)
      * Subjects Interested In (interactive multi-select chips)
      * Message / Learning Goals
      * Validation feedback and error handling
      * Post-submission success state with 1-click **Send Enquiry via WhatsApp** pre-filled button!
    - **Contact Cards:**
      * WhatsApp: `9049650666` -> opens `https://wa.me/919049650666?text=Hi%20Two%20Wise%20Academy!%20I%20would%20like%20to%20enquire%20about%20academic%20coaching%20for%20my%20child.`
      * Location: Pune, Maharashtra, India.
      * Instagram: `@twowise_academy` -> `https://www.instagram.com/twowise_academy/`

11. **Section 10: Footer:**
    - Two Wise Academy logo and tagline: *"Learn Smart. Think Wise."*
    - Brand mission statement.
    - Quick navigation links.
    - Curricula & Grades.
    - Official contact links and social media.
    - Copyright: `© 2026 Two Wise Academy. All Rights Reserved.`

12. **Floating WhatsApp Action:**
    - Bottom-right corner floating WhatsApp button with subtle pulse ping and hover tooltip.

---

## 📁 Project Structure

```
c:\Users\sarak\Desktop\ai\
├── index.html        # Complete, self-contained website with embedded React & Tailwind
├── app.jsx           # Clean standalone React component source code
├── styles.css        # Custom CSS, pastel color variables, keyframes & animations
├── server.py         # Python 3 local development server
├── run_server.bat    # 1-click Windows launcher for local preview
└── README.md         # Comprehensive project documentation
```
