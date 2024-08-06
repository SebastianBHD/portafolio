import AnimatedBg from '../components/animatedBg';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Button} from '../components/ui/button'

function Footer() {
    return (
        <>
            <AnimatedBg />
            <div className="bg-primary -mt-1">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
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
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='xl:flex xl:flex-col hidden '>
                                <p className='mb-6 lg:text-2xl text-sm font-semibold text-secondary uppercase dark:text-tertiary'>Contact</p>
                                <div className='flex flex-col gap-5'>
                                    <Input placeholder='Your Email' />
                                    <Textarea placeholder='Text to Send' />
                                    <Button className='max-w-20' variant='secondary' size='sm'>Send</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-tertiary sm:mx-auto dark:border-secondary lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-secondary hover:text-gray-900 dark:hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='lg:w-8 lg:h-8 h-4 w-4' viewBox="0 0 30 30">
                                    <path className="fill-secondary" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </a>
                            <a href="#" className="text-secondary hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="lg:w-8 lg:h-8 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#" className="text-secondary hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='lg:w-8 lg:h-8 h-4 w-4' viewBox="0 0 50 50">
                                    <path className="fill-secondary" d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                </svg>
                                <span className="sr-only">Gmail page</span>
                            </a>
                            <a href="#" className="text-secondary hover:text-gray-900 dark:hover:text-white ms-5">
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