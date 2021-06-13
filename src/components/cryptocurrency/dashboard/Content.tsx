import React, { useEffect, useState } from 'react';
import '../../../static/css/content.css';
import FilterButton from '../../../utils/FilterButton';
import FormFilter from '../../../utils/FormFilter';
import SetPattern from '../../../utils/SetPattern';

interface Pattern {
    value: string | null;
}
const Content: React.FC = (): JSX.Element => {
    const [patterns, setPatterns] = useState<Pattern[]>([]);
    const [pattern, setPattern] = useState<Pattern>({ value: '' });

    const handleSetPattern = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
        e.preventDefault();
        const name = e.currentTarget.textContent;
        const current_ = name?.replace(' ', '_').toLowerCase();
        const tag = document.getElementById(current_ as string) as HTMLDivElement;
        tag?.classList.add('hide');
        const _pattern: Pattern = {
            value: name,
        };
        setPattern(_pattern);
    };

    useEffect(() => {
        if (Object.keys(pattern).length !== 0) {
            setPatterns((patterns) => [pattern, ...patterns]);
        }
    }, [pattern]);

    const _patterns = () => {
        return patterns.map((item, key) => {
            if (item.value !== '') {
                return <SetPattern key={key} pattern={item.value} removePattern={removePattern} />;
            }
        });
    };

    const removePattern = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string | null): void => {
        e.preventDefault();

        const index = patterns.findIndex((x) => x.value === name);
        patterns.splice(index, 1);
        setPatterns([...patterns]);

        const current_ = name?.replace(' ', '_').toLowerCase();
        const tag = document.getElementById(current_ as string) as HTMLDivElement;
        tag?.classList.remove('hide');
    };

    return (
        <div className="wallet-card">
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
                            {_patterns()}
                            {/* will take a props to determine what to display */}
                            <FormFilter handleSetPattern={handleSetPattern} />
                            <FilterButton />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Content;
