"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { notify } from "@/utils/notify-toast";

export default function LoginPage() {
  const [formLogin, setFormLogin] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit() {
    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formLogin),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        return notify(errorData.message || "Error login!");
      }

      notify("Login successfull");
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setFormLogin({
        emailOrUsername: "",
        password: "",
      });
      setIsLoading(false);
    }
  }

  return (
    <section className="flex flex-col min-h-screen justify-center items-center">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="grid grid-cols-[125px_1fr]">
          <label htmlFor="emailOrUsername">Email/Username</label>
          <input
            type="text"
            id="emailOrUsername"
            value={formLogin.emailOrUsername}
            onChange={(e) =>
              setFormLogin((prev) => {
                return { ...prev, emailOrUsername: e.target.value };
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-[125px_1fr]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formLogin.password}
            onChange={(e) =>
              setFormLogin((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
            required
          />
        </div>

        <button
          type="submit"
          className={`${
            isLoading
              ? "border-gray-500 text-gray-500"
              : "border-white text-white"
          } border  mt-2 mb-4`}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <p>Do not have an account? Register here</p>
    </section>
  );
}
