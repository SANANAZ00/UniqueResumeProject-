import { useState } from 'react';
import { useRouter } from 'next/router';

const Form = () => {
    const [formData, setFormData] = useState({ username: '', email: '', education: '', experience: '', skills: '' });
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/resume/${formData.username}`);
        localStorage.setItem('resumeData', JSON.stringify(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
            <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <textarea placeholder="Education" onChange={(e) => setFormData({ ...formData, education: e.target.value })} required />
            <textarea placeholder="Experience" onChange={(e) => setFormData({ ...formData, experience: e.target.value })} required />
            <textarea placeholder="Skills" onChange={(e) => setFormData({ ...formData, skills: e.target.value })} required />
            <button type="submit">Generate Resume</button>
        </form>
    );
};

export default Form;
