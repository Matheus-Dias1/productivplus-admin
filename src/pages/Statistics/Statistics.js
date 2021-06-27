import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";

import classes from './Statistics.module.css';

import Statistic from '../../components/Statistic/Statistic';

import ReloadIcon from '../../assets/icons/ReloadIcon';

import DUMMY_STATISTICS from '../../assets/dummy-data/DUMMY_STATISTICS';


const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('day');
  const [statistics, setStatistics] = useState([]);

  const fetchStatistics = async () => {
    setLoading(true);
    await setTimeout(() => {
      setStatistics(DUMMY_STATISTICS);
      setLoading(false);
    }, 2000);
    //fetching logic
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  const btnClasses = {
    day: selectedPeriod === 'day' ? classes['selected'] : '',
    week: selectedPeriod === 'week' ? classes['selected'] : '',
    month: selectedPeriod === 'month' ? classes['selected'] : '',
    year: selectedPeriod === 'year' ? classes['selected'] : '',
  };

  const onChangePeriod = {
    day: () => {
      setSelectedPeriod('day');
    },
    week: () => {
      setSelectedPeriod('week');
    },
    month: () => {
      setSelectedPeriod('month');
    },
    year: () => {
      setSelectedPeriod('year');
    },
  };

  return (
    <div className="content-container">
      <div className="content">
        <div className={classes['statistics-actions']}>
          <ul className={classes['button-selector-container']}>
            <li>
              <button className={btnClasses.day} onClick={onChangePeriod.day}>
                ÚLTIMO DIA
              </button>
            </li>
            <li>
              <button className={btnClasses.week} onClick={onChangePeriod.week}>
                ÚLTIMA SEMANA
              </button>
            </li>
            <li>
              <button
                className={btnClasses.month}
                onClick={onChangePeriod.month}
              >
                ÚLTIMO MÊS
              </button>
            </li>
            <li>
              <button className={btnClasses.year} onClick={onChangePeriod.year}>
                ÚLTIMO ANO
              </button>
            </li>
          </ul>
          <button type="button" onClick={fetchStatistics}>
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
              style={{marginTop:'2rem', width: '1rem'}}
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
