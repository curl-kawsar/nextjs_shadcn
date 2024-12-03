import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NewsCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageUrl && (
        <Image 
          src={imageUrl} 
          alt={title} 
          width={600} 
          height={300} 
          className="w-full h-48 object-cover" 
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="default">Read More</Button>
      </div>
    </div>
  );
}