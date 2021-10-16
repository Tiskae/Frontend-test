import logo from "./logo.svg";
import "./App.css";
import Layout from "./HOC/Layout/Layout";
import Onboarding from "./Containers/Onboarding/Onboarding";

function App() {
  return (
    <div className="App">
      <Layout>
        <Onboarding />
      </Layout>
    </div>
  );
}

export default App;
