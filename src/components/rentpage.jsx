import { SiVisa, SiMastercard } from "react-icons/si";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function RentPage({ carOverview }) {
  const [modal, setModal] = useState(false);
  const [ord, setOrd] = useState({});
  const order = {};
  const calculateDays = (date1, date2) => {
    return Math.floor((Date.parse(date2) - Date.parse(date1)) / 86400000);
  };
  const pr = (e) => {
    e.preventDefault();

    order.name = e.target.name.value;
    order.number = e.target.phonenumber.value;
    order.authoraddress = e.target.address.value;
    order.authortown = e.target.town.value;
    order.pickuplocation = e.target.location.value;
    order.pickupdate = e.target.date.value;
    order.pickuptime = e.target.time.value;
    order.dropofflocation = e.target.locationdrop.value;
    order.dropoffdate = e.target.datedrop.value;
    order.dropofftime = e.target.timedrop.value;
    order.orderdays = calculateDays(order.pickupdate, order.dropoffdate);
    order.ordervalue = order.orderdays * carOverview.price;
    order.ordervaluetax = order.ordervalue / 10;
    order.orderSum = order.ordervalue + order.ordervaluetax;
    setOrd(order);
    setModal(!modal);
    console.log(order);
  };
  return (
    <div className="bg-[#f6f7f9] font-varelaRound p-2 xl:flex-row flex flex-col justify-around gap-2 ">
      <form onSubmit={pr} className=" xl:order-1 order-2">
        <div className=" flex flex-col gap-5 ">
          <div className="p-4 bg-[#ffffff] rounded-[8px]">
            <h4 className="text-xl font-bold">Billing Info</h4>
            <p className="pt-2 flex justify-between">
              <span className="text-[#90A3BF]">
                Please enter your billing info
              </span>
              <span className="text-[#90A3BF]">Step 1 of 4</span>
            </p>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col w-[48%] ">
                <label className=" pl-2 pt-4 pb-3 font-semibold ">Name</label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-[#F6F7F9] p-3 rounded-[8px] focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="font-semibold pl-2 pt-4 pb-3 ">
                  Phone Number
                </label>
                <input
                  name="phonenumber"
                  required
                  placeholder="Phone number"
                  className="bg-[#f6f7f9] p-3 rounded-[8px] focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="font-semibold pl-2 pt-4 pb-3">Address</label>
                <input
                  name="address"
                  required
                  placeholder="Address"
                  className="bg-[#f6f7f9] p-3 rounded-[8px] focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="font-semibold pl-2 pt-4 pb-3 ">
                  Town/City
                </label>
                <input
                  name="town"
                  required
                  placeholder="Town or city"
                  className="bg-[#f6f7f9] p-3 rounded-[8px] focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="p-4  bg-[#ffffff] rounded-[8px]">
            <h4 className="text-xl font-bold">Rental Info</h4>
            <p className="flex pt-2 justify-between text-[#90A3BF]">
              <span>Please select your rental date</span>
              <span>Step 2 of 4</span>
            </p>
            <h4 className="pt-12 font-bold ">
              <span className="">⚪</span> Pick - Up
            </h4>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col w-[48%]">
                <label
                  htmlFor="location"
                  className="pl-2 pt-4 pb-3 font-semibold"
                >
                  Locations
                </label>
                <select
                  id="location"
                  required
                  className="bg-[#F6F7F9] p-3 rounded-[8px]  focus:outline-none"
                >
                  <option value="" className="text-[#90A3BF]">
                    Select your city
                  </option>
                  <option value="Tbilisi">Tbilisi</option>
                  <option value="Rustavi">Rustavi</option>
                  <option value="Telavi">Telavi</option>
                  <option value="Sighnagi">Sighnagi</option>
                  <option value="Kutaisi">Kutaisi</option>
                  <option value="Batumi">Batumi</option>
                </select>
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="date" className="pl-2 pt-4 pb-3 font-semibold">
                  Date
                </label>
                <input
                  required
                  type="date"
                  id="date"
                  className="bg-[#F6F7F9] p-3 rounded-[8px] focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="time" className="pl-2 pt-4 pb-3 font-semibold">
                  Time
                </label>
                <select
                  required
                  id="time"
                  className="bg-[#F6F7F9] p-3 rounded-[8px]  focus:outline-none"
                >
                  <option value="" className="text-[#90A3BF]">
                    Select your Time
                  </option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
            </div>
            <h4 className="pt-12 font-bold ">
              <span className="">⚫</span> Drop - Off
            </h4>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col w-[48%]">
                <label
                  htmlFor="locationdrop"
                  className="pl-2 pt-4 pb-3 font-semibold"
                >
                  Locations
                </label>
                <select
                  required
                  id="locationdrop"
                  className="bg-[#F6F7F9] p-3 rounded-[8px]  focus:outline-none"
                >
                  <option value="" className="text-[#90A3BF]">
                    Select your city
                  </option>
                  <option value="Tbilisi">Tbilisi</option>
                  <option value="Rustavi">Rustavi</option>
                  <option value="Telavi">Telavi</option>
                  <option value="Sighnagi">Sighnagi</option>
                  <option value="Kutaisi">Kutaisi</option>
                  <option value="Batumi">Batumi</option>
                </select>
              </div>
              <div className="flex flex-col w-[48%]">
                <label
                  htmlFor="location"
                  className="pl-2 pt-4 pb-3 font-semibold"
                >
                  Date
                </label>
                <input
                  required
                  type="date"
                  id="datedrop"
                  className="bg-[#F6F7F9] p-3 rounded-[8px] focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label
                  htmlFor="timedrop"
                  className="pl-2 pt-4 pb-3 font-semibold"
                >
                  Time
                </label>
                <select
                  required
                  id="timedrop"
                  className="bg-[#F6F7F9] p-3 rounded-[8px]  focus:outline-none"
                >
                  <option value="" className="text-[#90A3BF]">
                    Select your Time
                  </option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#ffffff] rounded-[8px]">
            <h4 className="text-xl font-bold">Payment Method</h4>
            <p className="pt-2 pb-8 flex justify-between">
              <span className="text-[#90A3BF]">
                Please enter your payment method
              </span>
              <span className="text-[#90A3BF]">Step 3 of 4</span>
            </p>
            <div className="p-4  bg-[#f6f7f9] rounded-[8px] ">
              <div className="flex w-[100%]  justify-between">
                <span className="p-2 font-semibold ">Credit Card</span>
                <div className="flex gap-6">
                  <SiVisa className="text-5xl text-blue-600" />
                  <SiMastercard className="text-5xl text-red-500" />
                </div>
              </div>

              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col w-[48%]">
                  <label
                    htmlFor="cardnumber"
                    className="pl-2 pt-4 pb-3 font-semibold"
                  >
                    Card Number
                  </label>
                  <input
                    required
                    id="cardnumber"
                    placeholder="Card number"
                    type="number"
                    className="bg-[#FFFFFF] p-3 rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label
                    htmlFor="expirationdate"
                    className="pl-2 pt-4 pb-3 font-semibold"
                  >
                    Expiration Date
                  </label>
                  <input
                    required
                    placeholder="DD/MM/YY"
                    type="date"
                    className="bg-[#FFFFFF] p-3 rounded-[8px] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label
                    htmlFor="cardholder"
                    className="pl-2 pt-4 pb-3 font-semibold"
                  >
                    Card Holder
                  </label>
                  <input
                    required
                    id="cardholder"
                    placeholder="Card holder"
                    className="bg-[#FFFFFF] p-3 rounded-[8px] focus:outline-none"
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="cvc" className="pl-2 pt-4 pb-3 font-semibold">
                    CVC
                  </label>
                  <input
                    required
                    id="cvc"
                    placeholder="CVC"
                    className="bg-[#FFFFFF] p-3 rounded-[8px] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#ffffff] rounded-[8px]">
            <h4 className="text-xl font-bold">Confirmation</h4>
            <p className="pt-2 pb-2 text-[#90A3BF]">
              We are getting to the end. Just few clicks and your rental is
              ready !
            </p>
            <div className="flex pb-8 flex-col gap-4">
              <div className="p-4 bg-[#f6f7f9] rounded-[8px] flex  gap-6">
                <input required type="checkbox" id="confirmMail" />
                <label htmlFor="confirmMail">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed !
                </label>
              </div>
              <div className="p-4 bg-[#f6f7f9] rounded-[8px] flex  gap-6">
                <input required type="checkbox" id="confirmpolicy" />
                <label htmlFor="confirmpolicy">
                  I agree with our terms and conditions and privacy policy
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="p-4 bg-[#3563E9] hover:opacity-80 text-[#ffffff] rounded-[12px]"
            >
              Rent Now
            </button>
          </div>
          <div></div>
        </div>
      </form>
      <div className=" order-1">
        <div className="bg-[#ffffff] flex flex-col p-4 rounded-[8px] ">
          <h4 className="text-2xl font-bold">Rental Summary</h4>
          <span className="text-[#90A3BF] flex pt-2">
            Prices may change depending on the length of the rental and the
            price of your rental car
          </span>
          <div className="flex pt-8">
            <img
              src={carOverview.sr}
              className="bg-blue-400 rounded-[8px] p-4"
            />
            <div className="flex flex-col p-4">
              <h3 className="text-3xl font-bold">{carOverview.name}</h3>
              <p className="pt-2">440+ Reviewer</p>
            </div>
          </div>
          <p className="flex justify-between p-2 pt-8">
            <span className="text-[#90A3BF]">Subtotal</span>
            <span className="font-bold text-xl">$ {carOverview.price}</span>
          </p>
          <p className="flex justify-between p-2 pb-4">
            <span className="text-[#90A3BF]">Tax</span>
            <span className="font-bold text-xl">
              $ {carOverview.price / 10}
            </span>
          </p>
          <input
            placeholder="Apply promo code"
            className="bg-[#f6f9f9] p-4  w-[100%] rounded-[8px] focus:outline-none"
          />
          <div className="flex justify-between p-2 pt-6">
            <div className="flex flex-col">
              <h4 className="font-bold text-xl">Total Rental Price</h4>
              <span className="text-[#90A3BF]">
                Overral price and includes rental discount
              </span>
            </div>
            <h4 className="text-2xl font-bold self-center">
              {carOverview.price + carOverview.price / 10}$
            </h4>
          </div>
        </div>
      </div>
      {modal ? (
        <div className="fixed  flex justify-center items-center z-1 left-0 top-0 w-[100%] h-[100%] bg-[#000000]/40 overflow-auto ">
          <div className="bg-white p-4 rounded-[8px]">
            <h3 className="text-2xl font-bold pb-6 ">Order Summary</h3>
            <div className="flex">
              <img
                src={carOverview.sr}
                className="bg-blue-300 p-4 rounded-[8px]"
              />
              <h4 className="font-bold text-2xl self-center p-4">
                {carOverview.name}
              </h4>
            </div>
            <p className="pt-4 font-semibold text-xl">{ord.name}</p>
            <p className="pb-4">{ord.number}</p>
            <p className="flex justify-between">
              <span className="font-semibold">Pick-Up Location</span>
              <span className="font-semibold">{ord.pickuplocation}</span>
            </p>
            <p className="flex font-semibold justify-between">
              <span>Pick-Up Date</span>
              <span>
                {ord.pickupdate} {ord.pickuptime}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Drop-Off Location</span>
              <span className="font-semibold">{ord.dropofflocation}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Drop-Off Date</span>
              <span className="font-semibold">
                {ord.dropoffdate} {ord.dropofftime}
              </span>
            </p>
            <br />
            <p className="flex justify-between font-semibold">
              <span>Rental Price</span>
              <span>${ord.ordervalue}</span>
            </p>
            <p className="flex justify-between font-semibold">
              <span>Tax</span>
              <span>${ord.ordervaluetax}</span>
            </p>
            <p className="flex justify-between font-semibold">
              <span>Total Price</span>
              <span>${ord.orderSum}</span>
            </p>
            <br />
            <div className="flex justify-between ">
              <button className="bg-blue-400 text-white p-2 pl-4 pr-4 w-[120px] hover:opacity-80 rounded-[8px]">
                Print
              </button>
              <Link to="/">
                <button className="bg-blue-400 text-white p-2 pl-4 pr-4 w-[120px] hover:opacity-80 rounded-[8px]">
                  Done
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
