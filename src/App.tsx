import React from "react";
import logo from "./logo.svg";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { createStyles, withStyles } from "@material-ui/styles";
import classnames from "classnames";
import { Typography, Paper, Card, CardMedia } from "@material-ui/core";

const styles = createStyles({
	img: {
		height: "100vh",
		width: "100%",
		position: "fixed",
		backgroundImage:
			'url("https://res.cloudinary.com/teepublic/image/private/s--YlpQt0rM--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_313,q_90,w_313/v1448664128/production/designs/345116_1")',
		backgroundRepeat: "repeat"
	},
	centered: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		height: "100vh"
	},
	fullViewport: {
		height: "100vh"
	},
});

const App: React.FC<any> = (props: any) => {
	const { classes } = props;
	const h2Style = {
		fontSize: "82px"
	};
	return (
		<div>
			<div className={classes.img} />
			<div className={classnames(classes.centered, classes.fullViewport)}>
				<VisibilitySensor partialVisibility>
					{props => {
						const { isVisible } = props;
						return (
							<Spring
								delay={500}
								to={{
									opacity: isVisible ? 1 : 0,
									transform: isVisible
										? "translateY(0) rotate(180deg)"
										: "translateY(-600px) rotate(180deg)"
								}}
							>
								{props => {
									const { opacity, transform } = props;
									console.log("spring shit props", props);
									return (
										<img
											alt="punpun"
											style={{
												...h2Style,
												opacity,
												transform
											}}
											src="https://vignette3.wikia.nocookie.net/punpun/images/5/50/Wiki-background/revision/latest?cb=20150310190809"
										/>
									);
								}}
							</Spring>
						);
					}}
				</VisibilitySensor>
			</div>
			<div className={classnames(classes.centered, classes.fullViewport)}>
				<Typography variant="h4" color="textPrimary">
					BIG SKROLL
				</Typography>
			</div>
			<div className={classnames(classes.centered, classes.fullViewport)}>
				<VisibilitySensor partialVisibility>
					{props => {
						const { isVisible } = props;
						return (
							<Spring
								delay={500}
								to={{
									opacity: isVisible ? 1 : 0,
									transform: isVisible
										? "translateY(0)"
										: "translateY(600px)"
								}}
							>
								{props => {
									const { opacity, transform } = props;
									console.log("spring shit props", props);
									return (
										<img
											alt="punpun"
											style={{
												...h2Style,
												opacity,
												transform
											}}
											src="https://vignette3.wikia.nocookie.net/punpun/images/5/50/Wiki-background/revision/latest?cb=20150310190809"
										/>
									);
								}}
							</Spring>
						);
					}}
				</VisibilitySensor>
			</div>
		</div>
	);
};

export default withStyles(styles)(App);
