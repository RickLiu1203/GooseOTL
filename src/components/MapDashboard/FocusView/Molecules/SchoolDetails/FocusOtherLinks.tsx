import { useState } from 'react'
import SectionTitle from '../../Atoms/SectionTitle';
import LinkListItem from '../../Atoms/LinkListItem';
import PageSpacer from '../../Atoms/PageSpacer';

interface LinkObject{
    text: string,
    url: string
}

interface Props{
 links: LinkObject[]
}

function FocusOtherLinks({ links }: Props) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    
    const toggleSection = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className='flex flex-col gap-2'>
            <SectionTitle title={"Other Links"} icon={"🔗"} toggleSection={toggleSection} collapsed={collapsed}/>
            {!collapsed && <LinkListItem links={links} showSubtitle={false}/>}
            <PageSpacer />
        </div>
    )
}

export default FocusOtherLinks