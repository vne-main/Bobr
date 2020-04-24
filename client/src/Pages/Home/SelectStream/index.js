import React, { useState } from 'react';
import './style.css';

/* Module */
import Select from 'react-select';

const SelectStream = () => {
  const flow = [
    { value: '0', label: 'Разработка' },
    { value: '1', label: 'Дизайн' },
    { value: '2', label: 'Администрирование' },
    { value: '3', label: 'Управление' },
    { value: '4', label: 'Разное' }
  ];
  const [activeValue, handleChange] = useState(flow[0]);

  return (
    <Select
      value={activeValue}
      onChange={e => handleChange(e)}
      options={flow}
      className="select_stream"
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: 'rgba(136, 136, 136, 0.2)',
          primary: 'rgba(136, 136, 136, 1)',
          primary50: 'rgba(136, 136, 136, 0.2)'
        }
      })}
    />
  );
};

export default SelectStream;
