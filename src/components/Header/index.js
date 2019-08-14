import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from 'components/App';
import Dropdown from 'components/Dropdown';

export default function (props) {
  const {state: currentUser } = useContext(CurrentUserContext);

  return (
    <header>
      <nav>
        {currentUser ? (
          <>
            <nav className="navbar">
              <ul className="navbar-menu">
                <li className="navbar-brand navbar-item">
                  <Link className="subtitle is-5" to="/">
                    <strong>Exprts</strong>
                  </Link>
                </li>
                <li className="navbar-item">
                  <div className="field has-addons">
                    <p className="control">
                      <input className="input" type="text" placeholder="Find a post"/>
                    </p>
                    <p className="control">
                      <button className="button">
                        Search
                      </button>
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="navbar-end">
                <li className="navbar-item has-text-grey-light">Эксперты</li>
                <li className="navbar-item"><a href="/">Вопросы</a></li>
                <li className="navbar-item"><a href="/">О нас</a></li>
                <li className="navbar-item"><a href="/">Создать проект</a></li>
              </ul>
              <Dropdown/>
            </nav>
          </>
        ) : (
          <ul className="navbar">
            <li className="navbar-brand navbar-item">
              <Link className="" to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link className="" to="/registration/">Registration</Link>
            </li>
            <li className="navbar-item">
              <Link className="" to="/login/">Login</Link>
            </li>
            <li className="navbar-item">
              <Link className="" to="/dashboard/">Dashboard</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
