import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jsPDF from 'jspdf';

type ResumeData = {
    username: string;
    email: string;
    education: string;
    experience: string;
    skills: string;
};

const Resume = () => {
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);
    const router = useRouter();
    const { username } = router.query;

    useEffect(() => {
        // Ensure this code runs only on the client side
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('resumeData');
            if (data) {
                setResumeData(JSON.parse(data));
            }
        }
    }, []);

    if (!resumeData) return <p>Loading...</p>;

    const downloadResume = () => {
        const doc = new jsPDF();
        doc.text(`Resume for ${resumeData.username}`, 10, 10);
        doc.text(`Email: ${resumeData.email}`, 10, 20);
        doc.text(`Education: ${resumeData.education}`, 10, 30);
        doc.text(`Experience: ${resumeData.experience}`, 10, 40);
        doc.text(`Skills: ${resumeData.skills}`, 10, 50);
        doc.save(`${resumeData.username}-resume.pdf`);
    };

    return (
        <div>
            <div>
                <h1>Resume for {username}</h1>
                <h2>{resumeData.username}</h2>
                <p>Email: {resumeData.email}</p>
                <p>Education: {resumeData.education}</p>
                <p>Experience: {resumeData.experience}</p>
                <p>Skills: {resumeData.skills}</p>
            </div>
            <div>
                <button onClick={downloadResume}>Download as PDF</button>
            </div>
        </div>
    );
};

export default Resume;

