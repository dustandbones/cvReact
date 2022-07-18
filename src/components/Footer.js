import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    // <footer className='flex w-full p-0 md:p-2 bg-slate-300 justify-center text-xs md:text-base fixed left-0 bottom-0'>
    <footer className='flex w-full p-0 md:p-2 bg-slate-300 justify-center text-xs md:text-base'>
        <div className='flex content-center justify-center'>
            <p className='p-0 md:p-2'>Powered by <b>Luis E. Caiazzo </b> - ® 2022 | Download Project from </p>
            <a href="https://github.com/luis-caiazzo/cvReact" className='self-center' target="_blank" rel="noreferrer"><GitHubIcon></ GitHubIcon></a>
        </div> 
    </footer>
  )
}
