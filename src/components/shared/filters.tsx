'use client'

import React, {useEffect, useState} from 'react';
import {Title} from "@/components/shared/title";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/range-slider";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useFilterIngredients} from "../../../hooks/useFilterIngredients";
import {useSet} from "react-use";


interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number,
    priceTo: number,
}

export const Filters: React.FC<Props> = ({className}) => {

    const {ingredients, loading, onAddId, selectedIngredients} = useFilterIngredients()
    const [prices, setPrices] = useState<PriceProps>({priceFrom: 0, priceTo: 1000})
    const items = ingredients.map((item) => ({value: String(item.id), text: item.name}))
    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>());
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>());

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices({
            ...prices,
            [name]: value,
        })
    }


    useEffect(() => {
        console.log(prices, sizes, pizzaTypes, ingredients, selectedIngredients)
    }, [prices, sizes, pizzaTypes, ingredients, selectedIngredients])


    return (
        <div className={className}>
            <Title text='Фильтр' size='sm' className='mb-5 font-bold'/>


            <CheckboxFiltersGroup
                title="Тип теста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                items={[
                    {text: 'Тонкое', value: '1'},
                    {text: 'Традиционное', value: '2'},
                ]}
            />

            {/*Верхние чекбоксы*/}
            <CheckboxFiltersGroup
                name="sizes"
                className="mb-5"
                title="Размеры"
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    {text: '20 см', value: '20'},
                    {text: '30 см', value: '30'},
                    {text: '40 см', value: '40'},
                ]}
            />

            {/*Фильтр цен*/}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(prices.priceFrom)}
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(prices.priceTo)}
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrices({priceFrom: priceFrom, priceTo: priceTo})}
                />

            </div>

            {/*Фильтр ингридиентов*/}
            <CheckboxFiltersGroup
                title='Ингридиенты'
                name='ingridients'
                className='mt-5'
                limit={6}
                loading={loading}
                defaultItems={items.slice(0, 6)}
                items={items}
                onClickCheckbox={onAddId}
                selected={selectedIngredients}
            />

        </div>

    );
};
