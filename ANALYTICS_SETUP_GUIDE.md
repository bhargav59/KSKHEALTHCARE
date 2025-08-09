# Google Analytics 4 Implementation Guide for KSK Healthcare

## 🚀 Setup Instructions

### 1. Google Analytics Account Setup

1. **Create Google Analytics 4 Property:**
   - Go to https://analytics.google.com/
   - Create a new GA4 property for kskhealthcare.in
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Replace Measurement ID in Code:**
   ```javascript
   // In src/components/GoogleAnalyticsProvider.jsx
   <GoogleAnalyticsProvider measurementId="G-YOUR_ACTUAL_ID">
   ```

3. **Add to HTML Head (Optional Backup):**
   ```html
   <!-- Add to index.html head section -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-D2TM67YPS5"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-YOUR_ACTUAL_ID');
   </script>
   ```

### 2. Conversion Goals Setup

Create these conversion events in Google Analytics:

#### Primary Conversions:
1. **booking_completed** (Value: ₹800-₹5000)
2. **contact_form_submission** 
3. **phone_call_initiated**
4. **quick_booking_submission**

#### Secondary Conversions:
5. **symptom_checker_completed**
6. **video_play** (Engagement)
7. **cta_button_clicked**

### 3. Enhanced E-commerce Setup

Enable Enhanced E-commerce in GA4 for:
- Treatment booking revenue tracking
- Service category performance
- Practitioner selection analysis

## 📊 Tracking Events Implemented

### 🎯 Conversion Events

| Event Name | Purpose | Value Range | Parameters |
|------------|---------|-------------|------------|
| `booking_completed` | Track appointment bookings | ₹800-₹5000 | treatment_type, practitioner_name, source |
| `contact_form_submission` | Lead generation tracking | - | form_type, inquiry_type |
| `phone_call_initiated` | Phone click tracking | - | source, treatment_context |
| `quick_booking_submission` | Quick form submissions | - | treatment_type |

### 📱 Engagement Events

| Event Name | Purpose | Parameters |
|------------|---------|------------|
| `cta_button_clicked` | Track all CTA interactions | button_text, button_location, target_action |
| `video_play` | Patient testimonial views | video_title, video_source |
| `scroll_depth` | Page engagement (25%, 50%, 75%, 90%) | percentage, page_path |
| `time_on_page` | Session quality | time_seconds, page_path |

### 🔍 Tool Usage Events

| Event Name | Purpose | Parameters |
|------------|---------|------------|
| `symptom_checker_started` | Chatbot usage | - |
| `symptom_checker_completed` | Treatment recommendations | recommended_treatment, symptoms_selected |
| `treatment_interest` | Service page engagement | treatment_name, action_type |

### 📋 Form Tracking Events

| Event Name | Purpose | Parameters |
|------------|---------|------------|
| `form_started` | Form initiation | form_name |
| `form_field_interaction` | Field-level engagement | form_name, field_name |
| `form_abandoned` | Drop-off analysis | form_name, completion_percentage |

## 🎛️ Custom Dimensions & Parameters

### Treatment-Specific Dimensions:
- `treatment_type`: Acupuncture, Ayurveda, Speech Therapy, etc.
- `practitioner_name`: Dr. Mahesh, Dr. Swetha, etc.
- `appointment_source`: Hero, Sticky Button, Symptom Checker, etc.

### User Journey Dimensions:
- `form_type`: Quick Booking, Contact Form, Newsletter
- `button_location`: Header, Hero, Treatment Page, Footer
- `engagement_depth`: Scroll percentage, time on page

## 📈 Monthly Analytics Review Plan

### Week 1: Conversion Analysis
- [ ] Booking completion rates by source
- [ ] Phone call vs form submission preferences
- [ ] Treatment type popularity ranking
- [ ] Practitioner selection patterns

### Week 2: User Experience Review
- [ ] Page load performance metrics
- [ ] Form abandonment rates by field
- [ ] Mobile vs desktop conversion rates
- [ ] Symptom checker completion rates

### Week 3: A/B Testing Analysis
- [ ] CTA button color performance
- [ ] Form length optimization results
- [ ] Hero section messaging effectiveness
- [ ] Treatment page layout variants

### Week 4: ROI & Optimization
- [ ] Cost per conversion by channel
- [ ] Lifetime value tracking
- [ ] Drop-off point identification
- [ ] Next month's optimization priorities

## 🧪 A/B Testing Framework

### Current Tests to Set Up:

1. **Hero CTA Button Colors:**
   - Variant A: Green (#16A34A)
   - Variant B: Blue (#2563EB)
   - Variant C: Orange (#EA580C)

2. **Booking Form Length:**
   - Variant A: 3 fields (Name, Phone, Service)
   - Variant B: 5 fields (+ Email, Preferred Date)
   - Variant C: 1 field (Phone only)

3. **Treatment Page Layout:**
   - Variant A: Video first
   - Variant B: Benefits first
   - Variant C: Testimonials first

## 📞 Phone Tracking Setup

### Call Tracking Implementation:
```javascript
// Automatic phone number tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () => {
    trackPhoneCallClick(
      link.closest('section')?.id || 'unknown',
      link.dataset.treatment || ''
    );
  });
});
```

### WhatsApp Click Tracking:
```javascript
// WhatsApp button tracking
trackWhatsAppClick('floating_button', 'general_inquiry');
```

## 🎯 Conversion Value Assignment

### Treatment Values for ROI Calculation:
- **Acupuncture Session**: ₹1,500
- **Ayurveda Consultation**: ₹2,000
- **Speech Therapy**: ₹1,800
- **Panchakarma Package**: ₹5,000
- **Cupping Therapy**: ₹1,200
- **General Consultation**: ₹800

## 🔧 Debug Mode

### Development Testing:
```javascript
// Enable console logging in development
if (process.env.NODE_ENV === 'development') {
  console.log('GA Event:', eventName, parameters);
}
```

### GA4 Debug View:
1. Enable Debug View in GA4
2. Add `?debug_mode=1` to URL for testing
3. Verify events in real-time reports

## 📊 Custom Dashboard Setup

### Key Metrics Dashboard:
1. **Conversion Funnel:**
   - Page Views → Form Starts → Form Completions → Bookings

2. **Treatment Performance:**
   - Interest by treatment type
   - Booking rates by service
   - Practitioner selection rates

3. **User Journey Analysis:**
   - Entry points → Engagement → Conversion
   - Mobile vs Desktop behavior
   - Symptom checker effectiveness

4. **Monthly Goals:**
   - Total bookings target: 200/month
   - Form completion rate: >75%
   - Phone call conversion: >15%
   - Page engagement time: >2 minutes

## 🚨 Alerts & Monitoring

### Set Up Alerts for:
- Sudden drop in conversion rates (>20%)
- Form abandonment spike (>80%)
- Page load time increase (>3 seconds)
- Error rate increase (>5%)

## 🎯 Next Steps

1. **Week 1:** Implement GA4 tracking code
2. **Week 2:** Set up conversion goals and e-commerce
3. **Week 3:** Create custom dashboards
4. **Week 4:** Begin A/B testing framework
5. **Month 2:** Advanced audience segmentation
6. **Month 3:** Predictive analytics setup

---

**Remember:** GDPR/Privacy compliance is essential. Ensure proper cookie consent and data handling policies are in place.
