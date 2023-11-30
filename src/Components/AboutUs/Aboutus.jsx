import React from 'react'
import './Aboutus.css'
import aboutimg from '../Images/9fea26f6a80b4220e398e19e11bb01b4.jpg';

function Aboutus() {
    return (
        <div className='frgdfgdf'>
            <div className='abouthome row'>

                <div className='col-12 col-lg-3 d-flex align-item-center justify-content-center'>
                    <img className="aboutimmg" src={aboutimg} alt="" />
                </div>

                <div className='aboutcontent col-12 col-lg-8 col-md-12'>
                    <h3>About Us</h3>
                    <p>Best Choice is a document clearance company that provides professional and affordable services for individuals and businesses. We have been in the industry for over 10 years, and we have the expertise and experience to handle any document clearance needs. Whether you need to clear your documents for immigration, education, employment, or any other purpose, we can help you with speed and efficiency. We also offer online document clearance services, where you can upload your documents and get them cleared in as little as 24 hours. We value our customers and their satisfaction, and we strive to deliver the highest quality of service. We are also committed to maintaining the security and confidentiality of your documents. At Best Choice, we make document clearance easy and hassle-free for you. Contact us today and let us take care of your document clearance needs.</p>
                    <button>Read More</button>
                </div>



            </div>
        </div>

    )
}

export default Aboutus