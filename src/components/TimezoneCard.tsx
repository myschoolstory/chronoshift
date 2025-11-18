import * as React from 'react';
import { formatInTimeZone } from 'date-fns-tz';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useClockStore } from '@/hooks/use-clock-store';
interface TimezoneCardProps {
  timezone: string;
}
export const TimezoneCard = React.memo(function TimezoneCard({ timezone }: TimezoneCardProps) {
  const currentTime = useClockStore((state) => state.currentTime);
  const removeTimezone = useClockStore((state) => state.removeTimezone);
  const localTime = React.useMemo(() => {
    try {
      return formatInTimeZone(currentTime, timezone, 'HH:mm:ss');
    } catch (error) {
      console.error(`Invalid timezone: ${timezone}`);
      return 'Invalid';
    }
  }, [currentTime, timezone]);
  const localDate = React.useMemo(() => {
    try {
      return formatInTimeZone(currentTime, timezone, 'eeee, MMMM d');
    } catch (error) {
      return 'Timezone';
    }
  }, [currentTime, timezone]);
  const utcOffset = React.useMemo(() => {
    try {
      return formatInTimeZone(currentTime, timezone, 'xxx');
    } catch (error) {
      return '';
    }
  }, [currentTime, timezone]);
  const handleRemove = () => {
    removeTimezone(timezone);
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Card className="relative transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:text-foreground"
          onClick={handleRemove}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Remove timezone</span>
        </Button>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium leading-none tracking-tight pr-8">
            {timezone.split('/').pop()?.replace(/_/g, ' ')}
          </CardTitle>
          <CardDescription>{timezone.split('/')[0].replace(/_/g, ' ')}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-end">
          <p className="font-mono text-5xl font-bold text-foreground">
            {localTime}
          </p>
          <p className="text-sm text-muted-foreground">{localDate}</p>
          <p className="text-xs text-muted-foreground mt-2">UTC {utcOffset}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
});