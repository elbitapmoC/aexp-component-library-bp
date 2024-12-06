import '../src/styles/App.css';
import Scenario from './components/Scenario/Scenario';

function App() {
  return (
    <>
      <Scenario
        title="Scenario: In a 🍍 Under the Sea"
        variant="dark"
        size="large"
        disableBackdropClick={false}
      >
        <p>🧽 Bob Squarepants</p>
      </Scenario>
    </>
  );
}

export default App;
