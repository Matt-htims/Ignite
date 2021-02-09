//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

import { Link } from 'react-router-dom';

import { smallImage } from '../util';

import { popup } from '../animations';

const Game = ({ name, released, id, image }) => {
	const stringId = id.toString();
	//Load detail handler
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame
			variants={popup}
			initial="hidden"
			animate="show"
			layoutId={stringId}
			onClick={loadDetailHandler}
		>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringId}`}
					src={smallImage(image, 640)}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
