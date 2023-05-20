import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StepMenu = ({ step }) => {
	return (
		<StepContainer>
			<StepWrapper>
				{step === 1 ? (
					<>
						<CircleActive>1</CircleActive>
						<div className="text-content">
							<p className="current-step">STEP 1</p>
							<p className="title">Your Info</p>
						</div>
					</>
				) : (
					<>
						<CircleNotActive>1</CircleNotActive>
						<div className="text-content">
							<p className="current-step">STEP 1</p>
							<p className="title">Your Info</p>
						</div>
					</>
				)}
			</StepWrapper>
			<StepWrapper>
				{step === 2 ? (
					<>
						<CircleActive>2</CircleActive>
						<div className="text-content">
							<p className="current-step">STEP 2</p>
							<p className="title">Select Plan</p>
						</div>
					</>
				) : (
					<>
						<CircleNotActive>2</CircleNotActive>
						<div className="text-content">
							<p className="current-step">STEP 2</p>
							<p className="title">Select Plan</p>
						</div>
					</>
				)}
			</StepWrapper>
			<StepWrapper>
				{step === 3 ? (
					<>
						<CircleActive>3</CircleActive>
						<div className="text-content">
							<p className="current-step">STEP 3</p>
							<p className="title">Add-ons</p>
						</div>
					</>
				) : (
					<>
						<CircleNotActive>3</CircleNotActive>
						<div className="text-content">
							<p className="current-step">STEP 3</p>
							<p className="title">Add-ons</p>
						</div>
					</>
				)}
			</StepWrapper>
			<StepWrapper>
				{step === 4 ? (
					<>
						<CircleActive>4</CircleActive>
						<div className="text-content">
							<p className="current-step">STEP 4</p>
							<p className="title">Summary</p>
						</div>
					</>
				) : (
					<>
						<CircleNotActive>4</CircleNotActive>
						<div className="text-content">
							<p className="current-step">STEP 4</p>
							<p className="title">Summary</p>
						</div>
					</>
				)}
			</StepWrapper>
		</StepContainer>
	);
};

export default StepMenu;

StepMenu.propTypes = {
	step: PropTypes.number.isRequired,
};

const StepContainer = styled.div`
	background-color: var(--primary-purple);
	background-image: url('/assets/images/bg-sidebar-desktop.svg');
	background-repeat: no-repeat;
	background-size: cover;
	width: 35%;
	height: 100%;
	border-radius: 0.5rem;
	color: #fff;
	padding: 3rem 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

const StepWrapper = styled.div`
	display: flex;
	gap: 1rem;

	.current-step {
		color: var(--primary-pastel);
		font-weight: 500;
	}

	.title {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.12rem;
	}
`;

const CircleNotActive = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	border: 1px solid var(--neutral-white);
	color: var(--primary-white);

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
`;

const CircleActive = styled.div`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	background-color: var(--primary-light);
	color: var(--primary-blue);

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
`;
