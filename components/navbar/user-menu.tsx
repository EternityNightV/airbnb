"use client"
import {AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../avatar';
import { useState, useCallback } from "react"
import MenuItem from './menu-item';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps {
  currentUser ?: SafeUser | null
}

const UserMenu = ({
  currentUser
} : UserMenuProps ) => {

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(() => {
    if(!currentUser) {
      return loginModal.onOpen()
    }
    rentModal.onOpen();
  }, [loginModal, rentModal]);

  
    return ( 
        <div className="relative">
          <div className="flex flex-row items-center gap-3">
            <div 
              onClick={onRent} 
              className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
            >
              Сдать жилье на AirBnb
            </div>
            <div 
              onClick={toggleOpen} 
              className="py-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <AiOutlineMenu/>
              <div className='hidden md:block'>
                <Avatar/>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-20 text-sm'>
              <div className='flex flex-col cursor-pointer'>
                {currentUser ? (
                  <>
                  <MenuItem
                    label='My trips'
                    onClick={loginModal.onOpen}
                  />
                  <MenuItem
                    label='My favorites'
                    onClick={registerModal.onOpen}
                  />
                  <MenuItem
                    label='My reservations'
                    onClick={registerModal.onOpen}
                  />
                  <MenuItem
                    label='My properties'
                    onClick={registerModal.onOpen}
                  />
                  <MenuItem
                    label='Airbnb my home'
                    onClick={rentModal.onOpen}
                  />
                  <hr/>
                  <MenuItem
                    label='Log Out'
                    onClick={() => signOut()}
                  />
                </>
                ) : (
                  <>
                    <MenuItem
                      label='Войти'
                      onClick={loginModal.onOpen}
                    />
                    <MenuItem
                      label='Зарегестрироваться'
                      onClick={registerModal.onOpen}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
     );
}
 
export default UserMenu;