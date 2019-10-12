import React, { useEffect } from 'react';
import './style.css';

/* Function */
import { changePage } from '../../../Requsets/function';

const Documentation = () => {
	useEffect(() => {
		changePage('documentation');
	}, []);

	return (
		<section>
			<h3 className="title_h3 title_pages">Документация</h3>
		</section>
	);
};

export default Documentation;
