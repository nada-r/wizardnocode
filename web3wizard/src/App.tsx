import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Step1 from './Step1';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RedirectToStep1 />} />
                <Route path="/step1" element={<Step1 />} />
            </Routes>
        </Router>
    );
}

const RedirectToStep1: React.FC = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/step1');
    }, [navigate]);

    return null;
}

export default App;
