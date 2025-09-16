import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CRM from "@/pages/CRM";
import ERP from "@/pages/ERP";
import Billing from "@/pages/Billing";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import BookDemo from "@/pages/BookDemo";
import BookMeeting from "@/pages/BookMeeting";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/crm" component={CRM} />
      <Route path="/erp" component={ERP} />
      <Route path="/billing" component={Billing} />
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
