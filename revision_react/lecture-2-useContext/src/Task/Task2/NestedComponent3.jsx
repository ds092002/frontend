import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const NestedComponent3 = () => {
    const { age, updateAge } = useContext(MyContext);

    return (
        <div>
            <p>Age: {age}</p>
            <button onClick={() => updateAge('22')}>Set Age</button>
        </div>
    );
};

export default NestedComponent3;
