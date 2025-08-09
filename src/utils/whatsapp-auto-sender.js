// WhatsApp Auto-Send Enhancement Script
// This script can be injected into WhatsApp Web to enable automatic sending

const WhatsAppAutoSender = {
  init() {
    console.log('KSK Healthcare WhatsApp Auto-Sender initialized');
    this.waitForWhatsAppLoad();
  },

  waitForWhatsAppLoad() {
    const checkInterval = setInterval(() => {
      // Check if WhatsApp Web has loaded
      const messageBox = document.querySelector('[data-testid="conversation-compose-box-input"]') ||
                        document.querySelector('div[contenteditable="true"][data-tab="1"]') ||
                        document.querySelector('div[contenteditable="true"]');
      
      const sendButton = document.querySelector('[data-testid="send"]') ||
                        document.querySelector('button[data-testid="send"]') ||
                        document.querySelector('button span[data-testid="send"]');

      if (messageBox && sendButton) {
        clearInterval(checkInterval);
        console.log('WhatsApp Web loaded, attempting auto-send...');
        this.attemptAutoSend(messageBox, sendButton);
      }
    }, 1000);

    // Clear interval after 30 seconds if WhatsApp doesn't load
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 30000);
  },

  attemptAutoSend(messageBox, sendButton) {
    try {
      // Method 1: Check if message is already filled
      if (messageBox.textContent && messageBox.textContent.includes('KSK Healthcare')) {
        console.log('KSK Healthcare message detected, auto-sending...');
        
        // Focus the message box
        messageBox.focus();
        
        // Simulate enter key press
        setTimeout(() => {
          this.simulateEnterKey(messageBox);
          
          // Fallback: Click send button
          setTimeout(() => {
            if (sendButton && !sendButton.disabled) {
              sendButton.click();
              console.log('Message sent via button click');
              this.notifySuccess();
            }
          }, 1000);
        }, 2000);
      }
      
      // Method 2: Listen for message updates
      this.observeMessageBox(messageBox, sendButton);
      
    } catch (error) {
      console.log('Auto-send attempt completed with fallback');
    }
  },

  simulateEnterKey(element) {
    try {
      // Create keyboard event
      const enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true
      });
      
      element.dispatchEvent(enterEvent);
      
      // Also try keypress and keyup
      const enterPress = new KeyboardEvent('keypress', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true
      });
      
      const enterUp = new KeyboardEvent('keyup', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true
      });
      
      element.dispatchEvent(enterPress);
      element.dispatchEvent(enterUp);
      
      console.log('Enter key simulation attempted');
    } catch (error) {
      console.log('Keyboard simulation completed');
    }
  },

  observeMessageBox(messageBox, sendButton) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          const content = messageBox.textContent || messageBox.innerText;
          
          if (content && content.includes('KSK Healthcare') && content.includes('New Appointment Request')) {
            console.log('KSK Healthcare appointment message detected, auto-sending...');
            
            // Wait a moment for the message to be fully loaded
            setTimeout(() => {
              if (sendButton && !sendButton.disabled) {
                sendButton.click();
                console.log('Auto-send successful!');
                this.notifySuccess();
                observer.disconnect();
              }
            }, 1500);
          }
        }
      });
    });

    observer.observe(messageBox, {
      childList: true,
      subtree: true,
      characterData: true
    });

    // Disconnect observer after 30 seconds
    setTimeout(() => {
      observer.disconnect();
    }, 30000);
  },

  notifySuccess() {
    // Try to communicate back to parent window
    try {
      if (window.opener) {
        window.opener.postMessage({
          type: 'KSK_WHATSAPP_SENT',
          status: 'success',
          timestamp: new Date().toISOString()
        }, '*');
      }
      
      // Show success indicator in WhatsApp
      this.showSuccessIndicator();
    } catch (error) {
      console.log('Success notification attempted');
    }
  },

  showSuccessIndicator() {
    // Create a success indicator
    const indicator = document.createElement('div');
    indicator.innerHTML = '✅ KSK Healthcare: Message sent successfully!';
    indicator.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #25D366;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 9999;
      font-family: Arial, sans-serif;
      font-size: 14px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(indicator);
    
    // Remove after 5 seconds
    setTimeout(() => {
      if (indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
      }
    }, 5000);
  }
};

// Auto-initialize when script loads
WhatsAppAutoSender.init();

// Listen for messages from parent window
window.addEventListener('message', (event) => {
  if (event.data.type === 'KSK_AUTO_SEND') {
    console.log('Received auto-send request from KSK Healthcare');
    WhatsAppAutoSender.waitForWhatsAppLoad();
  }
});

// Export for manual use
window.KSKWhatsAppAutoSender = WhatsAppAutoSender;
