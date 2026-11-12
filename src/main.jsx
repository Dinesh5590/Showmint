import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <main>
      <h1>ShowMint</h1>
    </main>
  );
}
