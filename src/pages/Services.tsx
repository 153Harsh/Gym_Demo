import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Dumbbell, Zap, Flame, Heart, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const programs = [
    {
      title: 'Personal Training',
      desc: 'One-on-one sessions tailored to your specific goals. Our expert trainers create customized workout and nutrition plans.',
      icon: <Dumbbell className="h-6 w-6" />,
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e9626d5b-0af1-446c-9ad6-9fb1af118e25.jpg',
      benefits: ['Customized programs', 'Goal-oriented tracking', 'Correct form and technique']
    },
    {
      title: 'Group HIIT',
      desc: 'High-Intensity Interval Training designed to burn fat and build lean muscle in a high-energy group setting.',
      icon: <Flame className="h-6 w-6" />,
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_69feed30-14b9-456b-916d-ef603ca0f677.jpg',
      benefits: ['Maximum calorie burn', 'High group motivation', 'Short and effective']
    },
    {
      title: 'Yoga & Mobility',
      desc: 'Enhance your flexibility, balance, and mental clarity. Perfect for recovery and long-term joint health.',
      icon: <Zap className="h-6 w-6" />,
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e53dbc56-1fc2-43ec-b818-2f6b18abf7ab.jpg',
      benefits: ['Improved flexibility', 'Reduced stress', 'Injury prevention']
    },
    {
      title: 'CrossFit',
      desc: 'Varied functional movements performed at high intensity. Build strength, endurance, and power.',
      icon: <Scale className="h-6 w-6" />,
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_1ff24c5d-d036-42f7-b376-97c17392f6ff.jpg',
      benefits: ['Functional strength', 'Total body conditioning', 'Mental toughness']
    },
    {
      title: 'Cardio & Strength',
      desc: 'A classic blend of cardiovascular exercises and resistance training for overall fitness and body composition.',
      icon: <Heart className="h-6 w-6" />,
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c94bf4b9-1668-43e8-b199-cd41745882ba.jpg',
      benefits: ['Improved heart health', 'Increased metabolism', 'Body toning']
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Our <span className="text-primary">Programs</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from a wide variety of world-class fitness programs designed for every level.
          </p>
        </div>
      </section>

      {/* Program List */}
      <section className="py-24 container px-4">
        <div className="space-y-24">
          {programs.map((program, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden group">
                <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                   <div className="p-2 bg-primary text-primary-foreground rounded-lg shadow-xl">{program.icon}</div>
                   <h3 className="text-2xl font-bold text-white uppercase">{program.title}</h3>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                 <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">{program.title}</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">{program.desc}</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                   {program.benefits.map((benefit, j) => (
                     <div key={j} className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-primary" />
                       <span className="text-sm font-medium">{benefit}</span>
                     </div>
                   ))}
                 </div>
                 <div className="pt-6">
                   <Button className="rounded-full font-bold px-8" asChild>
                     <Link to="/membership">GET STARTED</Link>
                   </Button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timetable Link */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-4 text-center md:text-left">
             <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Ready to join a class?</h2>
             <p className="text-lg font-medium opacity-90">View our full weekly timetable and plan your workouts ahead.</p>
           </div>
           <Button variant="secondary" size="lg" className="rounded-full font-bold px-10 group" asChild>
             <Link to="/schedule">
               VIEW SCHEDULE <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
             </Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;