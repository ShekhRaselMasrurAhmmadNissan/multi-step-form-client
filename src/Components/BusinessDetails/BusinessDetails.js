import React from 'react';
import { useForm } from 'react-hook-form';

const BusinessDetails = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleBusinessInfoSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="max-w-[85%] mx-auto">
			<form action="" onSubmit={handleSubmit(handleBusinessInfoSubmit)}>
				<div className="mb-8 space-y-4">
					{/* Business Name Start */}
					<div>
						<label
							htmlFor="businessName"
							className="text-lg font-medium text-emerald-500"
						>
							Business Name
						</label>
						<input
							id="businessName"
							{...register('businessName', {
								required: 'Business Name is Required.',
							})}
							type="text"
							placeholder="Business Name"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.businessName && (
							<p className="mt-2 text-red-600">
								{errors.businessName?.message}
							</p>
						)}
					</div>
					{/* Business Name End */}

					{/* GST Number Start */}
					<div>
						<label
							htmlFor="gstNumber"
							className="text-lg font-medium text-emerald-500"
						>
							GST Number
						</label>
						<input
							id="gstNumber"
							{...register('gstNumber', {
								required: 'GST Number is Required.',
								maxLength: {
									value: 15,
									message:
										'GST Number should not be more than 15 digit long',
								},
								minLength: {
									value: 15,
									message:
										'GST Number should not be less than 15 digit long',
								},
							})}
							type="number"
							placeholder="GST Number"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.gstNumber && (
							<p className="mt-2 text-red-600">
								{errors.gstNumber?.message}
							</p>
						)}
					</div>
					{/* GST Number End */}

					{/* Estimated Market Value Start */}
					<div>
						<label
							htmlFor="est"
							className="text-lg font-medium text-emerald-500"
						>
							Estimated Market Value
						</label>
						<input
							id="est"
							{...register('est', {
								required: 'Estimated Market Value is Required.',
								max: {
									value: 5000000,
									message:
										'Estimated Market Value should not be more than $5000000',
								},
								min: {
									value: 100000,
									message:
										'Estimated Market Value should not be less than $100000',
								},
							})}
							type="number"
							placeholder="Estimated Market Value"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.est && (
							<p className="mt-2 text-red-600">
								{errors.est?.message}
							</p>
						)}
					</div>
					{/* Estimated Market Value End */}

					{/* Business Address Start */}
					<div>
						<label
							htmlFor="businessAddress"
							className="text-lg font-medium text-emerald-500"
						>
							Business Address
						</label>
						<textarea
							id="businessAddress"
							{...register('businessAddress', {
								required: 'Business Address is Required.',
							})}
							type="text"
							placeholder="Business Address"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.businessAddress && (
							<p className="mt-2 text-red-600">
								{errors.businessAddress?.message}
							</p>
						)}
					</div>
					{/* Business Address End */}
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

export default BusinessDetails;
