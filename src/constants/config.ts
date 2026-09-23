type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };

  hero: {
    name: string;
    p: string[];
  };

  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };

      email: {
        span: string;
        placeholder: string;
      };

      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;

  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  // ==========================================================
  // HTML
  // ==========================================================

  html: {
    title: "Hari Hara Suthan M — Desktop Support Engineer",

    fullName: "Hari Hara Suthan M",

    email: "harisuthanhs07@gmail.com",
  },

  // ==========================================================
  // HERO
  // ==========================================================

  hero: {
    name: "Hari Hara Suthan M",

    p: [
      "Desktop Support Engineer | Network Engineer | Cybersecurity Associate",

      "I build secure, reliable, and practical IT and cybersecurity solutions using Python, networking technologies, system administration, and modern security tools.",
    ],
  },

  // ==========================================================
  // CONTACT
  // ==========================================================

  contact: {
    p: "Get in touch",

    h2: "Contact.",

    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },

      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },

      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  // ==========================================================
  // SECTIONS
  // ==========================================================

  sections: {
    // ========================================================
    // ABOUT
    // ========================================================

    about: {
      p: "",

      h2: "",

      content:
        "I build secure, reliable, and practical IT and cybersecurity solutions using Python, networking technologies, system administration, and modern security tools.",
    },

    // ========================================================
    // EXPERIENCE
    // ========================================================

    experience: {
      p: "What I have done so far",

      h2: "Work Experience.",
    },

    // ========================================================
    // TECH / SKILLS
    // ========================================================

    tech: {
      p: "Technologies I work with",

      h2: "Skills.",
    },

    // ========================================================
    // CERTIFICATIONS
    // ========================================================

    feedbacks: {
      p: "Certifications & training",

      h2: "Credentials.",
    },

    // ========================================================
    // PROJECTS
    // ========================================================

    works: {
      p: "My work",

      h2: "Projects.",

      content:
        "A collection of cybersecurity, IT support, networking, system administration, and automation projects developed to solve practical technical problems.",
    },
  },
};