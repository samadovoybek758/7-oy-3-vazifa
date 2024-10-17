import React, { useMemo, useState } from 'react';

function UseMemo() {
    const arr = [1, 3,2, 4, 5,2, 6];
    const juft =[]
   
    

    function yig() {
       
        arr.forEach(element => {
            if (element % 2 === 0) {
                juft + element;
            }
        });
        
        return juft
    }
    const memoyigindi = useMemo(() => yig(arr),[arr])
    return (
        <div>
           
        </div>
    );
}

export default UseMemo;
