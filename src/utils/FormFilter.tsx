import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../static/css/forms.css';

interface FormFilterProps {
    handleSetPattern: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const FormFilter: React.FC<FormFilterProps> = (props): JSX.Element => {
    const { handleSetPattern } = props;
    const [showList, setShowList] = useState(false);

    const handleShowList = () => {
        setShowList(!showList);
    };

    return (
        <div className="new-filter-col">
            <div className="form-group">
                <label className="text-xs md:text-lg">Select Filter</label>
                <i
                    className="zmdi zmdi-help js-tooltip"
                    data-tooltipped=""
                    aria-describedby="tippy-tooltip-795"
                    data-original-title="Example: P/E, Current ratio, Symbol"
                ></i>
                <span className="twitter-typeahead">
                    <input
                        className="form-control js-new-filter pattern-hint text-xs md:text-lg"
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="false"
                        autoFocus
                        type="text"
                        readOnly
                        tabIndex={Number(-1)}
                        dir="ltr"
                    />
                    <input
                        placeholder="click here"
                        className="form-control js-new-filter pattern-input text-xs md:text-lg"
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="false"
                        autoFocus
                        type="text"
                        name="new_filter"
                        dir="auto"
                        aria-activedescendant=""
                        aria-owns="undefined_listbox"
                        role="combobox"
                        aria-readonly="true"
                        aria-autocomplete="list"
                        onClick={() => handleShowList()}
                    />
                    {showList && (
                        <div role="listbox" className="pattern-list-dropdown" aria-expanded="false">
                            <div role="presentation" className="pattern-list pattern-list-filters text-xs md:text-lg">
                                <div
                                    id="performance_5d"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    Performance 5d
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="performance_1m"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    Performance 1m
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="performance_3m"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    Performance 3m
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="performance_1y"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    Performance 1y
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="performance_5y"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    Performance 5y
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="sma_50"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    SMA 50
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="sma_200"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    SMA 200
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="rsi"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    RSI
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="volatility"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    Volatility
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="ppo"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    PPO
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="adx"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    ADX
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="mfi"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    MFI
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="sto"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    STO
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div
                                    id="stochrsi"
                                    className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion"
                                    onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSetPattern(e)}
                                >
                                    StochRSI
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </span>
            </div>
        </div>
    );
};

FormFilter.propTypes = {
    handleSetPattern: PropTypes.any,
};

export default FormFilter;
