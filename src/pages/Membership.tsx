import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Shield, Star, Rocket, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      tag: 'Starter',
      icon: <Shield className="h-6 w-6 text-primary" />,
      features: ['Gym Access', 'Standard Equipment', 'Locker Rooms', 'Fitness Assessment'],
      missing: ['Group Classes', 'Personal Training', 'Guest Passes', 'Priority Booking']
    },
    {
      name: 'Standard Pro',
      price: '49',
      tag: 'Most Popular',
      popular: true,
      icon: <Star className="h-6 w-6 text-primary" />,
      features: ['Gym Access', 'Unlimited Cardio', '2 Group Classes/Week', 'Free WiFi', 'Locker Rooms', 'Fitness Assessment'],
      missing: ['Personal Training', 'Guest Passes', 'Priority Booking']
    },
    {
      name: 'Elite VIP',
      price: '99',
      tag: 'Full Experience',
      icon: <Rocket className="h-6 w-6 text-primary" />,
      features: ['24/7 Access', 'Unlimited Classes', 'Personal Training (2x/Mo)', 'Guest Passes', 'Locker Rooms', 'Fitness Assessment', 'Free WiFi', 'Priority Booking', 'Spa & Sauna'],
      missing: []
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Membership <span className="text-primary">Plans</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Invest in your health with our flexible plans. No hidden fees, just pure fitness.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 container px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card key={i} className={`relative flex flex-col p-8 border-2 transition-all duration-300 group hover:scale-[1.02] ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border bg-muted/20'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                   <Badge className="bg-primary text-primary-foreground font-bold px-4 py-1">MOST POPULAR</Badge>
                </div>
              )}
              
              <CardHeader className="p-0 mb-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit">{plan.icon}</div>
                <div>
                   <h3 className="text-2xl font-bold uppercase tracking-tight">{plan.name}</h3>
                   <div className="flex items-baseline gap-1 mt-2">
                     <span className="text-5xl font-extrabold text-primary">${plan.price}</span>
                     <span className="text-muted-foreground font-medium uppercase text-sm tracking-widest">/ Month</span>
                   </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0 flex-1 space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {plan.missing.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-muted-foreground/50 line-through">
                      <X className="h-5 w-5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <div className="mt-8">
                 <Button variant={plan.popular ? 'default' : 'outline'} className={`w-full rounded-full font-bold h-12 ${plan.popular ? 'shadow-lg shadow-primary/20' : ''}`} onClick={() => {}}>
                    SELECT PLAN
                 </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted/10">
        <div className="container px-4 overflow-x-auto">
           <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Compare <span className="text-primary">Features</span></h2>
             <p className="text-muted-foreground">Find the perfect plan for your fitness journey.</p>
           </div>
           
           <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden">
             <Table>
               <TableHeader>
                 <TableRow className="bg-muted/50">
                   <TableHead className="w-[300px] font-bold text-foreground">FEATURE</TableHead>
                   <TableHead className="text-center font-bold text-foreground uppercase">Basic</TableHead>
                   <TableHead className="text-center font-bold text-foreground uppercase">Pro</TableHead>
                   <TableHead className="text-center font-bold text-foreground uppercase">Elite</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {[
                   { f: 'Gym Access', b: true, p: true, e: true },
                   { f: 'Equipment', b: 'Standard', p: 'Advanced', e: 'Premium' },
                   { f: 'Group Classes', b: false, p: '2/Week', e: 'Unlimited' },
                   { f: 'WiFi', b: false, p: true, e: true },
                   { f: '24/7 Access', b: false, p: false, e: true },
                   { f: 'Personal Training', b: false, p: false, e: '2x/Month' },
                   { f: 'Spa & Sauna', b: false, p: false, e: true }
                 ].map((row, i) => (
                   <TableRow key={i}>
                     <TableCell className="font-medium">{row.f}</TableCell>
                     <TableCell className="text-center">{typeof row.b === 'boolean' ? (row.b ? <Check className="mx-auto h-4 w-4 text-primary" /> : <X className="mx-auto h-4 w-4 text-muted-foreground/30" />) : row.b}</TableCell>
                     <TableCell className="text-center font-bold text-primary">{typeof row.p === 'boolean' ? (row.p ? <Check className="mx-auto h-4 w-4 text-primary" /> : <X className="mx-auto h-4 w-4 text-muted-foreground/30" />) : row.p}</TableCell>
                     <TableCell className="text-center">{typeof row.e === 'boolean' ? (row.e ? <Check className="mx-auto h-4 w-4 text-primary" /> : <X className="mx-auto h-4 w-4 text-muted-foreground/30" />) : row.e}</TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </div>
        </div>
      </section>

      {/* FAQ Link or Info */}
      <section className="py-20 container px-4">
         <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/10 rounded-2xl p-8 flex gap-6 items-start">
            <div className="p-3 bg-primary/10 rounded-lg shrink-0">
               <Info className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
               <h3 className="text-xl font-bold uppercase tracking-tight">No Contracts, No Hassle.</h3>
               <p className="text-muted-foreground leading-relaxed">
                 All our plans are flexible. You can upgrade, downgrade, or cancel your membership at any time with a 30-day notice. We believe in our service, and we want you to stay because you love it, not because you're forced to.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Membership;