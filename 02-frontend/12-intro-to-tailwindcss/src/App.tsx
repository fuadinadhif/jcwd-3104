export default function App() {
  return (
    <div>
      <h1 className="text-6xl font-extrabold">Contact Us</h1>
      <form>
        {/* First Row */}
        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
        </div>

        {/* Second Row */}
        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <input type="email" id="emailAddress" />
        </div>

        {/* Third Row */}
        <div>
          <h2>Query Type</h2>
          <div>
            <input type="radio" id="generalEnquiry" name="queryType" />
            <label htmlFor="generalEnquiry">General Enquiry</label>
          </div>
          <div>
            <input type="radio" id="supportRequest" name="queryType" />
            <label htmlFor="supportRequest">Support Request</label>
          </div>
        </div>

        {/* Fourth Row */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="" id="message"></textarea>
        </div>

        {/* Fifth Row */}
        <div>
          <input type="checkbox" name="" id="consent" />
          <label htmlFor="consent">
            I consent to being contacted by the team
          </label>
        </div>

        {/* Sixth Row */}
        <button>Submit</button>
      </form>
    </div>
  );
}
