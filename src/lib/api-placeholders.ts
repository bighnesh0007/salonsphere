/**
 * Placeholder for sending WhatsApp notifications.
 * To be replaced with a real SMS/WhatsApp API in the future.
 */
export async function sendWhatsAppNotification(phoneNumber: string, message: string) {
  console.log(`[WhatsApp API Placeholder] Sending message to ${phoneNumber}: ${message}`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
}

/**
 * Placeholder for booking API.
 */
export async function createBooking(bookingData: any) {
  console.log("[Booking API Placeholder] Creating booking:", bookingData);
  await new Promise(resolve => setTimeout(resolve, 1500));
  return { success: true, bookingId: `BK-${Math.floor(Math.random() * 10000)}` };
}

/**
 * Utility to simulate async behavior with mock data.
 */
export async function simulateAsyncAction<T>(data: T, delay = 1000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}
