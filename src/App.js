import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {v1} from './v1';
import {GeneSearch} from './GeneSearch';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import { roadmap } from './roadmap';
import {plazy} from './plazy';
import './App.css';
import { genesearchinfo } from './genesearchinfo';
import { josesite } from './josesite';


function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/GeneSearch" component={GeneSearch}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/v1" component={v1}/>
            <Route exact path="/roadmap" component={roadmap}/>
            <Route exact path="/plazy" component={plazy}/>
            <Route exact path="/genesearchinfo" component={genesearchinfo}/>
            <Route exact path="/artsite" component={josesite}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
