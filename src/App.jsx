import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Calculator } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import CalculatorPage from "./pages/CalculatorPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import FinancialWealthCheck from "./pages/FinancialWealthCheck.jsx"; // Import the new page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Calculator",
    to: "/calculator",
    icon: <Calculator className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="calculator" element={<CalculatorPage />} />
              <Route path="result" element={<ResultPage />} />
              <Route path="financial-wealth-check" element={<FinancialWealthCheck />} /> {/* Add the new route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;