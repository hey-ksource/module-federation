import React from "react";
import RemoteLayout from "Remote/Layout";

// from webpack
// @ts-ignore-line
const isIndependent = __isIndependent;
const Layout = isIndependent ? React.Fragment : RemoteLayout
export default Layout