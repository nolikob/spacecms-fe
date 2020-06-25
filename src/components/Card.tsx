import React, { ReactElement, ReactNode, CSSProperties } from "react";

export type CardProps = {
	children?: ReactNode,
	style?: CSSProperties,
	className?: string,
};

export default function Card({ children, style, className }: CardProps): ReactElement {
	return <div className={className} style={{
		borderRadius: "4px",
		boxShadow: "1px 3px 20px rgba(33, 33, 33, .15)",
		width: "100%",
		height: "100%",
		padding: "1rem",
		...style,
	}}>
		{children}
	</div>;
}
