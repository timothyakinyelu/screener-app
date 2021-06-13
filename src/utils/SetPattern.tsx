import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RemoveIcon from '../static/images/remove.svg';

interface SetPatternProps {
    pattern: string | null;
    removePattern: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string | null) => void;
}

const SetPattern: React.FC<SetPatternProps> = (props): JSX.Element => {
    const { pattern, removePattern } = props;
    const [percent, setPercent] = useState(false);

    useEffect(() => {
        if (pattern?.includes('Performance') || pattern?.includes('SMA')) {
            setPercent(true);
        } else {
            setPercent(false);
        }
    }, [pattern]);

    return (
        <div className="screener-patterns">
            <div className="form-group">
                <label className="text-xs md:text-lg">
                    {pattern}
                    <i
                        className="zmdi zmdi-help js-tooltip"
                        data-tooltipped=""
                        aria-describedby="tippy-tooltip-746"
                        data-original-title="<b>Performance today</b> is the percentage change today"
                    ></i>
                </label>
                <div
                    data-original-title="Remove"
                    className="remove-pattern"
                    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => removePattern(e, pattern)}
                >
                    <img src={RemoveIcon} alt="remove pattern" />
                </div>
                <div className="js-screener-other screener-other" data-name="pc">
                    <div className="pattern-filter-wrapper">
                        <div className="pattern-filter">
                            <input
                                className="form-control text-xs md:text-lg"
                                placeholder={percent === true ? '-100' : '0'}
                                type="text"
                                name="pc_min"
                            />
                        </div>
                        <div className="ps form-control-static">–</div>
                        <div className="pattern-filter">
                            <input
                                className="form-control text-xs md:text-lg"
                                placeholder="100"
                                type="text"
                                name="pc_max"
                            />
                        </div>
                        {percent && (
                            <div className="ps">
                                <div className="screener-other__suffix">
                                    <span>%</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

SetPattern.propTypes = {
    pattern: PropTypes.string.isRequired,
    removePattern: PropTypes.any,
};

export default SetPattern;
