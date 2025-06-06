import React from 'react';
import { Star, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Startup Founder",
      company: "TaskFlow",
      avatar: "AT",
      rating: 5,
      quote: "With Joylo, I launched my startup idea in 3 days — and my architect got it production-ready by the weekend. We're now serving 10k+ users.",
      project: "Project Management SaaS",
      timeline: "3 days to MVP, 1 week to production",
      metrics: "10k+ active users, $50k MRR"
    },
    {
      name: "Maria Rodriguez",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "MR",
      rating: 5,
      quote: "Our team prototypes 3x faster now. What used to take our dev team weeks, we can validate in days with Joylo before committing resources.",
      project: "Customer Analytics Dashboard",
      timeline: "2 days to prototype, 5 days to production",
      metrics: "300% faster prototyping"
    },
    {
      name: "David Chen",
      role: "Solo Developer",
      company: "Freelancer",
      avatar: "DC",
      rating: 5,
      quote: "I can finally compete with agencies. Joylo + architect support lets me deliver enterprise-quality apps as a solo developer.",
      project: "E-commerce Platform",
      timeline: "1 week to full platform",
      metrics: "5x project capacity increase"
    }
  ];

  const liveProjects = [
    {
      name: "StreamDash",
      category: "Analytics Platform",
      users: "25k+",
      uptime: "99.9%",
      tech: ["React", "Node.js", "PostgreSQL"],
      launchTime: "4 days"
    },
    {
      name: "CollabSpace",
      category: "Team Collaboration",
      users: "15k+",
      uptime: "99.8%",
      tech: ["Next.js", "Prisma", "Redis"],
      launchTime: "6 days"
    },
    {
      name: "DataViz Pro",
      category: "Data Visualization",
      users: "8k+",
      uptime: "99.9%",
      tech: ["React", "D3.js", "FastAPI"],
      launchTime: "5 days"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Proof It </span>
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Real products, real users, real results. See what builders are shipping with Joylo.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-joylo-blue to-joylo-purple flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Project Details */}
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-joylo-blue flex-shrink-0" />
                  <span className="text-gray-400">Project:</span>
                  <span className="text-white">{testimonial.project}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-joylo-purple flex-shrink-0" />
                  <span className="text-gray-400">Timeline:</span>
                  <span className="text-white">{testimonial.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-400">Results:</span>
                  <span className="text-white">{testimonial.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Projects */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
            Live Projects Built with Joylo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {liveProjects.map((project, index) => (
              <div key={index} className="glass-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white">{project.name}</h4>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{project.category}</p>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Active Users:</span>
                    <span className="text-white font-semibold">{project.users}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-semibold">{project.uptime}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400">Launch Time:</span>
                    <span className="text-joylo-blue font-semibold">{project.launchTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-joylo-navy-light text-xs text-gray-300 rounded border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="glass-card p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-joylo-blue mb-1 sm:mb-2">1,247</div>
              <div className="text-gray-400 text-xs sm:text-sm">Apps Shipped</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-joylo-purple mb-1 sm:mb-2">99.2%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-500 mb-1 sm:mb-2">4.2 days</div>
              <div className="text-gray-400 text-xs sm:text-sm">Avg. Launch Time</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1 sm:mb-2">4.9★</div>
              <div className="text-gray-400 text-xs sm:text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;