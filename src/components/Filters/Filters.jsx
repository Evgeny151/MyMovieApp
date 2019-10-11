import React from "react";
import SortBy from './SortBy'
import ByYear from './ByYear'

export default class Filters extends React.Component {
    render() {
        const { 
            filters: {
                sort_by,
                year
            },
            onChangeFilters,
            onChangePage,
            page
        } = this.props;
        
        return (
            <form className="mb-form">
                <SortBy
                    sort_by={sort_by}
                    onChangeFilters={onChangeFilters}
                />
                <ByYear
                    year={year}
                    onChangeFilters={onChangeFilters}
                />
                <div className="btn-group">
                    <button type="button" className="btn" onClick={() => onChangePage(page - 1)} disabled={page === 1}>Назад</button>
                    <button type="button" className="btn" onClick={() => onChangePage(page + 1)}>Вперед</button>
                </div>
            </form>
        );
    }
}