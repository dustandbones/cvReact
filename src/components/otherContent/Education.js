import React from 'react'

export const Education = ({education, languagePage}) => {
    return (
        <div className='flex flex-row justify-start shadow border'>
            <div className='flex-col p-5'>
                <h3 className='underline uppercase'> {languagePage === 'ES'? 'EDUCACIÓN' : 'EDUCATION/STUDIES'}</h3>
            {    
                education.map( (education, index) => {
                    return (
                        <div key={index} className='rounded-full m-2 p-4 shadow border'>
                            <div className='flex-row'>
                                <label className=''>{education.grade}  |  </label>
                                <label>{education.desc}</label>
                            </div>
                            <div className='flex-row'>
                            <label>{education.college}</label>
                                <label> - {education.state}</label>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
  )
}
