import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './Carousel';
import Home from './Home';
import Checkout from './checkout'
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
// import {dishes} from './dishes'
import {HashRouter, Switch, Route} from 'react-router-dom'
import App from './App';

const Index = () => (
   <Provider store={store}>
      <HashRouter>
      {/* <Carousel dishes={dishes} /> */}
         <Switch>
            <Route  exact path = "/" component={App}/>
            <Route  path = "/home" component={App}/>
            <Route  path = "/carousel" component={Carousel}/>
            <Route  path = "/details" component={Checkout}/>
          </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
