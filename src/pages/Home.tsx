import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircle2, Star, Users, Award, Zap, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_81557ba7-775d-4e8b-bedc-e2dc9149830d.jpg"
            alt="Intense workout atmosphere in FitZone Gym"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            <Badge variant="outline" className="text-primary border-primary animate-fade-in uppercase tracking-widest px-4 py-1">
              Elevate Your Potential
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none animate-slide-in">
              PUSH YOUR <span className="text-primary">LIMITS</span> <br />
              BEYOND THE EDGE
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Join the elite fitness community. Expert coaching, premium equipment, and results-driven training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full text-lg font-bold px-8 shadow-lg shadow-primary/20" asChild>
                <Link to="/membership">START 3-DAY FREE TRIAL</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg font-bold px-8" asChild>
                <Link to="/services">VIEW PROGRAMS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/20">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Daily Classes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">WHY CHOOSE <span className="text-primary text-primary-glow">FITZONE?</span></h2>
          <p className="text-muted-foreground text-lg">
            We provide everything you need to transform your body and mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Modern Equipment',
              desc: 'Premium cardio and strength training machines from world-class brands.',
              icon: <Zap className="h-10 w-10 text-primary" />,
              img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c94bf4b9-1668-43e8-b199-cd41745882ba.jpg'
            },
            {
              title: 'Elite Coaching',
              desc: 'Personalized guidance from certified trainers to maximize your results.',
              icon: <Users className="h-10 w-10 text-primary" />,
              img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e9626d5b-0af1-446c-9ad6-9fb1af118e25.jpg'
            },
            {
              title: 'Group Energy',
              desc: 'High-octane classes from HIIT to Yoga that keep you motivated.',
              icon: <Award className="h-10 w-10 text-primary" />,
              img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_69feed30-14b9-456b-916d-ef603ca0f677.jpg'
            }
          ].map((item, i) => (
            <Card key={i} className="bg-muted/30 border-none overflow-hidden hover:bg-muted/50 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit">{item.icon}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-24 bg-muted/10 relative">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">READY TO <span className="text-primary">START?</span></h2>
              <p className="text-muted-foreground text-lg">Choose a plan that fits your lifestyle.</p>
            </div>
            <Button variant="link" className="text-primary font-bold group" asChild>
              <Link to="/membership">
                SEE ALL PLANS <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-primary/20 bg-background relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4">
                 <Badge className="bg-primary text-primary-foreground font-bold">POPULAR</Badge>
               </div>
               <div className="space-y-6">
                 <div>
                   <h3 className="text-2xl font-bold">Standard Pro</h3>
                   <div className="flex items-baseline gap-1 mt-2">
                     <span className="text-4xl font-bold">$49</span>
                     <span className="text-muted-foreground">/month</span>
                   </div>
                 </div>
                 <ul className="space-y-3">
                   {['All Gym Access', '2 Group Classes/Week', 'Locker Room Access', 'Fitness Assessment'].map((feat) => (
                     <li key={feat} className="flex items-center gap-2 text-sm">
                       <CheckCircle2 className="h-4 w-4 text-primary" />
                       <span>{feat}</span>
                     </li>
                   ))}
                 </ul>
                 <Button className="w-full rounded-full font-bold" onClick={() => {}}>SELECT PLAN</Button>
               </div>
            </Card>
            
            <Card className="p-8 border-white/10 bg-muted/40 backdrop-blur-sm">
               <div className="space-y-6">
                 <div>
                   <h3 className="text-2xl font-bold">Elite VIP</h3>
                   <div className="flex items-baseline gap-1 mt-2">
                     <span className="text-4xl font-bold">$99</span>
                     <span className="text-muted-foreground">/month</span>
                   </div>
                 </div>
                 <ul className="space-y-3">
                   {['24/7 Unlimited Access', 'Unlimited Classes', 'Personal Trainer (2x/Mo)', 'Spa & Sauna'].map((feat) => (
                     <li key={feat} className="flex items-center gap-2 text-sm">
                       <CheckCircle2 className="h-4 w-4 text-primary" />
                       <span>{feat}</span>
                     </li>
                   ))}
                 </ul>
                 <Button variant="outline" className="w-full rounded-full font-bold" onClick={() => {}}>SELECT PLAN</Button>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">SUCCESS <span className="text-primary">STORIES</span></h2>
          <p className="text-muted-foreground">Real people, real results at FitZone.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Alex Johnson', text: "FitZone changed my life. The trainers are world-class and the atmosphere is electric.", role: 'Member for 2 years' },
            { name: 'Sarah Miller', text: "I've tried many gyms, but none have the community and quality that FitZone offers.", role: 'Yoga Enthusiast' },
            { name: 'David Chen', text: "The 24/7 access is a game changer for my busy schedule. Highly recommend the VIP plan.", role: 'Corporate Professional' }
          ].map((t, i) => (
            <Card key={i} className="bg-muted/20 border-none p-8 space-y-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="italic text-muted-foreground">"{t.text}"</p>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-primary">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">STOP MAKING EXCUSES.</h2>
          <p className="text-xl font-medium max-w-2xl mx-auto opacity-90">
            Start your journey today. Join FitZone Gym and become the best version of yourself.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full text-lg font-bold px-12 py-8 hover:scale-105 transition-transform" asChild>
            <Link to="/membership">JOIN NOW</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;