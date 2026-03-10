import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success('Message sent successfully! We will get back to you soon.');
    form.reset();
  };

  return (
    <div className="flex flex-col">
       {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Contact <span className="text-primary">Us</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We're here to help you start your fitness journey today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container px-4">
         <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info and Map */}
            <div className="space-y-12">
               <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4 p-6 bg-muted/20 rounded-2xl border border-primary/10">
                     <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        <MapPin className="h-6 w-6 text-primary" />
                     </div>
                     <h3 className="text-xl font-bold uppercase tracking-tight">Our Location</h3>
                     <p className="text-muted-foreground text-sm leading-relaxed">
                        123 Fitness St, Muscle City,<br />
                        MC 90210, United States
                     </p>
                  </div>
                  
                  <div className="space-y-4 p-6 bg-muted/20 rounded-2xl border border-primary/10">
                     <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        <Phone className="h-6 w-6 text-primary" />
                     </div>
                     <h3 className="text-xl font-bold uppercase tracking-tight">Phone & Email</h3>
                     <div className="text-muted-foreground text-sm space-y-1">
                        <p>+1 (555) 123-4567</p>
                        <p>hello@fitzonegym.com</p>
                     </div>
                  </div>
                  
                  <div className="space-y-4 p-6 bg-muted/20 rounded-2xl border border-primary/10">
                     <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        <Clock className="h-6 w-6 text-primary" />
                     </div>
                     <h3 className="text-xl font-bold uppercase tracking-tight">Opening Hours</h3>
                     <div className="text-muted-foreground text-sm space-y-1">
                        <p>Mon - Fri: 24 Hours</p>
                        <p>Sat - Sun: 06:00 AM - 10:00 PM</p>
                     </div>
                  </div>
                  
                  <div className="space-y-4 p-6 bg-muted/20 rounded-2xl border border-primary/10">
                     <div className="p-3 bg-primary/10 rounded-lg w-fit">
                        <Facebook className="h-6 w-6 text-primary" />
                     </div>
                     <h3 className="text-xl font-bold uppercase tracking-tight">Follow Us</h3>
                     <div className="flex gap-4">
                        <Instagram className="h-5 w-5 hover:text-primary transition-colors cursor-pointer" />
                        <Facebook className="h-5 w-5 hover:text-primary transition-colors cursor-pointer" />
                        <Twitter className="h-5 w-5 hover:text-primary transition-colors cursor-pointer" />
                     </div>
                  </div>
               </div>
               
               {/* Map Placeholder */}
               <div className="rounded-2xl overflow-hidden h-[350px] bg-muted border border-primary/10">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    referrerPolicy="no-referrer-when-downgrade" 
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_LJOYJL-84SMuxNB7LtRGhxEQLjswvy0&q=Gym+New+York&language=en&region=cn" 
                    allowFullScreen
                  />
               </div>
            </div>
            
            {/* Form */}
            <Card className="p-8 md:p-12 border-primary/10 bg-muted/5 shadow-2xl">
               <div className="mb-8">
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Send us a <span className="text-primary">Message</span></h2>
                  <p className="text-muted-foreground">We usually respond within 2-4 hours during business days.</p>
               </div>
               
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="uppercase tracking-widest text-xs font-bold">Full Name</FormLabel>
                              <FormControl>
                                 <Input placeholder="John Doe" className="bg-background h-12 border-primary/10" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="uppercase tracking-widest text-xs font-bold">Email Address</FormLabel>
                              <FormControl>
                                 <Input placeholder="john@example.com" className="bg-background h-12 border-primary/10" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="uppercase tracking-widest text-xs font-bold">Subject</FormLabel>
                              <FormControl>
                                 <Input placeholder="Inquiry about Membership" className="bg-background h-12 border-primary/10" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="uppercase tracking-widest text-xs font-bold">Message</FormLabel>
                              <FormControl>
                                 <Textarea placeholder="Tell us how we can help you..." className="bg-background min-h-[150px] border-primary/10" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <Button type="submit" className="w-full h-14 rounded-full font-extrabold uppercase tracking-widest text-lg group">
                        SEND MESSAGE <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </form>
               </Form>
            </Card>
         </div>
      </section>
    </div>
  );
};

export default Contact;