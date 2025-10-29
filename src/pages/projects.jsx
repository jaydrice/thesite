import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Shield, 
  Video, 
  Gamepad2, 
  Mic2, 
  PenTool, 
  Settings,
  ExternalLink,
  Play,
  Instagram,
  Youtube,
  FileText,
  Filter,
  X
} from 'lucide-react';

const PROJECTS_DATA = {
  cybersecurity: {
    title: "Cybersecurity & IT",
    icon: Shield,
    description: "Security analysis, network configurations, and technical solutions",
    color: "from-blue-500 to-cyan-500",
    projects: [
      {
        id: 1,
        title: "Network Security Analysis",
        description: "Comprehensive network vulnerability assessment and security protocol implementation for enterprise environment",
        image: "/projects/cyber-1.jpg",
        link: "https://github.com/jaydrice/network-security",
        type: "github",
        tags: ["Security", "Networking", "Cisco"]
      },
      {
        id: 2,
        title: "Threat Intelligence Platform",
        description: "Real-time threat monitoring system with automated response capabilities",
        image: "/projects/cyber-2.jpg",
        link: "https://example.com/threat-platform",
        type: "external",
        tags: ["Python", "Security", "Automation"]
      },
      {
        id: 3,
        title: "IoT Security Framework",
        description: "Security framework for IoT devices with focus on vulnerability mitigation",
        image: "/projects/cyber-3.jpg",
        type: "pdf",
        file: "/projects/iot-security-framework.pdf",
        tags: ["IoT", "Security", "Research"]
      }
    ]
  },
  acting: {
    title: "Acting & Performance",
    icon: Video,
    description: "Theater performances, film roles, and dramatic presentations",
    color: "from-purple-500 to-pink-500",
    projects: [
      {
        id: 4,
        title: "The Last Stand - Short Film",
        description: "Lead role in award-winning short film about personal redemption",
        image: "/projects/acting-1.jpg",
        link: "https://youtube.com/watch?v=example1",
        type: "youtube",
        tags: ["Drama", "Lead Role", "Award Winner"]
      },
      {
        id: 5,
        title: "Shakespeare Monologue Collection",
        description: "Classical theater performances showcasing range and emotional depth",
        image: "/projects/acting-2.jpg",
        link: "https://instagram.com/p/example2",
        type: "instagram",
        tags: ["Theater", "Classical", "Monologue"]
      },
      {
        id: 6,
        title: "Commercial Voice & Appearance",
        description: "National commercial campaign for major brand",
        image: "/projects/acting-3.jpg",
        link: "https://vimeo.com/example3",
        type: "external",
        tags: ["Commercial", "Voice", "Screen"]
      }
    ]
  },
  gaming: {
    title: "Gaming & Testing",
    icon: Gamepad2,
    description: "Game testing, streaming, and gaming content creation",
    color: "from-green-500 to-emerald-500",
    projects: [
      {
        id: 7,
        title: "AAA Game Beta Testing",
        description: "Comprehensive bug reporting and gameplay analysis for major title",
        image: "/projects/gaming-1.jpg",
        link: "https://twitch.tv/jaydrice",
        type: "external",
        tags: ["Testing", "Analysis", "QA"]
      },
      {
        id: 8,
        title: "Competitive Gaming Highlights",
        description: "Esports tournament participation and highlight reels",
        image: "/projects/gaming-2.jpg",
        link: "https://youtube.com/watch?v=example4",
        type: "youtube",
        tags: ["Esports", "Highlights", "Competitive"]
      },
      {
        id: 9,
        title: "Game Review Series",
        description: "In-depth game analysis and review content",
        image: "/projects/gaming-3.jpg",
        link: "https://instagram.com/p/example5",
        type: "instagram",
        tags: ["Reviews", "Content", "Analysis"]
      }
    ]
  },
  voice: {
    title: "Voice Over & Narration",
    icon: Mic2,
    description: "Commercial voiceovers, audiobooks, and character voices",
    color: "from-orange-500 to-red-500",
    projects: [
      {
        id: 10,
        title: "Commercial Voiceover Reel",
        description: "Professional voiceover demo for commercial applications",
        image: "/projects/voice-1.jpg",
        link: "https://soundcloud.com/example6",
        type: "external",
        tags: ["Commercial", "Demo", "Professional"]
      },
      {
        id: 11,
        title: "Audiobook Narration",
        description: "Complete audiobook narration for bestselling novel",
        image: "/projects/voice-2.jpg",
        link: "https://audible.com/example7",
        type: "external",
        tags: ["Audiobook", "Narration", "Fiction"]
      },
      {
        id: 12,
        title: "Character Voice Demo",
        description: "Range of character voices for animation and gaming",
        image: "/projects/voice-3.jpg",
        link: "https://youtube.com/watch?v=example8",
        type: "youtube",
        tags: ["Characters", "Animation", "Range"]
      }
    ]
  },
  writing: {
    title: "Writing & Content",
    icon: PenTool,
    description: "Copywriting, technical writing, and creative content",
    color: "from-indigo-500 to-blue-500",
    projects: [
      {
        id: 13,
        title: "Technical Documentation",
        description: "Comprehensive technical manuals and user guides",
        image: "/projects/writing-1.jpg",
        type: "pdf",
        file: "/projects/technical-docs.pdf",
        tags: ["Technical", "Documentation", "Guides"]
      },
      {
        id: 14,
        title: "Creative Writing Portfolio",
        description: "Collection of short stories and creative pieces",
        image: "/projects/writing-2.jpg",
        link: "https://medium.com/@jaydrice",
        type: "external",
        tags: ["Creative", "Fiction", "Stories"]
      },
      {
        id: 15,
        title: "Marketing Copy Samples",
        description: "Effective copywriting for brands and campaigns",
        image: "/projects/writing-3.jpg",
        type: "pdf",
        file: "/projects/marketing-copy.pdf",
        tags: ["Marketing", "Copywriting", "Brands"]
      }
    ]
  },
  mc: {
    title: "MC & Hosting",
    icon: Settings,
    description: "Event hosting, moderation, and public speaking",
    color: "from-yellow-500 to-amber-500",
    projects: [
      {
        id: 16,
        title: "Tech Conference Hosting",
        description: "Main stage hosting for major technology conference",
        image: "/projects/mc-1.jpg",
        link: "https://youtube.com/watch?v=example9",
        type: "youtube",
        tags: ["Conference", "Tech", "Hosting"]
      },
      {
        id: 17,
        title: "Corporate Event Moderation",
        description: "Professional moderation for corporate gatherings and seminars",
        image: "/projects/mc-2.jpg",
        link: "https://instagram.com/p/example10",
        type: "instagram",
        tags: ["Corporate", "Moderation", "Professional"]
      },
      {
        id: 18,
        title: "Award Ceremony Host",
        description: "Host for annual industry awards ceremony",
        image: "/projects/mc-3.jpg",
        link: "https://vimeo.com/example11",
        type: "external",
        tags: ["Awards", "Ceremony", "Entertainment"]
      }
    ]
  }
};

const CATEGORIES = Object.keys(PROJECTS_DATA);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getIconForType = (type) => {
    switch (type) {
      case 'youtube': return Youtube;
      case 'instagram': return Instagram;
      case 'github': return ExternalLink;
      case 'pdf': return FileText;
      default: return ExternalLink;
    }
  };

  const getProjectsToShow = () => {
    if (selectedCategory === 'all') {
      return Object.values(PROJECTS_DATA).flatMap(category => category.projects);
    }
    return PROJECTS_DATA[selectedCategory]?.projects || [];
  };

  const projects = getProjectsToShow();

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">THE WORK</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
            A showcase of my diverse projects across cybersecurity, creative arts, and everything in between
          </p>
        </motion.div>

        {/* Category Filter - UPDATED FOR MOBILE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 px-2"
        >
          <Button
            onClick={() => setSelectedCategory('all')}
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className={`flex-shrink-0 ${
              selectedCategory === 'all' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-transparent text-white border-white/20 hover:bg-white/10'
            } transition-all duration-300 text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11 px-3 sm:px-4`}
          >
            <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
            All
          </Button>
          
          {CATEGORIES.map((category) => {
            const CategoryIcon = PROJECTS_DATA[category].icon;
            const categoryTitle = PROJECTS_DATA[category].title;
            // Short labels for mobile
            const shortLabels = {
              cybersecurity: "Cyber",
              acting: "Acting", 
              gaming: "Gaming",
              voice: "Voice",
              writing: "Writing",
              mc: "MC"
            };
            
            return (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`flex-shrink-0 ${
                  selectedCategory === category 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-transparent text-white border-white/20 hover:bg-white/10'
                } transition-all duration-300 text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11 px-3 sm:px-4`}
              >
                <CategoryIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="hidden sm:inline">{categoryTitle}</span>
                <span className="sm:hidden">{shortLabels[category]}</span>
              </Button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0"
        >
          {projects.map((project, index) => {
            const LinkIcon = getIconForType(project.type);
            const category = Object.values(PROJECTS_DATA).find(cat => 
              cat.projects.some(p => p.id === project.id)
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card 
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer h-full overflow-hidden"
                  onClick={() => project.type === 'pdf' ? window.open(project.file, '_blank') : window.open(project.link, '_blank')}
                >
                  {/* Image/Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${category.color} text-white`}>
                        <span className="hidden sm:inline">{category.title}</span>
                        <span className="sm:hidden">
                          {category.title.includes('&') 
                            ? category.title.split('&')[0].trim()
                            : category.title.split(' ')[0]
                          }
                        </span>
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                      <LinkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-white hover:bg-white/10 transition-all duration-300 group/btn text-xs sm:text-sm h-9 sm:h-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          project.type === 'pdf' 
                            ? window.open(project.file, '_blank')
                            : window.open(project.link, '_blank');
                        }}
                      >
                        {project.type === 'youtube' ? (
                          <>
                            <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Watch
                          </>
                        ) : project.type === 'pdf' ? (
                          <>
                            <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            View PDF
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            View Project
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 sm:mt-20 px-4"
        >
          <p className="text-gray-400 text-base sm:text-lg mb-6">Like what you see? Let's create something amazing together.</p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold"
            onClick={() => window.location.href = '/#contact'}
          >
            GET IN TOUCH
          </Button>
        </motion.div>
      </div>
    </section>
  );
}