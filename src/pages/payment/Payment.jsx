
import Navbar from '../../components/navbar/Navbar'
import './Payment.css'
import rupay from '../../assets/rupay.svg'
import debit from '../../assets/debit.svg'
import bank from '../../assets/bank.svg'
import gpay from '../../assets/gpay.svg'
import bhim from '../../assets/bhim.svg'
import phonepe from '../../assets/phonepe.svg'
import paytm from '../../assets/paytm.svg'
import secure from '../../assets/secure.svg'
import center from '../../assets/center.svg'
import tag from '../../assets/tag.svg'
import Upi from '../../components/upi/Upi'
import { useEffect, useState } from 'react'
export default function Payment() {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 660);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 660);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <>
    <Navbar/>
    <div className="w-100 outer payment mt-3 ">
        <div className="d-flex align-items-center">
        <i style={{fontSize:"30px"}} className="fa-solid fa-arrow-left-long me-3"></i>
        <h3 className='mb-0 textSize' >Select Payment Method</h3>
        </div>
        <div className="row mt-4 ">
           <div className="col-lg-8 p-3 leftDiv px-0" style={{height:"70vh"}}>
           <div className="d-flex align-items-start">
          { !isMobileView && <>
    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <div style={{width:"280px",height:"120px"}} className="nav-link active d-flex  " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">

    <img style={{height:"",width:"25px"}} className='me-3 mb-5' src={rupay} alt='R'/>
    <div className="d-flex ms-2 flex-column">
        <h6 className='mb-1 mt-3 blackText ' >UPI Options</h6>
        <p className='mb-0 pb-2' >Pay Directly from Your Bank Account</p>
    </div>

    </div>
    <div style={{width:"280px",height:"120px"}} className="nav-link d-flex" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
    <img style={{height:"",width:"25px"}} className='me-3 mb-5' src={debit} alt='R'/>
    <div className="d-flex ms-2 flex-column">
        <h6 className='mb-1 mt-3 blackText' >Debit/Credit Card</h6>
        <p className='mb-0 pb-2' >Visa, MasterCard, AMEX Rupay and Dinnerclub</p>
    </div>
    </div>
    <div style={{width:"280px",height:"120px"}} className="nav-link d-flex" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
    <img style={{height:"",width:"25px"}} className='me-3 mb-5' src={bank} alt='R'/>
    <div className="d-flex ms-2 flex-column">
        <h6 className='mb-1 mt-3 blackText' >Net Banking</h6>
        <p className='mb-0 pb-2' >All Major Bank Available</p>
    </div>
    </div>
    </div>

    <div className="tab-content" id="v-pills-tabContent">
    <Upi/>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    </div>
    </>}







   {isMobileView && <div className="accordion mobile w-100" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="p-0 shadow-none nav flex-column accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div style={{width:"280px",height:""}} className="nav-link active d-flex  " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">

    <img style={{height:"",width:"25px"}} className='me-1 mb-0' src={rupay} alt='R'/>
    <div className="d-flex ms-2 flex-column">
        <h6 className='mb-1 mt-3 blackText ' >UPI Options</h6>
        <p className='mb-0 pb-2' >Pay Directly from Your Bank Account</p>
    </div>

    </div>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
<Upi/>
      </div>
    </div>
  </div>
 

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne2">
      <button className="p-0 shadow-none nav flex-column accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
        <div style={{width:"280px",height:""}} className="nav-link active d-flex  " id="v-pills-home-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-home2" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">

    <img style={{height:"",width:"25px"}} className='me-1 mb-0' src={debit} alt='R'/>
    <div className="d-flex ms-2 flex-column">
        <h6 className='mb-1 mt-3 blackText ' >Debit/Credit Card</h6>
        <p className='mb-0 pb-2' >Visa, MasterCard, AMEX, Rupay and Dinnerclub</p>
    </div>

    </div>
      </button>
    </h2>
    <div id="collapseOne2" className="accordion-collapse collapse show" aria-labelledby="headingOne2" data-bs-parent="#accordionExample">
      <div className="accordion-body">
{/* <Upi/> */}
<h2>Hello</h2>
      </div>
    </div>
  </div>




  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne3">
      <button className="p-0 shadow-none nav flex-column accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
        <div style={{width:"280px",height:""}} className="nav-link active d-flex  " id="v-pills-home-tab2" data-bs-toggle="pill" data-bs-target="#v-pills-home2" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">

    <img style={{height:"",width:"25px"}} className='me-1 mb-0' src={bank} alt='R'/>
    <div className="d-flex ms-2 flex-column">
        <h6 className='mb-1 mt-3 blackText ' >NetBanking</h6>
        <p className='mb-0 pb-2' >All Major banks Available</p>
    </div>

    </div>
      </button>
    </h2>
    <div id="collapseOne3" className="accordion-collapse collapse show" aria-labelledby="headingOne3" data-bs-parent="#accordionExample">
      <div className="accordion-body">
{/* <Upi/> */}
<h2>Hello, Bro</h2>
      </div>
    </div>
  </div>



</div>}

















            </div>
           </div>


           <div className="col-lg-4 rightDiv">
            <div  className="rightInner p-2">

            
                <div className="mt-2">
                    <h6 className='fw-bold text-center' >Mumbai - Goa - Lakshadweep - Mumbai (5N/6D)</h6>
                    <div className="d-flex justify-content-between my-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h6 className='mb-0' >Feb 15 2024</h6>
                            <p className='mb-0 my-1 text-center' >Saturday 6:30 PM</p>
                        </div>
                        <div className="d-flex">
                            <img className='middle_logo'  src={center} alt='center' />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h6 className='mb-0' >Feb 15 2024</h6>
                            <p className='mb-0 my-1 text-center' >Saturday 6:30 PM</p>
                        </div>
                    </div>
                </div>
           
            </div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item border-0">
    <h2 className="accordion-header">
      <button className="accordion-button shadow-none py-3 justify-content-center " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        View More
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body pt-0 pb-2 px-0">
      <div className="d-flex mt-2 pt-3 px-3  ">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <h6 className='mb-0 fw-bold' >Price Details</h6>
                    <p className='mb-0 blue_hide fw-semibold '  >Hide Price Breakup</p>
                </div>
            </div>


    
            <hr/>
            <div className="d-flex px-3 my-2 justify-content-between">
                <p className='mb-0 fw-semibold '>Ocean View Cabin</p>
                <p className='mb-0 fw-semibold '>₹ 18,260</p>
            </div>
            <div className="d-flex px-3 my-2 justify-content-between">
                <p className='mb-0 fw-semibold '>Mini Suite Cabin</p>
                <p className='mb-0 fw-semibold '>₹ 18,260</p>
            </div>
            <div className="d-flex px-3 my-2 justify-content-between">
                <p className='mb-0 fw-semibold '>Service Charge & Levies</p>
                <p className='mb-0 fw-semibold '>₹ 19,754</p>
            </div>
            <div className="d-flex px-3 my-2 justify-content-between">
                <p className='mb-0 fw-semibold '>Fuel Surcharge</p>
                <p className='mb-0 fw-semibold '>₹ 4,980</p>
            </div>
            <div className="d-flex px-3 my-2 justify-content-between">
                <div className="d-flex align-items-center">
                <p className='mb-0 fw-semibold kids'>Kids Sain Offer</p>
                <img className='ms-2 mt-1' src={tag} style={{height:"18px", width:"18px"}} alt='he' />
                </div>
                <p className='mb-0 fw-semibold kids'>₹ 5,980</p>
            </div>
            <div className="d-flex px-3 my-2 justify-content-between">
                <p className='mb-0 fw-semibold '>Sub-total</p>
                <p className='mb-0 fw-semibold '>₹ 58,260</p>
            </div>

            <div className="inner ">
            <div className="d-flex py-2 px-3   justify-content-between">
                <p className='mb-0 fw-semibold '>Taxes</p>
                <p className='mb-0 fw-semibold '>₹ 14,109</p>
            </div>
            <div className="d-flex py-2 px-3  justify-content-between">
                <p className='mb-0 fw-semibold '>GST</p>
                <p className='mb-0 fw-semibold '>₹ 1,343</p>
            </div>
            </div>
            <div className="d-flex mt-2 px-3  justify-content-between">
                <h5 className='mb-0 fw-bold fare '>Total Fare</h5>
                <h5 className='mb-0 fw-bold  totalPrice'>₹ 76,433</h5>
            </div>
      </div>
    </div>
  </div>
            </div>

         



            </div>
        </div>
    </div>
    </>
  )
}
