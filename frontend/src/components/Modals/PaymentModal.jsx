import React from "react";

const PaymentModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Make a Payment</h2>
        <form>
          <label className="block mb-2 font-bold">To *</label>
          <input
            type="text"
            className="border w-full p-2 mb-4 rounded"
            placeholder="Recipient Name"
            required
          />
          <label className="block mb-2 font-bold">From *</label>
          <select className="border w-full p-2 mb-4 rounded" required>
            <option value="" disabled selected>
              Select your name
            </option>
            <option value="John">John</option>
            <option value="Jane">Jane</option>
          </select>
          <label className="block mb-2 font-bold">Amount *</label>
          <input
            type="number"
            className="border w-full p-2 mb-4 rounded"
            placeholder="Enter Amount"
            required
          />
          <label className="block mb-2 font-bold">Description</label>
          <textarea
            className="border w-full p-2 mb-4 rounded"
            placeholder="Payment Description"
          ></textarea>
          <div className="flex justify-between">
            <button
              type="button"
              className="text-blue-600 font-bold"
              onClick={onClose}
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
