import React from "react";


function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters.")
    }

    console.log({tentativeGuess})
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
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
    value={tentativeGuess}
    onChange={(event) => {
      setTentativeGuess(event.target.value);
    }}/>
  </form>
)
}

export default GuessInput;