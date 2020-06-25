import React, { ReactElement, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Container, Row, Col, Button } from "react-bootstrap";

import { Flex } from "../components";

import UserCard from "../page-components/Users/UserCard";
import { useGetUsers } from "../api/CustomHooks";
import AddUserModal from "../page-components/Users/AddUserModal";

export default function Users(props: RouteComponentProps): ReactElement {

	const [ users, resetUsers ] = useGetUsers();
	const [ showAddUserModal, setShowAddUserModal ] = useState(false);
	const [ searchTerm, setSearchTerm ] = useState("");

	return <Flex flex={"1"} style={{ margin: "15px 0"}}>
		<Container fluid>
			<Row>
				<Col>
					<h2>Users</h2>
				</Col>
			</Row>
			<Row className={"justify-content-md-center p-3"}>
				<Col xs={8} sm={8} md={4} >
					<input placeholder={"Search for user"} className={"form-control"} type="text" name="" id="" style={{width: "100%"}}
						onChange={event => setSearchTerm(event.target.value.toLowerCase())}
					/>
				</Col>
				<Col xs={4} sm={4} md={2}>
					<Button type={"button"} onClick={() => setShowAddUserModal(true)} variant={"outline-secondary"}>Add user</Button>
				</Col>
			</Row>
			<Row className={"justify-content-center justify-content-md-between"}>
				{(Array.isArray(users) ? users : []).filter(user => user.username.toLowerCase().indexOf(searchTerm) === 0).map((u, i) =>
					<Col key={i} xs={12} sm={10} md={6} lg={4} className={"mt-3"}>
						<UserCard user={u}
							resetUsers={resetUsers}
						/>
					</Col>,
				)}
			</Row>
		</Container>
		<AddUserModal show={showAddUserModal} onHide={() => {
			setShowAddUserModal(false);
			resetUsers();
		}}/>
	</Flex>;
}
