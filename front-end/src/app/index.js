// // import logo from './logo.svg';
// import { BrowserRouter as Router } from 'react-router-dom'
// // import './App.css';
// import React from "react"
// import { NavBar } from '../components'

// class App extends React.Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = { apiResponse: "" };
// //   }
// //   callBackEnd() {
// //       fetch("http://localhost:9000/test-back-end")
// //           .then(res => res.text())
// //           .then(res => this.setState({ apiResponse: res }));
// //   }

// //   componentWillMount() {
// //       this.callBackEnd();
// //   }
  
//   render() {
//     return (
//     //   <div className="App">
//     //     <header className="App-header">
//     //       <img src={logo} className="App-logo" alt="logo" />
//     //       <p className="App-intro">{this.state.apiResponse}</p>
//     //       <a
//     //         className="App-link"
//     //         href="https://reactjs.org"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         Learn React
//     //       </a>
//     //     </header>
//     //   </div>
//     <Router>
//             <NavBar />
//         </Router>
//     );

//   }
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { Login, MockDraft, Settings, OldMocks, CreateAccount } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/mockdraft" exact component={MockDraft} />
                <Route path="/login" exact component={Login} />
                <Route path="/oldmocks" exact component={OldMocks} />
                <Route path="/settings" exact component={Settings}
                />
                <Route path="/createaccount" exact component={CreateAccount}
                />
            </Switch>
        </Router>
    )
}

export default App