import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Daily News</h2>
            <p className="text-sm">© 2023 Daily News. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" legacyBehavior>
              <a className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
            </Link>
            <Link href="https://www.twitter.com" legacyBehavior>
              <a className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </Link>
            <Link href="https://www.instagram.com" legacyBehavior>
              <a className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com" legacyBehavior>
              <a className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}