import React from 'react';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div 
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: 'url("https://media.biltrax.com/wp-content/uploads/2024/05/News-Article-Cover-Images-2024-05-29T103111.017.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
              Transform Your Daily Commute into Rewards
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Join Green Stride and earn rewards while making eco-friendly travel choices. 
              Every metro journey contributes to a greener future and earns you valuable tokens and NFTs.
            </p>
            <button 
              onClick={() => navigate('/rewards')}
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Travel and Earn
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Trusted By</h2>
          <div className="flex justify-center">
            <img 
              src="https://www.punemetrorail.org/assets/images/logo.png" 
              alt="Pune Metro Logo" 
              className="h-24 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Aditya Patil</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "Green Stride has completely transformed my daily commute. Not only am I contributing to a cleaner environment, but I'm also earning rewards for my sustainable choices. The platform is intuitive, and watching my rewards grow motivates me to consistently choose the metro for my travels. It's a win-win for both the environment and commuters!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}