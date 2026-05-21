import { motion } from 'motion/react';
import { GitCompare, X, Plus } from 'lucide-react';
import { Link } from 'react-router';
import { useCarContext } from '../context/CarContext';
import { cars } from '../data/cars';
import { toast } from 'sonner';

const ComparePage = () => {
  const { compareList, removeFromCompare, clearCompare } = useCarContext();
  const compareCars = cars.filter(car => compareList.includes(car.id));

  const handleRemove = (carId: string) => {
    removeFromCompare(carId);
    toast.success('Removed from comparison');
  };

  const handleClearAll = () => {
    clearCompare();
    toast.success('Comparison cleared');
  };

  const specs = [
    { label: 'Price', key: 'price' as const },
    { label: 'Year', key: 'year' as const },
    { label: 'Engine', key: 'engine' as const },
    { label: 'Horsepower', key: 'horsepower' as const },
    { label: 'Top Speed', key: 'topSpeed' as const },
    { label: '0-60 mph', key: 'acceleration' as const },
    { label: 'Transmission', key: 'transmission' as const },
    { label: 'Fuel Type', key: 'fuelType' as const },
    { label: 'Mileage', key: 'mileage' as const },
  ];

  const getSpecValue = (car: any, key: string) => {
    if (key === 'price') return `Ksh ${car.price.toLocaleString()}`;
    if (key === 'year') return car.year;
    if (['engine', 'horsepower', 'topSpeed', 'acceleration', 'transmission', 'fuelType', 'mileage'].includes(key)) {
      return car.specs[key];
    }
    return '-';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <GitCompare className="w-6 h-6 text-white" />
              </div>
              <h1 className="font-display text-white">
                Compare <span className="gradient-text-blue">Vehicles</span>
              </h1>
            </div>
            {compareCars.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClearAll}
                className="glass px-6 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Clear All
              </motion.button>
            )}
          </div>
          <p className="text-white/60 text-lg">
            {compareCars.length}/3 vehicles selected for comparison
          </p>
        </motion.div>

        {compareCars.length > 0 ? (
          <div className="space-y-8">
            {/* Car Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {compareCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-strong rounded-2xl overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <button
                      onClick={() => handleRemove(car.id)}
                      className="absolute top-4 right-4 w-10 h-10 glass-strong rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors group"
                    >
                      <X className="w-5 h-5 text-white group-hover:text-red-400" />
                    </button>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-display text-xl mb-1">{car.name}</h3>
                      <p className="text-white/60 text-sm">{car.brand}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link
                      to={`/cars/${car.id}`}
                      className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}

              {/* Add More Placeholder */}
              {compareCars.length < 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: compareCars.length * 0.1 }}
                >
                  <Link to="/cars">
                    <div className="glass-strong rounded-2xl h-full flex flex-col items-center justify-center p-12 hover:bg-white/10 transition-all border-2 border-dashed border-white/20 hover:border-purple-500/50 group cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                        <Plus className="w-8 h-8 text-white/40 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <h3 className="text-white/60 group-hover:text-white text-lg font-medium transition-colors">
                        Add Vehicle
                      </h3>
                      <p className="text-white/40 text-sm mt-2">Compare up to 3 cars</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </motion.div>

            {/* Comparison Table */}
            {compareCars.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-strong rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-white/10">
                  <h2 className="font-display text-2xl text-white">Detailed Comparison</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-6 text-white/60 font-medium text-sm sticky left-0 bg-[#0A0A0F]/95 backdrop-blur-xl">
                          Specification
                        </th>
                        {compareCars.map((car) => (
                          <th key={car.id} className="p-6 text-center text-white font-display">
                            {car.model}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {specs.map((spec, index) => (
                        <motion.tr
                          key={spec.key}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="p-6 text-white/80 font-medium sticky left-0 bg-[#0A0A0F]/95 backdrop-blur-xl">
                            {spec.label}
                          </td>
                          {compareCars.map((car) => (
                            <td key={car.id} className="p-6 text-center text-white/70">
                              {getSpecValue(car, spec.key)}
                            </td>
                          ))}
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Features Comparison */}
            {compareCars.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-strong rounded-2xl p-6"
              >
                <h2 className="font-display text-2xl text-white mb-6">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {compareCars.map((car) => (
                    <div key={car.id}>
                      <h3 className="text-white font-medium mb-4">{car.model}</h3>
                      <ul className="space-y-2">
                        {car.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-white/70 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center"
            >
              <GitCompare className="w-12 h-12 text-blue-400" />
            </motion.div>

            <h2 className="font-display text-3xl text-white mb-4">No Vehicles to Compare</h2>
            <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
              Select up to 3 vehicles from our collection to compare their specifications side by side
            </p>

            <Link to="/cars">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                Browse Cars
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
