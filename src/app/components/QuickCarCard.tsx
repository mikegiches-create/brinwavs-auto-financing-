import { Link } from 'react-router';
import { FeaturedCar } from '../data/featuredCars';

interface QuickCarCardProps {
  car: FeaturedCar;
}

const QuickCarCard = ({ car }: QuickCarCardProps) => {
  return (
    <Link 
      to={`/cars/${car.id}`}
      className="block group"
    >
      <div className="glass-strong rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
        {/* Optimized image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-display text-lg text-card-foreground">{car.name}</h3>
              <p className="text-sm text-muted-color">{car.brand}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-display text-primary-color">
                Ksh {car.price.toLocaleString()}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-color line-clamp-2">
            {car.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default QuickCarCard;
