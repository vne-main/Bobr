import React, {Component} from 'react';
import Select from 'react-select';

const flow = [
    { value: '0', label: 'Разработка'},
    { value: '1', label: 'Дизайн'},
    { value: '2', label: 'Администрирование'},
    { value: '3', label: 'Управление'},
    { value: '4', label: 'Разное'}
];

export default class SelectFlow extends Component {

    state = {
        selectedOption: { value: '0', label: 'Разработка' },
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    render() {
        return(
            <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={flow}
                className="select_flow"
            />
        )
    }
}