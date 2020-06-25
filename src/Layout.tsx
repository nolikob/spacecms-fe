import React, { ReactNode, ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";

import { SidePanel } from "./page-components/Layout";
import { useGetViewportWidth } from "./api/CustomHooks";

import "./Layout.scss";

export interface LayoutProps extends RouteComponentProps {
	children?: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
	const width = useGetViewportWidth();

	const menu = [
		{path: "/", name: "Dashboard", icon: "times"},
		{path: "/templates", name: "Templates", icon: "times"},
		{path: "/files", name: "Files", icon: "times"},
		{path: "/users", name: "Users", icon: "times"},
		{path: "/settings", name: "Settings", icon: "times"},
	];

	return <Container fluid style={{minHeight: "100vh"}}>
		{width !== null && width > 992 &&
			<Row>
				<Col className={"d-none d-sm-none d-md-none d-lg-block"} lg={2}>
					<div className={"Layout-sidePanel"}>
						<SidePanel menu={menu}/>
					</div>
				</Col>
				<Col lg={10}>
					<div className={"Layout-contentWrapper"}>
						{children}
					</div>
				</Col>
			</Row>
		}
		{width !== null && width < 992 &&
			<Row className={"d-block d-sm-block d-md-block d-lg-none"}>
				<Col xs={12} sm={12} md={12}>
					<SidePanel menu={menu}/>
				</Col>
				<Col xs={12} sm={12} md={12}>
					{children}
				</Col>
			</Row>
		}
	</Container>;
}
