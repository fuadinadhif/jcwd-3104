import React from "react";

export default function App() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const output = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.emailAddress.value,
      queryType: form.queryType.value,
      message: form.message.value,
      consent: form.consent.checked,
    };

    console.log(output);
  }

  return (
    <div className="bg-normal-white p-8 rounded-xl w-full">
      <h1 className="text-2xl font-bold text-dark-grey">Contact Us</h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        {/* First Row */}
        <div className="flex gap-3 mb-5 flex-col sm:flex-row">
          <div className="col-wrapper">
            <label className="input-title" htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" required />
          </div>
          <div className="col-wrapper">
            <label className="input-title" htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" required />
          </div>
        </div>

        {/* Second Row */}
        <div className="col-wrapper mb-5">
          <label className="input-title" htmlFor="emailAddress">
            Email Address
          </label>
          <input type="email" id="emailAddress" required />
        </div>

        {/* Third Row */}
        <div className="mb-5">
          <h2 className="input-title">Query Type</h2>
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="radio-wrapper">
              <input
                type="radio"
                id="generalEnquiry"
                name="queryType"
                value="general"
                required
              />
              <label htmlFor="generalEnquiry" className="text-sm ">
                General Enquiry
              </label>
            </div>
            <div className="radio-wrapper">
              <input
                type="radio"
                id="supportRequest"
                name="queryType"
                value="support"
                required
              />
              <label htmlFor="supportRequest" className="text-sm">
                Support Request
              </label>
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="col-wrapper mb-5">
          <label className="input-title" htmlFor="message">
            Message
          </label>
          <textarea name="" id="message" required></textarea>
        </div>

        {/* Fifth Row */}
        <div className="flex items-center gap-3 mb-5">
          <input type="checkbox" name="consent" id="consent" required />
          <label htmlFor="consent" className="text-xs">
            I consent to being contacted by the team
          </label>
        </div>

        {/* Sixth Row */}
        <button
          type="submit"
          className="bg-medium-green text-white w-full py-2 rounded-md hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
