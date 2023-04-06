import { useState } from 'react';



    const isAuthPage = (pathname) =>{
        let isExist = false;
        switch(pathname) {
            case '/login':
                isExist = true;
            break;
            case '/register':
                isExist = true;
            break;
            default:
                isExist = false;
        }
        return isExist;
    }

    

export default isAuthPage;