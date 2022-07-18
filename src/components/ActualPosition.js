import React from 'react'

export const ActualPosition = ({ data, languagePage }) => {
    const { range, technologies } = data
    return (
        <div className='flex flex-col'>
            <div className='pt-5'>
                <label className='border-b-2'>{languagePage === 'ES'? 'Posición Actual' : 'Current Position'}</label>
            </div>
            <div className='pt-0'>
                <label className=''>{range}</label>
            </div>
            <div className='pt-2'>
                <label className='border-b-2'>{languagePage === 'ES'? 'Tecnologías utilizadas en la Posición' : 'Technologies used in the current position'}</label>
            </div>
            <div className='pt-0'>
                <label className=''>{technologies}</label>
            </div>
        </div>
    )
}
