'use client'

import { useState } from 'react'
import TextListItem from '../../Atoms/TextListItem'
import PageSpacer from '../../Atoms/PageSpacer';
import SectionTitle from '../../Atoms/SectionTitle';

interface TermDetails{
    name: string,
    hostName: string,
    dates: string
    
}

interface Props{
    termDetails: TermDetails[];
}

function FocusTerms({termDetails}: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    
    const toggleSection = () => {
        setCollapsed(!collapsed)
    }
    
    return (
        <div className='flex flex-col gap-2'>
            <SectionTitle title={"🗓️ Academic Terms"} toggleSection={toggleSection} collapsed={collapsed}/>
            {!collapsed && termDetails.map((term) => (
                term.hostName ?
                <TextListItem subtitle={`${term.name} (${term.hostName})`} bulletTexts={[term.dates]} /> : 
                <TextListItem subtitle={term.name} bulletTexts={[term.dates]} />
            ))}
            <PageSpacer />
        </div>
    )
}

export default FocusTerms