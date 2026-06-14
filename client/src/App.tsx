import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Level from "./pages/Level";
import Library from "./pages/Library";
import Exercises from "./pages/Exercises";
import Journal from "./pages/Journal";
import { ProgressProvider } from "./contexts/ProgressContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/nivel/:id" component={Level} />
      <Route path="/biblioteca" component={Library} />
      <Route path="/ejercicios" component={Exercises} />
      <Route path="/diario" component={Journal} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <ProgressProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
