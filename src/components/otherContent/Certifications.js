import React from 'react'

export const Certifications = ({certifications, languagePage}) => {
    return (
        <div className='flex flex-row justify-start shadow border'>
            <div className='flex-col p-5'>
                <h3 className='underline uppercase'>{languagePage === 'ES'? 'cursos' : 'course - certifications'}</h3>
                {    
                    certifications.map( (item, index) => {
                        return (
                            <div key={index} className='rounded-full m-2 p-4 shadow border'>
                                <div className='flex-row'>
                                    <label className=''>{item?.course}</label>
                                </div>
                                <label>{item?.desc}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}