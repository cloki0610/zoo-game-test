import { motion } from "framer-motion";

import Fence from "./components/Fence";
import Timer from "./components/Timer";
import GameProvider from "./store/GameContext";

function App() {
  // Design consideration: I'm using #d7cb59, a darker khaki color for all background
  // and fix the main element cover the screen.
  // It keep some style being focus and the background still clean
  return (
    <GameProvider>
      <main className="w-full h-auto">
        {/* I add some animantion and font border to style the title */}
        <motion.h1
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="py-[3rem] text-center font-bold font-silkscreen lg:text-[4rem] text-[2rem] 
        text-white drop-shadow-[0_5px_5px_rgba(32,178,170,1)]"
        >
          Super Private Secret Zoo!
        </motion.h1>
        <Timer />
        <Fence />
      </main>
    </GameProvider>
  );
}

export default App;
