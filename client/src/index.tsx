import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/mainPages'
import { Provider } from 'react-redux';
import { store } from './store';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NewPage from './pages/newPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/index">
            <MainPage />
          </Route>
          <Route path="/newView/:id">
            <NewPage />
          </Route>

          <Redirect to="/index" />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
