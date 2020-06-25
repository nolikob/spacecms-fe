import React from "react";
import { Router } from "@reach/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Layout from "./Layout";
import {
	Dashboard,
	Users,
	Files,
	Templates,
	Settings,
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";

// Add all free font awesome icons to library
library.add(fas);

export default function AppRouter() {
	return <Router>
		<Layout path={"/"}>
			<Dashboard path={"/"}/>
			<Users path={"users"}/>
			<Files path={"files"}/>
			<Templates path={"templates"}/>
			<Settings path={"settings"}/>
		</Layout>
	</Router>;
}
