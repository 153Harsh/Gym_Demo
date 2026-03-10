import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Clock, User, Filter, CheckCircle2, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const Schedule = () => {
  const [filterClass, setFilterClass] = useState('all');
  const [filterInstructor, setFilterInstructor] = useState('all');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string>('');

  const handleBooking = (className: string) => {
    setSelectedClass(className);
    setIsBookingOpen(true);
  };

  const confirmBooking = () => {
    toast.success(`Successfully booked ${selectedClass}! See you there.`);
    setIsBookingOpen(false);
  };

  const classes = [
    { time: '07:00 AM', mon: 'HIIT (Mike)', tue: 'Yoga (Sarah)', wed: 'HIIT (Mike)', thu: 'Yoga (Sarah)', fri: 'HIIT (Mike)', sat: 'Zumba (Emily)', sun: 'Yoga (Sarah)', type: 'hiit', instr: 'mike', level: 'Intermediate' },
    { time: '09:00 AM', mon: 'Strength (Marcus)', tue: 'Cardio (Julia)', wed: 'Strength (Marcus)', thu: 'Cardio (Julia)', fri: 'Strength (Marcus)', sat: 'CrossFit (Alex)', sun: 'Strength (Marcus)', type: 'strength', instr: 'marcus', level: 'Advanced' },
    { time: '11:00 AM', mon: 'Yoga (Sarah)', tue: 'CrossFit (Alex)', wed: 'Yoga (Sarah)', thu: 'CrossFit (Alex)', fri: 'Yoga (Sarah)', sat: 'HIIT (Mike)', sun: 'HIIT (Mike)', type: 'yoga', instr: 'sarah', level: 'Beginner' },
    { time: '04:00 PM', mon: 'CrossFit (Alex)', tue: 'HIIT (Mike)', wed: 'CrossFit (Alex)', thu: 'HIIT (Mike)', fri: 'CrossFit (Alex)', sat: 'Strength (Marcus)', sun: 'Zumba (Emily)', type: 'crossfit', instr: 'alex', level: 'Advanced' },
    { time: '06:00 PM', mon: 'Cardio (Julia)', tue: 'Strength (Marcus)', wed: 'Cardio (Julia)', thu: 'Strength (Marcus)', fri: 'Cardio (Julia)', sat: 'Yoga (Sarah)', sun: 'Cardio (Julia)', type: 'cardio', instr: 'julia', level: 'All Levels' },
    { time: '08:00 PM', mon: 'Zumba (Emily)', tue: 'Yoga (Sarah)', wed: 'Zumba (Emily)', thu: 'Yoga (Sarah)', fri: 'Zumba (Emily)', sat: 'Rest Day', sun: 'Rest Day', type: 'zumba', instr: 'emily', level: 'Beginner' },
  ];

  const classTypes = [
    { label: 'All Classes', value: 'all' },
    { label: 'HIIT', value: 'hiit' },
    { label: 'Yoga', value: 'yoga' },
    { label: 'Strength', value: 'strength' },
    { label: 'CrossFit', value: 'crossfit' },
    { label: 'Cardio', value: 'cardio' },
    { label: 'Zumba', value: 'zumba' },
  ];

  const instructors = [
    { label: 'All Instructors', value: 'all' },
    { label: 'Mike', value: 'mike' },
    { label: 'Sarah', value: 'sarah' },
    { label: 'Marcus', value: 'marcus' },
    { label: 'Alex', value: 'alex' },
    { label: 'Julia', value: 'julia' },
    { label: 'Emily', value: 'emily' },
  ];

  const filteredClasses = classes.filter(c => {
    const classMatch = filterClass === 'all' || c.type === filterClass;
    const instrMatch = filterInstructor === 'all' || c.instr === filterInstructor;
    return classMatch && instrMatch;
  });

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Class <span className="text-primary">Schedule</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Plan your week and never miss a workout. High-energy classes every day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b bg-muted/5">
        <div className="container px-4">
           <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex items-center gap-3">
                 <Filter className="h-5 w-5 text-primary" />
                 <span className="font-bold uppercase tracking-widest text-sm">Filters</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <div className="w-full sm:w-[200px]">
                   <Select value={filterClass} onValueChange={setFilterClass}>
                     <SelectTrigger className="bg-background rounded-full border-primary/20">
                       <SelectValue placeholder="Class Type" />
                     </SelectTrigger>
                     <SelectContent>
                       {classTypes.map(type => (
                         <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
                 
                 <div className="w-full sm:w-[200px]">
                   <Select value={filterInstructor} onValueChange={setFilterInstructor}>
                     <SelectTrigger className="bg-background rounded-full border-primary/20">
                       <SelectValue placeholder="Instructor" />
                     </SelectTrigger>
                     <SelectContent>
                       {instructors.map(instr => (
                         <SelectItem key={instr.value} value={instr.value}>{instr.label}</SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-24 container px-4 overflow-x-auto">
         <div className="min-w-[1000px] border rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 bg-background">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted border-none">
                  <TableHead className="font-bold text-foreground py-6 w-[150px]">
                    <div className="flex items-center gap-2">
                       <Clock className="h-4 w-4 text-primary" />
                       <span>TIME</span>
                    </div>
                  </TableHead>
                  {['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'].map(day => (
                    <TableHead key={day} className="font-bold text-foreground text-center py-6">{day}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((row, i) => (
                    <TableRow key={i} className="group hover:bg-primary/5 transition-colors">
                      <TableCell className="font-bold py-8">
                         <div className="flex flex-col gap-1">
                            <span className="text-primary">{row.time}</span>
                            <Badge variant="outline" className="text-[9px] w-fit border-primary/20">{row.level}</Badge>
                         </div>
                      </TableCell>
                      {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun].map((cell, idx) => (
                        <TableCell key={idx} className="text-center p-4">
                          {cell !== 'Rest Day' ? (
                            <button 
                              onClick={() => handleBooking(cell)}
                              className="w-full p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/5 text-left"
                            >
                               <div className="text-sm font-bold uppercase truncate">{cell}</div>
                               <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Click to Book</div>
                            </button>
                          ) : (
                            <div className="p-4 rounded-xl border border-transparent bg-muted/5 italic text-muted-foreground/30 text-xs">
                               Rest Day
                            </div>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-20 text-muted-foreground">
                       No classes found matching your filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
         </div>

         {/* Booking Dialog */}
         <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogContent className="sm:max-w-md bg-background border-primary/20">
               <DialogHeader className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit"><CheckCircle2 className="h-6 w-6 text-primary" /></div>
                  <DialogTitle className="text-2xl font-extrabold uppercase tracking-tight">Book Your <span className="text-primary">Session</span></DialogTitle>
                  <DialogDescription className="text-base">
                     You are about to book: <span className="font-bold text-foreground">{selectedClass}</span>
                  </DialogDescription>
               </DialogHeader>
               <div className="py-6 space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl border border-primary/10">
                     <Calendar className="h-5 w-5 text-primary" />
                     <div className="space-y-0.5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Schedule</p>
                        <p className="text-sm font-bold">Standard Pro Member Access</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl border border-primary/10">
                     <User className="h-5 w-5 text-primary" />
                     <div className="space-y-0.5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Attendee</p>
                        <p className="text-sm font-bold">Alex Johnson</p>
                     </div>
                  </div>
               </div>
               <DialogFooter className="sm:justify-start gap-3">
                  <Button className="flex-1 rounded-full font-bold h-12 uppercase tracking-widest" onClick={confirmBooking}>CONFIRM BOOKING</Button>
                  <Button variant="ghost" className="flex-1 rounded-full font-bold h-12 uppercase tracking-widest" onClick={() => setIsBookingOpen(false)}>CANCEL</Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
         
         <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-sm text-muted-foreground uppercase tracking-widest font-semibold">
            <div className="flex items-center gap-2">
               <div className="h-3 w-3 rounded-full bg-primary" />
               <span>Available for All</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="h-3 w-3 rounded-full border border-primary" />
               <span>VIP Only</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="h-3 w-3 rounded-full bg-destructive" />
               <span>Full</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Schedule;