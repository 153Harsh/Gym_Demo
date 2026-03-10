import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg"
            alt="Gym interior showcasing history and legacy"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="relative z-10 text-center space-y-6">
          <Badge variant="outline" className="text-primary border-primary animate-fade-in uppercase tracking-widest px-4 py-1">
            Our Story
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter animate-slide-in">
            FORGING <span className="text-primary">LEGENDS</span> <br />
            SINCE 2010
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">MORE THAN JUST <br /><span className="text-primary">A GYM.</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At FitZone, we believe that fitness is not just about lifting weights or running on a treadmill. It's about a lifestyle, a community, and a commitment to personal excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2010 by former Olympian Marcus 'The Titan' Reynolds, FitZone was built on the principle that everyone has an inner athlete waiting to be unleashed. We provide the tools, the guidance, and the environment to make that happen.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
            <img src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_81557ba7-775d-4e8b-bedc-e2dc9149830d.jpg" alt="State of the art gym facility" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/10">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-widest">Core Values</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Excellence', desc: 'We never settle for average. We push for greatness in everything we do.' },
              { title: 'Community', desc: 'We support each other. Your victory is our victory.' },
              { title: 'Integrity', desc: 'Honest coaching, transparent pricing, and genuine care for your health.' }
            ].map((v, i) => (
              <Card key={i} className="bg-background border-none shadow-lg p-8 hover:translate-y-[-5px] transition-transform duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Achievements */}
      <section className="py-24 container px-4">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Awards Won', val: '15+' },
              { label: 'Transformations', val: '2,000+' },
              { label: 'Sq. Ft. Facility', val: '25k' },
              { label: 'Certified Trainers', val: '50+' }
            ].map((s, i) => (
              <div key={i} className="text-center p-6 border rounded-xl bg-muted/5 hover:bg-muted/10 transition-colors">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{s.val}</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* Trainers Preview */}
      <section className="py-24 container px-4 bg-muted/5 border-t">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Meet <span className="text-primary">Our Elite</span></h2>
            <p className="text-muted-foreground text-lg">World-class coaching for world-class results.</p>
          </div>
          <Button variant="link" className="text-primary font-bold group" asChild>
            <Link to="/trainers">
              VIEW ALL TRAINERS <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Marcus Reynolds', role: 'Head Coach', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_030e7250-ed1f-4d6f-bcd9-4826ed9081a4.jpg' },
            { name: 'Sarah Miller', role: 'Yoga Expert', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e69a7d6c-29a0-4954-be19-5708fbeb8315.jpg' },
            { name: 'Mike Thompson', role: 'HIIT Specialist', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6bb37132-ecdd-441a-a23a-da29c48ef134.jpg' },
            { name: 'Julia Chen', role: 'Cardio Pro', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e9b7bd44-3448-4fa3-8f85-3829de907830.jpg' },
          ].map((t, i) => (
            <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold uppercase text-white">{t.name}</h3>
                <p className="text-sm font-bold text-primary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;