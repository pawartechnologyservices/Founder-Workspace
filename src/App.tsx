
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/resources/BlogPage";
import DocumentationPage from "./pages/resources/DocumentationPage";
import SupportPage from "./pages/resources/SupportPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/pricing/:productId" element={<PricingPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/documentation" element={<DocumentationPage />} />
          <Route path="/resources/support" element={<SupportPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
