import React, { ReactElement } from "react";
import { Flex } from "../../components";
import { Link, useLocation } from "@reach/router";

import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItems } from "../../api/Types";

export type NavigationProps = {
    menuItems: MenuItems,
};

export default function Navigation({menuItems}: NavigationProps): ReactElement {
    const { pathname } = useLocation();

    return <Flex flexFlow={"column"} className={"Navigation"}>
        {menuItems.map(item => <Link key={item.name} to={item.path}>
            <div className={`Navigation-menuItem ${pathname === item.path ? "Navigation-menuItem--selected" : ""}`}>
                <Flex flex={"1"} alignItems={"center"} className={""}>
                    <span className={"Navigation-itemIcon"}>
                        <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <span>
                        {item.name}
                    </span>
                </Flex>
            </div>
        </Link>)}
    </Flex>;
}
