import React from 'react';

const SetPattern: React.FC = (): JSX.Element => {
    return (
        <div className="screener-patterns">
            <div className="form-group">
                <label>
                    Change
                    <i
                        className="zmdi zmdi-help js-tooltip"
                        data-tooltipped=""
                        aria-describedby="tippy-tooltip-746"
                        data-original-title="<b>Performance today</b> is the percentage change today"
                    ></i>
                </label>
                <span
                    className="js-hideable__close js-tooltip"
                    data-tooltipped=""
                    aria-describedby="tippy-tooltip-747"
                    data-original-title="Remove"
                ></span>
                <div className="js-screener-other screener-other" data-name="pc">
                    <div className="pattern-filter-wrapper">
                        <div className="pattern-filter">
                            <input className="form-control" placeholder="-100" type="text" name="pc_min" />
                        </div>
                        <div className="ps form-control-static">–</div>
                        <div className="pattern-filter">
                            <input className="form-control" placeholder="100" type="text" name="pc_max" />
                        </div>
                        <div className="ps">
                            <div className="screener-other__suffix">
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetPattern;
