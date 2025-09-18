import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CRMWelcome from "@/pages/welcomePages/CRMWelcome";
import ERPWelcome from "@/pages/welcomePages/ERPWelcome";
import BillingWelcome from "@/pages/welcomePages/BillingWelcome";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import BookDemo from "@/pages/BookDemo";
import BookMeeting from "@/pages/BookMeeting";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    <Route path="/crm-welcome" component={CRMWelcome} />
  <Route path="/erp-welcome" component={ERPWelcome} />
  <Route path="/billing-welcome" component={BillingWelcome} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/book-demo" component={BookDemo} />
      <Route path="/book-meeting" component={BookMeeting} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
