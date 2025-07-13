import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import type { Project, TeamMember, TimelineItem, Event, BlogPost, Partner } from '../../types';

// This is the main dashboard for content management.
// It contains sub-components for editing different sections of the site.

interface FormFieldProps {
    label: string;
    id: string;
    value: string | number | readonly string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    type?: string;
    required?: boolean;
    options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({ label, id, value, onChange, type = 'text', required = true, options }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        {type === 'textarea' ? (
             <textarea id={id} value={value as string} onChange={onChange} required={required} rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F1AC20] focus:border-[#F1AC20] sm:text-sm" />
        ) : type === 'select' && options ? (
             <select id={id} value={value as string} onChange={onChange} required={required} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#F1AC20] focus:border-[#F1AC20] sm:text-sm rounded-md">
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
        ) : (
            <input type={type} id={id} value={value as string} onChange={onChange} required={required} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#F1AC20] focus:border-[#F1AC20] sm:text-sm" />
        )}
    </div>
);

// Generic editor component to reduce boilerplate
const SectionEditor = <T,>({
    title,
    data,
    setData,
    newItem,
    fields,
    onSave,
}: {
    title: string;
    data: T[];
    setData: React.Dispatch<React.SetStateAction<T[]>>;
    newItem: T;
    fields: { key: keyof T; label: string; type?: string, options?: {value: string, label: string}[] }[];
    onSave: () => void;
}) => {
    const [status, setStatus] = useState('');

    const handleFieldChange = (index: number, field: keyof T, value: string) => {
        const updatedItems = data.map((item, i) => {
            if (i === index) {
                const newItem = { ...item };
                if (field === 'keyFeatures' || field === 'techStack') {
                    (newItem as any)[field] = value.split(',').map(s => s.trim());
                } else {
                    (newItem as any)[field] = value;
                }
                return newItem;
            }
            return item;
        });
        setData(updatedItems);
    };

    const handleAddItem = () => setData([...data, newItem]);
    const handleDeleteItem = (index: number) => setData(data.filter((_, i) => i !== index));

    const handleSaveClick = () => {
        onSave();
        setStatus(`${title} saved successfully!`);
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Edit {title}</h3>
            {data.map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg space-y-4 relative">
                    <button onClick={() => handleDeleteItem(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl">&times;</button>
                    {fields.map(field => (
                        <FormField
                            key={String(field.key)}
                            label={field.label}
                            id={`${String(field.key)}_${index}`}
                            value={(item[field.key] as any) instanceof Array ? (item[field.key] as any[]).join(', ') : (item[field.key] as string) || ''}
                            onChange={(e) => handleFieldChange(index, field.key, e.target.value)}
                            type={field.type}
                            options={field.options}
                        />
                    ))}
                </div>
            ))}
            <div className="flex justify-between items-center pt-4">
                <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add {title.slice(0,-1)}</button>
                <button onClick={handleSaveClick} className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 font-semibold">Save All {title}</button>
            </div>
            {status && <p className="text-green-600 text-sm mt-2 font-medium text-right">{status}</p>}
        </div>
    );
};


const AdminDashboard = () => {
    const { content, setContent } = useContent();
    const [activeTab, setActiveTab] = useState('projects');

    const [projects, setProjects] = useState<Project[]>(content.projectsData);
    const [team, setTeam] = useState<TeamMember[]>(content.teamData);
    const [timeline, setTimeline] = useState<TimelineItem[]>(content.timelineData);
    const [events, setEvents] = useState<Event[]>(content.eventsData);
    const [blog, setBlog] = useState<BlogPost[]>(content.blogData);
    const [partners, setPartners] = useState<Partner[]>(content.partnersData);

    const renderContent = () => {
        switch(activeTab) {
            case 'projects':
                return <SectionEditor<Project>
                    title="Projects"
                    data={projects}
                    setData={setProjects}
                    newItem={{ id: `new-project-${Date.now()}`, title: 'New Project', category: 'Category', imageUrl: 'https://picsum.photos/seed/new/600/400', description: 'Short description.', detailedDescription: 'Longer description.', keyFeatures: [], techStack: [] }}
                    fields={[
                        { key: 'id', label: 'ID' }, { key: 'title', label: 'Title' }, { key: 'category', label: 'Category' },
                        { key: 'imageUrl', label: 'Image URL' }, { key: 'description', label: 'Description', type: 'textarea' },
                        { key: 'detailedDescription', label: 'Detailed Description', type: 'textarea' },
                        { key: 'keyFeatures', label: 'Key Features (comma-separated)' }, { key: 'techStack', label: 'Tech Stack (comma-separated)' },
                    ]}
                    onSave={() => setContent({ projectsData: projects })}
                />;
            case 'team':
                return <SectionEditor<TeamMember>
                    title="Team Members"
                    data={team}
                    setData={setTeam}
                    newItem={{ name: 'New Member', role: 'Role', imageUrl: 'https://picsum.photos/seed/new/400/400', funFact: 'Fun fact here.', linkedinUrl: '#', githubUrl: '#' }}
                    fields={[
                        { key: 'name', label: 'Name' }, { key: 'role', label: 'Role' }, { key: 'imageUrl', label: 'Image URL' },
                        { key: 'funFact', label: 'Fun Fact', type: 'textarea' }, { key: 'linkedinUrl', label: 'LinkedIn URL' }, { key: 'githubUrl', label: 'GitHub URL' },
                    ]}
                    onSave={() => setContent({ teamData: team })}
                />;
            case 'timeline':
                 return <SectionEditor<TimelineItem>
                    title="Timeline Items"
                    data={timeline}
                    setData={setTimeline}
                    newItem={{ id: `new-timeline-${Date.now()}`, year: new Date().getFullYear().toString(), title: 'New Milestone', description: 'What happened this year.' , imageUrl: 'https://picsum.photos/seed/new/800/400', date: new Date().toISOString(), events: [] }} 
                    fields={[
                        { key: 'id', label: 'ID (unique, e.g. a-slug)' },
                        { key: 'year', label: 'Year' }, 
                        { key: 'title', label: 'Title' }, 
                        { key: 'description', label: 'Description', type: 'textarea' },
                        { key: 'imageUrl', label: 'Image URL' },
                        { key: 'date', label: 'Date (ISO format)', type: 'text' },
                        { key: 'events', label: 'Events', type: 'textarea' } // This will need custom handling for nested events
                    ]}
                    onSave={() => setContent({ timelineData: timeline })}
                />;
            case 'events':
                return <SectionEditor<Event>
                    title="Events"
                    data={events}
                    setData={setEvents}
                    newItem={{ id: `new-event-${Date.now()}`, date: 'JAN 01, 2025', title: 'New Event', description: 'A brief event description.', detailedDescription: 'Full event details.', location: 'Venue', imageUrl: 'https://picsum.photos/seed/new/1200/400', type: 'Meetup' }}
                    fields={[
                        { key: 'id', label: 'ID' }, { key: 'date', label: 'Date (e.g., OCT 22, 2024)' },
                        { key: 'title', label: 'Title' }, { key: 'description', label: 'Description', type: 'textarea' },
                        { key: 'detailedDescription', label: 'Detailed Description', type: 'textarea' },
                        { key: 'location', label: 'Location' }, { key: 'imageUrl', label: 'Image URL' },
                        { key: 'type', label: 'Type', type: 'select', options: [
                            { value: 'Bootcamp', label: 'Bootcamp' }, { value: 'Hackathon', label: 'Hackathon' },
                            { value: 'Workshop', label: 'Workshop' }, { value: 'Meetup', label: 'Meetup' },
                        ]}
                    ]}
                    onSave={() => setContent({ eventsData: events })}
                />;
            case 'blog':
                return <SectionEditor<BlogPost>
                    title="Blog Posts"
                    data={blog}
                    setData={setBlog}
                    newItem={{ id: `new-blog-${Date.now()}`, title: 'New Blog Post', author: 'Author Name', date: 'Sep 15, 2024', excerpt: 'A short teaser for the article...', link: '#', details: 'Full blog post content goes here.' }}
                    fields={[
                        { key: 'title', label: 'Title' }, { key: 'author', label: 'Author' }, { key: 'date', label: 'Date' },
                        { key: 'excerpt', label: 'Excerpt', type: 'textarea' }, { key: 'link', label: 'Link URL' },
        
                    ]}
                    onSave={() => setContent({ blogData: blog })}
                />;
            case 'partners':
                return <SectionEditor<Partner>
                    title="Partners"
                    data={partners}
                    setData={setPartners}
                    newItem={{ name: 'New Partner', logoUrl: 'https://picsum.photos/seed/new/200/100?grayscale', linkUrl: '#' }}
                    fields={[ { key: 'name', label: 'Name' }, { key: 'logoUrl', label: 'Logo URL' } ]}
                    onSave={() => setContent({ partnersData: partners })}
                />;
            default:
                return <p>Select a section to edit.</p>;
        }
    };

    const NavButton = ({ tabName, label }: {tabName: string, label: string}) => (
        <button onClick={() => setActiveTab(tabName)} className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${activeTab === tabName ? 'bg-[#C3E8C9] text-[#293855]' : 'text-gray-600 hover:bg-gray-100'}`}>
            {label}
        </button>
    );

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
                                <NavButton tabName="projects" label="Projects" />
                                <NavButton tabName="team" label="Team Members" />
                                <NavButton tabName="timeline" label="Timeline" />
                                <NavButton tabName="events" label="Events" />
                                <NavButton tabName="blog" label="Blog Posts" />
                                <NavButton tabName="partners" label="Partners" />
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