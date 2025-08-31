import React from 'react';
import * as motion from "motion/react-client"
import TopIndicator from '@/app/components/ui/TopIndicator';



// Having an interface for any post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
};


async function getData() {

  try {
    // Fetching posts data from the API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"});

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();

  }catch(err) {
    throw err;
  }
}


export default async function PostsSection() {

    const data: Post[] = await getData();
  

  const randomPosts = data
    .sort(() => Math.random() - 0.5)
    .slice(0, 9);

  return (
    <motion.div 
      className="overflow-hidden mt-20 flex flex-col items-center text-center px-4 py-5 lg:mt-30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
      >
      
      <TopIndicator className="border-2 border-gray-400 inline p-2 rounded-2xl">
        Testimonials
      </TopIndicator>
      <h2 className="mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl">
        What our <span className="text-[#001354]">users say</span>
      </h2>

    
      <div className="mt-5 relative w-full md:mt-8 lg:mt-12">

        {/* Top Overlay */}
        <div className="absolute top-0 -left-4 w-screen h-52 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
        
        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 w-screen h-52 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none lg:h-10" />
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 md:-mx-20">
            {randomPosts.map((post: Post, index:number) => (
            <motion.div
                key={post.id}
                className={`
                bg-white rounded-xl shadow-md p-6 max-w-[320px] mx-auto h-fit
                ${index >= 3 ? 'hidden md:block' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0 }}
            >
                <h4 className="font-semibold text-lg mb-4">{post.title}</h4>
                <p className="text-sm text-gray-700">{post.body}</p>
            </motion.div>
            ))}
        </div>
      </div>

    </motion.div>
  );
}