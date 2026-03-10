import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock, Award, Activity, Target, Zap, ChevronRight, User } from 'lucide-react';

import { toast } from 'sonner';

const Dashboard = () => {
  const stats = [
    { label: 'Workouts', val: '24', icon: <Activity className="h-4 w-4 text-primary" />, goal: '30' },
    { label: 'Weight', val: '78.5', unit: 'kg', icon: <Target className="h-4 w-4 text-primary" />, trend: '-2.1kg' },
    { label: 'Rank', val: 'Elite', icon: <Award className="h-4 w-4 text-primary" />, level: 'LV. 12' },
  ];

  const upcomingClasses = [
    { title: 'HIIT Bootcamp', time: 'Tomorrow, 07:00 AM', instr: 'Mike', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_69feed30-14b9-456b-916d-ef603ca0f677.jpg' },
    { title: 'Yoga Flow', time: 'Wed, 11:00 AM', instr: 'Sarah', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e53dbc56-1fc2-43ec-b818-2f6b18abf7ab.jpg' },
  ];

  const recentActivity = [
    { type: 'Class', name: 'Strength Training', date: 'Yesterday, 06:00 PM', duration: '60 min', status: 'Completed' },
    { type: 'Solo', name: 'Cardio Session', date: '2 days ago, 08:30 AM', duration: '45 min', status: 'Completed' },
    { type: 'Class', name: 'CrossFit', date: '3 days ago, 04:00 PM', duration: '75 min', status: 'Skipped' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-muted/5">
      {/* Header */}
      <section className="bg-background py-12 border-b">
        <div className="container px-4">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                 <div className="h-20 w-20 rounded-full border-2 border-primary overflow-hidden shadow-2xl shadow-primary/20">
                    <img src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e9b7bd44-3448-4fa3-8f85-3829de907830.jpg" alt="Member Avatar" className="w-full h-full object-cover" />
                 </div>
                 <div className="space-y-1">
                    <h1 className="text-3xl font-extrabold uppercase tracking-tight">Welcome, <span className="text-primary">Alex!</span></h1>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Standard Pro Member since 2024</p>
                 </div>
              </div>
              
              <div className="flex gap-4">
                 <Button variant="outline" className="rounded-full font-bold h-12 px-6" onClick={() => toast.info('Profile editing is disabled in demo.')}>EDIT PROFILE</Button>
                 <Button className="rounded-full font-bold h-12 px-6" asChild>
                    <Link to="/schedule">BOOK CLASS</Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 container px-4">
         <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Stats & Progress */}
            <div className="lg:col-span-2 space-y-8">
               <div className="grid sm:grid-cols-3 gap-6">
                  {stats.map((s, i) => (
                    <Card key={i} className="bg-muted/30 border-none shadow-lg group hover:bg-muted/50 transition-all">
                       <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0">
                          <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{s.label}</CardTitle>
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">{s.icon}</div>
                       </CardHeader>
                       <CardContent className="p-6 pt-0">
                          <div className="flex items-baseline gap-1">
                             <span className="text-3xl font-extrabold tracking-tight">{s.val}</span>
                             <span className="text-xs text-muted-foreground uppercase font-bold">{s.unit || ''}</span>
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                             <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.trend?.startsWith('-') ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 text-primary'}`}>
                                {s.trend || s.level || (s.goal && `Goal: ${s.goal}`)}
                             </span>
                          </div>
                       </CardContent>
                    </Card>
                  ))}
               </div>
               
               <Card className="bg-muted/30 border-none shadow-lg">
                  <CardHeader className="p-8 pb-4">
                     <h3 className="text-xl font-extrabold uppercase tracking-tight flex items-center gap-3">
                        <Zap className="h-5 w-5 text-primary" />
                        Training Goals
                     </h3>
                  </CardHeader>
                  <CardContent className="p-8 pt-4 space-y-12">
                     <div className="space-y-4">
                        <div className="flex justify-between items-end">
                           <div className="space-y-1">
                              <h4 className="text-sm font-bold uppercase tracking-widest">Strength Milestone</h4>
                              <p className="text-xs text-muted-foreground">Deadlift target: 140kg</p>
                           </div>
                           <span className="text-sm font-bold text-primary">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                     </div>
                     
                     <div className="space-y-4">
                        <div className="flex justify-between items-end">
                           <div className="space-y-1">
                              <h4 className="text-sm font-bold uppercase tracking-widest">Consistency Streak</h4>
                              <p className="text-xs text-muted-foreground">Train 4x per week for a month</p>
                           </div>
                           <span className="text-sm font-bold text-primary">3/4 Weeks</span>
                        </div>
                        <Progress value={75} className="h-2" />
                     </div>
                  </CardContent>
               </Card>
               
               <Card className="bg-muted/30 border-none shadow-lg overflow-hidden">
                  <CardHeader className="p-8 pb-4 flex flex-row justify-between items-center">
                     <h3 className="text-xl font-extrabold uppercase tracking-tight flex items-center gap-3">
                        <Activity className="h-5 w-5 text-primary" />
                        Recent Activity
                     </h3>
                     <Button variant="link" className="text-primary text-xs font-bold uppercase tracking-widest p-0" onClick={() => toast.info('Full history not available in demo.')}>View All History</Button>
                  </CardHeader>
                  <CardContent className="p-0">
                     <div className="overflow-x-auto">
                        <table className="w-full text-left">
                           <thead className="bg-muted/40 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                              <tr>
                                 <th className="p-6">Activity</th>
                                 <th className="p-6">Date & Time</th>
                                 <th className="p-6">Duration</th>
                                 <th className="p-6">Status</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-primary/5">
                              {recentActivity.map((a, i) => (
                                 <tr key={i} className="hover:bg-primary/5 transition-colors group">
                                    <td className="p-6">
                                       <div className="flex items-center gap-3">
                                          <div className="h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                                          <span className="font-bold text-sm uppercase">{a.name}</span>
                                       </div>
                                    </td>
                                    <td className="p-6 text-sm font-medium text-muted-foreground">{a.date}</td>
                                    <td className="p-6 text-sm font-medium text-muted-foreground">{a.duration}</td>
                                    <td className="p-6">
                                       <Badge variant="outline" className={`text-[10px] font-bold border-none uppercase tracking-widest ${a.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-destructive/10 text-destructive'}`}>
                                          {a.status}
                                       </Badge>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </CardContent>
               </Card>
            </div>
            
            {/* Right Column - Upcoming Classes & Profile Stats */}
            <div className="space-y-8">
               <Card className="bg-muted/30 border-none shadow-lg overflow-hidden">
                  <CardHeader className="p-8 pb-4">
                     <h3 className="text-xl font-extrabold uppercase tracking-tight flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        Upcoming Classes
                     </h3>
                  </CardHeader>
                  <CardContent className="p-8 pt-4 space-y-6">
                     {upcomingClasses.map((c, i) => (
                        <div key={i} className="flex gap-4 group cursor-pointer">
                           <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0">
                              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                           </div>
                           <div className="space-y-1">
                              <h4 className="text-sm font-extrabold uppercase tracking-tight group-hover:text-primary transition-colors">{c.title}</h4>
                              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                 <Clock className="h-3 w-3" />
                                 <span>{c.time}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-widest">
                                 <User className="h-3 w-3" />
                                 <span>{c.instr}</span>
                              </div>
                           </div>
                        </div>
                     ))}
                     <Button variant="outline" className="w-full rounded-full font-bold uppercase text-xs tracking-widest h-12 mt-4" asChild>
                        <Link to="/schedule">EXPLORE FULL SCHEDULE</Link>
                     </Button>
                  </CardContent>
               </Card>
               
               <Card className="bg-primary text-primary-foreground p-8 space-y-6 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                  <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                     <Award className="h-40 w-40" />
                  </div>
                  <div className="relative z-10 space-y-6">
                     <div className="space-y-1">
                        <h3 className="text-2xl font-extrabold uppercase tracking-tighter">REFER A FRIEND</h3>
                        <p className="text-sm font-medium opacity-90">Get one month FREE for every successful referral.</p>
                     </div>
                     <div className="bg-background/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center font-mono text-lg font-bold">
                        FITZONE-ALEX-123
                     </div>
                     <Button variant="secondary" className="w-full rounded-full font-extrabold h-12 hover:scale-105 transition-transform" onClick={() => { navigator.clipboard.writeText('FITZONE-ALEX-123'); toast.success('Code copied!'); }}>COPY CODE</Button>
                  </div>
               </Card>
               
               <Card className="bg-muted/30 border-none shadow-lg p-8 space-y-6">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight">Achievements</h3>
                  <div className="grid grid-cols-3 gap-4">
                     {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center border border-primary/10 ${i <= 4 ? 'bg-primary/10 text-primary' : 'bg-muted/50 text-muted-foreground/30'}`}>
                           <Award className="h-6 w-6" />
                        </div>
                     ))}
                  </div>
               </Card>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Dashboard;