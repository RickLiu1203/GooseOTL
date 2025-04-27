'use client'

import { useState } from 'react'
import TextListItem from '../../Atoms/TextListItem'
import PageSpacer from '../../Atoms/PageSpacer';
import SectionTitle from '../../Atoms/SectionTitle';

interface Props{
    requirementDetails: string[];
}

function FocusRequirements({requirementDetails}: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    
    const toggleSection = () => {
        setCollapsed(!collapsed)
    }
    
    return (
        <div className='flex flex-col gap-2'>
            <SectionTitle title={"Requirements"} icon={"📋"} toggleSection={toggleSection} collapsed={collapsed}/>
            {!collapsed &&
            <TextListItem bulletTexts={requirementDetails} />
            }
            <PageSpacer />
        </div>
    )
}

export default FocusRequirements