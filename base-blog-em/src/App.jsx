import { Posts } from "./Posts";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // contain cache
  const queryClient = new QueryClient();

  return (
    // provide React Query client to App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
