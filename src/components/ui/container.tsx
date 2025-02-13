export function Container({ children, className = "" }: { 
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={`mx-auto max-w-7xl px-2 md:px-6 ${className}`}>
        {children}
      </div>
    );
  }
  