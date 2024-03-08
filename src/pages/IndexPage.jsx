// import React from 'react'
// import styled from '@emotion/styled'
import '../App.css'
import { NavbarComponent } from '../components/navigation/NavbarComponent.jsx'
import { ApiTemperatureComponent } from '../components/index/ApiTemperatureComponent.jsx'

export const IndexPage = () => {
    return (
        <div>
            <NavbarComponent />
            <div className='main-container'>
                <div className='component-one'>
                    <div>
                        <ApiTemperatureComponent />
                    </div>
                </div>
                <div className='component-two'>
                    <div>
                        <span>Component 2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
