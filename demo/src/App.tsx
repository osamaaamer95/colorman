import logo from "./logo.svg";
import "./App.css";
import Colorman from "colorman";
import { useCallback } from "react";

function App() {
  const colormanInstance = useCallback(
    () =>
      Colorman({
        myFirstId: "123",
        mySecondId: "456",
      }),
    []
  )();

  // access config
  console.log(colormanInstance.getConfig());

  // access 'static' property
  console.log(Colorman.PublicConstants.PUBLIC_CONSTANT);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          {colormanInstance.wrapCapitalize(
            "this is capitalized using the library."
          )}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React?
        </a>
      </header>
    </div>
  );
}

export default App;
