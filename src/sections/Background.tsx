import React from "react";
import { withStyles, createStyles } from "@material-ui/styles";

const styles = createStyles({
	img: {
		minHeight: "100vh",
		minWidth: "100vw",
/* 		backgroundImage:
			'url("https://res.cloudinary.com/teepublic/image/private/s--YlpQt0rM--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_313,q_90,w_313/v1448664128/production/designs/345116_1")',
		backgroundRepeat: "repeat" */
	}
});

const Background = withStyles(styles)((props: any) => {
	console.log("hi");
	return (
		<div className={props.classes.img}>
			{props.children && props.children}
		</div>
	);
});

export default Background;
