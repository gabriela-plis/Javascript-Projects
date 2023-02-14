import AddingPanel from "./AddingPanel";
import Header from "./Header";
import RecordsList from "./RecordsList";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="content">
        <RecordsList/>
        <AddingPanel/>
      </main>
    </div>
  );
}

export default App;
