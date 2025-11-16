// ResetButton.jsx
import React from 'react';

function ResetButton({ onResetScore }) {
    return (
        <section style={{ textAlign: 'center' }}>
            {/* Using a separate section or placing it strategically in App.jsx */}
            <button id="reset-score-button" onClick={onResetScore}>
                Reset Score
            </button>
        </section>
    );
}

export default ResetButton;