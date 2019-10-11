import React from "react";

export default class ByYear extends React.Component {
    render() {
        const { year, onChangeFilters } = this.props
        const years = []

        for(let i = 1900; i < 2019; i++) {
            years.push(i)
        }

        return (
            <div className="form-group">
                <label htmlFor="year">Год</label>
                <select 
                    id='year'
                    name='year'
                    className='form-control'
                    value={year}
                    onChange={onChangeFilters}
                >
                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}