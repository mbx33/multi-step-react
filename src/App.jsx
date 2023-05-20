import { useState } from 'react';

import './App.css';
import styled from '@emotion/styled';

// Components
import StepMenu from './components/StepMenu';
import Form from './components/Form';

function App() {
	const [step, setStep] = useState(1);

	function nextStep() {
		console.log('clicked', step);
		if (step === 4) {
			return;
		}
		setStep(step + 1);
	}

	function prevStep() {
		if (step === 1) {
			return;
		}
		setStep(step - 1);
	}

	return (
		<Main>
			<Section>
				<StepMenu step={step} />
				<Form nextStep={nextStep} prevStep={prevStep} step={step} />
			</Section>
		</Main>
	);
}

export default App;

const Main = styled.main`
	background-color: var(--neutral-light);
	color: #fff;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Section = styled.section`
	background-color: var(--neutral-white);
	width: 65%;
	height: 70%;
	color: #222;
	border-radius: 0.5rem;
	display: flex;
	gap: 2rem;
	padding: 1rem;
`;
