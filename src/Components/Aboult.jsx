import React from 'react';
import CardSistemico from './CardSistemico';
import CardDinheiro from './CardDinheiro';
import CardFamiliar from './CardFamiliar';

function Aboults() {
    return (
        <>
            <div className='md:flex-row text-center items-center h-screen w-full gap-4 border-2 border-[#373E4A] text-[#F5AF14] text-3xl p-4'>
                <h1 className='mb-4 font-(family-name:--font-oraic)'>Treinamentos</h1>

                <div className='grid grid-cols-3 md:flex-row items-center text-[#DE8F2A] p-4'>
                    <CardSistemico />
                    <CardDinheiro />
                    <CardFamiliar />
                    
                    
                    
                </div>
                
            </div>
        </>
    );
}   

export default Aboults;