'use client'

import { useState } from 'react'
import TextListItem from '../../Atoms/TextListItem'
import PageSpacer from '../../Atoms/PageSpacer';
import SectionTitle from '../../Atoms/SectionTitle';
import LinkListItem from '../../Atoms/LinkListItem';

interface LinkObject{
    text: string,
    url: string
}

interface Props{
 important: string[],
 credits: string[],
 transcript: string[],
 links: LinkObject[]
}

function FocusCourses({important, credits, links, transcript}: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    
    const toggleSection = () => {
        setCollapsed(!collapsed)
    }
    
    return (
        <div className='flex flex-col gap-2'>
            <SectionTitle title={"Courses & Academics"} icon={"📚"} toggleSection={toggleSection} collapsed={collapsed}/>
            {!collapsed && 
            <>
                <TextListItem subtitle='Important❗️' bulletTexts={important} />
                <TextListItem subtitle='Credits' bulletTexts={credits} />
                <TextListItem subtitle='Transcript' bulletTexts={transcript} />
                <LinkListItem links={links} showSubtitle={true}/>

            </>
            }
            <PageSpacer />
        </div>
    )
}

export default FocusCourses