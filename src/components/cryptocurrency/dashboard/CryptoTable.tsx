import React, { Fragment } from 'react';
import '../../../static/css/cryptocurrency/cryptotable.css';

const CryptoTable: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <div className="tableWrapper outer">
                <div className="inner">
                    <table>
                        <thead>
                            <tr>
                                <th className="first-col">DISTRIBUIDORES </th>
                                <th>RESULTADO (R$)</th>
                                <th>RESULTADO (%)</th>
                                <th>RESULTADO (R$)</th>
                                <th colSpan={Number(2)}>RESULTADO (%)</th>
                                <th colSpan={Number(2)}>RESULTADO (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="first-col">Header A</th>
                                <td>col 1 - A</td>
                                <td>col 2 - A (WITH LONGER CONTENT)</td>
                                <td>col 3 - A</td>
                                <td>col 4 - A</td>
                                <td>col 5 - A</td>
                                <td>col 4 - A</td>
                                <td>col 5 - A</td>
                            </tr>
                            <tr>
                                <th className="first-col">Header A</th>
                                <td>col 1 - A</td>
                                <td>col 2 - A (WITH LONGER CONTENT)</td>
                                <td>col 3 - A</td>
                                <td>col 4 - A</td>
                                <td>col 5 - A</td>
                                <td>col 4 - A</td>
                                <td>col 5 - A</td>
                            </tr>
                            <tr>
                                <th className="first-col">Header A</th>
                                <td>col 1 - A</td>
                                <td>col 2 - A (WITH LONGER CONTENT)</td>
                                <td>col 3 - A</td>
                                <td>col 4 - A</td>
                                <td>col 5 - A</td>
                                <td>col 4 - A</td>
                                <td>col 5 - A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default CryptoTable;
