import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const NestedComponent2 = () => {
    const { lastName, updateLastName } = useContext(MyContext);

    return (
        <div>
            <p>Last Name: {lastName}</p>
            <button onClick={() => updateLastName('Solanki')}>Set Last Name</button>
        </div>
    );
};

export default NestedComponent2;
