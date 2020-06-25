import { useState, useEffect } from "react";

import { Users, User } from "./Types";
import { users } from "./DummyData";

export function useGetUsers(): [null | Error | Users, () => void] {
	const [ data, setData ] = useState<null | Users>(null);

	useEffect(() => {
		setTimeout(() => setData(users), 250);
	}, [ data ]);

	return [ data, () => setData(null) ];
}

export function useGetViewportWidth(): null | number {
	const [ data, setData ] = useState<null | number>(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setData(window.innerWidth);
		});
		return () => {
			window.removeEventListener("resize", () => {
				setData(window.innerWidth);
			});
		};
	}, [data]);

	return data;
}

export function useGetCurrentUser(): null | User {
	const [ data, setData ] = useState<null | User>(null);

	useEffect(() => {
		setTimeout(() => setData(users[1]), 250);
	}, []);

	return data;
}
