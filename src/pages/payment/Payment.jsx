
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
export default function Payment() {
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
    <div className="tab-pane pe-3 fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
       <h5>Pay using UPI</h5>

        <div className="d-flex mt-3 align-items-center justify-content-between">
            <div className="imgOuter mx-2">
            <img src={gpay} alt='Gpay'/>
            </div>
            <div className="imgOuter mx-2">
            <img src={bhim} alt='bhim'/>
            </div>
            <div className="imgOuter mx-2">
            <img src={phonepe} alt='phonepe'/>
            </div>
            <div className="imgOuter mx-2">
            <img src={paytm} alt='paytm'/>
            </div>
        </div>

        <div className="mt-4 px-3s">
  <input type="text" className=" shadow-none w-100 form-control upiInput " id="exampleFormControlInput1" placeholder="Enter UPI Id"/>
</div>


<div className="d-flex mt-4 flex-column">
    <div className="d-flex py-1 align-items-center">
        <button  className='border-0 number' >1</button>
        <p className='mb-0 ms-2 fw-semibold' >Enter your UPI ID and click on Pay Now.</p>
    </div>
    <div className="d-flex py-2 align-items-center">
        <button  className='border-0 number' >2</button>
        <p className='mb-0 ms-2 fw-semibold' >You will receive a  request from Payment Gateway in your UPI App.</p>
    </div>
    <div className="d-flex py-1 align-items-center">
        <button  className='border-0 number' >3</button>
        <p className='mb-0 ms-2 fw-semibold' >Login to UPI app by entering your mpin & authorize payment.</p>
    </div>
</div>


<div className="d-flex mt-5 align-items-center justify-content-center">
    <img src={secure} alt=''/>
    <p style={{fontSize:"20px"}} className=' grey mb-0 fw-semibold ms-2' >Safe & Secure Payment</p>
</div>


<button className='paymentBtn fw-semibold mt-4  ' >Proceed To Payment</button>
    </div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
  </div>
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
