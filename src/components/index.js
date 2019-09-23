import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Layout';
import '../style.scss';
import Login from './Login';
import PasswordRecovery from './PasswordRecovery';
import SignUP from './SignUP';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
        <main className="main">

          <BrowserRouter>

            <Route path="/" exact component={Header} />
            
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />

            <Route path="/PasswordRecovery" component={PasswordRecovery} />

            <Route path="/SignUP" component={SignUP} />

          </BrowserRouter>       
                   
      </main>
  )
}
}

export default App;
