
import { useCallback } from 'react';

export const useHeroActions = () => {
  const handleServicesClick = useCallback(() => {
    // Navigate to services or open services modal
    window.location.href = '/services';
  }, []);

  const handleProductClick = useCallback(() => {
    // Navigate to products or open products modal
    window.location.href = '/products';
  }, []);

  return {
    handleServicesClick,
    handleProductClick
  };
};
