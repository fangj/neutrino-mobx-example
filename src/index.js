import React from 'react';
import { render } from 'react-dom';

const Hello=({name="world"})=><div>hello:{name}</div>
const App=({name})=>{
	return (<div>
	<button>wukong</button>
	<button>bajie</button>
	<button>wujing</button>
	<img src="static/wukong.jpg" alt=""/>
</div>)
}

class People extends React.Component {

  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
  	const name=this.state.name;
    return (
      <div>
	<button onClick={()=>this.setName("wukong")}>wukong</button>
	<button onClick={()=>this.setName("bajie")}>bajie</button>
	<button onClick={()=>this.setName("wujing")}>wujing</button>
	<div>{name}</div>
	</div>
    );
  }

  setName(name){
  	// debugger;
  	this.setState({name})
  }
}

const People2=({store})=><div>
	<button onClick={()=>store.setName("wukong")}>wukong</button>
	<button onClick={()=>store.setName("bajie")}>bajie</button>
	<button onClick={()=>store.setName("wujing")}>wujing</button>
	<div>{store.name}</div>
  <img src="static/wukong.jpg" alt=""/>
	</div>


import {observable} from "mobx";
var peopleStore = observable({
    name: "John",
    setName: function(name) {
        this.name = name;
    }
});

import {observer} from "mobx-react";
const PeopleObserver=observer(People2)

render(<PeopleObserver store={peopleStore}/>, document.getElementById('root'));