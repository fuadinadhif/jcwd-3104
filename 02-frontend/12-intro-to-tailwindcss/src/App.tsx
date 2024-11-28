export default function App() {
  return (
    <div className="bg-normal-white p-8 rounded-xl w-[600px]">
      <h1 className="text-2xl font-bold text-dark-grey">Contact Us</h1>
      <form className="mt-5">
        {/* First Row */}
        <div className="flex gap-3 mb-5">
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
            <input type="text" id="lastName" />
          </div>
        </div>

        {/* Second Row */}
        <div className="col-wrapper mb-5">
          <label className="input-title" htmlFor="emailAddress">
            Email Address
          </label>
          <input type="email" id="emailAddress" />
        </div>

        {/* Third Row */}
        <div className="mb-5">
          <h2 className="input-title">Query Type</h2>
          <div className="flex gap-3">
            <div className="radio-wrapper">
              <input type="radio" id="generalEnquiry" name="queryType" />
              <label htmlFor="generalEnquiry">General Enquiry</label>
            </div>
            <div className="radio-wrapper">
              <input type="radio" id="supportRequest" name="queryType" />
              <label htmlFor="supportRequest">Support Request</label>
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="col-wrapper mb-5">
          <label className="input-title" htmlFor="message">
            Message
          </label>
          <textarea name="" id="message"></textarea>
        </div>

        {/* Fifth Row */}
        <div className="flex items-center gap-3 mb-5">
          <input type="checkbox" name="" id="consent" />
          <label htmlFor="consent" className="text-xs">
            I consent to being contacted by the team
          </label>
        </div>

        {/* Sixth Row */}
        <button className="bg-medium-green text-white w-full py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
