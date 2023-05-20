const Step3 = ({ nextStep, prevStep }) => {
	return (
		<div>
			<button onClick={prevStep}>Prev Step</button>
			<button onClick={nextStep}>Next Step</button>
		</div>
	);
};

export default Step3;
