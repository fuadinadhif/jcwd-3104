"use client";

export default function Navbar() {
  return (
    <button
      onClick={async () => {
        await fetch("http://localhost:8000/api/v1/auth/logout", {
          method: "POST",
          credentials: "include",
        });
      }}
    >
      Logout
    </button>
  );
}
