import React from 'react';
import Layout from 'components/Layout';
import Article from './article';
import Dropdown from 'components/Dropdown';
import './style.scss';

export default function() {
  return (
    <Layout>
      <div className="dashboard has-background-grey-lighter">
        {/*<h1 className="has-text-centered title dashboard__title">Dashboard</h1>*/}
        <div className="container">
          <div className="columns">
            <aside className="column is-one-third filters">
              <div className="is-flex filters__header">
                <h5 className="has-text-weight-medium is-size-5">Фильтры</h5>
                <a href="/" className="has-text-grey-light">Очистить</a>
              </div>
            </aside>
            <div className="column">
              <p className="dashboard__result has-text-weight-medium">Найдено
                <span className="has-text-grey-light">(192 услуги)</span></p>
              <div className="box">
                <Article/>
                <Article/>
                <Article/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};
