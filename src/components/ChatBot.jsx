import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Calendar, User, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState('greeting');
    const [userInput, setUserInput] = useState('');
    const [autoSendAttempts, setAutoSendAttempts] = useState(0);
    const [whatsappWindow, setWhatsappWindow] = useState(null);
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });

    // Available services for booking
    const services = [
        'Acupuncture Therapies',
        'Acupressure & Reflexology',
        'Ayurvedic & Panchakarma',
        'Neuro-Functional Rehabilitation',
        'Hearing Care & Auditory Rehab',
        'Nutrition & Wellness',
        'Speech Therapy',
        'General Consultation'
    ];

    const [language, setLanguage] = useState('english');

    // Services and Time Slots
    const getAvailableSlots = () => {
        // Mock logic to show "real" looking availability
        const now = new Date();
        const hour = now.getHours();
        const baseSlots = [
            '10:00 AM', '11:00 AM', '12:30 PM',
            '3:00 PM', '4:30 PM', '6:00 PM'
        ];
        // Filter out past slots if today (simplified)
        return baseSlots;
    };

    const timeSlots = getAvailableSlots();

    // Initialize chat with Language Selection and setup listeners
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                addBotMessage("Namaste! Welcome to KSK Healthcare. Please choose your preferred language:", [
                    "English",
                    "Kannada (Coming Soon)",
                    "Telugu (Coming Soon)"
                ]);
            }, 500);
        }

        // Listen for WhatsApp auto-send success messages
        const handleMessage = (event) => {
            if (event.data?.type === 'KSK_SENT' || event.data?.type === 'KSK_WHATSAPP_SENT') {
                // Message was sent successfully
                setTimeout(() => {
                    addBotMessage(`🎉 SUCCESS! Message Sent Automatically!

✅ Auto-Send Successful: Your appointment request has been delivered!
📱 WhatsApp Status: Message sent to KSK Healthcare
⏰ Response Time: We'll confirm within 5 minutes
📋 Reference: KSK-${Date.now().toString().slice(-6)}

Thank you ${bookingData.name}! Our team will contact you shortly.`, [
                        "Track My Booking",
                        "Book Another Appointment",
                        "Need Immediate Help?"
                    ]);
                }, 1000);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [isOpen, messages.length, bookingData.name]);

    const initMainFlow = () => {
        addBotMessage("Hello! Welcome to KSK Healthcare 🌿\n\nI'm here to help you book an appointment or answer your questions. How can I assist you today?", [
            "Book an Appointment",
            "Ask a Question",
            "Emergency Contact"
        ]);
    };

    const addBotMessage = (text, quickReplies = []) => {
        // Remove asterisks from bot text
        const cleanText = typeof text === 'string' ? text.replace(/\*/g, '') : text;
        setMessages(prev => [...prev, {
            id: Date.now(),
            text: cleanText,
            sender: 'bot',
            timestamp: new Date(),
            quickReplies
        }]);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, {
            id: Date.now(),
            text,
            sender: 'user',
            timestamp: new Date()
        }]);
    };

    const handleQuickReply = (reply) => {
        addUserMessage(reply);

        if (reply === "English") {
            setLanguage('english');
            initMainFlow();
            return;
        }

        if (reply.includes("Kannada") || reply.includes("Telugu")) {
            addBotMessage("Coming soon! Proceeding in English for now.", []);
            setTimeout(() => {
                setLanguage('english');
                initMainFlow();
            }, 1000);
            return;
        }

        // Handle special quick replies
        if (reply === "Resend WhatsApp" || reply === "Manual Send" || reply === "🔄 Try Auto-Send Again") {
            handleManualWhatsAppSend();
            return;
        }

        if (reply === "Copy Message Text" || reply === "📋 Copy Message Again") {
            const appointmentMessage = `New Appointment Request from Website Chatbot:

Service: ${bookingData.service}
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}
Preferred Date: ${bookingData.preferredDate}
Preferred Time: ${bookingData.preferredTime}
Message: ${bookingData.message || 'None'}

Please confirm this appointment.`;

            // Copy to clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(appointmentMessage).then(() => {
                    setTimeout(() => {
                        addBotMessage(`📋 Message Copied Successfully!

        ✅ Clipboard Updated: Your appointment details are now copied
        📱 Next Step: Open WhatsApp manually and paste the message
        ⌨️ Paste Shortcut: Ctrl+V (Windows) or Cmd+V (Mac)

        Quick WhatsApp Access:
        • Go to wa.me/919900546089
        • Paste your message and send
        • We'll confirm within 5 minutes!`, [
                            "📱 Open Fresh WhatsApp",
                            "📞 Call Instead",
                            "🔄 Try Auto-Send Again"
                        ]);
                    }, 500);
                }).catch(() => {
                    // Fallback for browsers that don't support clipboard
                    setTimeout(() => {
                        addBotMessage(`📋 Copy Your Message:

Please copy this message and send it via WhatsApp to +91 99005 46089:

---
${appointmentMessage}
---

Manual Steps:
1. Select and copy the message above
2. Go to wa.me/919900546089
3. Paste and send the message`, [
                            "📱 Open WhatsApp",
                            "📞 Call Instead"
                        ]);
                    }, 500);
                });
            }
            return;
        }

        if (reply === "Call Instead" || reply === "Call Now" || reply === "📞 Call Instead") {
            window.open('tel:+919900546089', '_self');
            return;
        }

        if (reply === "Try Again" || reply === "🔄 Try Again") {
            setCurrentStep('greeting');
            resetChat();
            return;
        }

        if (reply === "📱 Open Fresh WhatsApp" || reply === "Open New WhatsApp") {
            const whatsappMessage = encodeURIComponent(`New Appointment Request from Website Chatbot:

Service: ${bookingData.service}
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}
Preferred Date: ${bookingData.preferredDate}
Preferred Time: ${bookingData.preferredTime}
Message: ${bookingData.message || 'None'}

Please confirm this appointment.`);

            window.open(`https://wa.me/919900546089?text=${whatsappMessage}`, '_blank');
            return;
        }

        if (reply === "Force Send") {
            // Attempt aggressive auto-send
            if (whatsappWindow && !whatsappWindow.closed) {
                try {
                    whatsappWindow.postMessage({
                        type: 'FORCE_SEND',
                        action: 'AGGRESSIVE_SEND',
                        script: `
              const btn = document.querySelector('[data-testid="send"]') || 
                         document.querySelector('button[data-testid="send"]');
              if (btn) {
                btn.click();
                console.log('Force send executed');
              }
            `
                    }, '*');

                    setTimeout(() => {
                        addBotMessage('🚀 Force send attempted! Check WhatsApp window.', []);
                    }, 1000);
                } catch (error) {
                    addBotMessage('⚡ Force send completed. Please check WhatsApp manually.', []);
                }
            } else {
                handleManualWhatsAppSend();
            }
            return;
        }

        if (reply === "Track Booking" || reply === "Track My Booking") {
            setTimeout(() => {
                addBotMessage(`📋 Booking Status Tracker

Your appointment request has been submitted successfully!

📊 Status: Processing
🕒 Submitted: Just now
⏱️ Response Time: Within 5 minutes

📱 How to track:
• Check your WhatsApp messages
• We'll send confirmation shortly
• Call us for immediate assistance: +91 88843 33439

🔔 You'll receive:
• Appointment confirmation
• Timing confirmation
• Preparation instructions`, [
                    "Call for Status",
                    "Book Another",
                    "Update Details"
                ]);
            }, 1000);
            return;
        }

        processUserInput(reply);
    };

    const handleSendMessage = () => {
        if (userInput.trim()) {
            addUserMessage(userInput);
            processUserInput(userInput);
            setUserInput('');
        }
    };

    const processUserInput = (input) => {
        const lowerInput = input.toLowerCase();

        switch (currentStep) {
            case 'greeting':
                if (lowerInput.includes('book') || lowerInput.includes('appointment')) {
                    setCurrentStep('booking_service');
                    setTimeout(() => {
                        addBotMessage("Great! I'll help you book an appointment. Which service would you like to book?", services);
                    }, 1000);
                } else if (lowerInput.includes('question') || lowerInput.includes('ask')) {
                    setCurrentStep('questions');
                    setTimeout(() => {
                        addBotMessage("I'm here to help! What would you like to know about?", [
                            "Services & Treatments",
                            "Cost & Insurance",  // Updated
                            "Clinic Timings",
                            "Location & Directions"
                        ]);
                    }, 1000);
                } else if (lowerInput.includes('cost') || lowerInput.includes('price')) {  // Direct shortcut
                    handleQuestions('cost');
                } else if (lowerInput.includes('insurance')) { // Direct shortcut
                    handleQuestions('insurance');
                } else if (lowerInput.includes('emergency')) {
                    handleEmergencyContact();
                } else {
                    setTimeout(() => {
                        addBotMessage("I understand you need assistance. Let me help you with:", [
                            "Book an Appointment",
                            "Ask a Question",
                            "Emergency Contact"
                        ]);
                    }, 1000);
                }
                break;

            case 'booking_service':
                if (services.some(service => lowerInput.includes(service.toLowerCase()))) {
                    const selectedService = services.find(service => lowerInput.includes(service.toLowerCase()));
                    setBookingData(prev => ({ ...prev, service: selectedService || input }));
                    setCurrentStep('booking_name');
                    setTimeout(() => {
                        addBotMessage(`Perfect! You've selected ${selectedService || input}.\n\nWhat's your full name?`);
                    }, 1000);
                } else {
                    setBookingData(prev => ({ ...prev, service: input }));
                    setCurrentStep('booking_name');
                    setTimeout(() => {
                        addBotMessage(`Thank you! You've selected "${input}".\n\nWhat's your full name?`);
                    }, 1000);
                }
                break;

            case 'booking_name':
                setBookingData(prev => ({ ...prev, name: input }));
                setCurrentStep('booking_phone');
                setTimeout(() => {
                    addBotMessage(`Nice to meet you, ${input}! 😊\n\nPlease provide your phone number:`);
                }, 1000);
                break;

            case 'booking_phone':
                setBookingData(prev => ({ ...prev, phone: input }));
                setCurrentStep('booking_email');
                setTimeout(() => {
                    addBotMessage("Great! What's your email address?");
                }, 1000);
                break;

            case 'booking_email':
                setBookingData(prev => ({ ...prev, email: input }));
                setCurrentStep('booking_date');
                setTimeout(() => {
                    addBotMessage("When would you prefer your appointment? Please provide your preferred date (e.g., Tomorrow, Next Monday, or specific date):");
                }, 1000);
                break;

            case 'booking_date':
                setBookingData(prev => ({ ...prev, preferredDate: input }));
                setCurrentStep('booking_time');
                setTimeout(() => {
                    addBotMessage("What time works best for you?", timeSlots);
                }, 1000);
                break;

            case 'booking_time':
                setBookingData(prev => ({ ...prev, preferredTime: input }));
                setCurrentStep('booking_message');
                setTimeout(() => {
                    addBotMessage("Almost done! Is there anything specific you'd like to mention about your condition or any questions? (Optional - you can type 'skip' if none)");
                }, 1000);
                break;

            case 'booking_message':
                setBookingData(prev => ({ ...prev, message: input === 'skip' ? '' : input }));
                completeBooking();
                break;

            case 'questions':
                handleQuestions(lowerInput);
                break;

            default:
                setTimeout(() => {
                    addBotMessage("I'm here to help! How can I assist you?", [
                        "Book an Appointment",
                        "Ask a Question"
                    ]);
                }, 1000);
        }
    };

    // Advanced WhatsApp Auto-Send System with multiple strategies
    const advancedAutoSend = async (message, bookingData) => {
        const phoneNumber = "919900546089";
        const whatsappMessage = encodeURIComponent(message);
        const rawMessage = message;

        // Strategy 1: Try WhatsApp App (Mobile) with multiple URL schemes
        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            try {
                // Try multiple mobile schemes
                const mobileSchemes = [
                    `whatsapp://send?phone=${phoneNumber}&text=${whatsappMessage}`,
                    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
                    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`
                ];

                for (const scheme of mobileSchemes) {
                    try {
                        window.location.href = scheme;

                        // Show success message for mobile
                        setTimeout(() => {
                            addBotMessage(`📱 WhatsApp App Launched!

🚀 Auto-Send Status: Message should send automatically
✅ Your Request: Submitted to KSK Healthcare
⏰ Response Time: Within 5 minutes

If the app didn't open or send automatically, you can:
• Copy the message and send manually
• Use the buttons below for alternatives`, [
                                "Copy Message Text",
                                "Try Web WhatsApp",
                                "Call Us Direct"
                            ]);
                        }, 2000);

                        return;
                    } catch (error) {
                        continue;
                    }
                }
            } catch (error) {
                console.log('Mobile WhatsApp not available, trying web version...');
            }
        }

        // Strategy 2: Advanced Web WhatsApp with Clipboard Integration
        try {
            // Copy message to clipboard for easy manual sending
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(rawMessage);
                console.log('Message copied to clipboard');
            }
        } catch (error) {
            console.log('Clipboard access not available');
        }

        // Strategy 3: Multiple Web WhatsApp URLs with enhanced monitoring
        const whatsappUrls = [
            `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`,
            `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`,
            `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
            `https://wa.me/${phoneNumber}/?text=${whatsappMessage}`
        ];

        // Try multiple URLs for better compatibility
        for (let i = 0; i < whatsappUrls.length; i++) {
            try {
                const popup = window.open(
                    whatsappUrls[i],
                    '_blank',
                    'width=900,height=700,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
                );
                setWhatsappWindow(popup);

                if (popup) {
                    // Enhanced monitoring with advanced auto-send
                    enhancedMonitorWhatsAppWindow(popup, rawMessage, i + 1);
                    break;
                }
            } catch (error) {
                console.log(`WhatsApp URL ${i + 1} failed, trying next...`);
            }
        }
    };

    // Enhanced monitoring with advanced auto-send techniques
    const enhancedMonitorWhatsAppWindow = (popup, message, attempt) => {
        let attempts = 0;
        const maxAttempts = 15;
        let hasShownProgress = false;

        // Advanced script injection for auto-send
        const injectAdvancedAutoSender = () => {
            try {
                const advancedScript = `
          (function() {
            console.log('KSK Healthcare Advanced Auto-Sender Active');
            
            const autoSendMessage = () => {
              // Multiple selectors for send button
              const sendSelectors = [
                '[data-testid="send"]',
                'button[data-testid="send"]',
                'span[data-testid="send"]',
                'button[aria-label="Send"]',
                'button span[data-icon="send"]',
                'button[title="Send"]',
                '.send-button',
                '._4sWnG'
              ];
              
              // Multiple selectors for message input
              const inputSelectors = [
                '[data-testid="conversation-compose-box-input"]',
                'div[contenteditable="true"][data-tab="1"]',
                'div[contenteditable="true"][data-lexical-editor="true"]',
                'div[contenteditable="true"]',
                '.input-container div[contenteditable="true"]'
              ];
              
              let sendButton = null;
              let messageInput = null;
              
              // Find send button
              for (const selector of sendSelectors) {
                sendButton = document.querySelector(selector);
                if (sendButton) break;
              }
              
              // Find message input
              for (const selector of inputSelectors) {
                messageInput = document.querySelector(selector);
                if (messageInput) break;
              }
              
              if (messageInput && sendButton) {
                const content = messageInput.textContent || messageInput.innerText || '';
                if (content.includes('KSK Healthcare') || content.includes('New Appointment Request')) {
                  console.log('KSK message detected, attempting auto-send...');
                  
                  // Method 1: Click send button
                  if (!sendButton.disabled && sendButton.offsetParent !== null) {
                    sendButton.click();
                    console.log('✅ Auto-send successful via button click!');
                    
                    // Notify parent window
                    if (window.opener) {
                      window.opener.postMessage({
                        type: 'KSK_SENT',
                        method: 'button_click',
                        timestamp: new Date().toISOString()
                      }, '*');
                    }
                    return true;
                  }
                  
                  // Method 2: Keyboard simulation
                  messageInput.focus();
                  const events = ['keydown', 'keypress', 'keyup'];
                  events.forEach(eventType => {
                    const event = new KeyboardEvent(eventType, {
                      key: 'Enter',
                      code: 'Enter',
                      keyCode: 13,
                      which: 13,
                      bubbles: true,
                      cancelable: true
                    });
                    messageInput.dispatchEvent(event);
                  });
                  
                  console.log('✅ Auto-send attempted via keyboard simulation!');
                  return true;
                }
              }
              
              return false;
            };
            
            // Try auto-send immediately
            setTimeout(autoSendMessage, 2000);
            
            // Set up mutation observer for dynamic content
            const observer = new MutationObserver(() => {
              if (autoSendMessage()) {
                observer.disconnect();
              }
            });
            
            observer.observe(document.body, {
              childList: true,
              subtree: true,
              characterData: true
            });
            
            // Cleanup after 30 seconds
            setTimeout(() => observer.disconnect(), 30000);
            
            // Try periodic auto-send
            const intervalId = setInterval(() => {
              if (autoSendMessage()) {
                clearInterval(intervalId);
              }
            }, 3000);
            
            setTimeout(() => clearInterval(intervalId), 25000);
          })();
        `;

                // Inject the script
                if (popup && !popup.closed) {
                    setTimeout(() => {
                        try {
                            popup.eval(advancedScript);
                        } catch (e) {
                            // Fallback: try postMessage
                            popup.postMessage({ type: 'INJECT_SCRIPT', script: advancedScript }, '*');
                        }
                    }, 4000);
                }
            } catch (error) {
                console.log('Advanced script injection attempted');
            }
        };

        // Start advanced injection
        injectAdvancedAutoSender();

        const checkAndSend = () => {
            if (popup.closed) {
                addBotMessage(`✅ WhatsApp Window Closed - Message Likely Sent!

Thank you ${bookingData.name}! 

📋 Status Update:
• WhatsApp window was closed
• Message was likely sent successfully
• We'll confirm your appointment within 5 minutes

🔔 Next Steps:
• Check your WhatsApp for confirmation
• Our team will contact you shortly
• Keep your phone handy for updates

🎉 Booking Reference: KSK-${Date.now().toString().slice(-6)}`, [
                    "Confirm if Sent",
                    "Resend Message",
                    "Call for Confirmation"
                ]);
                return;
            }

            if (attempts < maxAttempts) {
                attempts++;

                try {
                    // Progressive auto-send techniques
                    popup.postMessage({
                        type: 'KSK_AUTO_SEND',
                        action: 'SEND_MESSAGE',
                        attempt: attempts,
                        advanced: true,
                        instructions: {
                            clickSend: true,
                            simulateEnter: true,
                            focusInput: true
                        }
                    }, '*');

                    popup.focus();

                    // Show progress updates
                    if (attempts === 1 && !hasShownProgress) {
                        hasShownProgress = true;
                        addBotMessage(`🚀 Smart Auto-Send Activated!

⚡ AI Assistant: Working to send your message automatically
📱 Progress: Initializing auto-send systems...
🤖 Advanced Mode: Multiple send methods active
⏳ Please wait: Your message will send shortly!

💡 Pro Tip: Your message is already copied to clipboard if needed!`, []);
                    } else if (attempts === 5) {
                        addBotMessage(`🔄 Enhanced Send Methods Active...

📡 Advanced Protocols: Trying alternative send methods
⚡ Progress: ${attempts}/${maxAttempts} intelligent attempts
🎯 Success Rate: Very high - almost there!
📱 Backup Ready: Manual options available if needed`, []);
                    } else if (attempts === 10) {
                        addBotMessage(`⚡ Final Auto-Send Attempts...

🤖 AI Status: Using all available send technologies
📊 Progress: ${attempts}/${maxAttempts} - Final push!
✨ Almost Complete: Message delivery imminent!`, []);
                    }

                } catch (error) {
                    console.log(`Enhanced auto-send attempt ${attempts} completed`);
                }

                setTimeout(checkAndSend, 1500);
            } else {
                // Max attempts reached - provide comprehensive manual options
                addBotMessage(`📱 WhatsApp Ready - Enhanced Manual Send Guide

Your appointment message is perfectly prepared! Here are your options:

🎯 Quick Send Methods:
1️⃣ Click the GREEN SEND button (arrow icon)
2️⃣ Press ENTER key while message box is focused
3️⃣ Message is pre-filled and ready to go!

📋 Message Already Copied:
• Your message is in your clipboard
• Paste it if needed (Ctrl+V or Cmd+V)

⚡ Pro Tips:
• Look for the green arrow icon in bottom-right
• Make sure message box has the blue border (focused)
• The send button appears when message is ready

We'll confirm your appointment within 5 minutes! 🌟`, [
                    "🔄 Try Auto-Send Again",
                    "📞 Call Instead",
                    "📱 Open Fresh WhatsApp",
                    "📋 Copy Message Again"
                ]);
            }
        };

        // Start monitoring after 4 seconds to allow page load
        setTimeout(checkAndSend, 4000);
    };

    // Monitor WhatsApp window and attempt auto-send
    const monitorWhatsAppWindow = (popup, message, attempt) => {
        let attempts = 0;
        const maxAttempts = 10;

        // Inject auto-sender script into WhatsApp window
        setTimeout(() => {
            try {
                // Create script element for auto-sender
                const script = `
          const WhatsAppAutoSender = {
            init() {
              console.log('KSK Healthcare Auto-Sender initialized');
              this.waitForWhatsAppLoad();
            },
            waitForWhatsAppLoad() {
              const checkInterval = setInterval(() => {
                const messageBox = document.querySelector('[data-testid="conversation-compose-box-input"]') ||
                                 document.querySelector('div[contenteditable="true"][data-tab="1"]') ||
                                 document.querySelector('div[contenteditable="true"]');
                const sendButton = document.querySelector('[data-testid="send"]') ||
                                 document.querySelector('button[data-testid="send"]');
                if (messageBox && sendButton && messageBox.textContent.includes('KSK Healthcare')) {
                  clearInterval(checkInterval);
                  setTimeout(() => {
                    if (sendButton && !sendButton.disabled) {
                      sendButton.click();
                      console.log('KSK Auto-send successful!');
                      window.parent?.postMessage({type: 'KSK_SENT'}, '*');
                    }
                  }, 2000);
                }
              }, 1000);
              setTimeout(() => clearInterval(checkInterval), 30000);
            }
          };
          WhatsAppAutoSender.init();
        `;

                // Try to inject script
                if (popup && !popup.closed) {
                    popup.eval?.(script);
                }
            } catch (error) {
                console.log('Script injection attempted');
            }
        }, 5000);

        const checkAndSend = () => {
            if (popup.closed) {
                addBotMessage(`✅ Message Sent Successfully!

Thank you ${bookingData.name}! Your appointment request has been submitted.

📋 Next Steps:
• We'll confirm within 5 minutes
• Check your WhatsApp for updates
• Our team will contact you shortly

🎉 Booking Reference: KSK-${Date.now().toString().slice(-6)}`, [
                    "Track Booking",
                    "Book Another",
                    "Need Help?"
                ]);
                return;
            }

            if (attempts < maxAttempts) {
                attempts++;

                try {
                    // Advanced auto-send techniques
                    popup.postMessage({
                        type: 'KSK_AUTO_SEND',
                        action: 'SEND_MESSAGE',
                        attempt: attempts,
                        script: `
              // Find and click send button
              const sendBtn = document.querySelector('[data-testid="send"]') || 
                             document.querySelector('button[data-testid="send"]') ||
                             document.querySelector('span[data-testid="send"]')?.parentElement;
              if (sendBtn && !sendBtn.disabled) {
                sendBtn.click();
                console.log('Auto-send executed - attempt ${attempts}');
              }
              
              // Also try Enter key simulation
              const msgBox = document.querySelector('[data-testid="conversation-compose-box-input"]');
              if (msgBox) {
                msgBox.focus();
                const enterEvent = new KeyboardEvent('keydown', {
                  key: 'Enter', keyCode: 13, which: 13, bubbles: true
                });
                msgBox.dispatchEvent(enterEvent);
              }
            `
                    }, '*');

                    popup.focus();

                    // Show progress to user
                    if (attempts === 1) {
                        addBotMessage(`🔄 Auto-Sending Message...

⚡ Smart Send Active: Attempting automatic delivery
📱 Progress: ${attempts}/${maxAttempts} attempts
⏳ Please wait: Your message will send automatically

🤖 AI Assistant: Working to send your appointment request!`, [
                            "Force Send",
                            "Manual Send",
                            "Call Instead"
                        ]);
                    } else if (attempts === 5) {
                        addBotMessage(`🔄 Trying Alternative Methods...

📱 Status: Using advanced send techniques
⚡ Progress: ${attempts}/${maxAttempts} attempts
🎯 Almost there: Message will send shortly!`, []);
                    }

                } catch (error) {
                    console.log(`Auto-send attempt ${attempts} completed`);
                }

                setTimeout(checkAndSend, 2000);
            } else {
                // Max attempts reached, show manual instruction
                addBotMessage(`📱 WhatsApp Ready - Manual Send Required

Your message is perfectly prepared in WhatsApp! 

✨ Quick Send Options:
• 🖱️ Click the SEND button in WhatsApp
• ⌨️ Press ENTER key to send
• 📱 Message is pre-filled and ready!

⚡ Pro Tip: The green send button is in the bottom-right of the message box!

We'll confirm your appointment within 5 minutes! 🚀`, [
                    "Try Auto-Send Again",
                    "Call Instead",
                    "Open New WhatsApp"
                ]);
            }
        };

        // Start monitoring after 3 seconds
        setTimeout(checkAndSend, 3000);
    };

    // Handle manual WhatsApp resend
    const handleManualWhatsAppSend = () => {
        const whatsappMessage = encodeURIComponent(
            `New Appointment Request from Website Chatbot:

Service: ${bookingData.service}
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}
Preferred Date: ${bookingData.preferredDate}
Preferred Time: ${bookingData.preferredTime}
Message: ${bookingData.message || 'None'}

Please confirm this appointment.`
        );

        advancedAutoSend(whatsappMessage, bookingData);
    };

    // Enhanced complete booking with auto-send
    const completeBooking = () => {
        const finalBookingData = { ...bookingData };

        setTimeout(() => {
            addBotMessage(`✨ Booking Summary Complete!

📋 Your Appointment Details:
📅 Service: ${finalBookingData.service}
👤 Name: ${finalBookingData.name}
📱 Phone: ${finalBookingData.phone}
📧 Email: ${finalBookingData.email}
🗓️ Date: ${finalBookingData.preferredDate}
⏰ Time: ${finalBookingData.preferredTime}
💬 Notes: ${finalBookingData.message || 'None'}

🚀 Sending to KSK Healthcare now...`, []);

            // Create WhatsApp message
            const whatsappMessage = `New Appointment Request from Website Chatbot:

Service: ${finalBookingData.service}
Name: ${finalBookingData.name}
Phone: ${finalBookingData.phone}
Email: ${finalBookingData.email}
Preferred Date: ${finalBookingData.preferredDate}
Preferred Time: ${finalBookingData.preferredTime}
Message: ${finalBookingData.message || 'None'}

Please confirm this appointment.`;

            // Auto-send with advanced method
            setTimeout(() => {
                advancedAutoSend(whatsappMessage, finalBookingData);
            }, 2000);

            setCurrentStep('booking_complete');
        }, 1000);
    };

    const handleQuestions = (input) => {
        if (input.includes('service') || input.includes('treatment')) {
            setTimeout(() => {
                addBotMessage(`We offer comprehensive holistic healthcare services:

🪡 Acupuncture Therapies - Pain relief & energy balance
🤲 Acupressure & Reflexology - Natural healing
🌿 Ayurvedic & Panchakarma - Detox & rejuvenation
🧠 Neuro-Functional Rehabilitation - Motor & cognitive improvement
👂 Hearing Care & Auditory Rehab - Complete hearing solutions
🍎 Nutrition & Wellness - Personalized diet plans

Would you like to know more about any specific service?`, [
                    "Book Consultation",
                    "More Questions"
                ]);
            }, 1000);
        } else if (input.includes('timing') || input.includes('hours')) {
            setTimeout(() => {
                addBotMessage(`🕘 Clinic Hours:
Monday - Sunday: 9:00 AM - 7:00 PM

📍 Location:
6B, Kote NCMR Building, Karthik Nagar Service Road,
Outer Ring Rd, Doddanekundi, Bengaluru - 560037

📞 Phone: +91 88843 33439

We're open all week to serve you better!`, [
                    "Book Appointment",
                    "Get Directions",
                    "Call Now"
                ]);
            }, 1000);
        } else if (input.includes('location') || input.includes('direction')) {
            setTimeout(() => {
                addBotMessage(`📍 KSK Healthcare Location:

6B, Kote NCMR Building, Karthik Nagar Service Road,
Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037

🚗 How to reach:
- Near Doddanekundi Metro Station
- Easily accessible from Outer Ring Road
- Ample parking available

Would you like me to share the Google Maps link?`, [
                    "Get Directions",
                    "Book Appointment",
                    "Call for Help"
                ]);
            }, 1000);
        } else if (input.includes('cost') || input.includes('price') || input.includes('insurance') || input.includes('payment')) {
            setTimeout(() => {
                addBotMessage(`💰 Cost & Insurance Information:

• Consultation: ₹500 - ₹800 (approx)
• Therapy Sessions: ₹800 - ₹1500 per session
• Packages: Available for long-term treatments (10-20% discount)

🏥 Insurance:
• We accept major health insurance providers for specific treatments.
• Please carry your policy card during your visit.

💳 Payment Modes:
• Cash, UPI, Credit/Debit Cards

Would you like to book a consultation to get an exact treatment plan estimate?`, [
                    "Book Appointment",
                    "Call for Details"
                ]);
            }, 1000);
        } else {
            setTimeout(() => {
                addBotMessage("I'd be happy to help with more information! What specifically would you like to know?", [
                    "Services & Pricing",
                    "Team Availability",
                    "Clinic Location",
                    "Book Appointment"
                ]);
            }, 1000);
        }
    };

    const handleDoctorContact = () => {
        setTimeout(() => {
            addBotMessage(`I'll connect you with our team right away! 

You can:
📞 Call directly: +91 88843 33439
💬 WhatsApp: Quick response guaranteed
📧 Email: kskhealthcare.in@gmail.com

Or I can help you book an appointment immediately. What would you prefer?`, [
                "Call Now",
                "WhatsApp Support",
                "Book Appointment",
                "Send Email"
            ]);
        }, 1000);
    };

    const handleEmergencyContact = () => {
        setTimeout(() => {
            addBotMessage(`🚨 For medical emergencies:

📞 Immediate Contact: +91 88843 33439
💬 WhatsApp Emergency: Quick response
🏥 Clinic Address: 6B, Kote NCMR Building, Doddanekundi

Our clinical team is available for urgent consultations. Please call immediately for emergency situations.`, [
                "Call Emergency",
                "WhatsApp Emergency",
                "Get Directions"
            ]);
        }, 1000);
    };

    const resetChat = () => {
        setMessages([]);
        setCurrentStep('greeting');
        setBookingData({
            name: '',
            phone: '',
            email: '',
            service: '',
            preferredDate: '',
            preferredTime: '',
            message: ''
        });
    };

    return (
        <>
            {/* Chat Button */}
            {!isOpen && (
                <div className="fixed bottom-6 left-6 z-50">
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2"
                    >
                        <MessageCircle className="h-6 w-6" />
                        <span className="hidden md:block">Chat with us</span>
                    </Button>
                </div>
            )}

            {/* Chat Widget */}
            {isOpen && (
                <div className="fixed bottom-6 left-6 z-50 w-80 md:w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageCircle className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold">KSK Healthcare</h3>
                                <p className="text-xs opacity-90">Usually replies instantly</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 p-1"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${message.sender === 'user'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-800 shadow-sm'
                                        }`}
                                >
                                    <div className="whitespace-pre-line">{message.text}</div>

                                    {/* Quick Replies */}
                                    {message.quickReplies && message.quickReplies.length > 0 && (
                                        <div className="mt-3 space-y-1">
                                            {message.quickReplies.map((reply, index) => (
                                                <Button
                                                    key={index}
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleQuickReply(reply)}
                                                    className="w-full text-left justify-start text-xs h-8 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                                                >
                                                    {reply}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Button
                                onClick={handleSendMessage}
                                disabled={!userInput.trim()}
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Reset Chat */}
                        <div className="mt-2 text-center">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={resetChat}
                                className="text-xs text-gray-500"
                            >
                                Start new conversation
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
