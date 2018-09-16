import React from 'react'
import PropTypes from 'prop-types'

import './Menu.css'

const Menu = ({ ops, opType, level, coefs, onClick }) => (
    <nav className="menu">
        <ul className="op">
            {ops.map((op, i)=>
                <li
                    key={`op${i}`}
                    className={`btn ${op.value} ${op.value === opType ? 'active' :''}`}
                    onClick={() => onClick(op.value)}
                >
                    {op.char}
                </li>
            )}
        </ul>
        <ul className="level">
            {coefs.map((coef, i)=>
                <li
                    key={`coef${i}`}
                    className={`btn level${i+1}  ${i+1 === level ? 'active' :''}`}
                    onClick={() => onClick(i+1)}
                >
                    {i+1}
                </li>
            )}
        </ul>
    </nav>
);


Menu.prototype = {
    ops: PropTypes.array.isRequired,
    op: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    coefs: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Menu