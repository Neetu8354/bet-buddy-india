import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

if (root.innerHTML.trim()) {
  hydrateRoot(root, <App />, {
    onRecoverableError(error) {
      // Suppress expected Suspense-boundary recovery errors from SSG hydration.
      // Lazy-loaded sections gracefully fall back to client rendering.
      if (typeof error === "object" && error && "message" in error) {
        const msg = (error as Error).message;
        if (msg.includes("Suspense") || msg.includes("server")) return;
      }
      console.error(error);
    },
  });
} else {
  createRoot(root).render(<App />);
}
