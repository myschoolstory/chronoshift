import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
interface ClockState {
  currentTime: Date;
  selectedTimezones: string[];
  setCurrentTime: (time: Date) => void;
  addTimezone: (timezone: string) => void;
  removeTimezone: (timezone: string) => void;
}
export const useClockStore = create<ClockState>()(
  persist(
    (set, get) => ({
      currentTime: new Date(),
      selectedTimezones: [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Sydney',
      ],
      setCurrentTime: (time) => set({ currentTime: time }),
      addTimezone: (timezone) => {
        if (!get().selectedTimezones.includes(timezone)) {
          set((state) => ({
            selectedTimezones: [...state.selectedTimezones, timezone],
          }));
        }
      },
      removeTimezone: (timezone) =>
        set((state) => ({
          selectedTimezones: state.selectedTimezones.filter((tz) => tz !== timezone),
        })),
    }),
    {
      name: 'chronoshift-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ selectedTimezones: state.selectedTimezones }),
    }
  )
);