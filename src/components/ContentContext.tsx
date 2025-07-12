import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import type { ContentData } from '../types';

// Define the shape of the context state
interface ContentContextType {
  content: ContentData | null;
  loading: boolean;
  error: string | null;
}

// Create the context with a default value
const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Define the props for the provider component
interface ContentProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This effect runs once when the component mounts
    const fetchContent = async () => {
      try {
        // Fetch the content from the public directory
        const response = await fetch('/content.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.statusText}`);
        }
        const data: ContentData = await response.json();
        setContent(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const value = { content, loading, error };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

// Create a custom hook for easy context consumption
export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  // We provide a default empty object for content if it's null to avoid errors in consumers
  // but consumers should still check for content existence for initial render.
  return context;
};
