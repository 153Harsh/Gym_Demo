import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, Zap, Target, Flame, Heart, Scale, User } from 'lucide-react';
import { toast } from 'sonner';

const questions = [
  {
    question: "What is your primary fitness goal?",
    options: [
      { label: "Build massive strength", icon: <Scale className="h-5 w-5" />, value: "strength" },
      { label: "Burn fat and get shredded", icon: <Flame className="h-5 w-5" />, value: "hiit" },
      { label: "Improve flexibility and calm the mind", icon: <Zap className="h-5 w-5" />, value: "yoga" },
      { label: "Improve endurance and heart health", icon: <Heart className="h-5 w-5" />, value: "cardio" }
    ]
  },
  {
    question: "How many days per week can you commit to training?",
    options: [
      { label: "1-2 days (Casual)", icon: <Target className="h-5 w-5" />, value: "casual" },
      { label: "3-4 days (Balanced)", icon: <Target className="h-5 w-5" />, value: "balanced" },
      { label: "5-6 days (Hardcore)", icon: <Target className="h-5 w-5" />, value: "hardcore" },
      { label: "Every day (Life is training)", icon: <Target className="h-5 w-5" />, value: "pro" }
    ]
  },
  {
    question: "Which type of environment do you prefer?",
    options: [
      { label: "One-on-one focused attention", icon: <User className="h-5 w-5" />, value: "pt" },
      { label: "High-energy group session", icon: <User className="h-5 w-5" />, value: "group" },
      { label: "Solo training with headphones", icon: <User className="h-5 w-5" />, value: "solo" },
      { label: "Competitive team atmosphere", icon: <User className="h-5 w-5" />, value: "crossfit" }
    ]
  }
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleNext = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const goal = answers[0];
    const commit = answers[1];
    const env = answers[2];

    if (goal === 'strength' || env === 'pt') return { title: 'Elite Personal Training', desc: 'Focus on heavy compound movements and strength cycles tailored specifically for your body.', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e9626d5b-0af1-446c-9ad6-9fb1af118e25.jpg' };
    if (goal === 'hiit' || env === 'group') return { title: 'High-Octane HIIT', desc: 'Max out your heart rate and torch calories with our world-class group training sessions.', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_69feed30-14b9-456b-916d-ef603ca0f677.jpg' };
    if (goal === 'yoga') return { title: 'Mind-Body Yoga', desc: 'Find your flow and build incredible mobility, balance, and mental focus.', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e53dbc56-1fc2-43ec-b818-2f6b18abf7ab.jpg' };
    return { title: 'CrossFit Mastery', desc: 'Varied functional movements at high intensity. Join the competitive community and push your limits.', img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_1ff24c5d-d036-42f7-b376-97c17392f6ff.jpg' };
  };

  const recommendation = getRecommendation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-muted/10 py-16 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">Program <span className="text-primary">Finder</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Not sure which program is right for you? Take our quick quiz and get a personalized recommendation.
          </p>
        </div>
      </section>

      {/* Quiz Area */}
      <section className="flex-1 flex items-center justify-center py-24 container px-4">
         {!showResult ? (
           <div className="w-full max-w-2xl space-y-12">
              <div className="flex justify-between items-center mb-8">
                 <div className="flex gap-2">
                    {questions.map((_, i) => (
                       <div key={i} className={`h-1 w-12 rounded-full transition-all duration-300 ${i <= step ? 'bg-primary' : 'bg-muted/50'}`} />
                    ))}
                 </div>
                 <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Step {step + 1} of {questions.length}</span>
              </div>
              
              <div className="space-y-4">
                 <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">{questions[step].question}</h2>
              </div>
              
              <div className="grid gap-4">
                 {questions[step].options.map((opt, i) => (
                   <button 
                     key={i} 
                     onClick={() => handleNext(opt.value)}
                     className="group flex items-center justify-between p-6 bg-muted/10 border border-primary/10 rounded-2xl hover:bg-primary hover:border-primary transition-all text-left"
                   >
                     <div className="flex items-center gap-4">
                        {opt.icon && <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-background/20 group-hover:text-primary transition-all">{opt.icon}</div>}
                        <span className="text-lg font-bold group-hover:text-primary-foreground transition-all">{opt.label}</span>
                     </div>
                     <ArrowRight className="h-5 w-5 text-primary group-hover:text-primary-foreground group-hover:translate-x-1 transition-all" />
                   </button>
                 ))}
              </div>
              
              {step > 0 && (
                <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                   <ArrowLeft className="h-4 w-4" /> Go Back
                </button>
              )}
           </div>
         ) : (
           <div className="w-full max-w-4xl text-center space-y-12 animate-fade-in">
              <div className="space-y-4">
                 <Badge variant="outline" className="text-primary border-primary uppercase tracking-widest px-4 py-1">YOUR PERFECT MATCH</Badge>
                 <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">BECOME <span className="text-primary">ELITE</span></h2>
              </div>
              
              <Card className="overflow-hidden border-none shadow-2xl bg-muted/20">
                 <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-[400px]">
                       <img src={recommendation.img} alt={recommendation.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center text-left space-y-6">
                       <div className="p-3 bg-primary/10 rounded-xl w-fit"><Target className="h-8 w-8 text-primary" /></div>
                       <h3 className="text-3xl font-extrabold uppercase tracking-tight">{recommendation.title}</h3>
                       <p className="text-lg text-muted-foreground leading-relaxed italic line-clamp-4">"{recommendation.desc}"</p>
                       <div className="pt-6 space-y-4">
                          <Button className="w-full rounded-full font-bold h-14 text-lg uppercase tracking-widest shadow-xl shadow-primary/20" onClick={() => toast.success('Registration started!')}>GET STARTED NOW</Button>
                          <Button variant="ghost" className="w-full font-bold" onClick={() => {setShowResult(false); setStep(0); setAnswers([]);}}>Retake Quiz</Button>
                       </div>
                    </div>
                 </div>
              </Card>
              
              <div className="pt-12 flex flex-col items-center gap-4">
                 <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Not feeling this recommendation?</p>
                 <Button variant="link" className="text-primary font-bold group uppercase tracking-widest text-sm" asChild>
                    <Link to="/services">
                       Explore All Programs <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </Button>
              </div>
           </div>
         )}
      </section>
    </div>
  );
};

export default Quiz;