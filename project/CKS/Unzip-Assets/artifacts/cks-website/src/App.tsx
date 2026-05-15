import { Switch, Route, Router as WouterRouter } from "wouter";
import HomePage from "@/pages/HomePage";
import KimukaPage from "@/pages/KimukaPage";
import DialysisPage from "@/pages/DialysisPage";
import ScreeningPage from "@/pages/ScreeningPage";
import GalleryPage from "@/pages/GalleryPage";
import ScrollToTop from "@/components/ScrollToTop";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <a href="/" className="text-teal-600 underline">Go Home</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/kimuka" component={KimukaPage} />
        <Route path="/dialysis" component={DialysisPage} />
        <Route path="/screening" component={ScreeningPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
