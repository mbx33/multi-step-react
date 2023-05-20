import PropTypes from 'prop-types';
import styled from '@emotion/styled';

// Components
import Step1 from './Forms/Step1';
import Step2 from './Forms/Step2';
import Step3 from './Forms/Step3';
import Step4 from './Forms/Step4';

const Form = ({ step, nextStep, prevStep }) => {
	return (
		<FormContainer>
			{step === 1 && <Step1 nextStep={nextStep} />}
			{step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
			{step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
			{step === 4 && <Step4 prevStep={prevStep} />}
		</FormContainer>
	);
};

export default Form;

Form.propTypes = {
	step: PropTypes.number.isRequired,
	nextStep: PropTypes.func.isRequired,
	prevStep: PropTypes.func.isRequired,
};

const FormContainer = styled.div`
	width: 65%;
	color: #222;
	border-radius: 0.5rem;
	padding: 1rem;
`;
