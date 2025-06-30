import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AdminCertificates from "@/pages/admin-certificates";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin/certificates" component={AdminCertificates} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
          <ScrollToTopButton />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
