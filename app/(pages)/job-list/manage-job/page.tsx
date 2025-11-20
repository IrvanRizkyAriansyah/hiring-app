"use client";
import EmptyState from "@/app/_components/empty-state";
import { useSearchParams } from "next/navigation";
import empty2 from "@/app/assets/EmptyState2.svg"
import React from "react";
import DataTable from "@/app/_components/data-table";

export default function ManageJob() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const columns = [
    { key: "name", label: "NAMA LENGKAP" },
    { key: "email", label: "EMAIL ADDRESS" },
    { key: "phone", label: "PHONE NUMBERS" },
    { key: "dob", label: "DATE OF BIRTH" },
    { key: "domicile", label: "DOMICILE" },
    { key: "gender", label: "GENDER" },
    { key: "linkedin", label: "LINK LINKEDIN" },
  ];

  const data = [
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
    {
      name: "Dityo Hendyawan",
      email: "dityohendyawan@yahoo.com",
      phone: "081184180678",
      dob: "30 January 2001",
      domicile: "Jakarta",
      gender: "Female",
      linkedin: <a className="text-rk-primary-main" href="https://www.linkedin.com/in/user2" target="_blank">https://www.linkedin.com/in/user2</a>,
    },
  ];


  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[18px] leading-[28px] font-bold">{title}</h1>
      <div className="rounded-lg border border-rk-neutral-40 p-6">
        {/* <EmptyState title="No candidates found" desc="Share your job vacancies so that more candidates will apply." image={empty2}/> */}
        
        <DataTable columns={columns} data={data} freezeKey="name"/>
      </div>
    </div>
  );
}
