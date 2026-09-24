import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router preserves scroll position across navigations, so following a
// link from halfway down the home page would land you halfway down the case
// study. Reset on every route change.
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
