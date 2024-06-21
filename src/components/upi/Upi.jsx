
import gpay from '../../assets/gpay.svg'
import bhim from '../../assets/bhim.svg'
import phonepe from '../../assets/phonepe.svg'
import paytm from '../../assets/paytm.svg'
import secure from '../../assets/secure.svg'
export default function Upi() {
  return (
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
    </div>  )
}
