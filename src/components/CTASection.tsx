import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Users, ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-joylo-blue/10 via-joylo-purple/10 to-joylo-blue/10"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-10 w-4 h-4 bg-joylo-blue rounded-full animate-float opacity-60"></div>
      <div className="hidden md:block absolute top-40 right-20 w-6 h-6 bg-joylo-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block absolute bottom-40 left-20 w-2 h-2 bg-joylo-blue-light rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">This isn't </span>
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent line-through decoration-red-500 decoration-4">
                no-code
              </span>
              <span className="text-white">.</span>
              <br />
              <span className="bg-gradient-to-r from-joylo-blue via-joylo-purple to-joylo-blue-light bg-clip-text text-transparent">
                This is now-code.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Join the movement of builders who ship production-grade apps in days, not months. 
              AI + Human expertise = Unstoppable.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-joylo-blue mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">AI-Powered</h3>
              <p className="text-xs sm:text-sm text-gray-400">Claude 4.0 builds your app structure and components</p>
            </div>
            
            <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-joylo-purple mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">Human-Optimized</h3>
              <p className="text-xs sm:text-sm text-gray-400">Expert architects scale and polish for production</p>
            </div>
            
            <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">Ship-Ready</h3>
              <p className="text-xs sm:text-sm text-gray-400">Deploy to production with confidence and monitoring</p>
            </div>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-joylo-blue to-joylo-blue-light hover:from-joylo-blue-light hover:to-joylo-blue text-white px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-joylo-blue/30 group"
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:animate-bounce" />
              Build Something Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-2 border-joylo-purple text-joylo-purple hover:bg-joylo-purple hover:text-white px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-joylo-purple/30 group"
            >
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover:animate-pulse" />
              Meet Your Architect
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm mb-12 sm:mb-16">
            <button className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span>Watch Demo</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span>See Pricing</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span>Join Community</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Trust Signals */}
          <div className="pt-6 sm:pt-8 border-t border-glass-border">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-joylo-blue rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-joylo-purple rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;