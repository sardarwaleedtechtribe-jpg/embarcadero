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
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">RAD STUDIO™</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">DELPHI®</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">C++BUILDER®</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">INTERBASE®</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">RAD SERVER™</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Free Tools</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">C++ Compiler</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">C++Builder Community ED</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">DELPHI Community ED</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">REST Debugger</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">INTERBASE Developer Edition</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">FMX STENCILS</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">DEV-C++</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Resources</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Events and Webinars</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">White Papers</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">For Educators</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Partners</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Certifications</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">MVP Program</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">WEB APP Development</a></li>
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
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">About us</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Contact us</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Contact sales</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Legal</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Logo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-3">Get In Touch</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>US: 1 (512) 226-8080</li>
                            <li>DE: +49 (0)6103-3866-100</li>
                            <li>info@embarcadero.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs sm:text-sm">
                    <p>2022 Embarcadero Inc. All Rights Reserved</p>
                    <div className="flex items-center gap-3 sm:gap-4">
                        <a className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><FaTwitter /></a>
                        <a className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><RiInstagramFill/></a> 
                        <a className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><FaFacebook/></a> 
                        <a className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><FaGithub/></a> 
                    </div>
                </div>
        </div>
        </footer>
    );
}
export default Footer;