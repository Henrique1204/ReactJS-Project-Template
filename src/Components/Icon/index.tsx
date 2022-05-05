import React from 'react';

import IconsList, { IconsListEnum } from 'Assets/icons';

import * as Styles from './index.styled';

export interface IICon extends Styles.IContainerProps {
	icon: IconsListEnum;
}

const Icon: React.FC<IICon & React.IDefaultProps> = ({
	testId = 'icon',
	className = 'icon',
	icon,
	...props
}) => {
	return (
		<Styles.Container {...props} data-testid={testId}>
			{IconsList[icon]}
		</Styles.Container>
	);
};

export default Icon;
