import { useEffect, useState } from "react";
import Flag from "./components/Flag";
import getFlag from "./utils/Api";
import "./styles.css";

export default function App() {
  const [flag, setFlag] = useState<string | undefined>();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(true);
    getFlag()
      .then(setFlag)
      .then(() => isLoading(false));
  }, []);
  if (loading || !flag) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Flag flag={flag} />
    </div>
  );
}
