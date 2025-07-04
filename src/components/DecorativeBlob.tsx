import React from 'react';

const blobPaths = [
    "M49.8,-54.6C62,-40.5,67.6,-20.3,69.5,1.5C71.4,23.3,69.6,46.5,56.9,60.8C44.2,75.1,22.1,80.4,-1.8,82.2C-25.7,84,-51.4,82.3,-65.4,68.4C-79.4,54.5,-81.7,28.4,-78.9,5.7C-76.1,-17,-68.1,-36.4,-54.5,-50.2C-40.9,-63.9,-20.4,-72,1.3,-73.2C23.1,-74.4,40,-66.6,49.8,-54.6Z",
    "M46.7,-64.3C59.9,-54.8,70,-41,74.7,-25.6C79.4,-10.2,78.8,6.8,72.5,21.5C66.2,36.2,54.2,48.5,40.4,58.8C26.6,69.1,11,77.3,-5.3,79.1C-21.6,80.9,-44.2,76.3,-59.4,64.2C-74.6,52.1,-82.4,32.5,-82.9,13.3C-83.4,-5.9,-76.6,-24.7,-65.4,-38.3C-54.2,-51.8,-38.6,-60.1,-22.8,-66.6C-7,-73.1,9,-77.8,24.6,-76.2C40.1,-74.7,53.5,-67.5,46.7,-64.3Z"
];

interface DecorativeBlobProps {
    className: string;
    color: string;
    shapeIndex?: number;
    animationDelay?: string;
}

const DecorativeBlob: React.FC<DecorativeBlobProps> = ({ className, color, shapeIndex = 0, animationDelay = '0s' }) => {
    const pathData = blobPaths[shapeIndex % blobPaths.length];

    return (
        <div 
            className={`absolute z-0 transition-transform duration-500 ease-out hover:scale-110 animate-float ${className}`}
            style={{ animationDelay }}
        >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path 
                    fill={color} 
                    d={pathData} 
                    transform="translate(100 100)" 
                />
            </svg>
        </div>
    );
};

export default DecorativeBlob;