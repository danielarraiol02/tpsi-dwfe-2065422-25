import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert setClose={() => setShowAlert(false)}>
          <h1>My alert component</h1>
        </Alert>
      )}

      <Button color="primary" onClickHandler={() => setShowAlert(true)}>
        <h1>My button component</h1>
      </Button>
    </>
  );
}

export default App;