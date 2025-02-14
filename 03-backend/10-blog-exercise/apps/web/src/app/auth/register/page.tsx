"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notify } from "@/utils/notify-toast";

export default function RegisterPage() {
  const [roles, setRoles] = useState<string[]>();
  const [formRegister, setFormRegister] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getRoles() {
      try {
        const response = await fetch("http://localhost:8000/api/v1/roles");
        const roles = await response.json();
        setRoles(roles.data);
      } catch (error) {
        console.error(error);
      }
    }

    getRoles();
  }, []);

  async function handleSubmit() {
    try {
      setIsLoading(true);

      const response = await fetch(
        "http://localhost:8000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formRegister),
        }
      );

      if (!response.ok) {
        return notify("Error!");
      }

      notify("Registration successfull");
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    } finally {
      setFormRegister({
        name: "",
        username: "",
        email: "",
        password: "",
        role: "",
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formRegister.name}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-[125px_1fr]">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formRegister.username}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, username: e.target.value };
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-[125px_1fr]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formRegister.email}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, email: e.target.value };
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
            value={formRegister.password}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-[125px_1fr]">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            defaultValue=""
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, role: e.target.value };
              })
            }
            required
          >
            <option value="" disabled>
              Pick a role
            </option>
            {roles?.map((item: string, index: number) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="grid grid-cols-[125px_1fr]">
          <label htmlFor="referralCode">Referral Code</label>
          <input type="text" id="referralCode" />
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
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
      <p>Already have an account? Login here</p>
    </section>
  );
}
