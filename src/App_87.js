import './App_87.scss';
import { Switch, Route } from 'react-router-dom';
import Header_87 from './components/Header_87';
import Homepage_87 from './pages/Homepage_87';
import Shop_87 from './pages/Shop_87';
import Contact_87 from './pages/Contact_87';
import Signin_87 from './pages/Signin_87';

function App_87() {
  return (
    <div>
      <Header_87 />
      <Switch>
        <Route exact path="/" component={Homepage_87} />
        <Route exact path="/shop_87" component={Shop_87} />
        <Route exact path="/contact_87" component={Contact_87} />
        <Route exact path="/signin_87" component={Signin_87} />
      </Switch>
    </div>
  );
}

export default App_87;
