import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Firestore Service for managing appointments, patients, and healthcare data
 */

// ==================== APPOINTMENTS ====================

export const createAppointment = async (appointmentData) => {
  try {
    const appointmentRef = doc(collection(db, 'appointments'));
    const appointment = {
      ...appointmentData,
      id: appointmentRef.id,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    await setDoc(appointmentRef, appointment);
    return { success: true, id: appointmentRef.id, data: appointment };
  } catch (error) {
    console.error('Error creating appointment:', error);
    return { success: false, error: error.message };
  }
};

export const getAppointment = async (appointmentId) => {
  try {
    const appointmentDoc = await getDoc(doc(db, 'appointments', appointmentId));
    if (appointmentDoc.exists()) {
      return { success: true, data: appointmentDoc.data() };
    }
    return { success: false, error: 'Appointment not found' };
  } catch (error) {
    console.error('Error getting appointment:', error);
    return { success: false, error: error.message };
  }
};

export const getUserAppointments = async (userId) => {
  try {
    const q = query(
      collection(db, 'appointments'),
      where('userId', '==', userId),
      orderBy('appointmentDate', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const appointments = [];
    querySnapshot.forEach((doc) => {
      appointments.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: appointments };
  } catch (error) {
    console.error('Error getting user appointments:', error);
    return { success: false, error: error.message };
  }
};

export const getAllAppointments = async (filters = {}) => {
  try {
    let q = collection(db, 'appointments');
    
    // Apply filters
    if (filters.status) {
      q = query(q, where('status', '==', filters.status));
    }
    if (filters.date) {
      q = query(q, where('appointmentDate', '==', filters.date));
    }
    if (filters.service) {
      q = query(q, where('service', '==', filters.service));
    }
    
    // Order by appointment date
    q = query(q, orderBy('appointmentDate', 'desc'));
    
    if (filters.limit) {
      q = query(q, limit(filters.limit));
    }
    
    const querySnapshot = await getDocs(q);
    const appointments = [];
    querySnapshot.forEach((doc) => {
      appointments.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: appointments };
  } catch (error) {
    console.error('Error getting appointments:', error);
    return { success: false, error: error.message };
  }
};

export const updateAppointment = async (appointmentId, updates) => {
  try {
    const appointmentRef = doc(db, 'appointments', appointmentId);
    await updateDoc(appointmentRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating appointment:', error);
    return { success: false, error: error.message };
  }
};

export const updateAppointmentStatus = async (appointmentId, status) => {
  return updateAppointment(appointmentId, { status });
};

export const deleteAppointment = async (appointmentId) => {
  try {
    await deleteDoc(doc(db, 'appointments', appointmentId));
    return { success: true };
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return { success: false, error: error.message };
  }
};

// ==================== PATIENTS ====================

export const createPatient = async (patientData) => {
  try {
    const patientRef = doc(collection(db, 'patients'));
    const patient = {
      ...patientData,
      id: patientRef.id,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    await setDoc(patientRef, patient);
    return { success: true, id: patientRef.id, data: patient };
  } catch (error) {
    console.error('Error creating patient:', error);
    return { success: false, error: error.message };
  }
};

export const getPatient = async (patientId) => {
  try {
    const patientDoc = await getDoc(doc(db, 'patients', patientId));
    if (patientDoc.exists()) {
      return { success: true, data: patientDoc.data() };
    }
    return { success: false, error: 'Patient not found' };
  } catch (error) {
    console.error('Error getting patient:', error);
    return { success: false, error: error.message };
  }
};

export const getAllPatients = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'patients'));
    const patients = [];
    querySnapshot.forEach((doc) => {
      patients.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: patients };
  } catch (error) {
    console.error('Error getting patients:', error);
    return { success: false, error: error.message };
  }
};

export const updatePatient = async (patientId, updates) => {
  try {
    const patientRef = doc(db, 'patients', patientId);
    await updateDoc(patientRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating patient:', error);
    return { success: false, error: error.message };
  }
};

// ==================== TESTIMONIALS ====================

export const createTestimonial = async (testimonialData) => {
  try {
    const testimonialRef = doc(collection(db, 'testimonials'));
    const testimonial = {
      ...testimonialData,
      id: testimonialRef.id,
      approved: false,
      createdAt: serverTimestamp()
    };
    
    await setDoc(testimonialRef, testimonial);
    return { success: true, id: testimonialRef.id };
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return { success: false, error: error.message };
  }
};

export const getApprovedTestimonials = async () => {
  try {
    const q = query(
      collection(db, 'testimonials'),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const testimonials = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: testimonials };
  } catch (error) {
    console.error('Error getting testimonials:', error);
    return { success: false, error: error.message };
  }
};

export const approveTestimonial = async (testimonialId) => {
  try {
    await updateDoc(doc(db, 'testimonials', testimonialId), {
      approved: true,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error approving testimonial:', error);
    return { success: false, error: error.message };
  }
};

// ==================== CHATBOT CONVERSATIONS ====================

export const saveChatbotConversation = async (conversationData) => {
  try {
    const conversationRef = doc(collection(db, 'chatbot_conversations'));
    const conversation = {
      ...conversationData,
      id: conversationRef.id,
      createdAt: serverTimestamp()
    };
    
    await setDoc(conversationRef, conversation);
    return { success: true, id: conversationRef.id };
  } catch (error) {
    console.error('Error saving chatbot conversation:', error);
    return { success: false, error: error.message };
  }
};

export const getChatbotConversations = async (userId) => {
  try {
    const q = query(
      collection(db, 'chatbot_conversations'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const conversations = [];
    querySnapshot.forEach((doc) => {
      conversations.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: conversations };
  } catch (error) {
    console.error('Error getting chatbot conversations:', error);
    return { success: false, error: error.message };
  }
};

// ==================== ANALYTICS ====================

export const trackEvent = async (eventData) => {
  try {
    const eventRef = doc(collection(db, 'analytics_events'));
    const event = {
      ...eventData,
      timestamp: serverTimestamp()
    };
    
    await setDoc(eventRef, event);
    return { success: true };
  } catch (error) {
    console.error('Error tracking event:', error);
    return { success: false, error: error.message };
  }
};

export const getAnalytics = async (startDate, endDate) => {
  try {
    const q = query(
      collection(db, 'analytics_events'),
      where('timestamp', '>=', Timestamp.fromDate(new Date(startDate))),
      where('timestamp', '<=', Timestamp.fromDate(new Date(endDate))),
      orderBy('timestamp', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: events };
  } catch (error) {
    console.error('Error getting analytics:', error);
    return { success: false, error: error.message };
  }
};
