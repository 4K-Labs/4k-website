'use client';
import React, { useState } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const timesIcon = <FontAwesomeIcon icon={faTimes} />;

const Faqs = () => {
    const faqs = [
        { title: "First FAQ question", content: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
        { title: "Second FAQ question", content: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
        { title: "Third FAQ question", content: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
        { title: "Fourth FAQ question", content: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
        { title: "Fifth FAQ question", content: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
        { title: "Sixth FAQ question", content: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
    ];

    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    return (
        <div className="md:flex md:flex-row mx-12 h-screen">
            {/* Left Div - Content */}
            <div className=" flex flex-col justify-between md:w-1/2 p-4 bg-gray-100 m-4 h-full md:order-1">
                <div>
                   <div className="text-4xl font-bold mb-4">Frequently Asked Questions</div>
                    <p className="text-lg text-yellow-500">
                        If you have any questions, you might find the answers here. If not, feel free to contact us.
                    </p> 
                </div>
                
                <div className="mt-auto">
                    <p className='text-yellow-500'>If you have any questions, reach out to us via </p>
                    <Link href="mailto:4klabs@aau.edu.et">4klabs@aau.edu.et</Link>
                </div>
            </div>

            {/* Right Div - FAQs */}
            <div className="md:w-1/2 max-w-2xl mx-auto mt-8 p-4 md:order-2">
                <div>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-yellow-500 m-8 min-w-lg">
                            <div className="flex justify-between items-center">
                                <div className="text-lg text-yellow-500 font-semibold py-1">{faq.title}</div>
                                <button
                                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                                >
                                    {expandedIdx === idx ? timesIcon : plusIcon}
                                </button>
                            </div>
                            {expandedIdx === idx && (
                                <div className="text-yellow-600 mt-2 py-1">{faq.content}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
