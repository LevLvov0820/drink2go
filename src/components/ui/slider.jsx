import React from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

export default function Slider({ setValues }) {
    const handleUpdate = (evt) => {
        let newArr = [Math.round(evt[0]), Math.round(evt[1])];
        setValues(newArr);
    }

    return (
        <Nouislider className='slider' range={{ min: 0, max: 1000 }} step={10} start={[0, 900]} connect onUpdate={(evt) => handleUpdate(evt)} />
    )
}