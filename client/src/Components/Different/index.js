import React, { useEffect } from 'react';
import './style.css';

/* Module */
import { Link } from 'react-router-dom';

/* Function */
import { changePage } from '../../Requsets/function';

const Different = () => {
	useEffect(() => {
		changePage('different');
	}, []);

	const differentPage = [
		{ href: '/statistics', title: 'Статистика' },
		{ href: '/help', title: 'Помощь' },
		{ href: '/advertising', title: 'Реклама' },
		{ href: '/work', title: 'Работа' },
		{ href: '/about', title: 'О сайте' },
		{ href: '/documentation', title: 'Документация' },
	];

	return (
		<section>
			<h3 className="title_h3 title_pages">В разработке</h3>
			<div className="different_container">
				{differentPage.map((el, i) => {
					return (
						<Link to={el.href} className="different_box" key={i}>
							<div className="different_block">{el.title}</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Different;
