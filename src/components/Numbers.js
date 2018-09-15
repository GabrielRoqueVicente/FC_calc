import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Numbers.css'

class Numbers extends Component {

    render() {
        const buttons = this.props.buttons;

        const rows = buttons > 0 && buttons > 10 ? buttons / 10 : 1;
        const table = [];

        for (let i = 0; i < rows; i++) {
             const cols = [];
             const nCols = i !== rows && buttons%10 === 0 ? 10 : buttons%10;
            for (let j = 0; j < nCols ; j++) {
                cols.push({value:i*10+j});
            }
            table.push(cols);
        }

        return (
            <div className="numbers">
                <table>
                    <tbody>
                        {table.map((row, i) =>
                            <tr key={i} >
                                {row.map((col, j) =>
                                    <td key={col.value} className="btn" onClick={() => this.props.onClick(col.value)}>{col.value}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

Numbers.propTypes ={
    buttons: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,

};
export default Numbers