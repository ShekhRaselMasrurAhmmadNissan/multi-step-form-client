import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalDetails = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleInfoSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="max-w-[85%] mx-auto">
			<form action="" onSubmit={handleSubmit(handleInfoSubmit)}>
				<div className="mb-8 space-y-4">
					{/* First Name Start */}
					<div>
						<label
							htmlFor="firstName"
							className="text-lg font-medium text-emerald-500"
						>
							First Name
						</label>
						<input
							id="firstName"
							{...register('firstName', {
								required: 'First Name is Required.',
							})}
							type="text"
							placeholder="First Name"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.firstName && (
							<p className="mt-2 text-red-600">
								{errors.firstName?.message}
							</p>
						)}
					</div>
					{/* First Name End */}

					{/* Last Name Start */}
					<div>
						<label
							htmlFor="lastName"
							className="text-lg font-medium text-emerald-500"
						>
							Last Name
						</label>
						<input
							id="lastName"
							{...register('lastName', {
								required: 'Last Name is Required.',
							})}
							type="text"
							placeholder="Last Name"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.lastName && (
							<p className="mt-2 text-red-600">
								{errors.lastName?.message}
							</p>
						)}
					</div>
					{/* Last Name End */}

					{/* Phone Number Start */}
					<div>
						<label
							htmlFor="phone"
							className="text-lg font-medium text-emerald-500"
						>
							Phone Number
						</label>
						<input
							id="phone"
							{...register('phone', {
								required: 'Phone Number is Required.',
								maxLength: {
									value: 10,
									message:
										'Phone Number should not be more than 10',
								},
								minLength: {
									value: 10,
									message:
										'Phone Number should not be less than 10',
								},
							})}
							type="number"
							placeholder="Phone Number"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.phone && (
							<p className="mt-2 text-red-600">
								{errors.phone?.message}
							</p>
						)}
					</div>
					{/* Phone Number End */}

					{/* Age Start */}
					<div>
						<label
							htmlFor="age"
							className="text-lg font-medium text-emerald-500"
						>
							Age
						</label>
						<input
							id="age"
							{...register('age', {
								required: 'Age is Required.',
								max: {
									value: 50,
									message: 'Age should be less than 50 years',
								},
								min: {
									value: 25,
									message: 'Age should be more than 25 years',
								},
							})}
							type="number"
							placeholder="Age"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.age && (
							<p className="mt-2 text-red-600">
								{errors.age?.message}
							</p>
						)}
					</div>
					{/* Age End */}

					{/* Email Start */}
					<div>
						<label
							htmlFor="email"
							className="text-lg font-medium text-emerald-500"
						>
							Email
						</label>
						<input
							id="email"
							{...register('email', {
								required: 'Email is Required.',
							})}
							type="email"
							placeholder="Email"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.email && (
							<p className="mt-2 text-red-600">
								{errors.email?.message}
							</p>
						)}
					</div>
					{/* Email End */}

					{/* Address Start */}
					<div>
						<label
							htmlFor="address"
							className="text-lg font-medium text-emerald-500"
						>
							Address
						</label>
						<textarea
							id="address"
							{...register('address', {
								required: 'Address is Required.',
							})}
							type="text"
							placeholder="Address"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.address && (
							<p className="mt-2 text-red-600">
								{errors.address?.message}
							</p>
						)}
					</div>
					{/* Address End */}
				</div>

				<input
					type="submit"
					className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-600 text-gray-50"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default PersonalDetails;
