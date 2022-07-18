import React, { useState, useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { Education } from './Education';
import { WorkExperience } from './WorkExperience';
import { Certifications } from './Certifications';
import { Knowledge } from './Knowledge';

export const ContentContainer = ({data, languagePage}) => {

    //const data = props.data
    const [value, setValue] = useState(1)

    const changeContent = (e, val) => {
        setValue(val)
    }

  return (
    <div className='w-full min-h-20 text-xs md:text-base'>
        {/*<Tabs  aria-label="basic tabs example" value={value} centered onChange={changeContent}>*/}
        <Tabs  aria-label="basic tabs example" value={value} onChange={changeContent}>
            <Tab label={languagePage === 'ES'? 'Educacion' : 'STUDIES'}  className={data?.education_studies?.length === 0? 'hidden' : 'text-xs md:text-sm p-1 md:p-4'}/>
            <Tab label={languagePage === 'ES'? 'Experiencia' : 'EXPERIENCE'} className={data?.workExperience?.length === 0? 'hidden' : 'text-xs md:text-sm p-1 md:p-4'} />
            <Tab label={languagePage === 'ES'? 'Cursos' : 'CERTIFICATIONS'} className={data?.certifications?.length === 0? 'hidden' : 'text-xs md:text-sm p-1 md:p-4'} />
            <Tab label={languagePage === 'ES'? 'Conocimientos' : 'KNOWLEDGES'} className={data?.knowledges?.length === 0? 'hidden' : 'text-xs md:text-sm p-1 md:p-4'} />
        </Tabs>
        <TabPanel value={value} index={0} >
            <Education education={data.education_studies} languagePage={languagePage}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <WorkExperience works={data.workExperience} languagePage={languagePage}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Certifications certifications={data?.certifications} languagePage={languagePage}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Knowledge knowledges={data?.knowledges} languagePage={languagePage}/>
        </TabPanel>
                        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        </Box>

    </div>
  )
}

function TabPanel (props) {
    const {children, value, index} = props
    return (<> {
            value === index? children : '' 
        } </>)
}