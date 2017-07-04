import React from 'react';
import { render } from 'react-dom';
import { observable } from "mobx";
import { observer } from "mobx-react";

const People2=({store})=><div>
	<button onClick={()=>store.setName("wukong")}>wukong</button>
	<button onClick={()=>store.setName("bajie")}>bajie</button>
	<button onClick={()=>store.setName("wujing")}>wujing</button>
	<div>{store.name}</div>
  	<img src="static/wukong.jpg" alt=""/>
	</div>

const PeopleObserver=observer(People2)

const peopleStore = observable({
    name: "John",
    setName: function(name) {
        this.name = name;
    }
});

render(<PeopleObserver store={peopleStore}/>, document.getElementById('root'));