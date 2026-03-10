import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Gallery = () => {
  const facilityImages = [
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'Main workout floor' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'Cardio zone' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'Free weights section' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'Yoga studio' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'CrossFit rig' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'Locker rooms' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'Sauna' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ddf3a102-ae22-42c4-9c35-e9a89c7bf258.jpg', alt: 'Reception area' },
  ];

  const transformations = [
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cd73383f-0ba1-43fe-b896-7e0a5cb7f6e8.jpg', alt: 'Member transformation 1' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cd73383f-0ba1-43fe-b896-7e0a5cb7f6e8.jpg', alt: 'Member transformation 2' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cd73383f-0ba1-43fe-b896-7e0a5cb7f6e8.jpg', alt: 'Member transformation 3' },
    { src: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_cd73383f-0ba1-43fe-b896-7e0a5cb7f6e8.jpg', alt: 'Member transformation 4' },
  ];

  return (
    <div className="flex flex-col">
       {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Gym <span className="text-primary">Gallery</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a visual tour of our facilities and see the amazing results our members achieve.
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-24 container px-4">
         <Tabs defaultValue="facility" className="w-full">
            <div className="flex justify-center mb-12">
               <TabsList className="bg-muted/40 p-1 rounded-full border border-primary/10 h-14">
                  <TabsTrigger value="facility" className="rounded-full px-8 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold uppercase tracking-widest text-xs h-full transition-all">FACILITY</TabsTrigger>
                  <TabsTrigger value="transform" className="rounded-full px-8 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold uppercase tracking-widest text-xs h-full transition-all">TRANSFORMATIONS</TabsTrigger>
               </TabsList>
            </div>
            
            <TabsContent value="facility" className="mt-0">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {facilityImages.map((img, i) => (
                    <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-xl hover:shadow-primary/5 transition-all">
                       <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <p className="text-white font-bold uppercase tracking-widest text-sm">{img.alt}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </TabsContent>
            
            <TabsContent value="transform" className="mt-0">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {transformations.map((img, i) => (
                    <div key={i} className="group relative aspect-video overflow-hidden rounded-2xl bg-muted shadow-xl transition-all">
                       <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                       <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground font-bold">12 MONTH JOURNEY</Badge>
                       </div>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                          <p className="text-white font-bold uppercase tracking-widest text-lg">Real Results, Real Dedication</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-16 text-center text-muted-foreground italic">
                  * All transformation photos are shared with explicit permission from our members.
               </div>
            </TabsContent>
         </Tabs>
      </section>
    </div>
  );
};

export default Gallery;