"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/assets/Logo-Rakamin.svg";
import { loginAction } from "@/app/actions/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passView, setPassView] = useState<"text" | "password">("password");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e:any) => {
    e.preventDefault()
    setLoading(true);
    setErrorMsg("");

    const response = await loginAction({
      email,
      password,
    });

    setLoading(false);

    if (response?.success === false) {
      setErrorMsg(response.message);
    }

  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[500px] flex flex-col gap-6">
        <Image src={Logo} alt="logo" />

        <form onSubmit={handleLogin}>
        <div className="shadow p-10 flex flex-col gap-4">
          <h1 className="text-rk-neutral-100 text-xl font-bold">
            Masuk ke Rakamin
          </h1>

          {errorMsg && (
            <p className="text-red-500 font-medium">{errorMsg}</p>
          )}

          <fieldset className="fieldset">
            <legend className="text-s">Alamat email</legend>
            <input
              type="email"
              className="input focus:outline-0 border-2 rounded-lg w-full"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="text-s">Kata sandi</legend>
            <div className="relative">
              <input
                type={passView}
                className="input focus:outline-0 border-2 rounded-lg w-full"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="absolute right-3 top-3 text-sm"
                onClick={() =>
                  setPassView(passView === "password" ? "text" : "password")
                }
              >
                {passView === "password" ? "👁️" : "🔒"}
              </button>
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className="btn bg-rk-secondary-main hover:bg-rk-secondary-hover border-0 rounded-lg"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
