import React from "react";
import Notifs_ActionsBellow from "../../components/Notifications/ActionsBellow";
import Notifs_Condensed from "../../components/Notifications/Condensed";
import Notifs_Simple from "../../components/Notifications/Simple";
import Notifs_SplitButtons from "../../components/Notifications/SplitButtons";

export default {
	title: "Elements/Feedback/Notifications",
};

export const Simple = () => {
	return <Notifs_Simple />;
};

export const Condensed = () => {
	return <Notifs_Condensed />;
};

export const ActionsBellow = () => {
	return <Notifs_ActionsBellow />;
};

export const SplitButtons = () => {
	return <Notifs_SplitButtons />;
};
