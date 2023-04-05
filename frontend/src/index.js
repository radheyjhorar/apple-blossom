import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FilterProvider } from './contexts/filter-context';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//render(<App/>, document.getElementById('root'));
root.render(

 
    <FilterProvider>
           <BrowserRouter>
        <App />
        </BrowserRouter>  

    </FilterProvider>  

);