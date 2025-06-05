import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Code2 } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const prompts = [
    "Build a dashboard with real-time data from Stripe.",
    "Create a social media app with user authentication.",
    "Design an e-commerce platform with payment integration.",
    "Build a project management tool with team collaboration."
  ];
  
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const currentPrompt = prompts[currentPromptIndex];

  useEffect(() => {
    console.log('Hero section mounted, starting typing animation');
    let timeout: NodeJS.Timeout;
    
    if (isTyping && typedText.length < currentPrompt.length) {
      timeout = setTimeout(() => {
        setTypedText(currentPrompt.slice(0, typedText.length + 1));
      }, 50);
    } else if (typedText.length === currentPrompt.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setTypedText('');
          setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
          setIsTyping(true);
        }, 2000);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentPrompt, currentPromptIndex, prompts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-joylo-blue rounded-full animate-float"></div>
      <div className="absolute top-52 right-20 w-3 h-3 bg-joylo-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-joylo-blue-light rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-joylo-blue-light to-joylo-purple bg-clip-text text-transparent">
              Launch Apps.
            </span>
            <br />
            <span className="text-white">With AI.</span>
            <br />
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              And a Human Co-Pilot.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Joylo AI is the vibe-based coding platform that lets anyone build real apps using Claude 4.0 — 
            then tag in a certified human architect to scale, deploy, and deliver production-grade polish.
          </p>

          {/* Interactive Builder */}
          <div className="glass-card p-8 mb-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400 ml-4 font-mono">joylo-builder.ai</span>
              </div>
              
              <div className="bg-joylo-navy-light rounded-lg p-4 border border-glass-border">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-5 h-5 text-joylo-blue" />
                  <span className="text-sm text-gray-400 font-mono">Prompt:</span>
                </div>
                <div className="font-mono text-white text-lg min-h-[2rem] flex items-center">
                  {typedText}
                  <span className="ml-1 w-0.5 h-6 bg-joylo-blue animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Code Preview Window */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="code-window">
                <div className="bg-joylo-navy px-4 py-2 border-b border-glass-border">
                  <span className="text-sm text-gray-400 font-mono">components/Dashboard.tsx</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-joylo-purple">import</div>
                  <div className="text-gray-300 ml-4">React, {`{ useState, useEffect }`}</div>
                  <div className="text-joylo-purple">from</div>
                  <div className="text-green-400 ml-2">'react'</div>
                  <br />
                  <div className="text-joylo-blue">const</div>
                  <div className="text-yellow-400 ml-2">Dashboard</div>
                  <div className="text-white ml-2">= () =&gt; {`{`}</div>
                  <div className="text-gray-400 ml-4">// AI-generated component</div>
                  <div className="text-white ml-4">return (</div>
                  <div className="text-gray-300 ml-8">&lt;div className="dashboard"&gt;</div>
                  <div className="text-gray-300 ml-12">...</div>
                </div>
              </div>

              <div className="glass-card p-4">
                <div className="text-sm text-gray-400 mb-3 font-mono">Live Preview</div>
                <div className="bg-white rounded-lg p-4 text-black min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-joylo-blue rounded-lg mx-auto mb-4 animate-pulse"></div>
                    <div className="text-sm text-gray-600">Dashboard Preview</div>
                    <div className="text-xs text-gray-400 mt-2">Real-time updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-joylo-blue hover:bg-joylo-blue-light text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-joylo-blue/25"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Building with AI
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-joylo-purple text-joylo-purple hover:bg-joylo-purple hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-joylo-purple/25"
            >
              <Users className="w-5 h-5 mr-2" />
              Launch with a Human Architect
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>50+ Certified Architects Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-joylo-blue rounded-full animate-pulse"></div>
              <span>1000+ Apps Shipped</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-joylo-purple rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;