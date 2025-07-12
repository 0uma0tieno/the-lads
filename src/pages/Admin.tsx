import React, { useState, useEffect, useCallback } from 'react';
// Import the useContent hook to access the global content data.
import { useContent } from '../components/ContentContext';
// Import all necessary types for the content data structure.
import type { ContentData, TeamMember, Project } from '../types/index';

// Helper component to create a collapsible section for better organization of the admin page.
const AdminSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <details className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <summary className="p-4 font-bold text-lg cursor-pointer bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-colors">{title}</summary>
        <div className="p-6 border-t border-gray-200 space-y-6">{children}</div>
    </details>
);

// Reusable text input component for form fields.
const TextInput: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }> = ({ label, value, onChange, placeholder }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F1AC20] focus:border-[#F1AC20]" />
    </div>
);

// Reusable textarea component for longer text fields.
const TextAreaInput: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows?: number }> = ({ label, value, onChange, rows = 3 }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea value={value} onChange={onChange} rows={rows} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#F1AC20] focus:border-[#F1AC20]" />
    </div>
);


// This is the main component for the Admin Page, providing a UI to edit website content.
const AdminPage: React.FC = () => {
    // Fetch the global content, loading state, and any errors from the ContentContext.
    const { content, loading, error } = useContent();
    // State to hold the content being edited. It's a deep copy to prevent direct mutation.
    const [editableContent, setEditableContent] = useState<ContentData | null>(null);
    // State to manage the visual feedback of the save button.
    const [saveStatus, setSaveStatus] = useState<'idle' | 'success'>('idle');

    // When the original content loads from context, create a deep copy for safe editing.
    useEffect(() => {
        if (content) {
            setEditableContent(JSON.parse(JSON.stringify(content)));
        }
    }, [content]);

    // This function handles downloading the edited content as a 'content.json' file.
    const handleSave = () => {
        if (!editableContent) return;
        const jsonString = JSON.stringify(editableContent, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Create a temporary link element and trigger a click to start the download.
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'content.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Provide user feedback on successful save.
        setSaveStatus('success');
        setTimeout(() => setSaveStatus('idle'), 3000);
    };

    // A generic handler to update any value in the editableContent state.
    // It uses a path string (e.g., 'hero.title' or 'teamData[0].name') to update nested properties.
    const handleValueChange = useCallback((path: string, value: any) => {
        setEditableContent(prev => {
            if (!prev) return null;
            // Deep copy to ensure immutability.
            const newContent = JSON.parse(JSON.stringify(prev));
            const keys = path.split(/[\.\[\]]/).filter(Boolean); // Handles obj.key and obj[0]
            let current: any = newContent;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
            return newContent;
        });
    }, []);

    // A generic function to add a new item to an array in the content state.
    const addArrayItem = useCallback(<T,>(arrayPath: keyof ContentData, newItem: T) => {
        setEditableContent(prev => {
            if (!prev) return null;
            const newContent = JSON.parse(JSON.stringify(prev));
            (newContent[arrayPath] as T[]).push(newItem);
            return newContent;
        });
    }, []);

    // A generic function to remove an item from an array in the content state by its index.
    const removeArrayItem = useCallback((arrayPath: keyof ContentData, index: number) => {
        setEditableContent(prev => {
            if (!prev) return null;
            const newContent = JSON.parse(JSON.stringify(prev));
            (newContent[arrayPath] as any[]).splice(index, 1);
            return newContent;
        });
    }, []);

    // Show loading/error states while content is being fetched.
    if (loading) return <div className="flex items-center justify-center h-screen text-xl font-semibold">Loading Content Editor...</div>;
    if (error) return <div className="flex items-center justify-center h-screen text-xl text-red-600">Error loading content: {error}</div>;
    if (!editableContent) return <div className="flex items-center justify-center h-screen text-xl">No content to edit.</div>;

    // Render the main admin page layout.
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Sticky header with title and save button */}
            <header className="bg-[#293855] text-white shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Website Content Editor</h1>
                    <button 
                        onClick={handleSave} 
                        className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${saveStatus === 'success' ? 'bg-green-500' : 'bg-[#F1AC20] hover:bg-yellow-400'}`}
                    >
                        {saveStatus === 'success' ? 'Saved!' : 'Save & Download'}
                    </button>
                </div>
            </header>
            <main className="container mx-auto p-6">
                {/* Instructions for the non-technical editor */}
                <div className="p-4 mb-6 text-sm text-blue-800 bg-blue-100 rounded-lg" role="alert">
                    <span className="font-bold">How to Use:</span> Edit the content in the sections below. When you're done, click the 'Save & Download' button. This will download a <code className="font-mono bg-blue-200 px-1 rounded">content.json</code> file. Replace the existing file in the project's <code className="font-mono bg-blue-200 px-1 rounded">public</code> folder and redeploy the website to see your changes.
                </div>

                {/* Each AdminSection contains form fields for a part of the website */}
                <AdminSection title="Global & Header">
                     <TextInput label="Website Title" value={editableContent.siteMetadata.title} onChange={e => handleValueChange('siteMetadata.title', e.target.value)} />
                     <TextInput label="Get In Touch Button Text" value={editableContent.getInTouch.buttonText} onChange={e => handleValueChange('getInTouch.buttonText', e.target.value)} />
                </AdminSection>

                <AdminSection title="Hero Section">
                    <TextInput label="Line 1" value={editableContent.hero.line1} onChange={e => handleValueChange('hero.line1', e.target.value)} />
                    <TextInput label="Line 2" value={editableContent.hero.line2} onChange={e => handleValueChange('hero.line2', e.target.value)} />
                    <TextInput label="Line 3" value={editableContent.hero.line3} onChange={e => handleValueChange('hero.line3', e.target.value)} />
                    <TextAreaInput label="Subtitle" value={editableContent.hero.subtitle} onChange={e => handleValueChange('hero.subtitle', e.target.value)} />
                </AdminSection>

                <AdminSection title="Team Members">
                    {/* Map over the team members array to create an editor for each one */}
                    {editableContent.teamData.map((member, index) => (
                        <div key={index} className="border p-4 rounded-md relative bg-white space-y-3">
                            <h4 className="font-semibold text-gray-800">Team Member #{index + 1}</h4>
                            <TextInput label="Name" value={member.name} onChange={e => handleValueChange(`teamData[${index}].name`, e.target.value)} />
                            <TextInput label="Role" value={member.role} onChange={e => handleValueChange(`teamData[${index}].role`, e.target.value)} />
                            <TextInput label="Image URL" value={member.imageUrl} onChange={e => handleValueChange(`teamData[${index}].imageUrl`, e.target.value)} />
                            <TextInput label="Fun Fact" value={member.funFact} onChange={e => handleValueChange(`teamData[${index}].funFact`, e.target.value)} />
                            <button onClick={() => removeArrayItem('teamData', index)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 font-semibold text-sm">Remove</button>
                        </div>
                    ))}
                    <button onClick={() => addArrayItem<TeamMember>('teamData', { name: 'New Member', role: 'New Role', imageUrl: 'https://picsum.photos/seed/new/400/400', funFact: '', linkedinUrl: '#', githubUrl: '#' })} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add Team Member</button>
                </AdminSection>
                
                <AdminSection title="Projects">
                    <TextInput label="Section Title" value={editableContent.projects.title} onChange={e => handleValueChange('projects.title', e.target.value)} />
                    <TextAreaInput label="Section Subtitle" value={editableContent.projects.subtitle} onChange={e => handleValueChange('projects.subtitle', e.target.value)} />
                    <div className="mt-4 border-t pt-4">
                        <h3 className="font-bold mb-2">Project Entries:</h3>
                        {/* Map over projects to create an editor for each */}
                        {editableContent.projectsData.map((project, index) => (
                            <div key={project.id} className="border p-4 rounded-md relative bg-white space-y-3 mb-4">
                                <h4 className="font-semibold text-gray-800">Project: {project.title}</h4>
                                <TextInput label="ID (unique, no spaces)" value={project.id} onChange={e => handleValueChange(`projectsData[${index}].id`, e.target.value)} />
                                <TextInput label="Title" value={project.title} onChange={e => handleValueChange(`projectsData[${index}].title`, e.target.value)} />
                                <TextInput label="Category" value={project.category} onChange={e => handleValueChange(`projectsData[${index}].category`, e.target.value)} />
                                <TextInput label="Image URL" value={project.imageUrl} onChange={e => handleValueChange(`projectsData[${index}].imageUrl`, e.target.value)} />
                                <TextAreaInput label="Short Description" value={project.description} onChange={e => handleValueChange(`projectsData[${index}].description`, e.target.value)} />
                                <TextAreaInput label="Detailed Description" rows={5} value={project.detailedDescription} onChange={e => handleValueChange(`projectsData[${index}].detailedDescription`, e.target.value)} />
                                <TextInput label="Key Features (comma-separated)" value={(project.keyFeatures || []).join(', ')} onChange={e => handleValueChange(`projectsData[${index}].keyFeatures`, e.target.value.split(',').map(s => s.trim()))} />
                                <TextInput label="Tech Stack (comma-separated)" value={(project.techStack || []).join(', ')} onChange={e => handleValueChange(`projectsData[${index}].techStack`, e.target.value.split(',').map(s => s.trim()))} />
                                <button onClick={() => removeArrayItem('projectsData', index)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 font-semibold text-sm">Remove</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => addArrayItem<Project>('projectsData', { id: 'new-project', title: 'New Project', category: 'Category', imageUrl: 'https://picsum.photos/seed/new-project/600/400', description: '', detailedDescription: '', keyFeatures: [], techStack: [] })} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add Project</button>
                </AdminSection>

                <AdminSection title="Contact Page">
                    <TextInput label="Title" value={editableContent.contact.title} onChange={e => handleValueChange('contact.title', e.target.value)} />
                    <TextAreaInput label="Subtitle" value={editableContent.contact.subtitle} onChange={e => handleValueChange('contact.subtitle', e.target.value)} />
                    <TextInput label="Form Interests (comma-separated)" value={editableContent.contact.form.interests.join(', ')} onChange={e => handleValueChange('contact.form.interests', e.target.value.split(',').map(s => s.trim()))} />
                </AdminSection>
                
                 <AdminSection title="Footer">
                    <TextAreaInput label="Description" value={editableContent.footer.description} onChange={e => handleValueChange('footer.description', e.target.value)} />
                    <TextInput label="Copyright Text ({year} is dynamic)" value={editableContent.footer.copyrightText} onChange={e => handleValueChange('footer.copyrightText', e.target.value)} />
                </AdminSection>

            </main>
        </div>
    );
};

export default AdminPage;