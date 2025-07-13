import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
    timelineData as defaultTimeline, 
    projectsData as defaultProjects, 
    eventsData as defaultEvents,
    teamData as defaultTeam,
    blogData as defaultBlog,
    partnersData as defaultPartners,
} from '../constants';
import type { Project, TeamMember, Event, TimelineItem, BlogPost, Partner } from '../types';

// This file creates a central store for all the editable content on the website.
// It uses React Context to make the content available everywhere
// and persists the content in the browser's localStorage.

// Defines the shape of all editable site content.
interface SiteContent {
    timelineData: TimelineItem[];
    projectsData: Project[];
    eventsData: Event[];
    teamData: TeamMember[];
    blogData: BlogPost[];
    partnersData: Partner[];
}

interface ContentContextType {
    content: SiteContent;
    setContent: (newContent: Partial<SiteContent>) => void;
    isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// The key for storing the entire content object in localStorage.
const CONTENT_STORAGE_KEY = 'theLadsSiteContent';

/**
 * The provider component that wraps the app and makes content available.
 * It handles loading from localStorage or initializing with default data.
 */
export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [content, setContentState] = useState<SiteContent | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // This effect runs once on app startup.
    useEffect(() => {
        try {
            const storedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
            if (storedContent) {
                // If content exists in localStorage, parse and use it.
                setContentState(JSON.parse(storedContent));
            } else {
                // Otherwise, initialize with default data from the constants file.
                const initialContent = {
                    timelineData: defaultTimeline,
                    projectsData: defaultProjects,
                    eventsData: defaultEvents,
                    teamData: defaultTeam,
                    blogData: defaultBlog,
                    partnersData: defaultPartners,
                };
                localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(initialContent));
                setContentState(initialContent);
            }
        } catch (error) {
            console.error("Failed to load or initialize content from localStorage:", error);
            // If localStorage fails, fallback to default content without saving.
             setContentState({
                timelineData: defaultTimeline,
                projectsData: defaultProjects,
                eventsData: defaultEvents,
                teamData: defaultTeam,
                blogData: defaultBlog,
                partnersData: defaultPartners,
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    /**
     * A function to update the content state.
     * It merges the new content with the existing content and saves it to localStorage.
     * @param {Partial<SiteContent>} newContent - An object with the content sections to update.
     */
    const setContent = (newContent: Partial<SiteContent>) => {
        setContentState(prevContent => {
            const updatedContent = { ...prevContent!, ...newContent };
            try {
                localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(updatedContent));
            } catch (error) {
                console.error("Failed to save content to localStorage:", error);
            }
            return updatedContent;
        });
    };
    
    // Render a loading state until content is ready to prevent flicker.
    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">Loading Content...</div>;
    }

    return (
        <ContentContext.Provider value={{ content: content!, setContent, isLoading }}>
            {children}
        </ContentContext.Provider>
    );
};

/**
 * Custom hook for easy access to the content context.
 * @returns {ContentContextType} The content context values.
 */
export const useContent = (): ContentContextType => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
