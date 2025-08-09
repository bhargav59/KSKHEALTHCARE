// Chatbot Configuration
// Edit these settings to configure your preferred chatbot platform

export const CHATBOT_CONFIG = {
  // Choose your platform: "custom", "interakt", "gallabox", "quickreply"
  platform: "custom",
  
  // Custom chatbot settings (our built-in chatbot)
  custom: {
    enabled: true,
    position: "bottom-left", // "bottom-left" or "bottom-right"
    theme: {
      primaryColor: "#2563eb",
      accentColor: "#10b981",
      backgroundColor: "#ffffff"
    }
  },

  // Interakt settings
  interakt: {
    enabled: false,
    appId: "your-interakt-app-id", // Replace with your Interakt App ID
    buttonColor: "#2563eb",
    position: "bottom-right",
    autoShow: true,
    greetingMessage: "Hello! Welcome to KSK Healthcare. How can I help you book your appointment today?"
  },

  // Gallabox settings
  gallabox: {
    enabled: false,
    widgetId: "your-gallabox-widget-id", // Replace with your Gallabox Widget ID
    color: "#2563eb",
    position: "bottom-left",
    autoShow: true,
    greetingMessage: "Welcome to KSK Healthcare! 🌿 Book your holistic healing appointment now."
  },

  // QuickReply settings
  quickreply: {
    enabled: false,
    phoneNumber: "919900546089", // Your WhatsApp number
    position: "bottom-right",
    color: "#25D366",
    headerTitle: "KSK Healthcare",
  headerSubtitle: "Cure and Care with a Difference",
    greetingMessage: "Hello! Welcome to KSK Healthcare. How can we help you today?"
  },

  // Global settings
  global: {
    phoneNumber: "919900546089",
    email: "kskhealthcare.in@gmail.com",
    businessHours: {
      start: "09:00",
      end: "19:00",
      timezone: "Asia/Kolkata",
      workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    },
    services: [
      "Acupuncture Therapies",
      "Acupressure & Reflexology", 
      "Ayurvedic & Panchakarma",
      "Neuro-Functional Rehabilitation",
      "Hearing Care & Auditory Rehab",
      "Nutrition & Wellness",
      "Speech Therapy",
      "General Consultation"
    ],
    doctors: [
      {
        name: "Dr. Gandrajupalli Swetha",
        title: "Founder Director & Head – Neuro-Speech, Hearing & Acupuncture",
        specialties: ["Neuro-Acupuncture", "Speech Therapy", "Hearing Care"]
      },
      {
        name: "Dr. Maheshwarswami K.H",
        title: "Senior Ayurvedic Physician",
        specialties: ["Ayurveda", "Panchakarma", "Pain Management"]
      }
    ]
  }
};

// Helper functions
export const getChatbotConfig = () => {
  return CHATBOT_CONFIG;
};

export const isBusinessHours = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.toLocaleLowerCase();
  
  const { start, end, workingDays } = CHATBOT_CONFIG.global.businessHours;
  const startHour = parseInt(start.split(':')[0]);
  const endHour = parseInt(end.split(':')[0]);
  
  return workingDays.includes(currentDay) && 
         currentHour >= startHour && 
         currentHour < endHour;
};

export const getWhatsAppBookingUrl = (appointmentData) => {
  const { phoneNumber } = CHATBOT_CONFIG.global;
  const message = encodeURIComponent(
    `New Appointment Request from KSK Healthcare Website:

Service: ${appointmentData.service}
Name: ${appointmentData.name}
Phone: ${appointmentData.phone}
Email: ${appointmentData.email}
Preferred Date: ${appointmentData.preferredDate}
Preferred Time: ${appointmentData.preferredTime}
Message: ${appointmentData.message || 'None'}

Please confirm this appointment. Thank you!`
  );
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

export const getEmergencyWhatsAppUrl = () => {
  const { phoneNumber } = CHATBOT_CONFIG.global;
  const message = encodeURIComponent(
    "🚨 URGENT: I need immediate medical assistance from KSK Healthcare. Please respond as soon as possible."
  );
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};

// Platform-specific setup instructions
export const SETUP_INSTRUCTIONS = {
  interakt: {
    title: "Interakt Setup",
    steps: [
      "1. Sign up at https://interakt.ai",
      "2. Create a new widget in your dashboard",
      "3. Copy your App ID",
      "4. Replace 'your-interakt-app-id' in the config with your actual App ID",
      "5. Set platform to 'interakt' and enabled to true in CHATBOT_CONFIG"
    ],
    documentation: "https://docs.interakt.ai/widget"
  },
  
  gallabox: {
    title: "Gallabox Setup", 
    steps: [
      "1. Sign up at https://gallabox.com",
      "2. Go to Settings > Widget",
      "3. Create a new widget",
      "4. Copy your Widget ID",
      "5. Replace 'your-gallabox-widget-id' in the config with your actual Widget ID",
      "6. Set platform to 'gallabox' and enabled to true in CHATBOT_CONFIG"
    ],
    documentation: "https://docs.gallabox.com/widget"
  },
  
  quickreply: {
    title: "QuickReply Setup",
    steps: [
      "1. Sign up at QuickReply.ai",
      "2. Create a new WhatsApp widget",
      "3. Configure your WhatsApp Business number",
      "4. Copy the widget script",
      "5. Update the phoneNumber in quickreply config",
      "6. Set platform to 'quickreply' and enabled to true in CHATBOT_CONFIG"
    ],
    documentation: "Contact QuickReply support for documentation"
  },
  
  custom: {
    title: "Custom Chatbot (Built-in)",
    steps: [
      "1. No additional setup required",
      "2. Chatbot is ready to use out of the box",
      "3. Customize appearance in the config",
      "4. All appointments are sent via WhatsApp to your business number",
      "5. Set platform to 'custom' and enabled to true in CHATBOT_CONFIG"
    ],
    documentation: "Built-in - no external documentation needed"
  }
};

export default CHATBOT_CONFIG;
