import React from 'react'

export const Knowledge = ({ knowledges, languagePage }) => {
    
  return (
    <div className='flex flex-row justify-start shadow border'>
        <div className='flex-col p-5'>
            <h3 className='underline uppercase'>{languagePage === 'ES'? 'CONOCIMIENTOS' : 'KNOWLEDGES'}</h3>
            {    
                knowledges.map( (item, index) => {
                    return (
                        <div key={index} className='rounded-full m-2 p-4 shadow border'>
                            <div className='flex-row'>
                                <label className=''>{item.knowledge}</label>
                            </div>
                            <label>{item.subItem}</label>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
