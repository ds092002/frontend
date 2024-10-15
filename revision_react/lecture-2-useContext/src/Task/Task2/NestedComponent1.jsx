import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const NestedComponent1 = () => {
    const { firstName, updateFirstName } = useContext(MyContext);

    return (
        <div>
            <p>First Name: {firstName}</p>
            <button onClick={() => updateFirstName('Dhaval')}>Set First Name</button>
        </div>
    );
};

export default NestedComponent1;
