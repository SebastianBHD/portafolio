import AnimatedBg from './animatedBg';
import EmailSection from '../emailSection';

function Footer({primaryColor}) {
    return (
        <>
            <AnimatedBg selectedColor={primaryColor} />
            <div className="bg-primary -mt-1 w-full ">
                <div className="mx-auto min-w-full max-w-screen-xl p-6 py-6 lg:py-8">
                    <div className="lg:flex items-center justify-center">
                        <div className="grid grid-cols-2 sm:gap-6 sm:grid-cols-3">
                            <div className='md:mr-20 mr-10'>
                                <h2 className="mb-6 lg:text-2xl text-sm font-semibold text-secondary uppercase dark:text-tertiary">Resources</h2>
                                <ul className="text-tertiary lg:text-xl dark:text-tertiary font-medium">
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">React</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://vitejs.dev/" className="hover:underline">Vite</a>
                                    </li>
                                    <li>
                                        <a href="https://reactrouter.com/en/main" className="hover:underline">React Router</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 lg:text-2xl text-sm font-semibold text-secondary uppercase dark:text-tertiary">Follow Me</h2>
                                <ul className="text-tertiary lg:text-xl dark:text-tertiary font-medium">
                                    <li className="mb-4">
                                        <a href="https://www.linkedin.com/in/sebastian-britos-peluffo-718040291/" rel="noopener noreferrer" target="_blank" className="hover:underline ">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/seba_britos_/" rel="noopener noreferrer" target="_blank" className="hover:underline">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='lg:flex lg:flex-col hidden'>
                            <EmailSection />
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-tertiary sm:mx-auto dark:border-secondary lg:my-8" />
                    <div className="lg:flex lg:items-center justify-center">
                        <div className="flex mt-4 lg:justify-center sm:mt-0">
                            <a href="https://www.linkedin.com/in/sebastian-britos-peluffo-718040291/" rel="noopener noreferrer" target="_blank" className="text-secondary hover:text-gray-900 dark:hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='lg:w-8 lg:h-8 h-4 w-4' viewBox="0 0 30 30">
                                    <path className="fill-secondary" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </a>
                            <a href="https://mail.google.com/mail/u/0/#inbox" rel="noopener noreferrer" target="_blank" className="text-secondary  hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='lg:w-8 lg:h-8 h-4 w-4' viewBox="0 0 50 50">
                                    <path className="fill-secondary" d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                </svg>
                                <span className="sr-only">Gmail page</span>
                            </a>
                            <a href="https://github.com/SebastianBHD" rel="noopener noreferrer" target="_blank" className="text-secondary hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="lg:w-8 lg:h-8 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;