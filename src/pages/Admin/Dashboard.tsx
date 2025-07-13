import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import type { Project, TeamMember } from '../../types';

// This is the main dashboard for content management.
// It contains sub-components for editing different sections of the site.

// ADDED: Interface to define the types for the FormField component's props.
// This ensures type safety and provides better autocompletion.
interface FormFieldProps {
    label: string;
    id: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    required?: boolean;
}

// UPDATED: Reusable form field component now uses the FormFieldProps interface.
// This fixes the "implicitly has an 'any' type" error.
const FormField: React.FC<FormFieldProps> = ({ label, id, value, onChange, type = 'text', required = true }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        {type === 'textarea' ? (
             <textarea id={id} value={value} onChange={onChange} required={required} rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F1AC20] focus:border-[#F1AC20] sm:text-sm" />
        ) : (
            <input type={type} id={id} value={value as string} onChange={onChange} required={required} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F1AC20] focus:border-[#F1AC20] sm:text-sm" />
        )}
    </div>
);


// Editor for the Projects section
const ProjectEditor = () => {
    const { content, setContent } = useContent();
    const [projects, setProjects] = useState<Project[]>(content.projectsData);
    const [status, setStatus] = useState('');

    // UPDATED: Added explicit types and immutable update logic.
    const handleFieldChange = (index: number, field: keyof Project, value: string) => {
        const updatedProjects = projects.map((project, i) => {
            if (i === index) {
                const newProject = { ...project };
                if (field === 'keyFeatures' || field === 'techStack') {
                    newProject[field] = value.split(',').map(s => s.trim());
                } else {
                    // We cast to `any` here because TypeScript cannot dynamically determine that 
                    // other keys of Project accept a string. This is a safe cast in this context.
                    (newProject as any)[field] = value;
                }
                return newProject;
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    const handleAddItem = () => {
        setProjects([
            ...projects,
            {
                id: `new-project-${Date.now()}`,
                title: 'New Project',
                category: 'Category',
                imageUrl: 'https://picsum.photos/600/400',
                description: 'Short description.',
                detailedDescription: 'Longer description.',
                keyFeatures: [],
                techStack: [],
            },
        ]);
    };

    // UPDATED: Added explicit type for the index parameter.
    const handleDeleteItem = (index: number) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        setContent({ projectsData: projects });
        setStatus('Projects saved successfully!');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Edit Projects</h3>
            {projects.map((project, index) => (
                <div key={project.id} className="bg-gray-100 p-4 rounded-lg space-y-4 relative">
                    <button onClick={() => handleDeleteItem(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl">&times;</button>
                    <FormField label="ID" id={`p_id_${index}`} value={project.id} onChange={(e) => handleFieldChange(index, 'id', e.target.value)} />
                    <FormField label="Title" id={`p_title_${index}`} value={project.title} onChange={(e) => handleFieldChange(index, 'title', e.target.value)} />
                    <FormField label="Category" id={`p_category_${index}`} value={project.category} onChange={(e) => handleFieldChange(index, 'category', e.target.value)} />
                    <FormField label="Image URL" id={`p_imageUrl_${index}`} value={project.imageUrl} onChange={(e) => handleFieldChange(index, 'imageUrl', e.target.value)} />
                    <FormField label="Description" id={`p_description_${index}`} value={project.description} onChange={(e) => handleFieldChange(index, 'description', e.target.value)} type="textarea" />
                    <FormField label="Detailed Description" id={`p_detailedDescription_${index}`} value={project.detailedDescription} onChange={(e) => handleFieldChange(index, 'detailedDescription', e.target.value)} type="textarea" />
                    <FormField label="Key Features (comma-separated)" id={`p_keyFeatures_${index}`} value={(project.keyFeatures || []).join(', ')} onChange={(e) => handleFieldChange(index, 'keyFeatures', e.target.value)} />
                    <FormField label="Tech Stack (comma-separated)" id={`p_techStack_${index}`} value={(project.techStack || []).join(', ')} onChange={(e) => handleFieldChange(index, 'techStack', e.target.value)} />
                </div>
            ))}
            <div className="flex justify-between items-center">
                <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Project</button>
                <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 font-semibold">Save All Projects</button>
            </div>
            {status && <p className="text-green-600 text-sm mt-2">{status}</p>}
        </div>
    );
};

// Editor for the Team Members section
const TeamEditor = () => {
    const { content, setContent } = useContent();
    const [team, setTeam] = useState<TeamMember[]>(content.teamData);
    const [status, setStatus] = useState('');

    // UPDATED: Added explicit types and ensured the state update is immutable.
    const handleFieldChange = (index: number, field: keyof TeamMember, value: string) => {
        const newTeam = team.map((member, i) => {
            if (i === index) {
                // Return a new object for the updated member
                return { ...member, [field]: value };
            }
            return member;
        });
        setTeam(newTeam);
    };
    
    const handleAddItem = () => {
        setTeam([
            ...team,
            {
                name: 'New Member',
                role: 'Role',
                imageUrl: 'https://picsum.photos/400/400',
                funFact: 'Fun fact here.',
                linkedinUrl: '#',
                githubUrl: '#',
            },
        ]);
    };

    // UPDATED: Added explicit type for the index parameter.
    const handleDeleteItem = (index: number) => {
        setTeam(team.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        setContent({ teamData: team });
        setStatus('Team members saved successfully!');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Edit Team Members</h3>
            {team.map((member, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg space-y-4 relative">
                    <button onClick={() => handleDeleteItem(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl">&times;</button>
                    <FormField label="Name" id={`t_name_${index}`} value={member.name} onChange={(e) => handleFieldChange(index, 'name', e.target.value)} />
                    <FormField label="Role" id={`t_role_${index}`} value={member.role} onChange={(e) => handleFieldChange(index, 'role', e.target.value)} />
                    <FormField label="Image URL" id={`t_imageUrl_${index}`} value={member.imageUrl} onChange={(e) => handleFieldChange(index, 'imageUrl', e.target.value)} />
                    <FormField label="Fun Fact" id={`t_funFact_${index}`} value={member.funFact} onChange={(e) => handleFieldChange(index, 'funFact', e.target.value)} type="textarea" />
                    <FormField label="LinkedIn URL" id={`t_linkedinUrl_${index}`} value={member.linkedinUrl || ''} onChange={(e) => handleFieldChange(index, 'linkedinUrl', e.target.value)} required={false} />
                    <FormField label="GitHub URL" id={`t_githubUrl_${index}`} value={member.githubUrl || ''} onChange={(e) => handleFieldChange(index, 'githubUrl', e.target.value)} required={false} />
                </div>
            ))}
             <div className="flex justify-between items-center">
                <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Team Member</button>
                <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 font-semibold">Save All Team Members</button>
            </div>
             {status && <p className="text-green-600 text-sm mt-2">{status}</p>}
        </div>
    );
};


const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('projects');
    
    const renderContent = () => {
        switch(activeTab) {
            case 'projects':
                return <ProjectEditor />;
            case 'team':
                return <TeamEditor />;
            // ADD MORE CASES HERE FOR OTHER EDITABLE SECTIONS
            default:
                return <p>Select a section to edit.</p>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg">
                    <div className="p-6 border-b border-gray-200">
                         <h1 className="text-3xl font-bold text-[#293855]">Content Dashboard</h1>
                         <p className="mt-1 text-sm text-gray-600">Edit the content of your website below. Click "Save" in each section to apply changes.</p>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        {/* Sidebar Navigation */}
                        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200">
                             <nav className="flex flex-row md:flex-col p-4 md:space-y-1 md:space-x-0 space-x-1 overflow-x-auto">
                                <button onClick={() => setActiveTab('projects')} className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'projects' ? 'bg-[#C3E8C9] text-[#293855]' : 'text-gray-600 hover:bg-gray-100'}`}>Projects</button>
                                <button onClick={() => setActiveTab('team')} className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'team' ? 'bg-[#C3E8C9] text-[#293855]' : 'text-gray-600 hover:bg-gray-100'}`}>Team</button>
                                {/* Add more buttons for other sections */}
                             </nav>
                        </aside>

                        {/* Main Content Area */}
                        <main className="flex-1 p-6">
                            {renderContent()}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
