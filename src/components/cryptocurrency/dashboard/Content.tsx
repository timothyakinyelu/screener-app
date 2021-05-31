import React from 'react';
import '../../../static/css/content.css';

const Content: React.FC = (): JSX.Element => {
    return (
        <div className="contentWrapper">
            <div className="card">
                <div className="card-body p-3">
                    <div className="screener">
                        <form
                            className="js-screener-form js-search-form"
                            data-count-url="/cryptocurrency-screener/count"
                            data-singular="currency"
                            data-plural="currencies"
                            action="/cryptocurrency-screener"
                            acceptCharset="UTF-8"
                            method="get"
                        >
                            <div className="card screener__filters">
                                <div className="screener__filters__card card-block kit0">
                                    <div className="row screener__filters__orderable">
                                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 new-filter-col">
                                            <div className="form-group">
                                                <label>Add a filter</label>
                                                <i
                                                    className="zmdi zmdi-help js-tooltip"
                                                    data-tooltipped=""
                                                    aria-describedby="tippy-tooltip-795"
                                                    data-original-title="Example: P/E, Current ratio, Symbol"
                                                ></i>
                                                <span
                                                    className="twitter-typeahead"
                                                    style={{ position: 'relative', display: 'inline-block' }}
                                                >
                                                    <input
                                                        className="form-control js-new-filter tt-hint"
                                                        autoComplete="off"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        spellCheck="false"
                                                        autoFocus
                                                        type="text"
                                                        readOnly
                                                        tabIndex={Number(-1)}
                                                        dir="ltr"
                                                        style={{
                                                            position: 'absolute',
                                                            top: '0px',
                                                            left: '0px',
                                                            borderColor: 'transparent',
                                                            boxShadow: 'none',
                                                            opacity: '1',
                                                            background:
                                                                'none 0% 0% / auto repeat scroll padding-box padding-box rgb(255, 255, 255)',
                                                        }}
                                                    />
                                                    <input
                                                        placeholder="Click here to begin"
                                                        className="form-control js-new-filter tt-input"
                                                        autoComplete="off"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        spellCheck="false"
                                                        autoFocus
                                                        type="text"
                                                        name="new_filter"
                                                        dir="auto"
                                                        style={{
                                                            position: 'relative',
                                                            verticalAlign: 'top',
                                                            backgroundColor: 'transparent',
                                                        }}
                                                        aria-activedescendant=""
                                                        aria-owns="undefined_listbox"
                                                        role="combobox"
                                                        aria-readonly="true"
                                                        aria-autocomplete="list"
                                                    />
                                                    <span
                                                        role="status"
                                                        aria-live="polite"
                                                        style={{
                                                            position: 'absolute',
                                                            padding: '0px',
                                                            border: '0px',
                                                            height: '1px',
                                                            width: '1px',
                                                            marginBottom: '-1px',
                                                            marginRight: '-1px',
                                                            overflow: 'hidden',
                                                            clip: 'rect(0px, 0px, 0px, 0px)',
                                                            whiteSpace: 'nowrap',
                                                        }}
                                                    >
                                                        26 results are available, use up and down arrow keys to navigate
                                                    </span>
                                                    <pre
                                                        aria-hidden="true"
                                                        style={{
                                                            position: 'absolute',
                                                            visibility: 'hidden',
                                                            whiteSpace: 'pre',
                                                            fontFamily: 'roboto, sans-serif',
                                                            fontSize: '13px',
                                                            fontStyle: 'normal',
                                                            fontVariant: 'normal',
                                                            fontWeight: 400,
                                                            wordSpacing: '0px',
                                                            letterSpacing: '0px',
                                                            textIndent: '0px',
                                                            textRendering: 'auto',
                                                            textTransform: 'none',
                                                        }}
                                                    ></pre>
                                                    <div
                                                        role="listbox"
                                                        className="tt-menu"
                                                        aria-expanded="false"
                                                        style={{
                                                            position: 'absolute',
                                                            top: '100%',
                                                            left: '0px',
                                                            zIndex: 9,
                                                            display: 'none',
                                                        }}
                                                    >
                                                        <div
                                                            role="presentation"
                                                            className="tt-dataset tt-dataset-filters"
                                                            style={{
                                                                maxHeight: '400px',
                                                                overflowY: 'scroll',
                                                            }}
                                                        >
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Market cap
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Price
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Performance 5d
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Performance 1m
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Performance 3m
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Performance 1y
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Performance 5y
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                SMA 50
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                SMA 200
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                RSI
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                Volatility
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                PPO
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                ADX
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                MFI
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                STO
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                            <div className="tt-suggestion-inner tt-suggestion-inner--simple tt-suggestion tt-selectable">
                                                                StochRSI
                                                                <br />
                                                                <div className="tt-suggestion-inner__touch-hint"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-lg-3 col-xl-2 text-center screener-submit screener__cta">
                                            <button className="btn btn-primary btn-block waves-effect" type="submit">
                                                <i className="zmdi zmdi-search"></i>
                                                &nbsp;
                                                <span className="js-screener-count"> 6437 currencies</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
