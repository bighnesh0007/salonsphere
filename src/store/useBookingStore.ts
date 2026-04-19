import { create } from 'zustand';

interface BookingState {
  selectedService: any | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  guestInfo: {
    name: string;
    email: string;
    phone: string;
  };
  setService: (service: any) => void;
  setDate: (date: Date) => void;
  setTime: (time: string) => void;
  setGuestInfo: (info: Partial<BookingState['guestInfo']>) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedService: null,
  selectedDate: null,
  selectedTime: null,
  guestInfo: {
    name: '',
    email: '',
    phone: '',
  },
  setService: (service) => set({ selectedService: service }),
  setDate: (date) => set({ selectedDate: date }),
  setTime: (time) => set({ selectedTime: time }),
  setGuestInfo: (info) => set((state) => ({ 
    guestInfo: { ...state.guestInfo, ...info } 
  })),
  resetBooking: () => set({
    selectedService: null,
    selectedDate: null,
    selectedTime: null,
    guestInfo: { name: '', email: '', phone: '' }
  })
}));
