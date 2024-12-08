import React from "react";

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string[];
  skills: string[];
  experience: { company: string; role: string; duration: string }[];
}

const ResumeDisplay: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="resume-container bg-white border border-gray-300 shadow-lg p-6 rounded-md max-w-3xl mx-auto">
      {/* Header */}
      <div className="resume-header text-center mb-6">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-gray-600">{data.email}</p>
        <p className="text-gray-600">{data.phone}</p>
      </div>

      {/* Education */}
      <div className="resume-section mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Education</h2>
        <ul className="list-disc list-inside mt-3">
          {data.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="resume-section mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Skills</h2>
        <ul className="flex flex-wrap gap-2 mt-3">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </ul>
      </div>

      {/* Work Experience */}
      <div className="resume-section">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">Experience</h2>
        <ul className="mt-3">
          {data.experience.map((job, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-medium">{job.company}</h3>
              <p className="text-gray-600">{job.role}</p>
              <p className="text-gray-500 text-sm">{job.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeDisplay;
