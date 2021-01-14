import React from "react";
import Pager_CenteredNumbers from "../../components/PaginationNavs/CenteredNumbers";
import Pager_SimpleButtons from "../../components/PaginationNavs/SimpleButtons";
import Pager_ExtendedButtons from "../../components/PaginationNavs/ExtendedButtons";

export default {
	title: "Components/Navigation/Pagination",
};

export const CenteredPageNumbers = () => {
	return <Pager_CenteredNumbers />;
};

export const SimpleButtons = () => {
	return <Pager_SimpleButtons />;
};

export const ExtendedButtons = () => {
	return <Pager_ExtendedButtons />;
};
