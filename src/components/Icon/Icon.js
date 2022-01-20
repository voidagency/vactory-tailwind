import React from 'react'
import IcoMoon from "react-icomoon";
import {useVactoryIcon} from "./context"
import iconSet from './selection.json';


export {iconSet}

export const mergeIcons = (source, target) => {
    return {
        ...source,
        icons: source.icons.concat(target.icons)
    }
};

export const Icon = ({name, size, color, ...rest}) => {
    const icons = useVactoryIcon();

	return <IcoMoon removeInlineStyle iconSet={icons} icon={name} size={size} color={color} {...rest} style={{
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
