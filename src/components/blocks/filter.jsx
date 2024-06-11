import React, { useState } from 'react';
import Button from '../ui/button';
import Textfield from '../ui/textfield';
import Slider from '../ui/slider';
import FilterItem from '../ui/filter-item';
import FilterOptions from '../ui/filter-options';

export default function Filter({ options, onSubmit, onReset }) {
    const [values, setValues] = useState([0, 900]);
    const [checkedMilk, setCheckedMilk] = useState('Неважно');
    const [checkedCountries, setCheckedCountries] = useState(['Бразилия']);

    const handlePriceChange = (evt) => {
        let newArr = [...values];
        evt.target.name === 'min-price' ? newArr[0] = Number(evt.target.value) : newArr[1] = Number(evt.target.value);
        setValues(newArr);
    }

    const handleCheckbox = (value) => {
        let newArr = [...checkedCountries];
        if (newArr.includes(value)) {
            newArr.splice(newArr.indexOf(value), 1)
        } else {
            newArr.push(value);
        }
        setCheckedCountries(newArr);
    }

    return (
        <form className='filter' onSubmit={(evt) => onSubmit(evt, values, checkedMilk, checkedCountries)}>
            <div className="filter__wrapper">
                <FilterItem name={'Цена'}>
                    <Slider values={values} setValues={setValues} />
                    <div className='filter__prices'>
                        <Textfield type={'number'} name={'min-price'} min={'0'} max={'1000'} value={values[0]} onChange={(evt) => handlePriceChange(evt)} />
                        <Textfield type={'number'} name={'max-price'} min={'0'} max={'1000'} value={values[1]} onChange={(evt) => handlePriceChange(evt)} />
                    </div>
                </FilterItem>
                <FilterItem name={'Наличие молока'}>
                    <FilterOptions options={options.milkOptions} type={'radio'} name={'milk-type'} checked={checkedMilk} onChange={(evt) => setCheckedMilk(evt.target.value)} />
                </FilterItem>
                <FilterItem name={'Страна произрастания'}>
                    <FilterOptions options={options.countryOptions} type={'checkbox'} name={'country'} checked={checkedCountries} onChange={(evt) => handleCheckbox(evt.target.value)} />
                </FilterItem>
            </div>
            <FilterItem className={'filter__buttons'}>
                <Button className={'filter__submit'} type='submit'>Применить</Button>
                <Button className={'filter__reset'} type='reset' onClick={(evt) => onReset(evt)}>Сбросить</Button>
            </FilterItem>
        </form>
    )
}