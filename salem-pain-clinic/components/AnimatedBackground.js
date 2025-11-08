'use client';

export default function AnimatedBackground() {
  return (
    <>
      {/* Main Animated Gradient Background */}
      <div 
        className="fixed inset-0 -z-50 overflow-hidden"
        aria-hidden="true"
      >
        {/* Primary Gradient Layer - More visible! */}
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #f0f9ff 20%, #bfdbfe 40%, #e0f2fe 60%, #93c5fd 80%, #dbeafe 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 20s ease infinite',
          }}
        />
        
        {/* Secondary Gradient Layer - Adds depth */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: 'radial-gradient(ellipse at top left, #60a5fa 0%, transparent 50%), radial-gradient(ellipse at bottom right, #3b82f6 0%, transparent 50%)',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 15s ease-in-out infinite reverse',
          }}
        />
        
        {/* Animated Orbs - Large glowing circles */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
            animation: 'gradient-shift 12s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, #93c5fd 0%, transparent 70%)',
            animation: 'gradient-shift 18s ease-in-out infinite reverse',
          }}
        />
        
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #a5b4fc 0%, transparent 70%)',
            animation: 'gradient-shift 22s ease-in-out infinite',
          }}
        />
        
        {/* Subtle Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #2B5273 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Light overlay for readability - Less opacity to show background more */}
      <div 
        className="fixed inset-0 -z-40 bg-white/30 backdrop-blur-[0.5px]"
        aria-hidden="true"
      />
    </>
  );
}
