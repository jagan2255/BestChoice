import React from 'react'
import './BoxContent.css'

function BoxContent() {
    return (
        <div className='boxcontent row '>

            <div className='indbox col-10 col-lg-3 col-md-4'>

                <h3>3254+</h3>
                <p>Active Clients</p>

            </div>

            <div className='indbox col-10 col-lg-3 col-md-4'>

                <h3>3996+</h3>
                <p>Company</p>

            </div>

            <div className='indbox col-10 col-lg-3 col-md-4'>

                <h3>25+</h3>
                <p>Team</p>

            </div>

            <div className='indbox col-10 col-lg-3 col-md-4'>

                <h3>20+</h3>
                <p>Country</p>

            </div>


        </div>
    )
}

export default BoxContent