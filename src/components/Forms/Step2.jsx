import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Step2 = ({ nextStep, prevStep }) => {
	return (
		<div>
			<Form>
				<div className="top">
					<div className="text-content">
						<h1>Select Your Plan</h1>
						<p>You have the option of monthly or yearly billing.</p>
					</div>
					<div className="cards">
						<div className="card-group">
							<div>
								<img
									src="/assets/images/icon-arcade.svg"
									alt="arcade icon"
								/>
							</div>
							<div>
								<p className="name">Arcade</p>
								<p className="price">$90/yr</p>
								<p className="free">2 months free</p>
							</div>
						</div>
						<div className="card-group">
							<div>
								<img
									src="/assets/images/icon-advanced.svg"
									alt="advanced icon"
								/>
							</div>
							<div>
								<p className="name">Advanced</p>
								<p className="price">$120/yr</p>
								<p className="free">2 months free</p>
							</div>
						</div>
						<div className="card-group">
							<div>
								<img src="/assets/images/icon-pro.svg" alt="pro icon" />
							</div>
							<div>
								<p className="name">Pro</p>
								<p className="price">$150/yr</p>
								<p className="free">2 months free</p>
							</div>
						</div>
					</div>
					<div className="switch-container">
						<p>Monthly</p>
						<div className="switch">
							<input type="checkbox" id="mySwitch" />
							<label htmlFor="mySwitch"></label>
						</div>
						<p>Yearly</p>
					</div>
				</div>
				<div className="bottom">
					<div className="button-group">
						<button onClick={prevStep}>Go Back</button>
						<button onClick={nextStep}>Next Step</button>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default Step2;

Step2.propTypes = {
	nextStep: PropTypes.func.isRequired,
	prevStep: PropTypes.func.isRequired,
};

const Form = styled.div`
	width: 100%;
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
		margin-bottom: 3rem;
	}

	.bottom {
		.button-group {
			display: flex;
			justify-content: space-between;
		}
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

	.cards {
		display: flex;
		justify-content: space-between;
		gap: 0.8rem;
	}

	.card-group {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		justify-content: space-between;
		color: var(--primary-blue);
		font-weight: 500;
		border: 1px solid var(--neutral-cool);
		border-radius: 0.5rem;
		padding: 1rem 2.7rem 1rem 1rem;

		.free {
			font-size: 0.8rem;
			color: var(--primary-blue);
		}

		.price {
			font-size: 1.2rem;
			color: var(--neutral-cool);
		}

		.name {
			color: var(--primary-blue);
			font-size: 1.1rem;
			font-weight: 700;
		}
	}

	.card-group:hover {
		cursor: pointer;
		border: 1px solid var(--primary-purple);
	}

	.switch-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin-top: 1rem;

		p {
			font-size: 1rem;
			font-weight: 500;
			color: var(--neutral-cool);
		}
	}

	.switch {
		position: relative;
		width: 60px;
		height: 30px;
		background-color: var(--primary-blue);
		border-radius: 15px;
	}

	.switch input {
		display: none;
	}

	.switch label {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		height: 30px;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
		transition: left 0.3s;
	}

	.switch input:checked + label {
		left: 30px;
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
