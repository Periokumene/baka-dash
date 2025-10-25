import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "./components/ui/provider.tsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {HomePage} from "@/pages/HomePage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <HomePage />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
