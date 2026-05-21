import React, { createContext, useContext, useState, useEffect } from 'react';

interface CarContextType {
  wishlist: string[];
  compareList: string[];
  addToWishlist: (carId: string) => void;
  removeFromWishlist: (carId: string) => void;
  isInWishlist: (carId: string) => boolean;
  addToCompare: (carId: string) => void;
  removeFromCompare: (carId: string) => void;
  isInCompare: (carId: string) => boolean;
  clearCompare: () => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [compareList, setCompareList] = useState<string[]>(() => {
    const saved = localStorage.getItem('compareList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('compareList', JSON.stringify(compareList));
  }, [compareList]);

  const addToWishlist = (carId: string) => {
    setWishlist((prev) => [...prev, carId]);
  };

  const removeFromWishlist = (carId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== carId));
  };

  const isInWishlist = (carId: string) => {
    return wishlist.includes(carId);
  };

  const addToCompare = (carId: string) => {
    if (compareList.length < 3 && !compareList.includes(carId)) {
      setCompareList((prev) => [...prev, carId]);
    }
  };

  const removeFromCompare = (carId: string) => {
    setCompareList((prev) => prev.filter((id) => id !== carId));
  };

  const isInCompare = (carId: string) => {
    return compareList.includes(carId);
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <CarContext.Provider
      value={{
        wishlist,
        compareList,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within CarProvider');
  }
  return context;
};
