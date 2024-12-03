import React from 'react';
import PageLayout from "@/components/shared/PageLayout";
import Footer from '@/components/shared/Footer';
import { Card } from '@/components/ui/card';

const services = [
  'Web Development',
  'App Development',
  'Software Development',
  'Frontend Development',
  'Backend Development',
  'Digital Marketing',
  'Freelancing','Web Development',
  'App Development',
  'Software Development',
  'Frontend Development',
  'Backend Development',
  'Digital Marketing',
  'Freelancing','App Development',
  'Software Development',
  'Frontend Development',
  'Backend Development',
];

export default function Servicepage() {
  return (
    <>
      <PageLayout>
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service} className="p-4">
                <h3 className="text-xl font-bold text-center">{service}</h3>
              </Card>
            ))}
          </div>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
}