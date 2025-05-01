import { useState } from 'react'
import PageSpacer from '../../Atoms/PageSpacer'
import SectionTitle from '../../Atoms/SectionTitle';
import TextListItem from '../../Atoms/TextListItem';
import LinkListItem from '../../Atoms/LinkListItem';

interface LinkObject{
  text: string;
  url: string;
}

interface Props{
  accomodation: string[];
  links: LinkObject[];
}

function FocusLivingWellness({ accomodation, links }: Props) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
    
  const toggleSection = () => {
      setCollapsed(!collapsed)
  }
  
  return (
        <div className='flex flex-col gap-2'>
            <SectionTitle title='Living and Wellness' icon='🙆‍♀️' toggleSection={toggleSection} collapsed={collapsed} />
            {!collapsed &&
              <>
                <TextListItem subtitle='Accomodation' bulletTexts={accomodation} />
                <LinkListItem links={links} showSubtitle={true} />
              </>              
            }
        <PageSpacer />    
        </div>
  )
}

export default FocusLivingWellness