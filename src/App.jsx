import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import FormInput from './Components/FormInput';
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dbStudent: [
        {
          no: 1,
          name: "Abdi",
          class: "JC-Full Stack",
          time: "After-hour",
          job: "Product Manager",
          note: "Notes",
        },
        {
          no: 2,
          name: "Edo",
          class: "JC-Full Stack",
          time: "After-hour",
          job: "Product Manager",
          note: "Notes",
        }
      ]
    }
  }

  handleSubmit = (newData) => {
    this.setState({ dbStudent: newData })
  }

  render() {
    return (
      <div className='container px-5 py-5' >
        <div className='row'>
          <div className='col-3'>
            <FormInput
              data={this.state.dbStudent}
              handleSubmit={this.handleSubmit}
            />
          </div>
          <div className='col-9'>
            <Table
              handleSubmit={this.handleSubmit}
              data={this.state.dbStudent}
        
            // printData={this.printData()}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
