"use client";
import CountryPhoneInput from "@/app/_components/country-phone";
import RadioGroup from "@/app/_components/radio-group";
import DomicileSelect from "@/app/_components/select-domicile";
import SearchableSelectDomisili from "@/app/_components/select-domicile";
import TextInput from "@/app/_components/text-input";
import UploadPhoto from "@/app/_components/upload-photo";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Resume() {
  const router = useRouter();
  const [domisili, setDomisili] = useState(undefined);
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-rk-neutral-20 min-h-screen flex justify-center p-10">
      <div className="bg-rk-neutral-10 md:w-1/2 w-full border border-rk-neutral-40 flex flex-col">
        <div className="flex-1 overflow-y-auto p-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                className="btn w-fit h-fit p-1 m-0"
                onClick={() => router.back()}
              >
                <ArrowLeftIcon className="w-6" />
              </button>
              <h1 className="text-[18px] leading-[28px] font-bold">
                Apply Front End at Rakamin
              </h1>
            </div>
            <p>ℹ️ This field required to fill</p>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-rk-danger-main text-rk-text-s font-rk-text-s-bold">
              <span>*</span>Required
            </p>
            <UploadPhoto />
            <TextInput
              label="Full name"
              required
              placeholder="Enter your full name"
            />
            <TextInput
              label="Date of birth"
              type="date"
              required
              placeholder="Select your date of birth"
            />
            <RadioGroup
              label="Pronoun (gender)"
              name="gender"
              options={[
                { label: "She/her (Female)", value: "male" },
                { label: "He/him (Male)", value: "female" },
              ]}
              value={gender}
              onChange={setGender}
            />
            <DomicileSelect
              required
              label="Domicile"
              value={domisili}
              onChange={(v: any) => setDomisili(v)}
            />
            <CountryPhoneInput
              value={phone}
              onChange={setPhone}
              required
              label="Phone number"
            />
            <TextInput
              label="Email"
              type="email"
              required
              placeholder="Enter your email address"
            />
            <TextInput
              label="Link Linkedin"
              type="link"
              required
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>
        <div className="px-10 py-6 border-t border-rk-neutral-40">
          <button className="btn bg-rk-primary-main rounded-lg w-full text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
