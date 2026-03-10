import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Scale, Info, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const BMI = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const bmi = unit === 'metric' 
    ? (weight / ((height / 100) ** 2)).toFixed(1)
    : ((weight * 703) / (height ** 2)).toFixed(1);

  const getBMICategory = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-blue-400', advice: 'Consider consulting a nutritionist for healthy weight gain.' };
    if (val < 25) return { label: 'Healthy', color: 'text-primary', advice: 'Excellent! Keep maintaining your current lifestyle and fitness routine.' };
    if (val < 30) return { label: 'Overweight', color: 'text-yellow-400', advice: 'Focus on consistent cardio and balanced nutrition to reach your goal.' };
    return { label: 'Obese', color: 'text-destructive', advice: 'It is recommended to consult a fitness expert and health professional.' };
  };

  const category = getBMICategory(Number(bmi));

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Fitness <span className="text-primary text-primary-glow">Tools</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Calculate your BMI and get instant advice for your fitness journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container px-4">
         <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <Card className="p-8 border-primary/20 bg-muted/5 shadow-2xl">
               <CardHeader className="p-0 mb-8 space-y-2">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-primary/10 rounded-lg text-primary"><Scale className="h-6 w-6" /></div>
                     <CardTitle className="text-2xl uppercase font-bold tracking-tight">BMI Calculator</CardTitle>
                  </div>
                  <div className="flex gap-2">
                     <Button 
                       variant={unit === 'metric' ? 'default' : 'outline'} 
                       size="sm" 
                       className="rounded-full text-xs" 
                       onClick={() => {setUnit('metric'); setWeight(70); setHeight(175);}}
                     >
                       METRIC (KG/CM)
                     </Button>
                     <Button 
                       variant={unit === 'imperial' ? 'default' : 'outline'} 
                       size="sm" 
                       className="rounded-full text-xs" 
                       onClick={() => {setUnit('imperial'); setWeight(154); setHeight(69);}}
                     >
                       IMPERIAL (LB/IN)
                     </Button>
                  </div>
               </CardHeader>
               
               <CardContent className="p-0 space-y-10">
                  <div className="space-y-6">
                     <div className="space-y-4">
                        <div className="flex justify-between font-bold uppercase text-xs tracking-widest">
                           <Label>Weight ({unit === 'metric' ? 'kg' : 'lb'})</Label>
                           <span className="text-primary">{weight}</span>
                        </div>
                        <Slider 
                          value={[weight]} 
                          max={unit === 'metric' ? 200 : 440} 
                          min={unit === 'metric' ? 30 : 66} 
                          step={1} 
                          onValueChange={(v) => setWeight(v[0])} 
                          className="py-4"
                        />
                     </div>
                     
                     <div className="space-y-4">
                        <div className="flex justify-between font-bold uppercase text-xs tracking-widest">
                           <Label>Height ({unit === 'metric' ? 'cm' : 'in'})</Label>
                           <span className="text-primary">{height}</span>
                        </div>
                        <Slider 
                          value={[height]} 
                          max={unit === 'metric' ? 250 : 98} 
                          min={unit === 'metric' ? 100 : 39} 
                          step={1} 
                          onValueChange={(v) => setHeight(v[0])} 
                          className="py-4"
                        />
                     </div>
                  </div>
                  
                  <div className="pt-8 border-t border-primary/10 flex items-center justify-between">
                     <div className="space-y-1">
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Result</p>
                        <h2 className={`text-6xl font-extrabold tracking-tighter ${category.color}`}>{bmi}</h2>
                     </div>
                     <div className="text-right space-y-1">
                        <Badge className="bg-primary text-primary-foreground font-bold mb-2">{category.label}</Badge>
                        <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed italic">"{category.advice}"</p>
                     </div>
                  </div>
               </CardContent>
            </Card>
            
            <div className="space-y-8">
               <div className="space-y-4">
                  <h2 className="text-3xl font-bold uppercase tracking-tight">Understanding <span className="text-primary">BMI</span></h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight, and obesity in adults.
                  </p>
               </div>
               
               <div className="grid gap-4">
                  {[
                    { label: 'Underweight', range: '< 18.5', color: 'border-blue-400' },
                    { label: 'Healthy Weight', range: '18.5 - 24.9', color: 'border-primary' },
                    { label: 'Overweight', range: '25.0 - 29.9', color: 'border-yellow-400' },
                    { label: 'Obese', range: '≥ 30.0', color: 'border-destructive' },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center justify-between p-4 border rounded-xl bg-muted/10 ${row.color}`}>
                       <span className="font-bold uppercase tracking-widest text-sm">{row.label}</span>
                       <span className="font-mono text-sm">{row.range}</span>
                    </div>
                  ))}
               </div>
               
               <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl flex gap-4">
                  <Info className="h-6 w-6 text-primary shrink-0" />
                  <div className="space-y-2">
                     <h4 className="font-bold uppercase text-xs tracking-widest">Note on Accuracy</h4>
                     <p className="text-xs text-muted-foreground leading-relaxed">
                        BMI is a useful screening tool but does not directly measure body fat. Muscle mass can often skew the results, particularly for athletes and weightlifters.
                     </p>
                  </div>
               </div>
               
               <div className="pt-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Ready to reach your target?</h3>
                  <div className="space-y-3">
                     {['Personal Training', 'Nutritional Advice', 'Weekly Check-ins'].map(feat => (
                       <div key={feat} className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{feat}</span>
                       </div>
                     ))}
                  </div>
                  <Button className="mt-8 rounded-full font-bold px-10 h-12 shadow-xl shadow-primary/20" onClick={() => toast.success('Redirecting to plans...')}>GET STARTED TODAY</Button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default BMI;