import { FC } from 'react';
import {Title} from "@mantine/core";
import { useAppStore } from '../../store/app.store';

const Landing: FC = () => {
	const { userName, isLoggedIn } = useAppStore();
	console.log("userName", userName);
	return <>
		<Title order={2}>Welcome to the shop{isLoggedIn && userName ? `, ${userName}` : ""}</Title>
	</>;
};

export default Landing

