import React from 'react';
import { Star, MapPin, Clock, Zap, Shield, Users, Rocket } from 'lucide-react';

const ArchitectsSection = () => {
  const architects = [
    {
      name: "Sarah Chen",
      avatar: "SC",
      role: "Full-Stack Architect",
      experience: "7+ years",
      company: "ex-Shopify",
      rating: 4.9,
      projects: 23,
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      status: "available",
      speciality: "E-commerce & Payments"
    },
    {
      name: "Marcus Rodriguez",
      avatar: "MR",
      role: "AI/ML Engineer",
      experience: "5+ years",
      company: "ex-OpenAI",
      rating: 5.0,
      projects: 18,
      skills: ["Python", "TensorFlow", "FastAPI", "Docker"],
      status: "available",
      speciality: "AI Integration & APIs"
    },
    {
      name: "Emily Watson",
      avatar: "EW",
      role: "DevOps Specialist",
      experience: "6+ years",
      company: "ex-Netflix",
      rating: 4.8,
      projects: 31,
      skills: ["Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      status: "busy",
      speciality: "Scaling & Infrastructure"
    },
    {
      name: "David Kim",
      avatar: "DK",
      role: "Mobile Architect",
      experience: "8+ years",
      company: "ex-Uber",
      rating: 4.9,
      projects: 27,
      skills: ["React Native", "Swift", "Kotlin", "GraphQL"],
      status: "available",
      speciality: "Mobile & Cross-platform"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Real Developers. In-House. On Standby.
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Joylo doesn't just help you build — it has your back when you need it most.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Our certified Joylo Architects are in-house engineers — ready to co-build, refine, or ship your product.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              They take full responsibility for the code our AI generates and help you bring your vision to life, at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-3">
                <span className="text-red-400 text-2xl">🚫</span>
                <span className="text-gray-300">No handoffs. No outsourcing.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-2xl">✅</span>
                <span className="text-white font-semibold">Just real developers, aligned with the platform they help build.</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>12 Architects Available Now</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9 Average Rating</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4 text-joylo-blue" />
              <span>Less than 2 Hour Response Time</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {architects.map((architect, index) => (
            <div 
              key={index} 
              className={`architect-card relative ${architect.status === 'available' ? 'animate-glow-pulse' : ''}`}
            >
              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 z-10">
                <div className={`w-6 h-6 rounded-full border-2 border-joylo-navy flex items-center justify-center ${
                  architect.status === 'available' 
                    ? 'bg-green-400 animate-pulse' 
                    : 'bg-yellow-400'
                }`}>
                  {architect.status === 'available' ? (
                    <Zap className="w-3 h-3 text-white" />
                  ) : (
                    <Clock className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-joylo-blue to-joylo-purple flex items-center justify-center text-white font-bold text-lg">
                  {architect.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{architect.name}</h3>
                  <p className="text-sm text-gray-400">{architect.role}</p>
                </div>
              </div>

              {/* Experience & Company */}
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="text-gray-300">{architect.experience}</span>
                <span className="text-joylo-blue font-semibold">{architect.company}</span>
              </div>

              {/* Rating & Projects */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{architect.rating}</span>
                </div>
                <span className="text-sm text-gray-400">{architect.projects} projects</span>
              </div>

              {/* Speciality */}
              <div className="mb-4">
                <p className="text-sm text-gray-300 font-medium">{architect.speciality}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {architect.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-joylo-navy-light text-xs text-gray-300 rounded-md border border-glass-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-3 ${
                  architect.status === 'available'
                    ? 'bg-joylo-blue hover:bg-joylo-blue-light text-white hover:scale-105'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                disabled={architect.status !== 'available'}
              >
                {architect.status === 'available' ? 'Connect Now' : 'Notify When Available'}
              </button>

              {/* Microcopy */}
              <p className="text-xs text-center text-gray-400 font-medium">
                In-house. Joylo certified. Fully accountable.
              </p>
            </div>
          ))}
        </div>

        {/* New Mini-Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="glass-card p-8 border-t-4 border-joylo-blue">
            <div className="text-center mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                You Don't Need an Architect.
                <br />
                <span className="text-gray-300">But It's Good to Know One's There.</span>
              </h3>
              
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Joylo AI builds production-grade apps — you can launch entirely on your own.
                </p>
                <p>
                  But when you want to go further, faster — Joylo-certified developers are just one click away.
                </p>
                <p className="text-white font-semibold">
                  They're not freelancers. They're our engineers. They're part of your journey.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-semibold text-white mb-2">100% In-House Engineers</h4>
                <p className="text-sm text-gray-400">No outsourcing, no handoffs, just our team</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-joylo-blue/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Fully Accountable for AI Output</h4>
                <p className="text-sm text-gray-400">We take responsibility for every line of code</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-joylo-purple/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Production-Ready, with or without a Developer</h4>
                <p className="text-sm text-gray-400">Ship confidently, solo or with backup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Work With Joylo Architects?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-joylo-blue/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-joylo-blue" />
                </div>
                <h4 className="font-semibold text-white mb-2">Vetted Experts</h4>
                <p className="text-sm text-gray-400">All architects are pre-screened with 5+ years experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-joylo-purple/20 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-joylo-purple" />
                </div>
                <h4 className="font-semibold text-white mb-2">Instant Access</h4>
                <p className="text-sm text-gray-400">Connect with available architects in under 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="font-semibold text-white mb-2">Production Focus</h4>
                <p className="text-sm text-gray-400">Specialized in scaling apps from prototype to production</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectsSection;