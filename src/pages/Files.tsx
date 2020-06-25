import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import { Flex } from "../components";
import { Container, Row, Col } from "react-bootstrap";

export default function Files(props: RouteComponentProps): ReactElement {
	return <Flex flex={"1"} style={{ margin: "15px 0"}}>
		<Container fluid >
			<Row>
				<Col>
					<h2>Files</h2>
				</Col>
			</Row>
			<Row className={"justify-content-md-center p-3"}>
				<Col xs={12} lg={10}>
					<Flex style={{
						minHeight: "350px",
						backgroundColor: "#eee"
					}} justifyContent={"center"} alignItems={"center"}>
						<span style={{color: "#aaa"}}>Files to be displayed</span>
					</Flex>
				</Col>
			</Row>
		</Container>
	</Flex>;
}
