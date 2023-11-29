"use client"

import { useRouter } from 'next/navigation'
import Heading from './heading'
import Button from './button'

interface EmptyStateProps {
    title ?: string,
    subTitle ?: string,
    showReset ?: boolean 
}


const EmptyState = ({
    title= 'No exact matches',
    subTitle = 'Try changing or removing some of your filters',
    showReset
} : EmptyStateProps) => {

    const router = useRouter()

    return ( 
        <div className='h-[60vh] flex flex-col items-center justify-center'>
          <Heading
            center
            title={title}
            subtitle={subTitle}
          />
          <div className='w-48 mt-4'>
            {showReset && (
              <Button
                onClick={() => router.push('/')}
                outline
                label='Remove all filters'
              />
            )}
          </div>
        </div>
     );
}
 
export default EmptyState;