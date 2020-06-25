import React, { ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, Flex } from "../../components";

import { User } from "../../api/Types";

import "./UserCard.scss";
import { togglePermission, removeUser } from "../../api/Requests";
import { Button } from "react-bootstrap";
import ChangePasswordModal from "./ChangePasswordModal";
import { useGetCurrentUser } from "../../api/CustomHooks";

export type UserCardProps = {
	user: User,
	resetUsers: () => void,
};

type PermissionProps = {
	permission: string,
	value: boolean,
	onChangePermission: () => void,
};

export default function UserCard(props: UserCardProps): ReactElement {
	const { user, resetUsers } = props;
	const { username, permissions } = user;
	const [ showChangePassword, setShowChangePassword ] = useState(false);
	const currentUser = useGetCurrentUser();

	// const mappedPermissions = ;

	return <Card className={"UserCard"}>
		<Flex flexFlow={"column"}>
			<span>icon</span>
			<h4>{username}</h4>
		</Flex>
		<Flex flexFlow={"column"} style={{marginTop: ".5rem"}}>
			<h5>Permissions</h5>
			<Flex style={{flexWrap: "wrap", marginTop: ".25rem"}}>
				{Object.keys(permissions).map((key: string, i: number) =>
					<div key={key} style={{width: "45%", marginRight: "5%"}}>
						<Permission
							onChangePermission={() => {
								togglePermission(username, key, !permissions[key]);
								resetUsers();
							}}
							permission={key}
							value={permissions[key]}
						/>
					</div>)}
			</Flex>
		</Flex>
		<Flex justifyContent={"space-evenly"}>
			{user.id === currentUser?.id && <Button variant={"outline-warning"}
				onClick={() => setShowChangePassword(true)}>
					Change password
			</Button>}
		</Flex>
		{currentUser?.permissions.users && user.id !== "1" && user.id !== currentUser?.id && <span className={"UserCard-removeUser"}
			onClick={() => removeUser(user.id)}
		>
			<FontAwesomeIcon icon={"times"}/>
		</span>}
		<ChangePasswordModal userId={user.id} show={showChangePassword} onHide={() => setShowChangePassword(false)}/>
	</Card>;
}

function Permission(props: PermissionProps): ReactElement {
	const {permission, value, onChangePermission} = props;

	return <div className={"Permission"}>
		<Flex justifyContent={"space-between"} alignItems={"center"}>
			<span className={"Permission-name"}>{permission}</span>
			<div onClick={() => onChangePermission()}
				className={`Permission-switch ${value ? "Permission-switch--selected" : ""}`}></div>
		</Flex>
	</div>;
}
