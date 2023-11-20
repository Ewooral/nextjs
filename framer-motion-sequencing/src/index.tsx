import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { Footer } from "./template/Footer";
import { Refresh } from "./template/Refresh";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <App key={count} />
      <Footer
        title="Animation sequencing"
        url="https://www.framer.com/motion/animate-function"
      />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
