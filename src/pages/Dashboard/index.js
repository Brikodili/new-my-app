import React from 'react';
import Layout from 'components/Layout';
import Article from './article';
import './style.scss';

export default function () {
  return (
    <Layout>
      <div className="dashboard has-background-grey-lighter">
        <div className="container">
          <div className="columns">
            <aside className="column is-one-third filters">
              <div className="is-flex filters__header">
                <p className="has-text-weight-medium is-size-5">Фильтры</p>
                <a href="/" className="has-text-grey-light">Очистить</a>
              </div>
              <hr/>
              <div className="filters__body">
                <p className="result has-text-weight-medium is-size-6">Категории
                  <span className="has-text-grey-light">(4)</span></p>
                <div className="filters__input-wrapper">
                  <input className="filters__input" type="text" placeholder="Название"/>
                  <img src="https://img.icons8.com/ultraviolet/30/000000/plus.png" alt="Add tag"/>
                </div>
                <ul className="is-flex tags">
                  <li className="tag is-light is-medium">#Landing-page</li>
                  <li className="tag is-light is-medium">#Логотип</li>
                  <li className="tag is-light is-medium">#Промо-сайт</li>
                  <li className="tag is-light">
                    <img src="https://img.icons8.com/clouds/30/000000/close-window.png" alt="Delete"/>
                  </li>
                </ul>
                <hr/>
                <div className="filters__valuation">
                  <p className="result has-text-weight-medium is-size-6">Стоимость</p>
                </div>
              </div>
            </aside>
            <div className="column">
              <p className="result has-text-weight-medium">Найдено
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
