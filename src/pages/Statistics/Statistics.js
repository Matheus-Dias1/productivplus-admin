import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import classes from './Statistics.module.css';

import Statistic from '../../components/Statistic/Statistic';
import ButtonSelect from '../../components/ButtonSelect/ButtonSelect';

import ReloadIcon from '../../assets/icons/ReloadIcon';

import DUMMY_STATISTICS from '../../assets/dummy-data/DUMMY_STATISTICS';

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [statistics, setStatistics] = useState([]);

  const fetchStatistics = async () => {
    setLoading(true);
    await setTimeout(() => {
      setStatistics(DUMMY_STATISTICS);
      setLoading(false);
    }, 2000);
    //fetching logic
    //CLEANUP PF FAZ CLEANUP EU TE IMPLORO
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const onChangePeriod = (period) => {
    setSelectedPeriod(period);
  };

  const selectOptions = [
    { name: 'ÚLTIMO DIA', value: 'day' },
    { name: 'ÚLTIMA SEMANA', value: 'week' },
    { name: 'ÚLTIMO MÊS', value: 'month' },
    { name: 'ÚLTIMO ANO', value: 'year' },
  ];

  return (
    <div className="content-container">
      <div className="content">
        <div className={classes['statistics-actions']}>
          <ButtonSelect
            options={selectOptions}
            onOptionChange={onChangePeriod}
          />
          <button type="button" onClick={fetchStatistics} className={classes['reload']}>
            <ReloadIcon />
          </button>
        </div>
        <div className={classes['statistics-container']}>
          {!loading &&
            statistics[selectedPeriod].map((stat, index) => {
              return (
                <Statistic
                  key={selectedPeriod + index}
                  name={stat.name}
                  value={stat.value}
                  difference={stat.difference}
                />
              );
            })}
          {loading && (
            <Loader
              style={{ marginTop: '2rem', width: '1rem' }}
              type="Grid"
              color="#e3aa27"
              height={'1rem'}
              width={'1rem'}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
