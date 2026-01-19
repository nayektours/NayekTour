import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import JourneyPlanner from './pages/journey-planner';
import PackageDetails from './pages/package-details';
import EnquiryForm from './pages/enquiry-form';
import StateDiscovery from './pages/state-discovery';
import ConfirmationSuccess from './pages/confirmation-success';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/journey-planner" element={<JourneyPlanner />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/enquiry-form" element={<EnquiryForm />} />
        <Route path="/state-discovery" element={<StateDiscovery />} />
        <Route path="/confirmation-success" element={<ConfirmationSuccess />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
