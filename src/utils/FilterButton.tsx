import React from 'react';

const FilterButton: React.FC = (): JSX.Element => {
    return (
        <div className="text-center screener-submit screener__cta">
            <button className="btn btn-primary btn-block waves-effect" type="submit">
                <span className="js-screener-count"> 6437 currencies</span>
            </button>
        </div>
    );
};

export default FilterButton;
