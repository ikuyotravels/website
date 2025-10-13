
import { useState } from 'react';

const TravelInquiryForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      setStatus('✅ Thank you! Your inquiry has been sent.');
      form.reset();
    } else {
      setStatus('❌ Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <form
      action="https://formspree.io/f/yourFormID" // TODO: Replace with your Formspree form ID
      method="POST"
      id="travel-form"
      className="max-w-lg mx-auto bg-gray-50 p-6 rounded-xl shadow-md space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Travel Inquiry Form</h2>

      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className="text-gray-700">First Name</span>
          <input
            type="text"
            name="first_name"
            required
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="John"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Last Name</span>
          <input
            type="text"
            name="last_name"
            required
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Doe"
          />
        </label>
      </div>

      {/* Email */}
      <label className="block">
        <span className="text-gray-700">Email Address</span>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          placeholder="you@example.com"
        />
      </label>

      {/* Service Required */}
      <fieldset className="block">
        <legend className="text-gray-700 mb-2 font-medium">Service Required</legend>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="service[]" value="Day trip" className="h-4 w-4" />
            <span>Day trip</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="service[]" value="Multi-day trip" className="h-4 w-4" />
            <span>Multi-day trip</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="service[]" value="Airport transfer" className="h-4 w-4" />
            <span>Airport transfer</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="service[]" value="Other" className="h-4 w-4" />
            <span>Other</span>
          </label>
        </div>
      </fieldset>

      {/* Travel duration */}
      <label className="block">
        <span className="text-gray-700">Travel Duration</span>
        <input
          type="date"
          name="travel_date"
          required
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>

      {/* Number of travelers */}
      <label className="block">
        <span className="text-gray-700">Number of Travelers</span>
        <input
          type="number"
          name="travelers"
          min="1"
          required
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          placeholder="e.g. 3"
        />
      </label>

      {/* Pieces of luggage */}
      <label className="block">
        <span className="text-gray-700">Pieces of Luggage</span>
        <input
          type="number"
          name="luggage"
          min="0"
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          placeholder="e.g. 4"
        />
      </label>

      {/* Message */}
      <label className="block">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Tell us more about your trip..."
        ></textarea>
      </label>

      {/* Hidden subject (optional) */}
      <input type="hidden" name="_subject" value="New travel inquiry submission" />

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit Inquiry
      </button>

      <p id="form-status" className="text-center text-sm mt-2 text-gray-600">{status}</p>
    </form>
  );
};

export default TravelInquiryForm;
