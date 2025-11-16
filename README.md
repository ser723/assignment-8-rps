# Rock-Paper-Scissors Game -V2

This prjoect is a React impmlementation of the classic Rock-Paper-Scissors game, featuring user interaction and a fun animation for the computer's throw.

## Setup Instructions

1. Clone the repository:

Bash
   
git clone assignment-8-rps

cd assignment-8-rps

2. Install dependencies:

Bash

npm install

3. Run the application:

Bash

npm run dev

The application will abe available at the local host: http://localhost:5173
## Implementation Reflection

The core challenge was coordinationg the asychronous actions of the user's selectin, the copmuter's animation, and the final result calculation. This was managed effectively in the App.jsx 
component using useState for state tracking and the setTimeout/setInterval combination to control the three-second duration and stop animation before revealing the final choice. Modularizing
the UI into components like PlayerThrow and ResultDipslay kept the root component clean and focused soley on game logic
