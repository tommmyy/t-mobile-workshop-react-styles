import React from 'react';
import { ThemeProvider } from 'styled-components';
import Tabs from '../Tabs';
import Tab from '../Tab';

const Dark = {
	cyanish: 'rgb(0, 119, 204)',
};
const App = () => (
	<ThemeProvider theme={Dark}>
		<Tabs>
			<Tab>Beep</Tab>
			<Tab active>Boop</Tab>
			<Tab>Bop</Tab>
		</Tabs>
	</ThemeProvider>
);
export default App;
