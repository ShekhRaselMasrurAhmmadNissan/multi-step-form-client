import React from 'react';
import { useForm } from 'react-hook-form';

const LoanDetails = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleLoanInfoSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="max-w-[85%] mx-auto">
			<form action="" onSubmit={handleSubmit(handleLoanInfoSubmit)}>
				<div className="mb-8 space-y-4">
					{/* Loan Amount Start */}
					<div>
						<label
							htmlFor="loanAmount"
							className="text-lg font-medium text-emerald-500"
						>
							Loan Amount
						</label>
						<input
							id="loanAmount"
							{...register('loanAmount', {
								required: 'Loan Amount is Required.',
							})}
							type="number"
							placeholder="Loan Amount"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.loanAmount && (
							<p className="mt-2 text-red-600">
								{errors.loanAmount?.message}
							</p>
						)}
					</div>
					{/* Loan Amount End */}

					{/* Interest Rate Start */}
					<div>
						<label
							htmlFor="interestRate"
							className="text-lg font-medium text-emerald-500"
						>
							Interest Rate
						</label>
						<input
							id="interestRate"
							{...register('interestRate', { value: 5 })}
							type="number"
							placeholder="Interest Rate"
							defaultValue="5"
							disabled={true}
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
					</div>
					{/* Interest Rate End */}

					{/* Loan Tenure Start */}
					<div>
						<label
							htmlFor="loanTenure"
							className="text-lg font-medium text-emerald-500"
						>
							Loan Tenure (In Years)
						</label>
						<input
							id="loanTenure"
							{...register('loanTenure', {
								required: 'Loan Tenure is Required.',
							})}
							type="text"
							placeholder="Loan Tenure"
							className="mt-2 w-full p-3 rounded bg-gray-100 focus:outline-emerald-500"
						/>
						{errors.loanTenure && (
							<p className="mt-2 text-red-600">
								{errors.loanTenure?.message}
							</p>
						)}
					</div>
					{/* Loan Tenure End */}
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

export default LoanDetails;
