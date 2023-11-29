import React from 'react';
import logoimage from '../Images/Frame 34571.png';
import './RecentBlog.css';
import image1  from '../Images/blog1.jpg'
import image2  from '../Images/blog2.jpg'
import image3  from '../Images/blog3.jpg'

function RecentBlog() {
  return (
    <div className='recentbloghome'>

            <div className='recentblogname'>
                <div><img src={logoimage} alt="" /></div>
                <div className='qwas'>Recent Blogs</div>
                <div><img src={logoimage} alt="" /></div>
            </div>
            <div className='d-flex justify-content-center dfgdfgdf'>
                <div className='row exrt'>

                    <div className='col-12 col-lg-3 col-md-4 col-sm-6 recentblogbox'>


                        <div><img src={image1} alt="" /></div>
                        <h3>How to Prepare Your Documents for Clearance</h3>
                        <p>A guide on how to organize, scan, and upload your documents for online document clearance services. Learn the best practices and tips to ensure a smooth and hassle-free document clearance process.</p>
                        <p>31 Dec 2023</p>

                    </div>

                    <div className='col-12 col-lg-3 col-md-4 col-sm-6 recentblogbox'>


                        <div><img src={image2} alt="" /></div>
                        <h3>How to Prepare Your Documents for Clearance</h3>
                        <p>A guide on how to organize, scan, and upload your documents for online document clearance services. Learn the best practices and tips to ensure a smooth and hassle-free document clearance process.</p>
                        <p>31 Dec 2023</p>

                    </div>

                    <div className='col-12 col-lg-3 col-md-4 col-sm-6 recentblogbox'>


                        <div><img src={image3} alt="" /></div>
                        <h3>How to Prepare Your Documents for Clearance</h3>
                        <p>A guide on how to organize, scan, and upload your documents for online document clearance services. Learn the best practices and tips to ensure a smooth and hassle-free document clearance process.</p>
                        <p>31 Dec 2023</p>

                    </div>



                </div>

            </div>
            
        </div>
  )
}

export default RecentBlog