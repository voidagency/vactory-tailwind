import React from "react";
import Breadcrumb_Bar from "../../components/BreadcrumbNavs/Bar";
import Breadcrumb_Chevrons from "../../components/BreadcrumbNavs/Chevrons";
import Breadcrumb_Contained from "../../components/BreadcrumbNavs/Contained";
import Breadcrumb_Slashes from "../../components/BreadcrumbNavs/Slashes";

export default {
	title: "Components/Breadcrumbs",
};

export const Bar = () => {
	return <Breadcrumb_Bar />;
};

export const Chevrons = () => {
	return <Breadcrumb_Chevrons />;
};

export const Contained = () => {
	return <Breadcrumb_Contained />;
};

export const Slashes = () => {
	return <Breadcrumb_Slashes />;
};
