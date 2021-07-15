import React from 'react'
import ReactDOM from 'react-dom'

import s from './global.module.css';
import Main from './main/index'

const element = (
    <div className={s.root}>
        <Main />
    </div>
);

ReactDOM.render(element, document.getElementById('root'))
