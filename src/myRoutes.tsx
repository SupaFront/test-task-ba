import { Navigate, Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import SingleTutorialPage from './pages/SingleTutorialPage';


const MyRoutes = () => {
	return (
		<Routes>
			
				<Route path="/tutorials" element={<MainPage/>} />
	
				<Route path="/add" element={ <AddPage/> } />
				<Route path="/tutorials/:id" element={ <SingleTutorialPage/> } />
				
			<Route path="/tutorials/:id/edit" element={<EditPage />} />
			<Route
        path="*"
        element={<Navigate to="/tutorials" replace />}
    />
		</Routes>
	);
};

export default MyRoutes;