import * as React from 'react';
import { Check, ChevronsUpDown, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { timezones } from '@/lib/timezones';
import { useClockStore } from '@/hooks/use-clock-store';
export function TimezoneSelector() {
  const [open, setOpen] = React.useState(false);
  const addTimezone = useClockStore((state) => state.addTimezone);
  const selectedTimezones = useClockStore((state) => state.selectedTimezones);
  const handleSelect = (currentTimezone: string) => {
    addTimezone(currentTimezone);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Timezone
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <Command>
          <CommandInput placeholder="Search timezone..." />
          <CommandList>
            <CommandEmpty>No timezone found.</CommandEmpty>
            <CommandGroup>
              {timezones.map((timezone) => (
                <CommandItem
                  key={timezone}
                  value={timezone}
                  onSelect={handleSelect}
                  className="flex justify-between items-center"
                >
                  {timezone.replace(/_/g, ' ')}
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selectedTimezones.includes(timezone) ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}