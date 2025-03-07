import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LayoutProvider } from "./contexts/selected_layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </QueryClientProvider>
);
