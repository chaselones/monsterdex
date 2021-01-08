import {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          id: 1,
          name: "Frankenstein"
        },

        {
          id: 2,
          name: "Dracula"
        },
      
        {
          id:3,
          name: "WolfMan"
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <p key={monster.id}>{ monster.name }</p>
        ))}

        <button onClick={()=> {
          return this.setState({
            monsters:
            [
              { id: 1, name: "Jimmy" },
              { id: 2, name: "Joey" },
              { id: 3, name: "FRED" }
            ]
          },
          //Unexpected user of comma operator no-sequences//
          //To avoid the error above, put additional onClick functions here:
            console.log(this.state.monsters),
            console.log("TOAST")
            );
        }}>click me!</button>
        
      </div>
    );
  }
}
export default App;