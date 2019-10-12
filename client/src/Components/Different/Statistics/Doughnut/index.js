import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class StaticChart extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<Doughnut
				data={{
					labels: ['Яндекс.Директ', 'Google Ads', 'MyTarget'],
					datasets: [
						{
							data: data || [10, 20, 30],
							backgroundColor: ['#FFE22E', '#3091F1', '#FF5C3C'],
							hoverBorderColor: ['#FFE22E', '#3091F1', '#FF5C3C'],
							hoverBackgroundColor: ['#FFE22E', '#3091F1', '#FF5C3C'],
						},
					],
				}}
				width={160}
				height={160}
				options={{
					legend: false,
					// cutoutPercentage: 80,
					maintainAspectRatio: false,
				}}
			/>
		);
	}
}

export default StaticChart;
