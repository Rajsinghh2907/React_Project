import React from "react";

const PaymentSection = ({ onPaymentClick }) => {
  return (
    <section className="text-center py-12 mt-36 ">
      <h1 className="text-3xl font-semibold mb-4 ">Make a Payment</h1>
      <p className="text-xl text-gray-800 mb-6">
        Click the button below and fill out the form to complete your payment.
      </p>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-500"
        onClick={onPaymentClick}
      >
        PAYMENT BUTTON
      </button>
    </section>
  );
};

export default PaymentSection;
