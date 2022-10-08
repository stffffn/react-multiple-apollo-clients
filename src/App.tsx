import logo from './logo.svg';
import './App.css';
import { useGetAllSpaceXDragonsQuery } from './graphql/generated/graphql';

function App() {
  const { data } = useGetAllSpaceXDragonsQuery();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data?.dragons?.map((dragon, index) => (
          <div key={index}>
            <h2>{dragon?.name}</h2>
            <span>{dragon?.description}</span>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
