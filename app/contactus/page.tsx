'use client'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faTwitter, faFacebook, faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

const socialMediaLinks = [
    { icon: faTelegram, href: 'https://t.me/AI_4klabs4k',} ,
    { icon: faLinkedin, href: 'https://www.linkedin.com/company/18701581/', },
    { icon: faInstagram, href: 'https://instagram.com/4klabs4k?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==', },
    { icon: faTwitter, href: 'https://twitter.com/4klabs4k' ,},
    { icon: faFacebook, href: 'https://www.facebook.com/4klabs4k/', }, 
    { icon: faWhatsapp, href: 'https://whatsapp.com/channel/0029VaC9pxn0bIdquIfWZU38',},
  ];

const ContactUs = ()=>{
    return (
    <div className="py-36 bg-gray-100">
        <div className="max-w-6xl mx-auto rounded-lg">
            <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-[sans-serif]">
                
                {/* the div for the message section */}
                <div className="p-6 rounded-lg">
                    <p className="text-4xl font-extrabold">contact us</p>
                    
                    <form className="mt-8 space-y-4">
                        <input type='text' placeholder='Full Name'
                            className="w-full rounded-md py-3 px-4 text-sm " />
                        <input type='email' placeholder='Email'
                            className="w-full rounded-md py-3 px-4 text-sm" />
                        <textarea placeholder='Message' rows={6}
                            className="w-full rounded-md px-4 text-sm pt-3"></textarea>
                        <button type='button'
                            className="text-white bg-black hover:bg-gray-900 font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
                            onClick={()=>(
                                location.reload()
                            )}>
                            Contact Us
                        </button>
                    </form>
                </div>

                {/* The div for the get intouch with us section */}
                <div>

                    {/* List which consists of email, phone number and location */}
                    <ul className="mt-12 space-y-8">
                        <h1 className="text-lg font-bold">Contact</h1>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" 
                                viewBox="0 0 479.058 479.058">
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    data-original="#000000" />
                            </svg>
                            <Link href="mailto:4klabs@aau.edu.et" className="text-sm ml-3">
                                4klabs@aau.edu.et
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 482.6 482.6">
                                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" data-original="#000000"></path>
                            </svg>
                            <Link href="tel:+251 9090909" className="text-sm ml-3">
                                +251 9090909
                            </Link>
                        </li>
                        <h1 className="text-lg font-bold">Based in</h1>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 368.16 368.16">
                                <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
                                <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
                            </svg>
                            <Link href="javascript:void(0)" className="text-sm ml-3">
                                4killo Addis Ababa University
                            </Link>
                        </li>
                    </ul>
                    {/* List which consists of the social media icons */}
                    <ul className="flex mt-12 space-x-4">
                        {socialMediaLinks.map((socialMedia, index) => (
                            <li key={index} className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${socialMedia}`}>
                                <Link href={socialMedia.href}>
                                    <FontAwesomeIcon icon={socialMedia.icon} size='lg'/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* The map div */}
            {/* https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed */}
            <div className="z-10 relative h-full max-md:min-h-[350px]">
                <iframe src="https://maps.google.com/maps?q=4k Labs&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    className="left-0 top-0 h-96 w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg b-0" 
                     allowFullScreen={true}></iframe>
            </div>

        </div>
    </div>
    )
}

export default ContactUs

