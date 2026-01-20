import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

// Lazy load heavy components
export const LazyJourneyPlanner = lazy(() => import('../pages/journey-planner'));
export const LazyHeroSection = lazy(() => import('../pages/homepage/components/HeroSection'));
export const LazyStateDiscoveryGrid = lazy(() => import('../pages/homepage/components/StateDiscoveryGrid'));
export const LazySeasonalHighlights = lazy(() => import('../pages/homepage/components/SeasonalHighlights'));

// Higher-order component for lazy loading
export const withLazyLoading = (Component, fallback = <LoadingSpinner />) => {
  return (props) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

// Image lazy loading component
export const LazyImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};
