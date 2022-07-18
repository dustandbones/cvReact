import React from 'react'

export const WorkExperience = ({ works, languagePage }) => {
    return (
        <div className='flex flex-row justify-start shadow border'>
            <div className='flex-col p-5'>
                <h3 className='underline uppercase'> {languagePage === 'ES'? 'EXPERIENCIA PROFESIONA' : 'WORK EXPERIENCE'}L</h3>
            {    
                works.map( (work, index) => {
                    return (
                        <div key={index} className='rounded-full m-2 p-4 shadow border'>
                            <div className='flex-row'>
                                <label className=''>{work.company}  |  </label>
                                <label>{work.since} - {work.until}</label>
                            </div>
                            <label>{work.position}</label>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}