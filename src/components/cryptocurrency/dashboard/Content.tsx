import React from 'react';
import '../../../static/css/content.css';
import FilterButton from '../../../utils/FilterButton';
import FormFilter from '../../../utils/FormFilter';
import SetPattern from '../../../utils/SetPattern';

const Content: React.FC = (): JSX.Element => {
    return (
        <div className="wallet-card">
            {/* <div className="card-body p-3">
                <div className="screener"> */}
            <form
                className="js-screener-form js-search-form"
                data-count-url="/cryptocurrency-screener/count"
                data-singular="currency"
                data-plural="currencies"
                action="/cryptocurrency-screener"
                acceptCharset="UTF-8"
                method="get"
            >
                <div className="screener__filters">
                    <div className="screener__filters__card card-block">
                        <div className="grid grid-cols-2 gap-2 screener__filters__orderable">
                            {/* will take a props to determine what to display */}
                            <SetPattern />
                            <SetPattern />
                            <SetPattern />
                            <FormFilter />
                            <FilterButton />
                        </div>
                    </div>
                </div>
            </form>
            {/* </div>
            </div> */}
        </div>
    );
};

export default Content;
