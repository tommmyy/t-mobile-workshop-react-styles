import React, { Component } from 'react';
import Tabs from "../Tabs";

class App extends Component {
	render() {

		return (
			<Tabs>
				<TabsMenu>
					<Tab>Author</Tab>
					<Tab active>Friends</Tab>
					<Tab disabled>Friend</Tab>
				</TabsMenu>
				<TabsContent>

				</TabsContent>
			</Tabs>
		);
	}
}

export default App;
