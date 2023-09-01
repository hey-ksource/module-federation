import React from "react";
import RemoteLayout from "Remote/Layout";

const isIndependent = __isIndependent;
const Layout = isIndependent ? React.Fragment : RemoteLayout
export default Layout