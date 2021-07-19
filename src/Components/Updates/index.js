import React from 'react';
import {AppProvider} from './context';
import LatestUpdate from './updates';

const Updates = () => {

    return (
        <div>
        <AppProvider>
            <LatestUpdate/>
</AppProvider>



        </div>
        )

}


export default Updates