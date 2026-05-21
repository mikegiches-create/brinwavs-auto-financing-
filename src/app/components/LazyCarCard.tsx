import { lazy, Suspense } from 'react';

// Lazy load the CarCard component
const CarCard = lazy(() => import('./CarCard'));

interface LazyCarCardProps {
  car: any;
  index?: number;
}

const LazyCarCard = ({ car, index = 0 }: LazyCarCardProps) => {
  return (
    <Suspense 
      fallback={
        <div className="glass-strong rounded-2xl overflow-hidden animate-pulse">
          <div className="aspect-[4/3] bg-muted/20" />
          <div className="p-6">
            <div className="h-6 bg-muted/30 rounded mb-2" />
            <div className="h-4 bg-muted/20 rounded w-3/4" />
          </div>
        </div>
      }
    >
      <CarCard car={car} index={index} />
    </Suspense>
  );
};

export default LazyCarCard;
