import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Display from "./Display";



function App() {

	return (
		<div className="App">
			<Nav />
			<div>
        		<h2>Filter for greased pigs</h2>
        		<input type='checkbox'/>
    		</div>

			<div className="ui grid container">{hogs.map(element=>
			<Display hogs={element}/>)}</div>
		</div>
	);
}

export default App;
