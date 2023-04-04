import { useState } from 'react';



    const getPageName = (pathname) =>{
        console.log(pathname);
        let pageName = '';
        switch(pathname) {
            case '/':
                pageName = 'Dashboard';
            break;
            case '/vendor':
                pageName = 'Vendor';
            break;
            case '/vendor-stock':
                pageName = 'Vendor Stock';
            break;
            default:
                pageName = 'Dashboard';
        }
        return pageName;
    }

    

export default getPageName;