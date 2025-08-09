import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Settings, Check, AlertCircle, ExternalLink } from 'lucide-react';
import { CHATBOT_CONFIG, SETUP_INSTRUCTIONS } from '../../config/chatbot';

const ChatbotAdmin = () => {
    const [currentPlatform, setCurrentPlatform] = useState(CHATBOT_CONFIG.platform);
    const [showInstructions, setShowInstructions] = useState(null);

    const platforms = [
        {
            id: 'custom',
            name: 'Custom Built-in',
            description: 'Our built-in chatbot with appointment booking',
            status: 'ready',
            features: ['Appointment Booking', 'FAQ Handling', 'WhatsApp Integration', 'No Setup Required'],
            pros: ['Free', 'No external dependencies', 'Fully customizable', 'Privacy friendly'],
            cons: ['Limited analytics', 'Basic features compared to enterprise solutions']
        },
        {
            id: 'interakt',
            name: 'Interakt',
            description: 'Advanced conversational AI platform',
            status: CHATBOT_CONFIG.interakt.enabled ? 'configured' : 'needs-setup',
            features: ['Advanced Analytics', 'Multi-channel', 'Custom Flows', 'CRM Integration'],
            pros: ['Professional features', 'Detailed analytics', 'Multi-platform support'],
            cons: ['Paid service', 'Setup required', 'External dependency']
        },
        {
            id: 'gallabox',
            name: 'Gallabox',
            description: 'WhatsApp Business API integration',
            status: CHATBOT_CONFIG.gallabox.enabled ? 'configured' : 'needs-setup',
            features: ['WhatsApp Business API', 'Team Collaboration', 'Rich Media', 'Automation'],
            pros: ['Official WhatsApp integration', 'Team features', 'Rich messaging'],
            cons: ['Paid service', 'Setup complexity', 'WhatsApp dependency']
        },
        {
            id: 'quickreply',
            name: 'QuickReply',
            description: 'Quick WhatsApp chatbot solution',
            status: CHATBOT_CONFIG.quickreply.enabled ? 'configured' : 'needs-setup',
            features: ['WhatsApp Integration', 'Quick Setup', 'Templates', 'Broadcasts'],
            pros: ['Fast implementation', 'WhatsApp focused', 'Template support'],
            cons: ['Limited to WhatsApp', 'Setup required', 'Paid service']
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'ready': return 'bg-green-100 text-green-800';
            case 'configured': return 'bg-blue-100 text-blue-800';
            case 'needs-setup': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'ready': return 'Ready to Use';
            case 'configured': return 'Configured';
            case 'needs-setup': return 'Setup Required';
            default: return 'Unknown';
        }
    };

    const handlePlatformChange = (platformId) => {
        // This would typically update the configuration file
        // For now, just show instructions
        setCurrentPlatform(platformId);
        alert(`To switch to ${platformId}, update the platform setting in /src/config/chatbot.js`);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Chatbot Platform Configuration</h1>
                <p className="text-gray-600">
                    Choose and configure your preferred chatbot platform for automated appointment booking.
                </p>
            </div>

            {/* Current Status */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                        <Settings className="h-5 w-5" />
                        <span>Current Configuration</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="px-3 py-1">
                            Active Platform: {currentPlatform}
                        </Badge>
                        <Badge className={getStatusColor('ready')}>
                            {getStatusText('ready')}
                        </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                        Currently using the {currentPlatform} platform for chatbot interactions.
                    </p>
                </CardContent>
            </Card>

            {/* Platform Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {platforms.map((platform) => (
                    <Card
                        key={platform.id}
                        className={`transition-all ${currentPlatform === platform.id ? 'ring-2 ring-blue-500' : ''}`}
                    >
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center space-x-2">
                                    <span>{platform.name}</span>
                                    {currentPlatform === platform.id && (
                                        <Check className="h-4 w-4 text-green-600" />
                                    )}
                                </CardTitle>
                                <Badge className={getStatusColor(platform.status)}>
                                    {getStatusText(platform.status)}
                                </Badge>
                            </div>
                            <CardDescription>{platform.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Features */}
                                <div>
                                    <h4 className="font-semibold text-sm mb-2">Features</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {platform.features.map((feature, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Pros */}
                                <div>
                                    <h4 className="font-semibold text-sm mb-2 text-green-700">Pros</h4>
                                    <ul className="text-xs text-green-600 space-y-1">
                                        {platform.pros.map((pro, index) => (
                                            <li key={index} className="flex items-center space-x-1">
                                                <Check className="h-3 w-3" />
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cons */}
                                <div>
                                    <h4 className="font-semibold text-sm mb-2 text-orange-700">Considerations</h4>
                                    <ul className="text-xs text-orange-600 space-y-1">
                                        {platform.cons.map((con, index) => (
                                            <li key={index} className="flex items-center space-x-1">
                                                <AlertCircle className="h-3 w-3" />
                                                <span>{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Actions */}
                                <div className="flex space-x-2 pt-2">
                                    {currentPlatform !== platform.id && (
                                        <Button
                                            size="sm"
                                            onClick={() => handlePlatformChange(platform.id)}
                                            className="flex-1"
                                        >
                                            Switch to {platform.name}
                                        </Button>
                                    )}
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => setShowInstructions(platform.id)}
                                        className="flex items-center space-x-1"
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                        <span>Setup Guide</span>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Setup Instructions Modal */}
            {showInstructions && (
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>{SETUP_INSTRUCTIONS[showInstructions]?.title}</span>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowInstructions(null)}
                            >
                                ×
                            </Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <h4 className="font-semibold">Setup Instructions:</h4>
                            <ol className="space-y-2">
                                {SETUP_INSTRUCTIONS[showInstructions]?.steps.map((step, index) => (
                                    <li key={index} className="text-sm">
                                        {step}
                                    </li>
                                ))}
                            </ol>

                            {SETUP_INSTRUCTIONS[showInstructions]?.documentation && (
                                <div className="mt-4">
                                    <a
                                        href={SETUP_INSTRUCTIONS[showInstructions].documentation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                        <span>View Documentation</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Configuration Preview */}
            <Card>
                <CardHeader>
                    <CardTitle>Current Configuration Preview</CardTitle>
                    <CardDescription>
                        This is how your chatbot configuration looks in the config file.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                        {JSON.stringify(CHATBOT_CONFIG, null, 2)}
                    </pre>
                </CardContent>
            </Card>
        </div>
    );
};

export default ChatbotAdmin;
