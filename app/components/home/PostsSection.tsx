import React from 'react';
import TopIndicator from '@/app/components/ui/TopIndicator';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function PostsSection() {

    // Fetching posts data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await res.json();

  const randomPosts = data
    .sort(() => Math.random() - 0.5)
    .slice(0, 9);

  return (
    <div className="overflow-hidden mt-20 flex flex-col items-center text-center px-4 py-5 ">
      <TopIndicator className="border-2 border-gray-400 inline p-2 rounded-2xl">
        Testimonials
      </TopIndicator>
      <h2 className="mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl">
        What our <span className="text-[#001354]">users say</span>
      </h2>

    
      <div className="mt-5 relative w-full">

        {/* Top Overlay */}
        <div className="absolute top-0 -left-4 w-screen h-52 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
        
        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 w-screen h-52 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 md:-mx-20">
            {randomPosts.map((post: Post, index:number) => (
            <div
                key={post.id}
                className={`
                bg-white rounded-xl shadow-md p-6 max-w-[320px] mx-auto 
                ${index >= 3 ? 'hidden md:block' : ''}`}
            >
                <h4 className="font-semibold text-lg mb-4">{post.title}</h4>
                <p className="text-sm text-gray-700">{post.body}</p>
            </div>
            ))}
        </div>

    </div>
      
    </div>
  );
}

export default PostsSection;