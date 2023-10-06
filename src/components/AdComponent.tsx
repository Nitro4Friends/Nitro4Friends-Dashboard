import React, { useEffect } from 'react';

const AdComponent: React.FC = () => {
    useEffect(() => {
        // Load the external script
        const script = document.createElement('script');
        script.async = true;
        script.type = 'application/javascript';
        script.src = 'https://a.magsrv.com/ad-provider.js';
        document.body.appendChild(script);

        // Initialize AdProvider after script loads
        script.onload = () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (window.AdProvider = window.AdProvider || []).push({ "serve": {} });
        };

        // Cleanup
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <ins className="eas6a97888e" data-zoneid="5095956"></ins>
    );
};

export default AdComponent;
