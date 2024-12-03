import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/banner.jpg';
import { Button } from '@/components/ui/button';

export default function Banner() {
  return (
    <section className='bg-gray-100 py-5'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px6 lg:px-8'>
        <div className='w-full'>
          <Image 
            src={bannerImg} 
            alt='banner' 
            placeholder='blur'
            className='w-full h-auto object-cover rounded-md'
          />
        </div>
        {/* content */}
        <div className='flex flex-col space-y-4'>
          <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
          <h2 className='text-3xl font-bold text-gray-900'>OpenAI Growing Fast And Burning Through Piles of Money</h2>
          <p>
            NewsPortal is a cutting-edge platform that provides the latest news and updates on various topics. Our team of dedicated journalists and reporters work tirelessly to bring you accurate and timely information. Whether you&apos;re interested in technology, politics, sports, or entertainment.
            <br /> <br />
            NewsPortal is a cutting-edge platform that provides the latest news and updates on various topics. Our team of dedicated journalists and reporters work tirelessly to bring you accurate and timely information. Whether you&apos;re interested in technology, politics, sports, or entertainment.
          </p>
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </section>
  );
}