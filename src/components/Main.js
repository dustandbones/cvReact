import React, { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';

import { Profile } from "./Profile";
import { ActualPosition } from "./ActualPosition"
import { PersonalData } from "./PersonalData";
import { ContentContainer } from "./otherContent/ContentContainer";
import { Footer } from "./Footer";

const path = process.env.REACT_APP_HOST

export const Main = () => {

    const [data, setData] = useState(null)
    const [languagePage, setLanguagePage] = useState('ES')
    
    const changeLanguge = () => {
        if (languagePage === 'ES')
            setLanguagePage('EN')
        else
            setLanguagePage('ES')
    }

    const getData = async () => {
        fetch(`${path}/cv.json`).then(response => {
            return response.json()
        }).then(json => {
            setData(json[languagePage]);
        }).catch();
    }

    useEffect(() => {
        getData();
    }, [languagePage]);

    return data ? (
        <>
            <div className='p-0 flex flex-row w-full h-full '>
                <div className='self-top w-1/4 bg-slate-500 text-white p-6 hidden md:block'>
                    <div className='flex flex-row justify-center pt-2'>
                        <img alt='foto' className='rounded-full max-h-[150px]' src={process.env.PUBLIC_URL + '/img/photo.jpg' ? process.env.PUBLIC_URL + '/img/photo.jpg' : process.env.PUBLIC_URL + '/img/photo_default.jpg'} />
                    </div>
                    <Profile data={data?.profile} languagePage={languagePage} />
                    <PersonalData data={data?.personalData} languagePage={languagePage} />
                </div>
                <div className='grid p-0 md:p-6 w-full md:w-3/4 h-full text-xs md:text-base'>
                    <div className='text-right'>
                        <span className="inline-grid grid-cols-2 items-center self-center justify-items-end">
                        <IconButton aria-label="spanish" size="small" onClick={changeLanguge} disabled={languagePage === 'ES'? true : false}>
                            <img alt="edit" className='max-h-[20px] max-w-[100px]' src={process.env.PUBLIC_URL + '/img/ES.png'} />
                        </IconButton>
                        <IconButton aria-label="english" size="small" onClick={changeLanguge} disabled={languagePage === 'EN'? true : false}>
                            <img alt="edit" className='max-h-[20px] max-w-[100px]' src={process.env.PUBLIC_URL + '/img/EN.png'} />
                        </IconButton>
                            {/* <img alt='img' className='max-h-[20px] max-w-[100px] m-2 cursor-pointer' src={process.env.PUBLIC_URL + '/img/ES.png'} onClick={changeLanguge}/>
                            <img alt='img' className='max-h-[20px] max-w-[100px] m-2 cursor-pointer' src={process.env.PUBLIC_URL + '/img/EN.png'} onClick={changeLanguge}/> */}
                        </span>
                    </div>
                    <div className="content-center pl-1 md:pl-6">
                        <h1 className='self-center text-2xl pt-2'>{data?.name}</h1>
                        <label className=''>{data?.profession}</label>
                        <ActualPosition data={data?.actualPosition} languagePage={languagePage}/>
                        <div className={data?.featuredTechnologies?.length > 0? 'pt-6 pb-6 hidden md:block' : 'hidden'}>
                            <div className='w-full pb-4'>
                                <label className='border-b-2'>{languagePage === 'ES'? 'Tecnologías Destacadas' : 'Featured Technologies'}</label>
                            </div>
                            <span className={"inline-grid grid-cols-3 gap-4 items-center self-center justify-center"}>
                            {
                                data?.featuredTechnologies?.map( (elem, index)  => <img key={index} alt='img' className='max-h-[50px] max-w-[50px] lg:max-h-[100px] lg:max-w-[100px]' src={process.env.PUBLIC_URL + '/img/'+ elem +'.png'} />)
                            }
                            </span>
                        </div>
                        <ContentContainer data={data} languagePage={languagePage}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    ) : (
        <>Cargando</>
    )
}
