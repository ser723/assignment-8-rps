//ResultDisplay.jsx
import React from 'react';

function ResultDisplay({ result, isAnimating, onPlayAgain }) {
    let message = 'Make your selction to start the game! Waiting for your first throw...';
    let color = '#333';

    if (isAnimating) {
        message = 'Computer thinking...';
    } else if (result === 'Win') {
        message = 'YOU WIN!';
        color = 'green';
    } else if (result === 'Lose') {
        message = 'COMPUTER WINS!';
        color = 'red';
    } else if (result === 'Tie') {
        message = "IT'S A TIE!";
        color = 'blue';
    }
    
    // The "Play Again" button should appear only after the result is determined
    const showPlayAgain = result !== null && !isAnimating;

    return (
        <section id="outcome">
            <h2>Results</h2>
            <p id="result-message" style={{ color: color }}>
                {message}
            </p>
            {showPlayAgain && (
                <button id="play-again-button" onClick={onPlayAgain}>
                    Play Again
                </button>
            )}
        </section>
    );
}

export default ResultDisplay;