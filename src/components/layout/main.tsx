import React, { ReactNode } from "react";
import { NextPage } from "next";

interface Props {
    children: ReactNode;
}

const Main: NextPage<Props> = ({ children }) => {
    return <section>{children}</section>;
};

export default Main;
