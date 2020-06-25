import React, { ReactElement } from "react";
import Flex from "../../components/Flex";
import Logo from "./Logo";
import UserModule from "./UserModule";
import { Button } from "react-bootstrap";
import Navigation from "./Navigation";
import { MenuItems } from "../../api/Types";

export type SidePanelProps = {
	menu: MenuItems,
}

// TODO: fix inline styles

export default function SidePanel({menu}): ReactElement {
	return <Flex justifyContent={"space-between"} flexFlow={"column"} style={{minHeight: "100%"}}>
		<Flex flex={"1 0 20%"} flexFlow={"column"} style={{width: "100%", padding: "15px", height: "20%"}}>
			<Logo />
			<UserModule />
		</Flex>
		<Flex flexFlow={"column"} flex={"auto"} style={{width: "100%", padding: "1px 0"}}>
			<Navigation menuItems={menu}/>
		</Flex>
		<div style={{
			display: "flex",
			width: "100%",
			justifyContent: "center",
			padding: "1rem",
			flex: "0 0 100%",
			height: "10%",
		}}>
			<Button type={"button"} variant={"outline-info"}>Logout</Button>
		</div>
	</Flex>;
}
