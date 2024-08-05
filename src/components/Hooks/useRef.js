import { useRef } from 'react';


function TextInputWithFocusButtonClick(){
	const input1 =  useRef(null);

	const onButtonClick = () => {
		input1.current.focus()
	}

	return(
		<>
			<input ref={input1} type="text" />
			<button onClick={onButtonClick} > Foucs the input </button>
		</>
	)
}

export default TextInputWithFocusButtonClick;