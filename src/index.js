import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={
					<>
						<App/>
						<GlobalStyles/>
					</>
				}
				errorElement={<p>Sorry. Something went wrong.</p>}
			/>
		</>
	)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);