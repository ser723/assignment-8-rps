// ScoreBoard.jsx
import React from 'react';

function ScoreBoard({ score }) {
    return (
        <section id="scoreboard">
            <h2>Scoreboard</h2>
            <div className="score-card">
                <p>Wins: <span id="wins-count">{score.wins}</span></p>
                <p>Losses: <span id="losses-count">{score.losses}</span></p>
                <p>Ties: <span id="ties-count">{score.ties}</span></p>
            </div>
        </section>
    );
}

export default ScoreBoard;