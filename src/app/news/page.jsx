'use client';

import React, { useState, useEffect } from 'react';
import NewsCard from "@/components/ui/NewsCard";
import PageLayout from "@/components/shared/PageLayout";
import Footer from '@/components/shared/Footer';
import { Input } from "@/components/ui/input"; // Assuming shadcn provides an Input component

export default function Newspage() {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      const responses = await fetch('https://news-api-next-js-kappa.vercel.app/api/news');
      const newsData = await responses.json();
      setNews(newsData);
    };

    fetchNews();
  }, []);

  const categories = ['All', 'Tech', 'Business', 'Sports', 'Health', 'Entertainment'];

  const filteredNews = news.filter(newsItem => {
    const matchesCategory = selectedCategory === 'All' || newsItem.category === selectedCategory;
    const matchesSearch = newsItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageLayout>
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-8">Latest News</h2>
          
          <div className="flex justify-between items-center mb-8">
            <div className='flex flex-row '>
              <label htmlFor="search" className="mr-6 mt-1 font-bold text-xl">Search:</label>
              <Input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((newsItem) => (
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
      <Footer />
    </>
  );
}