import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import Card from "../components/Card";
import { Row, Col, Container } from "react-bootstrap";
import { Flex } from "../components";


export default function Dashboard(props: RouteComponentProps): ReactElement {
	return <Flex flex={"1"} style={{ margin: "15px 0"}}>
		<Container fluid>
			<Row>
				<Col md={3}>
					<Card>
						Test 1
					</Card>
				</Col>
				<Col md={7}>
					<Card>
						Test 2
					</Card>
				</Col>
				<Col md={2}>
					<Card>
						Test 3
					</Card>
				</Col>
			</Row>
		</Container>
	</Flex>;
}
