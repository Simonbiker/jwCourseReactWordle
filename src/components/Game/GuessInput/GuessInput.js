import React from "react";


function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters.")
    }

    console.log({guess});
    setGuess('');
  }

  return (
  <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" 
    required
    type="text"
    maxLength={5}
    minLength={5}
    pattern="[a-zA-Z]{5}"
    title="5 letter word"
    value={guess}
    onChange={(event) => {
      setGuess(event.target.value);
    }}/>
  </form>
)
}

export default GuessInput;


// Acceptance Criteria:

// Create a new component. DONE
// (Don't forget, you can use an NPM script to generate the scaffolding for you!) DONE
// This component should render a <form> tag, including a label and a text input. DONE
// The text input should be controlled by React state.

// When the form is submitted:
// The entered value should be logged to the console (for now).
// The input should be reset to an empty string. DONE
// The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed. DONE
// The input should have a minimum and maximum length of 5. DONE
// NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.