import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import GlobalStyles from './components/GlobalStyles';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import GameProvider from './components/GameProvider'

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={
					<>
						<GameProvider>
							<App/>
							<GlobalStyles/>
						</GameProvider>
					</>
				}
				errorElement={
					<>
						<ErrorPage/>
						<GlobalStyles/>
					</>
				}
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