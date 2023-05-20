import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Step1 = ({ nextStep }) => {
	return (
		<Form>
			<div className="top">
				<div className="text-content">
					<h1>Personal Info</h1>
					<p>Please provide your name, email address, and phone number.</p>
				</div>
				<div className="input-group">
					<label htmlFor="name">Name</label>
					<input type="text" placeholder="e.g. Stephen King" />
				</div>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input type="text" placeholder="e.g. stephenking@lorem.com" />
				</div>
				<div className="input-group">
					<label htmlFor="number">Phone Number</label>
					<input type="text" placeholder="e.g. +1 234 567 890" />
				</div>
			</div>
			<div className="bottom">
				<div className="button-group">
					<button onClick={nextStep}>Next Step</button>
				</div>
			</div>
		</Form>
	);
};

Step1.propTypes = {
	nextStep: PropTypes.func.isRequired,
};

export default Step1;

const Form = styled.div`
	width: 100%;
	height: 100%;
	color: #222;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	padding: 1rem;

	.top {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.bottom {
		display: flex;
		justify-content: flex-end;
	}

	.text-content {
		h1 {
			font-size: 2rem;
			font-weight: 700;
			color: var(--primary-blue);
		}

		p {
			font-size: 1rem;
			font-weight: 500;
			color: var(--neutral-cool);
		}
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		color: var(--primary-blue);
		font-weight: 500;

		input {
			width: 100%;
			padding: 0.7rem;
			border: 1px solid var(--neutral-cool);
			border-radius: 0.5rem;
			background-color: var(--neutral-white);
			color: #222;
			font-weight: 500;
		}
	}

	button {
		padding: 0.7rem 1.5rem;
		background-color: var(--primary-blue);
		color: var(--neutral-magnolia);
		border: none;
		border-radius: 0.5rem;
		transition: all 0.3s ease-in-out;
		justify-content: center;

		&:hover {
			cursor: pointer;
			background-color: var(--primary-pastel);
			color: var(--primary-blue);
		}
	}
`;
