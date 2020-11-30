import React, { useState } from 'react'
import { Transition } from '@tailwindui/react'
import { GlobalConsumer } from '../context/Context'

const SelectMenus = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="py-4 px-4 mb-4 text-center">
      <div className="w-full md:w-2/3 lg:w-1/3 m-auto text-center">
        <label id="listbox-label" className="block text-sm my-2 leading-5 font-medium text-gray-200">
          Assigned to
        </label>
  
        <div className="relative">
          <span className="inline-block w-full rounded-md shadow-sm">
            <button type="button" onClick={() => setIsOpen(!isOpen)} aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" className="cursor-default relative w-full rounded-md border border-gray-300 bg-white px-2  py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 text-lg sm:text-sm leading-5">
              <div className="flex items-center space-x-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <span className="block truncate">
                  Toom
                </span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </span>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
          {(ref) => (
          <div ref={ref} className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
            <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" className="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
              <li id="listbox-item-0" role="option" className="text-gray-600 cursor-default select-none relative py-2 pl-3 pr-9 hover:text-gray-900">
                <div className="flex items-center space-x-3">
                  <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                  <span className="font-normal block truncate">
                    Wade Cooper
                  </span>
                </div>
  
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  {/* <!-- Heroicon name: check --> */}
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </li>
  
              {/* <!-- More options... --> */}
            </ul>
          </div>
          )}
          </Transition>
        </div>
              
      </div>
    </main>
  )
}

export default GlobalConsumer(SelectMenus);