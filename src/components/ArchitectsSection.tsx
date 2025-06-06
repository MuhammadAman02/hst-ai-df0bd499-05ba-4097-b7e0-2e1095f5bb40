import React from 'react';
import { Star, MapPin, Clock, Zap, Shield, Users, Rocket, CheckCircle, XCircle } from 'lucide-react';

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
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Real Developers. In-House. On Standby.
            </span>
          </h2>
          
          {/* Value Proposition */}
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
              Joylo doesn't just help you build — it has your back when you need it most.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div className="glass-card p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Our Certified Architects</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  In-house engineers ready to co-build, refine, or ship your product. 
                  They take full responsibility for the code our AI generates.
                </p>
              </div>
              
              <div className="glass-card p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Your Vision, At Scale</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Help you bring your vision to life with production-grade architecture 
                  and enterprise-level optimization.
                </p>
              </div>
            </div>
            
            {/* Key Differentiators */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="flex items-center gap-3 sm:gap-4 glass-card px-4 sm:px-6 py-3 sm:py-4 rounded-full">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-300">No handoffs. No outsourcing.</span>
              </div>
              
              <div className="hidden lg:block w-px h-8 bg-glass-border"></div>
              
              <div className="flex items-center gap-3 sm:gap-4 glass-card px-4 sm:px-6 py-3 sm:py-4 rounded-full border-joylo-blue/30">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                <span className="text-base sm:text-lg text-white font-semibold">Real developers, aligned with our platform.</span>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">12 Architects Available Now</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <span className="text-gray-300">4.9 Average Rating</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-joylo-blue" />
              <span className="text-gray-300">Less than 2 Hour Response</span>
            </div>
          </div>
        </div>

        {/* Architect Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-16 sm:mb-20">
          {architects.map((architect, index) => (
            <div 
              key={index} 
              className={`architect-card relative ${architect.status === 'available' ? 'animate-glow-pulse' : ''}`}
            >
              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 z-10">
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-joylo-navy flex items-center justify-center ${
                  architect.status === 'available' 
                    ? 'bg-green-400 animate-pulse' 
                    : 'bg-yellow-400'
                }`}>
                  {architect.status === 'available' ? (
                    <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                  ) : (
                    <Clock className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                  )}
                </div>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-joylo-blue to-joylo-purple flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                  {architect.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg">{architect.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{architect.role}</p>
                </div>
              </div>

              {/* Experience & Company */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                <span className="text-gray-300">{architect.experience}</span>
                <span className="text-joylo-blue font-semibold">{architect.company}</span>
              </div>

              {/* Rating & Projects */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold text-sm sm:text-base">{architect.rating}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-400">{architect.projects} projects</span>
              </div>

              {/* Speciality */}
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-300 font-medium">{architect.speciality}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
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
                className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 mb-2 sm:mb-3 text-sm sm:text-base ${
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

        {/* Independence Message */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="glass-card overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-joylo-blue/10 to-joylo-purple/10 p-6 sm:p-8 text-center border-b border-glass-border">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                You Don't Need an Architect.
              </h3>
              <p className="text-lg sm:text-2xl text-gray-300 font-light">
                But It's Good to Know One's There.
              </p>
            </div>
            
            {/* Content Section */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-joylo-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-joylo-blue" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Ship Solo</h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Joylo AI builds production-grade apps — you can launch entirely on your own.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-joylo-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-joylo-purple" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Scale Fast</h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        When you want to go further, faster — certified developers are one click away.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Our Team</h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        <span className="text-white font-semibold">They're not freelancers. They're our engineers. They're part of your journey.</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className="relative">
                  <div className="glass-card p-4 sm:p-6 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-joylo-blue to-joylo-purple flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Vertically Integrated</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      High-trust model with full accountability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">100% In-House Engineers</h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              No outsourcing, no handoffs. Just our dedicated team working with you.
            </p>
          </div>
          
          <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-joylo-blue/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-joylo-blue" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Fully Accountable</h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              We take complete responsibility for every line of AI-generated code.
            </p>
          </div>
          
          <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-joylo-purple/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-joylo-purple" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Production-Ready</h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Ship confidently, whether you go solo or bring in expert backup.
            </p>
          </div>
        </div>

        {/* Why Work With Architects */}
        <div className="glass-card p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Why Work With Joylo Architects?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              The difference between good code and production-ready systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-joylo-blue/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-joylo-blue" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Vetted Experts</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                All architects are pre-screened with 5+ years of production experience at top companies.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-joylo-purple/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-joylo-purple" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Instant Access</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Connect with available architects in under 2 hours. No lengthy hiring processes.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Production Focus</h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Specialized in scaling apps from prototype to production with real users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectsSection;