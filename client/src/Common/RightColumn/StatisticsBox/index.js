import React from 'react';
import './style.css';

const StatisticsBox = () => {
	const statistics = [
		{ title: 'Всего', value: 4 },
		{ title: 'Мужчины', value: 2 },
		{ title: 'Женщины', value: 1 },
		{ title: 'Остальные', value: 1 },
	];

	return (
		<div className="right_column_box">
			<h3>Статистика</h3>
			<ol className="right_statistics_list">
				{statistics.map((el, i) => {
					return (
						<li key={i}>
							<i>{el.title}</i>
							<span>{el.value}</span>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default StatisticsBox;
