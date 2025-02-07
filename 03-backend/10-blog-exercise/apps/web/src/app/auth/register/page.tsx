export default function RegisterPage() {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div>
          <label htmlFor="role">Role</label>
          <select id="role">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="referralCode">Referral Code</label>
          <input type="text" id="referralCode" />
        </div>
      </form>
      <p>Already have an account? Login here</p>
    </section>
  );
}
