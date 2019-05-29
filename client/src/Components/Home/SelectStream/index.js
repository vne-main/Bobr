import React, {Component, useState} from 'react';
import Select from 'react-select';

const SelectStream = () => {

    const flow = [
        { value: '0', label: 'Разработка'},
        { value: '1', label: 'Дизайн'},
        { value: '2', label: 'Администрирование'},
        { value: '3', label: 'Управление'},
        { value: '4', label: 'Разное'}
    ];
    const [activeValue, handleChange] = useState(flow[0]);

    return(
        <Select
            value={activeValue}
            onChange={(e) => handleChange(e)}
            options={flow}
            className="select_stream"
        />
    )
};

export default SelectStream;