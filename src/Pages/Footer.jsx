import React from "react";
import logo from '/Assets/embarcader.svg';
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer className="relative w-full overflow-hidden">
            <div className="absolute bg-indigo-500 opacity-10 blur-[280px] rounded-full w-[35vw] h-[35vh] sm:w-[40vw] sm:h-[50vh] md:w-[30vw] md:h-[40vh] left-[-15vw] top-[-10vh] z-0" />
            <div className="absolute bg-[#6366F1] opacity-10 blur-[410px] rounded-full w-[70vw] h-[95vh] sm:w-[60vw] sm:h-[85vh] md:w-[50vw] md:h-[75vh] left-[-25vw] top-[-30vh] z-0"/>
            <div className="absolute bg-[#F43F5E] opacity-10 blur-[410px] rounded-full w-[75vw] h-[100vh] sm:w-[65vw] sm:h-[90vh] md:w-[55vw] md:h-[80vh] right-[-30vw] top-[-25vh] z-0" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className='ml-1 mb-8 sm:mb-10'>
                <img src={logo} alt="Embarcadero logo" className="h-8 sm:h-10 w-auto" />
            </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Products</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {['RAD STUDIO™', 'DELPHI®', 'C++BUILDER®', 'INTERBASE®', 'RAD SERVER™',
                            ].map(product => (
                                <li key={product}>
                                    <a href="#" className="hover:underline hover:text-blue-700 transition-colors">{product}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Free Tools</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {[ 'C++ Compiler', 'C++Builder Community ED', 'DELPHI Community ED', 'REST Debugger', 'INTERBASE Developer Edition', 'FMX STENCILS', 'DEV-C++',
                            ].map(tool => (
                                <li key={tool}>
                                    <a href="#" className="hover:underline hover:text-blue-700 transition-colors">{tool}</a>                                   
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Resources</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {[ 'Events and Webinars', 'White Papers', 'Success Stories', 'For Educators', 'Partners', 'Certifications', 'MVP Program', 'WEB APP Development' ].map(resource => (
                                <li key={resource}>
                                    <a href="#" className="hover:underline hover:text-blue-700 transition-colors">{resource}</a>                                   
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Community</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Blogs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Company</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {['About us', 'Contact us', 'Contact sales', 'Legal', 'Privacy Policy', 'Logo'].map(link => (
                                <li key={link}> 
                                    <a href="#" className="hover:underline hover:text-blue-700 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Get In Touch</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {[ { country: 'US', phone: '1 (512) 226-8080' }, { country: 'DE', phone: '+49 (0)6103-3866-100' },
                            ].map(contact => (
                                <li key={contact.country}>
                                    {contact.country}: {contact.phone}
                                </li>
                            ))}
                            <li>info@embarcadero.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs sm:text-sm">
                    <p>2022 Embarcadero Inc. All Rights Reserved</p>
                    <div className="flex items-center gap-3 sm:gap-4">
                        {[<FaTwitter key="twitter" className="h-6 w-6" />, <RiInstagramFill key="instagram" className="h-6 w-6" />, <FaFacebook key="facebook" className="h-6 w-6" />, <FaGithub key="github" className="h-6 w-6" />]
                            .map(icon => (
                                <a key={icon.key} className="rounded-full inline-flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                    {icon}
                                </a>
                    ))}
                    </div>
                </div>
        </div>
        </footer>
    );
}
export default Footer;