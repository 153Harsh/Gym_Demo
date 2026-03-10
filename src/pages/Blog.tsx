import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar, User, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: '5 Best Exercises for Explosive Power',
      excerpt: 'Looking to jump higher and run faster? These 5 compound movements are essential for building raw explosive strength...',
      date: 'Mar 05, 2026',
      author: 'Marcus Reynolds',
      category: 'Training Tips',
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a287cfbd-e04f-4c2a-820d-20dd3d9a781a.jpg',
    },
    {
      title: 'The Truth About Intermittent Fasting',
      excerpt: 'Is fasting right for your fitness goals? We dive deep into the science behind intermittent fasting and how to do it safely...',
      date: 'Feb 28, 2026',
      author: 'Julia Chen',
      category: 'Nutrition',
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_6908ffde-08dd-4d85-a3e9-91c4c1aa53bd.jpg',
    },
    {
      title: 'Success Story: How John Lost 50lbs in 6 Months',
      excerpt: "Read about John's incredible journey from sedentary lifestyle to marathon runner at FitZone Gym. It's never too late to start...",
      date: 'Feb 15, 2026',
      author: 'Mike Thompson',
      category: 'Success Story',
      img: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8c566224-1f4c-4e8b-bbdf-5499cc917414.jpg',
    }
  ];

  return (
    <div className="flex flex-col">
       {/* Header */}
      <section className="bg-muted/10 py-20 border-b">
        <div className="container px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Fitness <span className="text-primary">Blog</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed and motivated with the latest tips, tricks, and stories from our expert community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container px-4">
         <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog List */}
            <div className="w-full lg:w-2/3 space-y-12">
               {posts.map((post, i) => (
                  <Card key={i} className="bg-muted/30 border-none overflow-hidden hover:bg-muted/50 transition-all duration-300 group shadow-lg">
                     <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 h-[300px] overflow-hidden">
                           <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                           <div className="space-y-4">
                              <div className="flex items-center gap-4">
                                 <Badge className="bg-primary/10 text-primary border-none font-bold uppercase text-[10px]">{post.category}</Badge>
                                 <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                    <Calendar className="h-3 w-3" />
                                    <span>{post.date}</span>
                                 </div>
                              </div>
                              <h2 className="text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{post.title}</h2>
                              <p className="text-muted-foreground leading-relaxed italic line-clamp-3">"{post.excerpt}"</p>
                           </div>
                           <div className="mt-8 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                 <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="h-4 w-4 text-primary" />
                                 </div>
                                 <span className="text-sm font-bold uppercase text-muted-foreground">{post.author}</span>
                              </div>
                              <Button variant="link" className="text-primary font-bold uppercase text-xs tracking-widest group" asChild>
                                 <Link to="#">
                                    READ MORE <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                 </Link>
                              </Button>
                           </div>
                        </div>
                     </div>
                  </Card>
               ))}
            </div>
            
            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 space-y-12">
               {/* Search */}
               <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Search Posts</h3>
                  <div className="relative">
                     <Input placeholder="Enter keyword..." className="h-14 bg-muted/20 border-primary/10 pr-12 rounded-xl" />
                     <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
               </div>
               
               {/* Categories */}
               <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Categories</h3>
                  <div className="space-y-2 font-bold uppercase tracking-widest text-xs">
                     {['Training Tips', 'Nutrition', 'Success Story', 'Lifestyle', 'Events'].map(cat => (
                        <div key={cat} className="p-4 border border-primary/10 rounded-xl hover:bg-primary/5 cursor-pointer flex justify-between items-center group transition-all">
                           <span>{cat}</span>
                           <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] group-hover:bg-primary group-hover:text-primary-foreground transition-all">12</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               {/* Recent Posts */}
               <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Recent Posts</h3>
                  <div className="space-y-6">
                     {[1, 2, 3].map(i => (
                        <div key={i} className="flex gap-4 items-center group cursor-pointer">
                           <div className="h-20 w-20 rounded-xl overflow-hidden shrink-0 bg-muted">
                              <img src={`placeholder-blog-thumb-${i}.jpg`} alt="Recent post thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                           </div>
                           <div className="space-y-1">
                              <h4 className="text-sm font-bold uppercase leading-tight group-hover:text-primary transition-colors">How to perfect your deadlift form in 3 steps</h4>
                              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Mar 01, 2026</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </aside>
         </div>
      </section>
    </div>
  );
};

export default Blog;