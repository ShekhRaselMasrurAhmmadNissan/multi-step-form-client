import React from 'react';
import PersonalDetails from '../../Components/PersonalDetails/PersonalDetails';

const Home = () => {
	return (
		<div className="min-h-screen flex justify-center mt-28">
			<div id="main-div" className="w-1/2 border">
				<div>
					<h1 className="text-4xl font-bold text-center">Steps</h1>
					<div className="mt-8">
						<PersonalDetails />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
