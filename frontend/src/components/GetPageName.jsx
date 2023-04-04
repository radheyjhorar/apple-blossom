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
            case '/vendor-payment-history':
                pageName = 'Vendor Payment History';
            break;
            case '/customer':
                pageName = 'Customer';
            break;
            case '/customer-order':
                pageName = 'Customer Order';
            break;
            case '/customer-order-item':
                pageName = 'Customer Order Item';
            break;
            case '/customer-payment-history':
                pageName = 'Customer Payment History';
            break;
            default:
                pageName = 'Apple Blossom';
        }
        return pageName;
    }

    

export default getPageName;