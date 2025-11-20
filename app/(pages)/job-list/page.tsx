"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./_components/search-bar";
import EmptyState from "@/app/_components/empty-state";
import CardMenu from "./_components/card-menu";
import Modal from "@/app/_components/modal";
import TextInput from "@/app/_components/text-input";
import SelectBox from "@/app/_components/select-box";
import TextArea from "@/app/_components/text-area";
import Chip from "@/app/_components/chip";
import CardJob from "./_components/card-job";
import { useRouter } from "next/navigation";
import CardJobAplicant from "./_components/card-job-aplicant";
import CardJobDetail from "./_components/card-job-detail";
import { getJobsAction } from "@/app/actions/job";
import { useJobs } from "@/app/hooks/useJobs";
import { checkUserRole } from "@/lib/checkUserRole";
import { useSupabaseMutation } from "@/app/hooks/useSupabaseMutation";
import { useSupabaseData } from "@/app/hooks/useSupabaseData";

function JobList() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobType, setJobType] = useState("");
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const { insert: insertJob, loading: loadingInsert } = useSupabaseMutation("jobs");
const { insert: insertJobConfig } = useSupabaseMutation("job_configs");

  const [formData, setFormData] = useState({
    jobName: "",
    jobType: "",
    jobDesc: "",
    numCandidates: "",
    salaryMin: "",
    salaryMax: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    checkUserRole().then((userRole) => {
      if (!userRole) return router.push("/login");
      setRole(userRole);
    });
  }, []);

  useEffect(() => {
    const { jobName, jobType, jobDesc, numCandidates, salaryMin, salaryMax } =
      formData;
    setIsValid(
      jobName.trim() !== "" &&
        jobType !== "" &&
        jobDesc.trim() !== "" &&
        numCandidates !== "" &&
        salaryMin !== "" &&
        salaryMax !== ""
    );
  }, [formData]);

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const buildApplicationForm = () => {
  return {
    sections: [
      {
        title: "Minimum Profile Information Required",
        fields: mandatoryFields.map((f) => ({
          key: f.key,
          validation: {
            required: fieldConfig[f.key] === "mandatory",
          },
        })),
      },
    ],
  };
};


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!isValid) return;

  // Payload untuk jobs
  const payload = {
    title: formData.jobName,
    department: "Engineering",
    description: formData.jobDesc,
    status: "draft",
    salary_min: Number(formData.salaryMin),
    salary_max: Number(formData.salaryMax),
    salary_display: `Rp${formData.salaryMin} - Rp${formData.salaryMax}`,
    created_at: new Date().toISOString(),
  };

  // 1. INSERT JOB
  const { data: jobData, error: jobErr } = await insertJob(payload);

  if (jobErr) {
    console.error("Error creating job:", jobErr);
    return;
  }

  const newJob = Array.isArray(jobData) ? jobData[0] : jobData;
  const jobId = newJob.id;

  // 2. INSERT JOB CONFIG
  const configPayload = {
    job_id: jobId,
    application_form: buildApplicationForm(),
  };

  const { error: configErr } = await insertJobConfig(configPayload);

  if (configErr) {
    console.error("Error creating job config:", configErr);
    return;
  }

  setIsModalOpen(false);

  // Reset form
  setFormData({
    jobName: "",
    jobType: "",
    jobDesc: "",
    numCandidates: "",
    salaryMin: "",
    salaryMax: "",
  });

  // Reset mandatory fields
  setFieldConfig(
    mandatoryFields.reduce((acc, field) => {
      acc[field.key] = "mandatory";
      return acc;
    }, {} as Record<string, "mandatory" | "optional" | "off">)
  );
};


  const jobTypes = [
    { value: "full-time", label: "Full-time" },
    { value: "contract", label: "Contract" },
    { value: "part-time", label: "Part-time" },
    { value: "internship", label: "Internship" },
    { value: "freelance", label: "Freelance" },
  ];

  const mandatoryFields = [
    { key: "full_name", label: "Fullname" },
    { key: "photo_profile", label: "Photo Profile" },
    { key: "date_of_birth", label: "Date of Birth" },
    { key: "gender", label: "Gender" },
    { key: "domicile", label: "Domicile" },
    { key: "phone_number", label: "Phone Number" },
    { key: "email", label: "Email" },
    { key: "linkedin_link", label: "LinkedIn" },
  ];

  const [fieldConfig, setFieldConfig] = useState(
    mandatoryFields.reduce((acc, field) => {
      acc[field.key] = "mandatory";
      return acc;
    }, {} as Record<string, "mandatory" | "optional" | "off">)
  );

  const updateFieldStatus = (
    key: string,
    status: "mandatory" | "optional" | "off"
  ) => {
    setFieldConfig((prev) => ({ ...prev, [key]: status }));
  };

  type JobStatus = "active" | "inactive" | "draft";

  interface JobItem {
    id: number;
    status: JobStatus;
    startDate?: string;
    title: string;
    salaryFrom?: string;
    salaryTo?: string;
  }

  const jobList: JobItem[] = [
    {
      id: 1,
      status: "active",
      startDate: "1 Oct 2025",
      title: "Front End Developer",
      salaryFrom: "Rp7.000.000",
      salaryTo: "Rp8.000.000",
    },
    {
      id: 2,
      status: "inactive",
      startDate: "12 Jan 2025",
      title: "UI/UX Designer",
      salaryFrom: "Rp6.000.000",
      salaryTo: "Rp7.000.000",
    },
    {
      id: 3,
      status: "draft",
      title: "Backend Engineer",
      salaryFrom: "Rp10.000.000",
      salaryTo: "Rp12.000.000",
    },
    {
      id: 1,
      status: "active",
      startDate: "1 Oct 2025",
      title: "Front End Developer",
      salaryFrom: "Rp7.000.000",
      salaryTo: "Rp8.000.000",
    },
    {
      id: 2,
      status: "inactive",
      startDate: "12 Jan 2025",
      title: "UI/UX Designer",
      salaryFrom: "Rp6.000.000",
      salaryTo: "Rp7.000.000",
    },
    {
      id: 3,
      status: "draft",
      title: "Backend Engineer",
      salaryFrom: "Rp10.000.000",
      salaryTo: "Rp12.000.000",
    },
    {
      id: 1,
      status: "active",
      startDate: "1 Oct 2025",
      title: "Front End Developer",
      salaryFrom: "Rp7.000.000",
      salaryTo: "Rp8.000.000",
    },
    {
      id: 2,
      status: "inactive",
      startDate: "12 Jan 2025",
      title: "UI/UX Designer",
      salaryFrom: "Rp6.000.000",
      salaryTo: "Rp7.000.000",
    },
    {
      id: 3,
      status: "draft",
      title: "Backend Engineer",
      salaryFrom: "Rp10.000.000",
      salaryTo: "Rp12.000.000",
    },
    {
      id: 1,
      status: "active",
      startDate: "1 Oct 2025",
      title: "Front End Developer",
      salaryFrom: "Rp7.000.000",
      salaryTo: "Rp8.000.000",
    },
    {
      id: 2,
      status: "inactive",
      startDate: "12 Jan 2025",
      title: "UI/UX Designer",
      salaryFrom: "Rp6.000.000",
      salaryTo: "Rp7.000.000",
    },
    {
      id: 3,
      status: "draft",
      title: "Backend Engineer",
      salaryFrom: "Rp10.000.000",
      salaryTo: "Rp12.000.000",
    },
    {
      id: 1,
      status: "active",
      startDate: "1 Oct 2025",
      title: "Front End Developer",
      salaryFrom: "Rp7.000.000",
      salaryTo: "Rp8.000.000",
    },
    {
      id: 2,
      status: "inactive",
      startDate: "12 Jan 2025",
      title: "UI/UX Designer",
      salaryFrom: "Rp6.000.000",
      salaryTo: "Rp7.000.000",
    },
    {
      id: 3,
      status: "draft",
      title: "Backend Engineer",
      salaryFrom: "Rp10.000.000",
      salaryTo: "Rp12.000.000",
    },
    {
      id: 1,
      status: "active",
      startDate: "1 Oct 2025",
      title: "Front End Developer",
      salaryFrom: "Rp7.000.000",
      salaryTo: "Rp8.000.000",
    },
    {
      id: 2,
      status: "inactive",
      startDate: "12 Jan 2025",
      title: "UI/UX Designer",
      salaryFrom: "Rp6.000.000",
      salaryTo: "Rp7.000.000",
    },
    {
      id: 3,
      status: "draft",
      title: "Backend Engineer",
      salaryFrom: "Rp10.000.000",
      salaryTo: "Rp12.000.000",
    },
  ];

  const jobListAplicant = [
    {
      title: "UX Designer",
      employee: "Rakamin",
      loc: "Jakarta Selatan",
      salaryFrom: "7.000.000",
      salaryTo: "15.000.000",
    },
    {
      title: "UX Designer",
      employee: "Rakamin",
      loc: "Jakarta Selatan",
      salaryFrom: "7.000.000",
      salaryTo: "15.000.000",
    },
    {
      title: "UX Designer",
      employee: "Rakamin",
      loc: "Jakarta Selatan",
      salaryFrom: "7.000.000",
      salaryTo: "15.000.000",
    },
    {
      title: "UX Designer",
      employee: "Rakamin",
      loc: "Jakarta Selatan",
      salaryFrom: "7.000.000",
      salaryTo: "15.000.000",
    },
    {
      title: "UX Designer",
      employee: "Rakamin",
      loc: "Jakarta Selatan",
      salaryFrom: "7.000.000",
      salaryTo: "15.000.000",
    },
    {
      title: "UX Designer",
      employee: "Rakamin",
      loc: "Jakarta Selatan",
      salaryFrom: "7.000.000",
      salaryTo: "15.000.000",
    },
  ];

  const handleCardClick = (job: any) => {
    setSelectedCard(job);
  };

  const { data: jobs, loading } = useSupabaseData("jobs");

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleDelete = () => {

  }

  return (
    <>
      {role === "admin" ? (
        <>
          {/* admin */}
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 w-full">
              <SearchBar />

              {jobs.length == 0 ? (
                <EmptyState
                  title="No job openings available"
                  desc="Create a job opening now and start the candidate process."
                  action={
                    <button
                      className="btn bg-rk-secondary-main hover:bg-rk-secondary-hover border-0 rounded-lg"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                    >
                      Create a new job
                    </button>
                  }
                />
              ) : (
                jobs.map((j, index) => (
                  <CardJob
                    key={index}
                    status={j.status}
                    startDate={j.startDate}
                    title={j.title}
                    salaryFrom={j.salaryFrom}
                    salaryTo={j.salaryTo}
                    onManage={() =>
                      router.push("job-list/manage-job?title=" + j.title)
                    }
                    onDelete={()=>handleDelete()}
                  />
                ))
              )}
            </div>
            <div>
              <div className="sticky top-23 z-10">
                <CardMenu onClick={() => setIsModalOpen(true)} />
              </div>
            </div>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Job Opening"
            action={
              <button
                className="btn rounded-lg"
                onClick={handleSubmit}
                disabled={!isValid || loading}
              >
                {loading ? "Publishing..." : "Publish Job"}
              </button>
            }
          >
            <form className="flex flex-col gap-4">
              <TextInput
                label="Job Name"
                required
                placeholder="Ex. Front End Engineer"
                value={formData.jobName}
                onChange={(e) => handleChange("jobName", e.target.value)}
              />
              <SelectBox
                label="Job Type"
                options={jobTypes}
                placeholder="Select job type"
                required
                value={formData.jobType}
                onChange={(val) => handleChange("jobType", val)}
              />
              <TextArea
                label="Job Description"
                required
                placeholder="Ex."
                value={formData.jobDesc}
                onChange={(e) => handleChange("jobDesc", e.target.value)}
              />
              <TextInput
                label="Number of Candidate Needed"
                type="number"
                required
                placeholder="Ex. 2"
                value={formData.numCandidates}
                onChange={(e) => handleChange("numCandidates", e.target.value)}
              />

              <hr className="border-t-2 border-dashed border-rk-neutral-40" />
              <label className="fieldset">Job Salary</label>
              <div className="flex items-center gap-4 ">
                <div className="w-full">
                  <TextInput
                    type="number"
                    label="Minimum Estimated Salary"
                    value={formData.salaryMin}
                    onChange={(e) => handleChange("salaryMin", e.target.value)}
                  />
                </div>
                <hr className="border w-6 mt-6 border-rk-neutral-40" />
                <div className="w-full">
                  <TextInput
                    type="number"
                    label="Maximum Estimated Salary"
                    value={formData.salaryMax}
                    onChange={(e) => handleChange("salaryMax", e.target.value)}
                  />
                </div>
              </div>

              <div className="border-2 rounded-lg border-rk-neutral-10 p-4 flex flex-col gap-4">
                <h2 className="text-rk-text-m font-rk-text-m-bold">
                  Minimum Profile Information Required
                </h2>

                {mandatoryFields.map((m, index) => (
                  <div
                    className="flex justify-between items-center p-2 border-b border-rk-neutral-10"
                    key={m.key}
                  >
                    <h3 className="text-rk-text-m font-rk-text-m-regular">
                      {m.label}
                    </h3>
                    <div className="flex gap-2">
                      <Chip
                        label="Mandatory"
                        variant={
                          fieldConfig[m.key] === "mandatory"
                            ? "primary"
                            : "light"
                        }
                        className="cursor-pointer"
                        onClick={() => updateFieldStatus(m.key, "mandatory")}
                      />
                      <Chip
                        label="Optional"
                        variant={
                          fieldConfig[m.key] === "optional"
                            ? "primary"
                            : "light"
                        }
                        className="cursor-pointer"
                        onClick={() => updateFieldStatus(m.key, "optional")}
                      />
                      <Chip
                        label="Off"
                        variant={
                          fieldConfig[m.key] === "off" ? "primary" : "disabled"
                        }
                        className="cursor-pointer"
                        onClick={() => updateFieldStatus(m.key, "off")}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </Modal>
        </>
      ) : (
        <>
          {/* aplicant */}
          <div className="flex gap-4">
            <div className="max-h-[calc(100vh-8rem)] overflow-auto">
              <div
                className={`flex flex-wrap gap-6 justify-center ${
                  selectedCard && "flex-col pr-16"
                }`}
              >
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(job)}
                    className="cursor-pointer"
                  >
                    <CardJobAplicant
                      active={job.id == selectedCard?.id}
                      title={job.title}
                      employee={job.employee}
                      loc={job.loc}
                      salary={job.salary_display}
                    />
                  </div>
                ))}
              </div>
            </div>
            {selectedCard && (
              <div className="w-3/4">
                <CardJobDetail
                  title={selectedCard.title}
                  employee={selectedCard.department}
                  loc={selectedCard.loc}
                  type="Fulltime"
                  desc={selectedCard.description}
                  onApply={() => router.push("/resume")}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default JobList;
