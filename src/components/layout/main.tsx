import React, { ReactNode } from "react";
import { NextPage } from "next";

interface Props {
    children: ReactNode;
}

const Main: NextPage<Props> = ({ children }) => {
    return <section className="p-8">{children}</section>;
};

export default Main;
