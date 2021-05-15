import './css/style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Issues from './pages/IssueTracker/IssueTracker'

function Main() {
  return (
    <Router>
      <Route path ='/' exact component={Issues} />
    </Router>
  );
}

export default Main;