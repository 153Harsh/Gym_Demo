import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Instagram, Facebook, Twitter, Award, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Trainers = () => {
  const trainers = [
    {
      name: "Marcus Reynolds",
      role: "Head Coach & Founder",
      special: "Olympic Weightlifting, Strength & Conditioning",
      bio: "Former Olympic weightlifter with 15 years of coaching experience. Marcus founded FitZone with a vision to build a world-class training facility.",
      img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_030e7250-ed1f-4d6f-bcd9-4826ed9081a4.jpg",
      awards: ["Olympic Silver Medalist", "Certified Strength Coach"],
    },
    {
      name: "Sarah Miller",
      role: "Lead Yoga Instructor",
      special: "Ashtanga Yoga, Mobility, Mindfulness",
      bio: "Sarah brings over a decade of yoga practice and teaching experience, helping members find balance and flexibility both on and off the mat.",
      img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e69a7d6c-29a0-4954-be19-5708fbeb8315.jpg",
      awards: ["500hr RYT", "Mindfulness Coach of the Year"],
    },
    {
      name: "Mike Thompson",
      role: "HIIT Specialist",
      special: "Functional Training, Metabolic Conditioning",
      bio: "Known for his high-energy sessions and motivating coaching style. Mike ensures every member pushes their limits safely.",
      img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6bb37132-ecdd-441a-a23a-da29c48ef134.jpg",
      awards: ["NASM Certified Personal Trainer", "HIIT Master Trainer"],
    },
    {
      name: "Julia Chen",
      role: "Cardio Expert",
      special: "Endurance Training, Nutritional Coaching",
      bio: "A marathon runner and nutritionist, Julia helps members optimize their endurance and fuel their bodies for peak performance.",
      img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e9b7bd44-3448-4fa3-8f85-3829de907830.jpg",
      awards: ["Precision Nutrition Level 1", "Certified Running Coach"],
    }
  ];

  return (
    <div className="flex flex-col">
       {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Meet Our <span className="text-primary">Experts</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our certified professionals are here to guide, motivate, and help you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Trainer List */}
      <section className="py-24 container px-4">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, i) => (
               <Card key={i} className="bg-muted/30 border-none overflow-hidden hover:bg-muted/50 transition-all duration-300 group shadow-lg">
                  <div className="h-[350px] overflow-hidden relative">
                     <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 space-x-4">
                        <Link to="#" className="text-white hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
                        <Link to="#" className="text-white hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></Link>
                        <Link to="#" className="text-white hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></Link>
                     </div>
                  </div>
                  
                  <CardHeader className="p-6 space-y-2">
                     <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold uppercase text-[10px]">{trainer.role}</Badge>
                     </div>
                     <h3 className="text-2xl font-bold uppercase tracking-tight">{trainer.name}</h3>
                     <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{trainer.special}</p>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0 space-y-4">
                     <p className="text-sm text-muted-foreground leading-relaxed italic line-clamp-3">"{trainer.bio}"</p>
                     <div className="space-y-2 pt-4 border-t border-primary/10">
                        {trainer.awards.map((award, j) => (
                           <div key={j} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary">
                              <Award className="h-3 w-3" />
                              <span>{award}</span>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-20 bg-muted/20 border-y">
         <div className="container px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Are You a <span className="text-primary text-primary-glow">Pro Trainer?</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               We're always looking for passionate, certified experts to join our elite team. If you think you have what it takes, we want to hear from you.
            </p>
            <Link to="/contact">
               <button className="bg-primary text-primary-foreground font-extrabold uppercase px-12 py-4 rounded-full text-lg tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                  APPLY TO JOIN TEAM
               </button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Trainers;