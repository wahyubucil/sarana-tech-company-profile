import { useEffect, useState } from 'react';
import { cn } from '~/lib/utils';
import { Logo } from './logo';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu if user resizes back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="fixed top-[43px] right-4 z-50 flex -translate-y-1/2 cursor-pointer items-center justify-center p-2 md:hidden"
        aria-label="Toggle Menu"
      >
        <div className="relative flex h-[16px] w-[24px] flex-col justify-between">
          <span
            className={cn(
              'block h-[2px] w-full rounded-full transition-all duration-300 ease-in-out',
              isOpen
                ? 'absolute top-1/2 -translate-y-1/2 rotate-45 bg-white'
                : 'bg-[#101010]',
            )}
          />
          <span
            className={cn(
              'block h-[2px] self-end rounded-full transition-all duration-300 ease-in-out',
              isOpen ? 'w-0 bg-white opacity-0' : 'w-[18px] bg-[#101010]',
            )}
          />
          <span
            className={cn(
              'block h-[2px] w-full rounded-full transition-all duration-300 ease-in-out',
              isOpen
                ? 'absolute top-1/2 -translate-y-1/2 -rotate-45 bg-white'
                : 'bg-[#101010]',
            )}
          />
        </div>
      </button>

      {/* Full screen menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#252525] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        {/* Light logo inside menu */}
        <div className="absolute top-[25.5px] left-4 h-[34px] w-[127px] md:left-[calc(50vw-585.5px)]">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="relative block size-full"
          >
            <Logo
              variant="light"
              className="absolute block size-full max-w-none"
            />
          </a>
        </div>

        <nav className="flex flex-col items-center gap-[40px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-white uppercase tracking-[2px] md:text-[32px]">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              'transition-all delay-100 duration-500 hover:text-[#767676]',
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[20px] opacity-0',
            )}
          >
            Home
          </a>
          <a
            href="/services"
            onClick={() => setIsOpen(false)}
            className={cn(
              'transition-all delay-150 duration-500 hover:text-[#767676]',
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[20px] opacity-0',
            )}
          >
            Services
          </a>
          <a
            href="/case-study"
            onClick={() => setIsOpen(false)}
            className={cn(
              'transition-all delay-200 duration-500 hover:text-[#767676]',
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[20px] opacity-0',
            )}
          >
            Case Study
          </a>
          <a
            href="/1000dev"
            onClick={() => setIsOpen(false)}
            className={cn(
              'transition-all delay-250 duration-500 hover:text-[#767676]',
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[20px] opacity-0',
            )}
          >
            #1000Dev
          </a>
          <a
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className={cn(
              'transition-all delay-300 duration-500 hover:text-[#767676]',
              isOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-[20px] opacity-0',
            )}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
};
