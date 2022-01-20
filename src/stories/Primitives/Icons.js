import React from 'react';
import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import {withKnobs, text, number} from "@storybook/addon-knobs";
import {VactoryIconProvider, Icon, mergeIcons, iconSet} from '../../components/Icon';

import customIconSet from '../../icons/custom-icons.json';

const iconNameList = (list) => list.icons.map(icon => icon.properties.name);

const copyToClipboard = (name) => {
    copy(name);
    toast.success(`Copied '${name}' to clipboard`, {
        position: "bottom-center"
    });
};

const IconBox = ({ className, ...props }) => {
	const styleClass = `
		border-2 border-gray-200 rounded-md m-2 p-2 items-center justify-center flex-col text-black w-36 h-36 cursor-pointer
		flex focus:ring-1 focus:ring-indigo-500 group
	`
	return <div className={styleClass} {...props} />
}

export const Icons = () => {
	const customIcons = mergeIcons(iconSet, customIconSet)
	let filter = text("search", "");

	const options = {
		range: true,
		min: 4,
		max: 120,
		step: 1,
	};

    return (
            <div className="flex flex-col">
                <div className="flex flex-row flex-wrap">
                    {
                        iconNameList(customIcons).map((iconName, key) => {

                            if ( iconName.indexOf(filter) > -1 )
                            return <IconBox
                                key={key}
                                tabIndex={0}
                                onClick={() => copyToClipboard(iconName)}
                                >
                                <Icon name={iconName} color="primary" size={number("Size", 48, options, 'GROUP-ID1')}/>
                                <div className="mt-3 text-sm">{iconName}</div>
                            </IconBox>
                        })
                    }
                </div>
            </div>
    )
}


export default {
    title: 'Primitives/Icons',
    decorators: [withKnobs],
};
