import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Clock, User, Filter } from 'lucide-react';

const Schedule = () => {
  const [filterClass, setFilterClass] = useState('all');
  const [filterInstructor, setFilterInstructor] = useState('all');

  const classes = [
    { time: '07:00 AM', mon: 'HIIT (Mike)', tue: 'Yoga (Sarah)', wed: 'HIIT (Mike)', thu: 'Yoga (Sarah)', fri: 'HIIT (Mike)', sat: 'Zumba (Emily)', sun: 'Yoga (Sarah)', type: 'hiit', instr: 'mike' },
    { time: '09:00 AM', mon: 'Strength (Marcus)', tue: 'Cardio (Julia)', wed: 'Strength (Marcus)', thu: 'Cardio (Julia)', fri: 'Strength (Marcus)', sat: 'CrossFit (Alex)', sun: 'Strength (Marcus)', type: 'strength', instr: 'marcus' },
    { time: '11:00 AM', mon: 'Yoga (Sarah)', tue: 'CrossFit (Alex)', wed: 'Yoga (Sarah)', thu: 'CrossFit (Alex)', fri: 'Yoga (Sarah)', sat: 'HIIT (Mike)', sun: 'HIIT (Mike)', type: 'yoga', instr: 'sarah' },
    { time: '04:00 PM', mon: 'CrossFit (Alex)', tue: 'HIIT (Mike)', wed: 'CrossFit (Alex)', thu: 'HIIT (Mike)', fri: 'CrossFit (Alex)', sat: 'Strength (Marcus)', sun: 'Zumba (Emily)', type: 'crossfit', instr: 'alex' },
    { time: '06:00 PM', mon: 'Cardio (Julia)', tue: 'Strength (Marcus)', wed: 'Cardio (Julia)', thu: 'Strength (Marcus)', fri: 'Cardio (Julia)', sat: 'Yoga (Sarah)', sun: 'Cardio (Julia)', type: 'cardio', instr: 'julia' },
    { time: '08:00 PM', mon: 'Zumba (Emily)', tue: 'Yoga (Sarah)', wed: 'Zumba (Emily)', thu: 'Yoga (Sarah)', fri: 'Zumba (Emily)', sat: 'Rest Day', sun: 'Rest Day', type: 'zumba', instr: 'emily' },
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
                      <TableCell className="font-bold text-primary py-8">{row.time}</TableCell>
                      <TableCell className="text-center p-4">
                        <div className="p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-colors">
                           <div className="text-sm font-bold uppercase">{row.mon}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center p-4">
                         <div className="p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-colors">
                            <div className="text-sm font-bold uppercase">{row.tue}</div>
                         </div>
                      </TableCell>
                      <TableCell className="text-center p-4">
                         <div className="p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-colors">
                            <div className="text-sm font-bold uppercase">{row.wed}</div>
                         </div>
                      </TableCell>
                      <TableCell className="text-center p-4">
                         <div className="p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-colors">
                            <div className="text-sm font-bold uppercase">{row.thu}</div>
                         </div>
                      </TableCell>
                      <TableCell className="text-center p-4">
                         <div className="p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-colors">
                            <div className="text-sm font-bold uppercase">{row.fri}</div>
                         </div>
                      </TableCell>
                      <TableCell className="text-center p-4">
                         <div className="p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-colors">
                            <div className="text-sm font-bold uppercase">{row.sat}</div>
                         </div>
                      </TableCell>
                      <TableCell className="text-center p-4">
                         <div className="p-4 rounded-xl border border-primary/10 bg-muted/20 group-hover:bg-background transition-colors">
                            <div className="text-sm font-bold uppercase">{row.sun}</div>
                         </div>
                      </TableCell>
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