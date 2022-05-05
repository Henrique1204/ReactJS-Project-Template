import React from 'react';

import GithubIcon from './github';
import LinkedinIcon from './linkedin';
import NpmIcon from './npm';

const IconsList = {
	'github-icon': <GithubIcon />,
	'linkedin-icon': <LinkedinIcon />,
	'npm-icon': <NpmIcon />,
};

export type IconsListType = typeof IconsList;
export type IconsListEnum = keyof IconsListType;

export default IconsList;
