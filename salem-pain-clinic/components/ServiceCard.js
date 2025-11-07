import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import GlareWrapper from '@/components/ui/glare-wrapper';

export default function ServiceCard({ icon: Icon, title, description, link, featured }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <GlareWrapper
      glareColor="#2B5273"
      glareOpacity={0.3}
      glareSize={200}
      transitionDuration={500}
      className="h-full"
    >
      <Card 
        onMouseMove={handleMouseMove}
        className={`
          group 
          h-full
          flex flex-col
          
          rounded-xl
          bg-white
          
          border-2 border-gray-200
          
          transition-all duration-500
          
          hover:-translate-y-1.5
          hover:bg-primary/5
          hover:border-primary
          hover:shadow-2xl 
          hover:shadow-primary/20
          
          relative
          overflow-hidden
          
          spotlight-card
        `}
      >

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              {Icon && <Icon className="w-7 h-7" />}
            </div>
            {featured && (
              <Badge variant="default" className="bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">Featured</Badge>
            )}
          </div>
          <CardTitle className="text-xl mb-2 text-gray-800 group-hover:text-primary transition-colors duration-500">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow relative z-10">
          <CardDescription className="text-base leading-relaxed text-gray-600">{description}</CardDescription>
        </CardContent>
        
        {link && (
          <CardFooter className="relative z-10">
            <Link 
              href={link} 
              className="text-gray-600 group-hover:text-primary font-semibold inline-flex items-center group-hover:gap-2 transition-all duration-500"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </CardFooter>
        )}
      </Card>
    </GlareWrapper>
  );
}

