import React from 'react'
import IcoMoon from "react-icomoon";
import iconSet from './selection.json';


export const Icon = ({name, size, color, ...rest}) => {
    // const icons = useVactoryIcon();

	return <IcoMoon removeInlineStyle iconSet={iconSet} icon={name} size={size} color={color} {...rest} style={{
		stroke: "currentColor",
		fill: "currentColor",
		width: size,
		height: size,
	}} />
};

// export const Icon = ({ size, color, ...rest }) => {
//     return (
//         <WrapperIcon  />
//     )
// };



export default Icon;
