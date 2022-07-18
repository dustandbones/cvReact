import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';

export const PersonalData = ({ data, languagePage }) => {
    const { nacionality, birth, language, mail, phone, repo } = data

    return (
        <div className={nacionality || birth || language || mail || phone || repo  ? 'flex flex-row justify-start p-4' : 'hidden'} >
            <div className='flex-col'>
                <h3 className='uppercase border-b-2'>{languagePage === 'ES'? 'Información Personal' : 'PERSONAL INFORMATION' }</h3>
                <div className='p-2'>
                    <div className={nacionality ? 'flex items-center' : 'hidden'}>
                        {/* <label className=''>{languagePage === 'ES'? 'Nacionalidad' : 'Nacionality' }: </label> */}
                        <LanguageIcon className='pr-2'></LanguageIcon>
                        <label>{nacionality} </label>
                    </div>
                    <div className={birth ? 'flex items-center' : 'hidden'}>
                        {/* <label>{languagePage === 'ES'? 'Fecha de Nacimiento' : 'Date of Birth' }: </label> */}
                        <CalendarMonthIcon className='pr-2'></CalendarMonthIcon>
                        <label>{birth}</label>
                    </div>
                    <div className={language ? 'flex items-center' : 'hidden'}>
                        {/* <label>{languagePage === 'ES'? 'Idiomas' : 'Language' }: </label> */}
                        <KeyboardVoiceIcon className='pr-2'></KeyboardVoiceIcon>
                        <label>{language}</label>
                    </div>
                    <div className={mail ? 'flex items-center' : 'hidden'}>
                        {/* <label>{languagePage === 'ES'? 'E-mail' : 'E-mail' }: </label> */}
                        <EmailIcon className='pr-2'></EmailIcon>
                        <label>{mail}</label>
                    </div>
                    <div className={phone ? 'flex items-center' : 'hidden'}>
                        {/* <label>{languagePage === 'ES'? 'Celular' : 'Mobile' }: </label> */}
                        <CallIcon className='pr-2'></CallIcon>
                        <label>{phone}</label>
                    </div>
                    <div className={repo ? 'flex items-center' : 'hidden'}>
                        {/* <label>{languagePage === 'ES'? 'Celular' : 'Mobile' }: </label> */}
                        <GitHubIcon className='pr-2'></GitHubIcon>
                        <label><a href={repo} target='_blank' rel="noreferrer">{repo}</a></label>
                    </div>
                </div>
            </div>
        </div >
    )
}
