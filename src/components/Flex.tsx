import React, { ReactElement, ReactNode, CSSProperties } from "react";

export interface FlexProps {
	justifyContent: "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "center";
	alignItems: "normal" | "stretch" | "start" | "end" | "center" | "baseline";
	flexFlow: "row" | "row-reverse" | "column" | "column-reverse";
	children?: ReactNode;
	style?: CSSProperties;
	flex?: string;
	className?: string;
}

Flex.defaultProps = {
	justifyContent: "flex-start",
	alignItems: "start",
	flexFlow: "row",
};

export default function Flex({children, ...props}: FlexProps): ReactElement {
	const { justifyContent, alignItems, flexFlow, style, flex, className } = props;
	return <div style={{
		display: "flex",
		flex,
		justifyContent,
		alignItems,
		flexFlow,
		...style,
	}} className={className}>
		{children}
	</div>;
}
