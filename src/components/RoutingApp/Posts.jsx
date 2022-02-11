import React from 'react'
import queryString from 'query-string';

export default function Posts(props) {

    const { year, month } = props.match.params;
    const qsData = props.location.search;
    const queryStringData = queryString.parse(qsData);
    console.log(queryStringData);
    return (
        <div>
            <h1>Posts</h1>
            <p>Year: {year}</p>
            <p>Month: {month}</p>
        </div>
    )
}
