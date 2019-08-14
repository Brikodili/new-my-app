import React from 'react';
import './style.scss';

export default function(props) {

  return (
    <article className="media article">
      <div className="media-content article__content-left">
        <div className="content">
          <h4>Дизайн сайта UI и UX</h4>
          <p>Рекламные компании говорят, что реклама необходима и важна.
            Он информирует людей о новых продуктах. рекламные щиты на улице делают нашу среду яркой.</p>
          <ul className="tags">
            <li className="tag"><a href="/">#Landing-page</a></li>
            <li className="tag"><a href="/">#Логотип</a></li>
            <li className="tag"><a href="/">#Промо-сайт</a></li>
          </ul>
        </div>
      </div>
      <div className="media-right has-text-centered article__content-right">
        <strong>1 840$</strong>
        <span>1-2 месяца</span>
      </div>
    </article>
  )
};
