import UseCaseOne from './components/UseCaseOne';
import UseCaseTwoHome from './components/UseCaseTwo/UseCaseTwoHome';
import './App.css';
import Navbar from './components/RoutingApp/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/RoutingApp/Products';
import Home from './components/RoutingApp/Home';
import Posts from './components/RoutingApp/Posts';
import Dashboard from './components/RoutingApp/admin/Dashboard';
import ProductDetails from './components/RoutingApp/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
