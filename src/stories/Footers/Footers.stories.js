import React from "react";
import SocialOnly from "../../components/Footers/SocialOnly"
import Footer_CenteredLinks from "../../components/Footers/CenteredLinks";
import Footer_ToolsColumns from "../../components/Footers/ToolsColumns";
import Footer_SiteSections from "../../components/Footers/SiteSections";

export default {
	title: "Sections/Footers",
};

export const SocialLinksOnly = () => {
	return <SocialOnly />
}

export const CenteredLinks = () => {
	return <Footer_CenteredLinks />;
};

export const ToolsColumns = () => {
	return <Footer_ToolsColumns />;
};

export const SiteSections = () => {
	return <Footer_SiteSections />;
};
