import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState("");

	const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;
	
	const sortedHogs = [...filteredHogs].sort((a, b) => {
		if (sortBy === "name") return a.name.localeCompare(b.name);
		if (sortBy === "weight") return a.weight - b.weight;
		return 0;
	});

	return (
		<div className="App">
			<Nav />
			<div className="ui container">
				<div className="ui menu">
					<div className="item">
						<button 
							className={`ui button ${showGreased ? 'active' : ''}`}
							onClick={() => setShowGreased(!showGreased)}
						>
							Show Greased Only
						</button>
					</div>
					<div className="item">
						<select 
							className="ui dropdown"
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
						>
							<option value="">Sort by...</option>
							<option value="name">Name</option>
							<option value="weight">Weight</option>
						</select>
					</div>
				</div>
				<HogList hogs={sortedHogs} />
			</div>
		</div>
	);
}

export default App;
