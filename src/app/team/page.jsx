import React from 'react';
import PageLayout from "@/components/shared/PageLayout";
import Footer from '@/components/shared/Footer';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    position: 'CFO',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Brown',
    position: 'COO',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Charlie Davis',
    position: 'Lead Developer',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Emily Wilson',
    position: 'Project Manager',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Frank Miller',
    position: 'UX Designer',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grace Lee',
    position: 'Marketing Specialist',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Henry Clark',
    position: 'Data Scientist',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Ivy Walker',
    position: 'Content Writer',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jack White',
    position: 'DevOps Engineer',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Karen Green',
    position: 'HR Manager',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export default function Teampage() {
  return (
    <>
      <PageLayout>
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={`${member.name}-${index}`} className="p-4">
                <Avatar src={member.imageUrl} alt={member.name} className="w-24 h-24 mx-auto mb-4" />
                <p className="text-xl font-bold text-center">{member.name}</p>
                <p className="text-center text-gray-600">{member.position}</p>
              </Card>
            ))}
          </div>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
}