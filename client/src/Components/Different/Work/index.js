import React, { useEffect } from 'react';
import './style.css';

/* Function */
import { changePage } from '../../../Requsets/function';

/* IMG */
import imgWork1 from '../../../Static/img/work/work_1.svg';
import imgWork2 from '../../../Static/img/work/work_2.svg';
import imgWork3 from '../../../Static/img/work/work_3.svg';
import imgWork4 from '../../../Static/img/work/work_4.svg';
import imgWork5 from '../../../Static/img/work/work_5.svg';

const arrayWork = [
	{ img: imgWork1, title: 'Название работы #1', description: 'Описание Работы #1', type: 'type1' },
	{ img: imgWork2, title: 'Название работы #2', description: 'Описание Работы #2', type: 'type2' },
	{ img: imgWork3, title: 'Название работы #3', description: 'Описание Работы #3', type: 'type3' },
	{ img: imgWork4, title: 'Название работы #4', description: 'Описание Работы #4', type: 'type4' },
	{ img: imgWork5, title: 'Название работы #5', description: 'Описание Работы #5', type: 'type5' },
];

const Work = () => {
	useEffect(() => {
		changePage('work');
	}, []);
	return (
		<section>
			<h3 className="title_h3 title_pages">Работа</h3>
			<div className="work_container">
				{arrayWork.map((el, i) => {
					const { img, title, description, type } = el;
					return (
						<aside className="work_box" key={i}>
							<img src={img} alt="work" className="work_img" />
							<div className="work_content">
								<h4 className="">{title}</h4>
								<p>{description}</p>
								<button className="blue_button" onClick={() => console.info(type)}>
									Оставить заявку
								</button>
							</div>
						</aside>
					);
				})}
			</div>
		</section>
	);
};

export default Work;
