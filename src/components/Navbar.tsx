import { Popover } from '@headlessui/react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="inline-flex bg-white w-[1280px]">
      <div className="inline-flex items-start justify-start sm:px-6">
        <div className="inline-flex items-center justify-start md:justify-start md:space-x-10">
          <Popover.Group as="nav" className="inline-flex items-start justify-start md:flex">
            <Popover className="inline-flex items-center justify-start">
              {({ open }) => (
                <>
                <div className='inline-flex items-start justify-start'>
                    <span className='ml-[38px] pr-[18px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        < path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    </span>
                  <Popover.Button
                    className={classNames(
                      open ,
                      
                    )}
                  >
                    <span className='pr-[22px] text-[18px] font-[400] leading-[19.2px] text-[#2D2D2D]'>Home</span>
                  </Popover.Button>
                  <span className='py-[6px] pr-[22px] '>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.097632 13.3166 -0.097632 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976315 1.31658 -0.0976315 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976314 1.70711 0.292893L7.70711 6.29289Z" fill="#2D2D2D"/>
                    </svg>

                  </span>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      ''
                    )}
                  >
                    <span className='pr-[22px] text-[18px] font-[400] leading-[19.2px] text-[#2D2D2D]'>Spirits</span>
                  </Popover.Button>
                  <span className='py-[6px] pr-[22px]'>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.097632 13.3166 -0.097632 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976315 1.31658 -0.0976315 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976314 1.70711 0.292893L7.70711 6.29289Z" fill="#2D2D2D"/>
</svg>

                  </span>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      ''
                    )}
                  >
                    <span className='pr-[22px] text-[18px] font-[400] leading-[19.2px] text-[#2D2D2D]'>Kiss My</span>
                  </Popover.Button>
                  <span className='py-[6px] pr-[22px]'>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.097632 13.3166 -0.097632 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976315 1.31658 -0.0976315 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976314 1.70711 0.292893L7.70711 6.29289Z" fill="#2D2D2D"/>
</svg>

                  </span>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      ''
                    )}
                  >
                    <span className='text-[18px] font-[700] leading-[19.2px] text-[#2D2D2D]'>Kiss My Rhubharb</span>
                  </Popover.Button>
                  </div>
                  
                  
                    
                </>
              )}
            </Popover>

            

            
          </Popover.Group>
        </div>
        </div>
        </Popover>
  )
}
