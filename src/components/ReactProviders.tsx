import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

export function ReactProviders({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => {
        return new QueryClient({
            defaultOptions: {
                queries: { staleTime: 60 * 1000 },
            },
        });
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
