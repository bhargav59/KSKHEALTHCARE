# Chatbot Integration Setup Guide

This guide will help you set up automated slot booking using QuickReply, Interakt, Gallabox, or our custom built-in chatbot for KSK Healthcare.

## Quick Start

The system is currently configured to use our **custom built-in chatbot** which works out of the box. No additional setup required!

### Current Configuration
- **Platform**: Custom (built-in)
- **Features**: Automated appointment booking, FAQ handling, doctor consultation requests
- **Integration**: WhatsApp forwarding for appointment confirmations

## Available Platforms

### 1. Custom Built-in Chatbot ✅ (Currently Active)
**Status**: Ready to use immediately

**Features**:
- Complete appointment booking flow
- Service selection
- Doctor information
- FAQ handling
- Emergency contact options
- WhatsApp integration for appointment confirmations
- Mobile responsive design

**Setup**: No setup required - already configured and working!

### 2. Interakt Integration

**Setup Steps**:
1. Sign up at [Interakt.ai](https://interakt.ai)
2. Create a new widget in your dashboard
3. Copy your App ID from the widget settings
4. Open `/src/config/chatbot.js`
5. Update the configuration:
   ```javascript
   export const CHATBOT_CONFIG = {
     platform: "interakt",
     interakt: {
       enabled: true,
       appId: "YOUR_ACTUAL_APP_ID", // Replace this
       // ... other settings
     }
   };
   ```

**Benefits**:
- Advanced analytics
- Multi-channel support
- Custom bot flows
- Integration with CRM systems

### 3. Gallabox Integration

**Setup Steps**:
1. Sign up at [Gallabox.com](https://gallabox.com)
2. Go to Settings > Widget in your dashboard
3. Create a new widget
4. Copy your Widget ID
5. Update the configuration:
   ```javascript
   export const CHATBOT_CONFIG = {
     platform: "gallabox",
     gallabox: {
       enabled: true,
       widgetId: "YOUR_GALLABOX_WIDGET_ID", // Replace this
       // ... other settings
     }
   };
   ```

**Benefits**:
- WhatsApp Business API integration
- Advanced automation
- Team collaboration features
- Rich media support

### 4. QuickReply Integration

**Setup Steps**:
1. Contact QuickReply.ai for account setup
2. Configure your WhatsApp Business number
3. Get your widget configuration
4. Update the configuration:
   ```javascript
   export const CHATBOT_CONFIG = {
     platform: "quickreply",
     quickreply: {
       enabled: true,
       phoneNumber: "919900546089", // Your WhatsApp Business number
       // ... other settings
     }
   };
   ```

**Benefits**:
- Direct WhatsApp integration
- Quick setup
- Template message support
- Broadcast capabilities

## Configuration File Location

All chatbot settings are centralized in:
```
/src/config/chatbot.js
```

## Current Features

### Appointment Booking Flow
1. **Service Selection**: Choose from available healthcare services
2. **Personal Information**: Name, phone, email collection
3. **Scheduling**: Preferred date and time selection
4. **Additional Notes**: Special requirements or questions
5. **Confirmation**: WhatsApp integration for appointment confirmation

### Supported Services
- Acupuncture Therapies
- Acupressure & Reflexology
- Ayurvedic & Panchakarma
- Neuro-Functional Rehabilitation
- Hearing Care & Auditory Rehab
- Nutrition & Wellness
- Speech Therapy
- General Consultation

### FAQ Handling
- Service information
- Doctor details and availability
- Clinic hours and location
- Emergency contact procedures

## Customization Options

### Appearance
```javascript
custom: {
  theme: {
    primaryColor: "#2563eb",    // Main brand color
    accentColor: "#10b981",     // Secondary color
    backgroundColor: "#ffffff"  // Background color
  }
}
```

### Position
```javascript
position: "bottom-left" // or "bottom-right"
```

### Business Hours
```javascript
businessHours: {
  start: "09:00",
  end: "19:00",
  timezone: "Asia/Kolkata",
  workingDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
}
```

## Integration Benefits

### For Patients
- **24/7 Availability**: Book appointments anytime
- **Instant Responses**: Immediate assistance
- **Easy Navigation**: Guided booking process
- **Multiple Options**: Various ways to contact

### For KSK Healthcare
- **Automated Booking**: Reduces manual work
- **Lead Capture**: Collect patient information
- **WhatsApp Integration**: Familiar communication channel
- **Analytics**: Track user interactions (with paid platforms)

## Testing the Integration

### Test the Current System
1. Visit your website
2. Look for the chat button in the bottom-left corner
3. Click "Chat with us"
4. Try booking an appointment
5. Verify WhatsApp integration works

### Test Scenarios
1. **Complete Booking**: Go through the entire appointment booking process
2. **FAQ Testing**: Ask questions about services, doctors, location
3. **Emergency Contact**: Test emergency contact flows
4. **Mobile Responsiveness**: Test on mobile devices

## Switching Between Platforms

To switch from the current custom chatbot to another platform:

1. Open `/src/config/chatbot.js`
2. Change the platform:
   ```javascript
   export const CHATBOT_CONFIG = {
     platform: "interakt", // Change this to your preferred platform
     // ... rest of config
   };
   ```
3. Ensure the corresponding platform configuration is properly set up
4. Save the file and restart your development server

## Troubleshooting

### Common Issues

**Chatbot not appearing**:
- Check if `enabled: true` in config
- Verify platform configuration
- Check browser console for errors

**WhatsApp not opening**:
- Verify phone number format (without + or spaces)
- Check if WhatsApp is installed
- Test on different devices

**Booking flow not working**:
- Check console for JavaScript errors
- Verify all required fields are configured
- Test with different browsers

### Support

For technical support or customization requests:
- Email: kskhealthcare.in@gmail.com
- Phone: +91 88843 33439
- WhatsApp: Available through the website widget

## Security Considerations

- Patient data is temporarily stored in browser memory only
- No sensitive information is stored permanently
- WhatsApp integration uses secure HTTPS links
- Consider implementing proper data protection measures for production

## Future Enhancements

Possible improvements:
- Integration with appointment management systems
- Payment gateway integration
- Video consultation booking
- Patient history tracking
- Automated follow-up messages

---

**Note**: The system is currently using the custom built-in chatbot which provides excellent functionality for appointment booking and customer service without requiring external platform setup.
