import { useState, useEffect } from 'react';

function useDeviceType() {
    const [deviceType, setDeviceType] = useState(getDeviceType());

    function getDeviceType() {
        const width = window.innerWidth;
        if (width < 768) return 'mobile';
        if (width >= 768 && width < 1024) return 'tablet';
        if (width >= 1024 && width < 1440) return 'laptop';
        return 'desktop';
    }

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType());
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return deviceType;
}

export default useDeviceType;

