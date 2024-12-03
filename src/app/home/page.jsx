import React from 'react';
import NewsCard from "@/components/ui/NewsCard";
import PageLayout from "@/components/shared/PageLayout";
import { Button } from '@/components/ui/button';

export default async function Newspage() {
  const responses = await fetch('https://news-api-next-js-kappa.vercel.app/api/news');
  const news = await responses.json();
  console.log(news);

  return (
    <PageLayout>
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.splice(0, 3).map((newsItem) => (
            <NewsCard
              key={newsItem._id}
              title={newsItem.title}
              description={newsItem.description}
              imageUrl={newsItem.imageUrl}
              
            />
          ))}
          
        </div>
      </div>
    </PageLayout>
  );
}