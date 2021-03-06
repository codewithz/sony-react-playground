import UseCaseOne from './components/UseCaseOne';
import UseCaseTwoHome from './components/UseCaseTwo/UseCaseTwoHome';
import './App.css';
import Navbar from './components/RoutingApp/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Products from './components/RoutingApp/Products';
import Home from './components/RoutingApp/Home';
import Posts from './components/RoutingApp/Posts';
import Dashboard from './components/RoutingApp/admin/Dashboard';
import ProductDetails from './components/RoutingApp/ProductDetails';
import NotFound from './components/RoutingApp/NotFound';
import Counter from './components/UseEffectExample/Counter';
import PostAPIComponent from './components/HttpCallsApp/PostAPIComponent';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <ToastContainer />
        <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/posts-api" component={PostAPIComponent} />
            <Route path="/counter" component={Counter} />
            <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
