import React, { ReactNode } from "react";
import { NextPage } from "next";

interface Props {
    children: ReactNode;
}

const Section: NextPage<Props> = ({ children }) => {
    return <section className="p-8 pb-0">{children}</section>;
};

export default Section;
