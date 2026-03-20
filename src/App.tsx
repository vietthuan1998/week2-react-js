import { useEffect } from "react";
import "./App.css";
import SummaryHeader from "./components/SummaryHeader";
import AlertFeedPage from "./pages/AlertFeedPage";
import data from "./data/alerts.json";

function App() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, []);

  return (
    <div className="app">
      <SummaryHeader index={1} />
      <AlertFeedPage />
    </div>
  );
}

export default App;
