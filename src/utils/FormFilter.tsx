import React, { useState } from 'react';
import '../static/css/forms.css';

const FormFilter: React.FC = (): JSX.Element => {
    const [showList, setShowList] = useState(false);

    const handleShowList = () => {
        setShowList(true);
    };

    return (
        <div className="new-filter-col">
            <div className="form-group">
                <label>Select Filter</label>
                <i
                    className="zmdi zmdi-help js-tooltip"
                    data-tooltipped=""
                    aria-describedby="tippy-tooltip-795"
                    data-original-title="Example: P/E, Current ratio, Symbol"
                ></i>
                <span className="twitter-typeahead" style={{ position: 'relative', display: 'inline-block' }}>
                    <input
                        className="form-control js-new-filter pattern-hint"
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
                        placeholder="Click here to begin"
                        className="form-control js-new-filter pattern-input"
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
                    <pre aria-hidden="true"></pre>
                    {showList && (
                        <div role="listbox" className="pattern-list-dropdown" aria-expanded="false">
                            <div role="presentation" className="pattern-list pattern-list-filters">
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    Performance 5d
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    Performance 1m
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    Performance 3m
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    Performance 1y
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    Performance 5y
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    SMA 50
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    SMA 200
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    RSI
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    Volatility
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    PPO
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    ADX
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    MFI
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
                                    STO
                                    <br />
                                    <div className="pattern-suggestion-inner__touch-hint"></div>
                                </div>
                                <div className="pattern-suggestion-inner pattern-suggestion-inner--simple pattern-suggestion">
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

export default FormFilter;
