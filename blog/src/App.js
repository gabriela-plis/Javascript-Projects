import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails'
import NotFound from './NotFound';

// wszystko wrappujemy w Router - informujemy, że będzie zmiana DOM
// Pod konkretną część DOM, która się będzie zmieniać dajemy Switch - pewność, że załaduje tylko jeden wybrany html
// W Route wrappujemy konkretny komponent do załadowania. Exact - url ma się dokładnie zgadzać i path pod jakim url

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
