import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import { createStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import classnames from "classnames";

const styles = createStyles({
	lurky: {
		height: "100vh",
		width: "100vw",
	}
});

const imgStyle = {
	width: "100%",
	height: "auto"
};

interface IProps {
	axis: "top" | "bottom";
	classes?: any;
}
const LurkBoi: React.FC<IProps> = (props: IProps) => {
	const { classes, axis } = props;
	const [rotation, placement, slide] = React.useMemo(() => {
		return [
			axis === "top" ? "180deg" : "0deg",
			axis === "top" ? "flex-start" : "flex-end",
			axis === "top" ? "-25%" : "25%"
		];
	}, [axis]);
	return (
		<div className={classes.lurky}>
			<VisibilitySensor partialVisibility>
				{props => {
					const { isVisible } = props;
					return (
						<Spring
							delay={500}
							to={{
								opacity: isVisible ? 1 : 0,
								transform: isVisible
									? `translateY(0) rotate(${rotation})`
									: `translateY(${slide}) rotate(${rotation})`
							}}
						>
							{props => {
								const { opacity, transform } = props;
								return (
									<img
										alt="punpun"
										style={{
											...imgStyle,
											opacity,
											transform,
											placeSelf: placement
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
	);
};

export default withStyles(styles)(LurkBoi);
