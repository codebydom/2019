import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
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
import {viza} from './viza';
import DataFun from './DataFun';


function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch >
            <Route exact path="/" component={Home}/>
            <Route  path="/GeneSearch" component={GeneSearch}/>
            <Route  path="/about" component={About}/>
            <Route  path="/contact" component={Contact}/>
            <Route  path="/v1" component={v1}/>
            <Route  path="/roadmap" component={roadmap}/>
            <Route  path="/plazy" component={plazy}/>
            <Route  path="/genesearchinfo" component={genesearchinfo}/>
            <Route  path="/artsite" component={josesite}/>
            <Route  path="/viza" component={viza}/>
            <Route  path="/DataFun" component={DataFun}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
