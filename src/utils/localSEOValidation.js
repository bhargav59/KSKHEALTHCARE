// Schema Markup Validation Script for KSK Healthcare
// This script validates the JSON-LD schema markup implementation

const validateSchemaMarkup = () => {
  // Check if JSON-LD script exists
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  
  if (!schemaScript) {
    console.error('❌ JSON-LD schema script not found');
    return false;
  }

  try {
    const schemaData = JSON.parse(schemaScript.textContent);
    console.log('✅ JSON-LD schema markup found and valid');
    
    // Validate required fields for MedicalClinic
    const requiredFields = [
      '@context',
      '@type', 
      'name',
      'address',
      'telephone',
      'geo',
      'openingHoursSpecification'
    ];

    const missingFields = requiredFields.filter(field => !schemaData[field]);
    
    if (missingFields.length > 0) {
      console.warn('⚠️ Missing required fields:', missingFields);
    } else {
      console.log('✅ All required schema fields present');
    }

    // Validate specific properties
    console.log('🔍 Schema Validation Results:');
    console.log('- Type:', schemaData['@type']);
    console.log('- Name:', schemaData.name);
    console.log('- Phone:', schemaData.telephone);
    console.log('- Address:', schemaData.address?.streetAddress);
    console.log('- Coordinates:', `${schemaData.geo?.latitude}, ${schemaData.geo?.longitude}`);
    console.log('- Rating:', schemaData.aggregateRating?.ratingValue);
    console.log('- Review Count:', schemaData.aggregateRating?.reviewCount);
    console.log('- Specialties:', schemaData.medicalSpecialty?.length, 'listed');
    console.log('- Physicians:', schemaData.physician?.length, 'listed');

    return true;
  } catch (error) {
    console.error('❌ Invalid JSON-LD schema markup:', error);
    return false;
  }
};

// NAP Consistency Check
const checkNAPConsistency = () => {
  console.log('🔍 Checking NAP Consistency...');
  
  // Define expected NAP values
  const expectedNAP = {
    name: 'KSK Healthcare',
    phone: '+91 88843 33439',
    address: '6B, Kote NCMR Building, Karthik Nagar Service Road'
  };

  // Check header phone
  const headerPhone = document.querySelector('a[href^="tel:"]')?.textContent?.trim();
  console.log('Header Phone:', headerPhone);

  // Check footer address
  const footerAddress = document.querySelector('footer')?.textContent;
  const hasConsistentAddress = footerAddress?.includes(expectedNAP.address);
  console.log('Footer Address Consistent:', hasConsistentAddress ? '✅' : '❌');

  // Check contact section
  const contactSection = document.querySelector('#contact');
  const hasContactPhone = contactSection?.textContent?.includes(expectedNAP.phone);
  console.log('Contact Phone Consistent:', hasContactPhone ? '✅' : '❌');

  return {
    headerPhone: headerPhone === expectedNAP.phone,
    footerAddress: hasConsistentAddress,
    contactPhone: hasContactPhone
  };
};

// Google Maps Integration Check
const checkGoogleMapsIntegration = () => {
  console.log('🗺️ Checking Google Maps Integration...');
  
  const mapIframe = document.querySelector('iframe[src*="google.com/maps"]');
  
  if (mapIframe) {
    console.log('✅ Google Maps iframe found');
    console.log('- Title:', mapIframe.title);
    console.log('- Loading:', mapIframe.loading);
    console.log('- Dimensions:', `${mapIframe.width} x ${mapIframe.height}`);
    return true;
  } else {
    console.log('❌ Google Maps iframe not found');
    return false;
  }
};

// Run all validations
const runCompleteValidation = () => {
  console.log('🚀 KSK Healthcare Local SEO Validation');
  console.log('=====================================');
  
  const schemaValid = validateSchemaMarkup();
  const napConsistent = checkNAPConsistency();
  const mapsIntegrated = checkGoogleMapsIntegration();
  
  console.log('\n📊 Validation Summary:');
  console.log('- Schema Markup:', schemaValid ? '✅' : '❌');
  console.log('- NAP Consistency:', Object.values(napConsistent).every(Boolean) ? '✅' : '❌');
  console.log('- Google Maps:', mapsIntegrated ? '✅' : '❌');
  
  if (schemaValid && Object.values(napConsistent).every(Boolean) && mapsIntegrated) {
    console.log('\n🎉 All local SEO validations passed!');
  } else {
    console.log('\n⚠️ Some validations failed. Check the details above.');
  }
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.validateKSKLocalSEO = runCompleteValidation;
  window.validateSchemaMarkup = validateSchemaMarkup;
  window.checkNAPConsistency = checkNAPConsistency;
  window.checkGoogleMapsIntegration = checkGoogleMapsIntegration;
}

// Auto-run if script is loaded directly
if (typeof document !== 'undefined' && document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runCompleteValidation);
} else if (typeof document !== 'undefined') {
  runCompleteValidation();
}

export { validateSchemaMarkup, checkNAPConsistency, checkGoogleMapsIntegration, runCompleteValidation };
