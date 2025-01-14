import { Routes, Route } from "react-router-dom";
import { NotFoundView } from "./ErrorViews/NotFoundView";
import { LandingView } from "./view/views/LandingView";
import { SimulatorView } from "./view/views/SimulatorView";

/**
 * This component provides clientside routing. Top level routes should be defined here.
 */
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
      <Route
        path="lessons/:lesson/challenges/:challenge/"
        element={<SimulatorView />}
      />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};
