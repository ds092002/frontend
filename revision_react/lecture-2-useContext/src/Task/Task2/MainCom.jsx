import React from 'react';
import MyProvider from './MyProvider';
import NestedComponent1 from './NestedComponent1';
import NestedComponent2 from './NestedComponent2';
import NestedComponent3 from './NestedComponent3';

const MainCom = () => {
    return (
        <MyProvider>
            <NestedComponent1 />
            <NestedComponent2 />
            <NestedComponent3 />
        </MyProvider>
    );
}

export default MainCom;
