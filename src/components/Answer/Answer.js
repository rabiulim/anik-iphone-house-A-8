import React from 'react';

const Answer = () => {
    return (
        <div>
            <h2>how does React work</h2>
            <p>
                React work component based system.At first react divide a website into core block that callad component.Component based work very fast.So react work component . React use diff algorithm.React use virtual DOM. React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
            </p>
            <h2>Props vs State</h2>
            props and state are not same.their has many difference.Such as props are read-only,but state changes can be asynchonous.props can not be modified but state can be modified .Props are used to pass data from one component to another. The state are used to store data .
            <p></p>
        </div>
    );
};

export default Answer;