// Lightweight featured cars data - only essential info
import { carImages } from '../../assets/images/cars';

export interface FeaturedCar {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  shortDescription: string;
}

export const featuredCars: FeaturedCar[] = [
  {
    id: "1",
    name: "TOYOTA LAND CRUISER(300 Series)",
    brand: "Toyota",
    price: 6000000,
    image: carImages['toyota-land-cruiser'],
    shortDescription: "Ultimate luxury off-road driving machine"
  },
  {
    id: "2", 
    name: "TOYOTA HARRIER",
    brand: "TOYOTA",
    price: 4000000,
    image: carImages['toyota-harrier'],
    shortDescription: "Sleek urban crossover, premium feel"
  },
  {
    id: "3",
    name: "TOYOTA RAV4",
    brand: "TOYOTA", 
    price: 3700000,
    image: carImages['toyota-rav4'],
    shortDescription: "Versatile, reliable family adventure SUV"
  },
  {
    id: "4",
    name: "HONDA VEEZEL",
    brand: "HONDA",
    price: 2600000,
    image: carImages['honda-veezel'],
    shortDescription: "Stylish, tech-packed modern compact SUV"
  },
  {
    id: "5",
    name: "MAZDA AXELA SEDAN",
    brand: "MAZDA",
    price: 1800000,
    image: carImages['mazda-axela'],
    shortDescription: "Driver-focused design, premium interior finish"
  },
  {
    id: "8",
    name: "TOYOTA CROWN",
    brand: "TOYOTA",
    price: 4300000,
    image: carImages['toyota-crown'],
    shortDescription: "Bold design meets hybrid efficiency"
  },
  {
    id: "7",
    name: "TOYOTA HILUX",
    brand: "TOYOTA",
    price: 6500000,
    image: carImages['toyota-hilux'],
    shortDescription: "Toughest workhorse for any terrain"
  },
  {
    id: "6",
    name: "LANDROVER RANGEOVER AUTOBIOGRAPHY",
    brand: "LANDROVER",
    price: 10000000,
    image: carImages['land-rover'],
    shortDescription: "Peak luxury and off-road capability."
  }
];
