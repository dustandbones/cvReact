import React from 'react'

export const Profile = ({ data, languagePage }) => {
    return (
        <div className={data? 'p-4' : 'hidden'}>
            <h3 className='border-b-2'> {languagePage === 'ES'? 'PERFIL' : 'PROFILE'}</h3>
            <div className='p-2'>{data}</div>
        </div>
    )
}
