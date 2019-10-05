import React from "react";
import { Typography } from "@material-ui/core";
import { Background, LurkBoi } from "./sections";

const App: React.FC<any> = (props: any) => {
	return (
		<Background>
			<LurkBoi axis="top" />
			<Typography variant="h4" color="textPrimary" align="center">
				BIG SKROLL
			</Typography>
			<LurkBoi axis="bottom" />
		</Background>
	);
};

export default App;
