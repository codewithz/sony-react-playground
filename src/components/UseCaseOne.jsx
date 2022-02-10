import React from 'react'
import { HelloComponent } from './HelloComponent';
import NameComponent from './NameComponent';
import { NameFunctionalComponent } from './NameFunctionalComponent';
import CompanyComponent from './CompanyComponent';
import TickerComponent from './TickerComponent';


export default function UseCaseOne() {
    return (
        <div>
            <HelloComponent />
            <hr />
            <NameComponent name="Zartab" message="Enjoy React" />
            <hr />
            <NameComponent name="Tom" />
            <hr />
            <NameFunctionalComponent name="Alex" message="Hello" />
            <hr />
            <CompanyComponent />
            <hr />
            <TickerComponent />

        </div>
    )
}


