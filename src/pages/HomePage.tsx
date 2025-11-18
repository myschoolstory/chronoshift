import * as React from 'react';
import { format } from 'date-fns';
import { AnimatePresence } from 'framer-motion';
import { useClockStore } from '@/hooks/use-clock-store';
import { TimezoneCard } from '@/components/TimezoneCard';
import { TimezoneSelector } from '@/components/TimezoneSelector';
import { ThemeToggle } from '@/components/ThemeToggle';
export function HomePage() {
  const setCurrentTime = useClockStore((state) => state.setCurrentTime);
  const currentTime = useClockStore((state) => state.currentTime);
  const selectedTimezones = useClockStore((state) => state.selectedTimezones);
  React.useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [setCurrentTime]);
  const formattedUTCTime = format(currentTime, 'HH:mm:ss');
  const formattedUTCDate = format(currentTime, 'eeee, MMMM d, yyyy');
  return (
    <div className="min-h-screen w-full bg-background bg-gradient-subtle text-foreground">
      <ThemeToggle className="fixed top-4 right-4" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <header className="text-center space-y-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-primary">
              ChronoShift
            </h1>
            <p className="text-lg text-muted-foreground">
              A minimalist and visually elegant real-time UTC to timezone converter.
            </p>
            <div className="flex flex-col items-center justify-center pt-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Coordinated Universal Time (UTC)
              </p>
              <p className="font-mono text-6xl md:text-7xl font-bold text-foreground tracking-tight">
                {formattedUTCTime}
              </p>
              <p className="text-muted-foreground">{formattedUTCDate}</p>
            </div>
          </header>
          <main>
            <div className="text-center mb-12">
              <TimezoneSelector />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence>
                {selectedTimezones.map((tz) => (
                  <TimezoneCard key={tz} timezone={tz} />
                ))}
              </AnimatePresence>
            </div>
            {selectedTimezones.length === 0 && (
              <div className="text-center py-16 border-2 border-dashed border-muted rounded-lg">
                <p className="text-muted-foreground">No timezones selected.</p>
                <p className="text-sm text-muted-foreground">
                  Click "Add Timezone" to get started.
                </p>
              </div>
            )}
          </main>
          <footer className="text-center mt-24 text-sm text-muted-foreground">
            <p>Built with ❤️ at Cloudflare</p>
          </footer>
        </div>
      </div>
    </div>
  );
}