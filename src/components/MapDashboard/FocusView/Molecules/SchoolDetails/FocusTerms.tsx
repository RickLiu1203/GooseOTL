'use client'

import { useState } from 'react'
import TextListItem from '../../Atoms/TextListItem'
import PageSpacer from '../../Atoms/PageSpacer';
import SectionTitle from '../../Atoms/SectionTitle';
import LinkListItem from '../../Atoms/LinkListItem';

interface TermDetails{
    name: string,
    hostName: string,
    dates: string
}

interface ExamObject{
    early: boolean,
    proctored: boolean
}

interface LinkObject{
    text: string,
    url: string
}

interface Props{
    termDetails: TermDetails[];
    exams: ExamObject;
    links: LinkObject[]
}

function FocusTerms({termDetails, exams, links}: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    
    const examDetailMap : {[key: string]: string} = {
        true: "upon request and approval",
        false: "not available"
    }
    const toggleSection = () => {
        setCollapsed(!collapsed)
    }
    
    return (
        <div className='flex flex-col gap-2'>
            <SectionTitle title={"Term Details"} icon={"🗓️"} toggleSection={toggleSection} collapsed={collapsed}/>
            {!collapsed && 
            <>
                {termDetails.map((term) => (
                    term.hostName ?
                    <TextListItem subtitle={`${term.name} (${term.hostName})`} bulletTexts={[term.dates]} /> : 
                    <TextListItem subtitle={term.name} bulletTexts={[term.dates]} />
                ))}
                <TextListItem subtitle={"Exam Details"} 
                bulletTexts={[`Early exams ${examDetailMap[String(exams.early)]}`, `Proctored exams at Waterloo ${examDetailMap[String(exams.proctored)]}`]} 
                />
                <LinkListItem links={links} />
            </>
            }
            <PageSpacer />
        </div>
    )
}

export default FocusTerms