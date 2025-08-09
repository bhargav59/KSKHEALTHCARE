import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronRight, User, Bot, Phone, Calendar, MapPin, Star } from 'lucide-react';

const SymptomChecker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [userResponses, setUserResponses] = useState({});
    const [chatHistory, setChatHistory] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [recommendation, setRecommendation] = useState(null);

    // Symptom checker flow data
    const symptomFlow = [
        {
            id: 'welcome',
            type: 'bot',
            message: "Hi! I'm your KSK Healthcare assistant. I'll help you find the right treatment for your health concerns. What brings you here today?",
            options: [
                { id: 'pain', text: 'Pain or discomfort', emoji: '😣' },
                { id: 'stress', text: 'Stress or mental health', emoji: '😰' },
                { id: 'speech', text: 'Speech or hearing issues', emoji: '🗣️' },
                { id: 'weight', text: 'Weight or metabolic issues', emoji: '⚖️' },
                { id: 'chronic', text: 'Chronic health conditions', emoji: '🏥' },
                { id: 'wellness', text: 'General wellness & prevention', emoji: '🌿' }
            ]
        },
        {
            id: 'pain',
            type: 'bot',
            message: "I understand you're experiencing pain. Can you tell me more about the location and type?",
            options: [
                { id: 'back_pain', text: 'Back/Spine pain', details: 'chronic, acute, posture-related' },
                { id: 'joint_pain', text: 'Joint pain', details: 'arthritis, stiffness, mobility issues' },
                { id: 'neck_shoulder', text: 'Neck/Shoulder pain', details: 'tension, headaches, stress-related' },
                { id: 'muscle_pain', text: 'Muscle pain/tension', details: 'sports injuries, overuse' },
                { id: 'headaches', text: 'Headaches/Migraines', details: 'frequent, severe, chronic' }
            ]
        },
        {
            id: 'stress',
            type: 'bot',
            message: "Mental health is crucial for overall wellness. What specific concerns are you facing?",
            options: [
                { id: 'anxiety', text: 'Anxiety/Panic attacks', details: 'nervousness, worry, fear' },
                { id: 'insomnia', text: 'Sleep disorders', details: 'insomnia, poor sleep quality' },
                { id: 'depression', text: 'Depression/Low mood', details: 'sadness, lack of energy' },
                { id: 'work_stress', text: 'Work-related stress', details: 'burnout, pressure, fatigue' },
                { id: 'ptsd', text: 'Trauma/PTSD', details: 'past trauma, emotional healing' }
            ]
        },
        {
            id: 'speech',
            type: 'bot',
            message: "Communication is vital. What specific speech or hearing challenges are you experiencing?",
            options: [
                { id: 'speech_delay', text: 'Speech delays (children)', details: 'late talking, unclear speech' },
                { id: 'stammering', text: 'Stuttering/Stammering', details: 'fluency disorders, repetition' },
                { id: 'hearing_loss', text: 'Hearing difficulties', details: 'partial/complete hearing loss' },
                { id: 'voice_disorders', text: 'Voice problems', details: 'hoarseness, vocal strain' },
                { id: 'language_disorders', text: 'Language disorders', details: 'comprehension, expression issues' }
            ]
        },
        {
            id: 'weight',
            type: 'bot',
            message: "Weight and metabolism affect overall health. What's your primary concern?",
            options: [
                { id: 'weight_loss', text: 'Weight loss goals', details: 'healthy weight reduction' },
                { id: 'diabetes', text: 'Diabetes management', details: 'blood sugar control, diet' },
                { id: 'thyroid', text: 'Thyroid disorders', details: 'hyper/hypothyroidism' },
                { id: 'pcod', text: 'PCOD/PCOS', details: 'hormonal imbalance, irregular periods' },
                { id: 'cholesterol', text: 'Cholesterol/Heart health', details: 'cardiovascular wellness' }
            ]
        },
        {
            id: 'chronic',
            type: 'bot',
            message: "Chronic conditions need specialized care. Which condition are you dealing with?",
            options: [
                { id: 'autoimmune', text: 'Autoimmune disorders', details: 'rheumatoid arthritis, lupus' },
                { id: 'digestive', text: 'Digestive issues', details: 'IBS, acidity, gastritis' },
                { id: 'respiratory', text: 'Respiratory problems', details: 'asthma, breathing difficulties' },
                { id: 'neurological', text: 'Neurological disorders', details: 'nerve pain, neuropathy' },
                { id: 'skin_conditions', text: 'Skin disorders', details: 'eczema, psoriasis, allergies' }
            ]
        },
        {
            id: 'wellness',
            type: 'bot',
            message: "Prevention is the best medicine! What wellness goals would you like to achieve?",
            options: [
                { id: 'detox', text: 'Detox & cleansing', details: 'body purification, energy boost' },
                { id: 'immunity', text: 'Boost immunity', details: 'strengthen natural defenses' },
                { id: 'energy', text: 'Increase energy levels', details: 'combat fatigue, vitality' },
                { id: 'anti_aging', text: 'Anti-aging wellness', details: 'healthy aging, longevity' },
                { id: 'fitness', text: 'Overall fitness', details: 'strength, flexibility, wellness' }
            ]
        }
    ];

    // Treatment recommendations based on symptoms
    const treatmentRecommendations = {
        // Pain-related
        back_pain: {
            primaryTreatment: 'Acupuncture',
            secondaryTreatment: 'Marma Therapy',
            practitioner: 'Dr. Maheshwarswami K.H',
            description: 'Acupuncture is highly effective for back pain, providing natural pain relief and improved mobility.',
            duration: '6-8 sessions',
            success_rate: '89%',
            testimonial: '"My chronic back pain disappeared after just 5 acupuncture sessions!" - Priya R.',
            phone: '+91-9900546089'
        },
        joint_pain: {
            primaryTreatment: 'Ayurveda & Panchakarma',
            secondaryTreatment: 'Marma Therapy',
            practitioner: 'Dr. Nishitha',
            description: 'Ayurvedic treatments target root causes of joint inflammation and stiffness.',
            duration: '4-6 weeks',
            success_rate: '85%',
            testimonial: '"Panchakarma treatments gave me my mobility back!" - Rajesh K.',
            phone: '+91-9900546089'
        },
        neck_shoulder: {
            primaryTreatment: 'Acupuncture',
            secondaryTreatment: 'Cupping Therapy',
            practitioner: 'Dr. Maheshwarswami K.H',
            description: 'Combination therapy relieves tension and improves circulation in neck and shoulders.',
            duration: '4-6 sessions',
            success_rate: '92%',
            testimonial: '"No more tension headaches after acupuncture!" - Suresh N.',
            phone: '+91-9900546089'
        },
        muscle_pain: {
            primaryTreatment: 'Cupping Therapy',
            secondaryTreatment: 'Marma Therapy',
            practitioner: 'Mrs. Gayathri',
            description: 'Cupping therapy provides deep muscle relaxation and faster healing.',
            duration: '3-5 sessions',
            success_rate: '88%',
            testimonial: '"Quick relief from sports injury pain!" - Amit S.',
            phone: '+91-9900546089'
        },
        headaches: {
            primaryTreatment: 'Acupuncture',
            secondaryTreatment: 'Reflexology',
            practitioner: 'Dr. Maheshwarswami K.H',
            description: 'Acupuncture effectively treats migraine triggers and provides lasting relief.',
            duration: '6-8 sessions',
            success_rate: '87%',
            testimonial: '"Migraine-free for 6 months now!" - Deepa M.',
            phone: '+91-9900546089'
        },

        // Stress-related
        anxiety: {
            primaryTreatment: 'Acupuncture',
            secondaryTreatment: 'Reflexology',
            practitioner: 'Dr. Maheshwarswami K.H',
            description: 'Acupuncture balances nervous system and reduces anxiety naturally.',
            duration: '8-10 sessions',
            success_rate: '84%',
            testimonial: '"Feel calm and centered again!" - Meera P.',
            phone: '+91-9900546089'
        },
        insomnia: {
            primaryTreatment: 'Acupuncture',
            secondaryTreatment: 'Ayurveda',
            practitioner: 'Dr. Maheshwarswami K.H',
            description: 'Natural sleep restoration without dependency on medications.',
            duration: '6-8 sessions',
            success_rate: '91%',
            testimonial: '"Sleeping peacefully after years!" - Suresh N.',
            phone: '+91-9900546089'
        },
        depression: {
            primaryTreatment: 'Acupuncture',
            secondaryTreatment: 'Ayurveda',
            practitioner: 'Dr. Maheshwarswami K.H',
            description: 'Holistic approach to mental wellness and emotional balance.',
            duration: '10-12 sessions',
            success_rate: '79%',
            testimonial: '"Found my joy again through treatment!" - Kavya L.',
            phone: '+91-9900546089'
        },

        // Speech-related
        speech_delay: {
            primaryTreatment: 'Speech Therapy',
            secondaryTreatment: 'Neuro Acupuncture',
            practitioner: 'Dr. Gandrajupalli Swetha',
            description: 'Specialized pediatric speech therapy for developmental delays.',
            duration: '3-6 months',
            success_rate: '93%',
            testimonial: '"My child is speaking clearly now!" - Parent testimonial',
            phone: '+91-9900546089'
        },
        stammering: {
            primaryTreatment: 'Speech Therapy',
            secondaryTreatment: 'Confidence Building',
            practitioner: 'Dr. Gandrajupalli Swetha',
            description: 'Comprehensive stuttering therapy with fluency techniques.',
            duration: '4-8 months',
            success_rate: '88%',
            testimonial: '"Confident speaker after treatment!" - Arjun K.',
            phone: '+91-9900546089'
        },
        hearing_loss: {
            primaryTreatment: 'Hearing Assessment',
            secondaryTreatment: 'Auditory Training',
            practitioner: 'Dr. Gandrajupalli Swetha',
            description: 'Complete hearing evaluation and rehabilitation services.',
            duration: 'Ongoing support',
            success_rate: '85%',
            testimonial: '"Hearing improvement beyond expectations!" - Lakshmi R.',
            phone: '+91-9900546089'
        },

        // Weight/Metabolic
        weight_loss: {
            primaryTreatment: 'Nutrition Therapy',
            secondaryTreatment: 'Acupuncture',
            practitioner: 'Nutritionist Team',
            description: 'Sustainable weight loss through balanced nutrition and metabolism boost.',
            duration: '3-6 months',
            success_rate: '87%',
            testimonial: '"Lost 20kg safely and naturally!" - Rajesh K.',
            phone: '+91-9900546089'
        },
        diabetes: {
            primaryTreatment: 'Ayurveda',
            secondaryTreatment: 'Nutrition Counseling',
            practitioner: 'Dr. Nishitha',
            description: 'Natural diabetes management with lifestyle modifications.',
            duration: '6-12 months',
            success_rate: '82%',
            testimonial: '"HbA1c improved from 9.2 to 6.8!" - Rajesh K.',
            phone: '+91-9900546089'
        },
        pcod: {
            primaryTreatment: 'Ayurveda',
            secondaryTreatment: 'Nutrition Therapy',
            practitioner: 'Dr. Nishitha',
            description: 'Hormonal balance restoration through Ayurvedic treatment.',
            duration: '4-8 months',
            success_rate: '89%',
            testimonial: '"Regular cycles and clear skin now!" - Anjali R.',
            phone: '+91-9900546089'
        },

        // Wellness
        detox: {
            primaryTreatment: 'Panchakarma',
            secondaryTreatment: 'Nutrition Counseling',
            practitioner: 'Dr. Nishitha',
            description: 'Complete body detoxification and rejuvenation program.',
            duration: '21-28 days',
            success_rate: '95%',
            testimonial: '"Feel 10 years younger after Panchakarma!" - Sunitha M.',
            phone: '+91-9900546089'
        },
        immunity: {
            primaryTreatment: 'Ayurveda',
            secondaryTreatment: 'Nutrition Therapy',
            practitioner: 'Dr. Nishitha',
            description: 'Strengthen natural immunity with herbal formulations.',
            duration: '2-3 months',
            success_rate: '91%',
            testimonial: '"No more frequent infections!" - Kiran P.',
            phone: '+91-9900546089'
        }
    };

    // Google Analytics tracking
    const trackEvent = (eventName, parameters = {}) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName, {
                event_category: 'Symptom_Checker',
                event_label: parameters.label || '',
                value: parameters.value || 0,
                ...parameters
            });
        }
    };

    // Initialize chat
    useEffect(() => {
        if (isOpen && chatHistory.length === 0) {
            setChatHistory([{
                type: 'bot',
                message: symptomFlow[0].message,
                options: symptomFlow[0].options,
                timestamp: new Date()
            }]);
            trackEvent('symptom_checker_opened');
        }
    }, [isOpen]);

    // Simulate typing effect
    const simulateTyping = (callback, delay = 1500) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            callback();
        }, delay);
    };

    // Handle option selection
    const handleOptionSelect = (option) => {
        const userMessage = {
            type: 'user',
            message: option.text,
            timestamp: new Date()
        };

        setChatHistory(prev => [...prev, userMessage]);
        setUserResponses(prev => ({ ...prev, [currentStep]: option.id }));

        trackEvent('symptom_selected', {
            label: option.id,
            step: currentStep
        });

        // Find next step or generate recommendation
        simulateTyping(() => {
            if (option.id in treatmentRecommendations) {
                // Generate final recommendation
                const recommendation = treatmentRecommendations[option.id];
                setRecommendation(recommendation);

                const botMessage = {
                    type: 'bot',
                    message: `Based on your symptoms, I recommend ${recommendation.primaryTreatment} as your primary treatment. Here's your personalized treatment plan:`,
                    isRecommendation: true,
                    recommendation: recommendation,
                    timestamp: new Date()
                };

                setChatHistory(prev => [...prev, botMessage]);
                trackEvent('recommendation_generated', {
                    label: option.id,
                    treatment: recommendation.primaryTreatment
                });
            } else {
                // Continue to next step
                const nextStep = symptomFlow.find(step => step.id === option.id);
                if (nextStep) {
                    const botMessage = {
                        type: 'bot',
                        message: nextStep.message,
                        options: nextStep.options,
                        timestamp: new Date()
                    };
                    setChatHistory(prev => [...prev, botMessage]);
                    setCurrentStep(prev => prev + 1);
                }
            }
        });
    };

    // Handle text input
    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            type: 'user',
            message: inputMessage,
            timestamp: new Date()
        };

        setChatHistory(prev => [...prev, userMessage]);
        setInputMessage('');

        trackEvent('free_text_message_sent', {
            label: inputMessage.substring(0, 50) // First 50 chars for privacy
        });

        // Simulate bot response
        simulateTyping(() => {
            const botMessage = {
                type: 'bot',
                message: "Thank you for sharing that information. For a more accurate assessment, I'd recommend scheduling a consultation with our specialists. Would you like me to help you book an appointment?",
                options: [
                    { id: 'book_appointment', text: 'Yes, book consultation', emoji: '📅' },
                    { id: 'call_now', text: 'Call directly', emoji: '📞' },
                    { id: 'learn_more', text: 'Learn about treatments', emoji: '📚' }
                ],
                timestamp: new Date()
            };
            setChatHistory(prev => [...prev, botMessage]);
        });
    };

    // Handle booking action
    const handleBooking = () => {
        trackEvent('appointment_booking_initiated', {
            source: 'symptom_checker',
            treatment: recommendation?.primaryTreatment || 'consultation'
        });

        // Redirect to booking form
        window.location.href = '#booking';
        setIsOpen(false);
    };

    // Handle call action
    const handleCallNow = () => {
        trackEvent('phone_call_initiated', {
            source: 'symptom_checker',
            treatment: recommendation?.primaryTreatment || 'consultation'
        });

        window.location.href = 'tel:+919900546089';
    };

    return (
        <>
            {/* Floating Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className={`bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'
                        }`}
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
            </div>

            {/* Chat Interface */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border">
                    {/* Header */}
                    <div className="bg-green-600 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <Bot className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">KSK Health Assistant</h3>
                                <p className="text-sm opacity-90">Find your perfect treatment</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white hover:bg-opacity-20 p-1 rounded"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {chatHistory.map((message, index) => (
                            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.type === 'user'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                    }`}>
                                    {message.type === 'bot' && (
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Bot className="w-4 h-4 text-green-600" />
                                            <span className="text-xs font-medium text-green-600">KSK Assistant</span>
                                        </div>
                                    )}

                                    <p className="text-sm whitespace-pre-line">{message.message}</p>

                                    {/* Recommendation Card */}
                                    {message.isRecommendation && message.recommendation && (
                                        <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                                            <div className="flex items-start space-x-3">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-green-800 mb-2">
                                                        🎯 Recommended Treatment: {message.recommendation.primaryTreatment}
                                                    </h4>
                                                    <p className="text-sm text-gray-600 mb-3">{message.recommendation.description}</p>

                                                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                                                        <div>
                                                            <span className="font-medium">Duration:</span>
                                                            <p className="text-gray-600">{message.recommendation.duration}</p>
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Success Rate:</span>
                                                            <p className="text-green-600 font-medium">{message.recommendation.success_rate}</p>
                                                        </div>
                                                    </div>

                                                    {/* Practitioner removed by request */}

                                                    <div className="bg-green-50 p-2 rounded text-xs italic mb-3">
                                                        <Star className="w-3 h-3 inline text-yellow-500 mr-1" />
                                                        {message.recommendation.testimonial}
                                                    </div>

                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={handleBooking}
                                                            className="flex-1 bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center justify-center space-x-1"
                                                        >
                                                            <Calendar className="w-3 h-3" />
                                                            <span>Book Now</span>
                                                        </button>
                                                        <button
                                                            onClick={handleCallNow}
                                                            className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                                                        >
                                                            <Phone className="w-3 h-3" />
                                                            <span>Call</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Options */}
                                    {message.options && (
                                        <div className="mt-3 space-y-2">
                                            {message.options.map((option, optionIndex) => (
                                                <button
                                                    key={optionIndex}
                                                    onClick={() => handleOptionSelect(option)}
                                                    className="w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-lg">{option.emoji}</span>
                                                            <span className="text-sm font-medium text-gray-800">{option.text}</span>
                                                        </div>
                                                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                                                    </div>
                                                    {option.details && (
                                                        <p className="text-xs text-gray-500 mt-1 ml-7">{option.details}</p>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <Bot className="w-4 h-4 text-green-600" />
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t bg-gray-50">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            This is a guidance tool. For medical emergencies, call 108 immediately.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default SymptomChecker;
