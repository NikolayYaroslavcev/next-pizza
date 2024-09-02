import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/range-slider";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";


interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text='Фильтр' size='sm' className='mb-5 font-bold'/>

            {/*Верхние чекбоксы*/}
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1'></FilterCheckbox>
                <FilterCheckbox text='Новинки' value='2'></FilterCheckbox>
            </div>

            {/*Фильтр цен*/}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}></Input>
                    <Input type="number" placeholder="1000" min={100} max={1000}></Input>
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]}/>
            </div>

            {/*Фильтр ингридиентов*/}
            <CheckboxFiltersGroup
                title='Ингридиенты'
                className='mt-5'
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    }, {
                        text: 'Моццарела',
                        value: '2',
                    }, {
                        text: 'Чеснок',
                        value: '3',
                    }, {
                        text: 'Соленые огурчики',
                        value: '4',
                    }, {
                        text: 'Красный лук',
                        value: '5',
                    },{
                        text: 'Томаты',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    }, {
                        text: 'Моццарела',
                        value: '2',
                    }, {
                        text: 'Чеснок',
                        value: '3',
                    }, {
                        text: 'Соленые огурчики',
                        value: '4',
                    }, {
                        text: 'Красный лук',
                        value: '5',
                    },{
                        text: 'Томаты',
                        value: '6',
                    },
                    {
                        text: 'Сырный соус',
                        value: '7',
                    }, {
                        text: 'Моццарела',
                        value: '8',
                    }, {
                        text: 'Чеснок',
                        value: '9',
                    }, {
                        text: 'Соленые огурчики',
                        value: '10',
                    }, {
                        text: 'Красный лук',
                        value: '11',
                    },{
                        text: 'Томаты',
                        value: '12',
                    },
                ]}
            />

        </div>

    );
};
