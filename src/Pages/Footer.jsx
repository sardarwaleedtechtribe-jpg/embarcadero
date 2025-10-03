import React from "react";
import logo from '/Assets/embarcader.svg';
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer(){
    return(
        <footer className="w-full bg-gradient-to-r from-blue-100 via-pink-50 to-red-100 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-10">
            <div className='m-10 ml-1'>
                <img src={logo} alt="Embarcadero logo" />
            </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    <div>
                        <h4 className="font-semibold mb-3">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">RAD STUDIO™</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">DELPHI®</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">C++BUILDER®</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">INTERBASE®</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">RAD SERVER™</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Free Tools</h4>
                        <ul className="space-y-2 text-sm">
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
                        <h4 className="font-semibold mb-3">Resources</h4>
                        <ul className="space-y-2 text-sm">
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
                        <h4 className="font-semibold mb-3">Community</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Blogs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">About us</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Contact us</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Contact sales</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Legal</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline hover:text-blue-700 transition-colors">Logo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Get In Touch</h4>
                        <ul className="space-y-2 text-sm">
                            <li>US: 1 (512) 226-8080</li>
                            <li>DE: +49 (0)6103-3866-100</li>
                            <li>info@embarcadero.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm">
                    <p>2022 Embarcadero Inc. All Rights Reserved</p>
                    <div className="flex items-center gap-4">
                        <a className="h-8 w-8 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><FaTwitter /></a>
                        <a className="h-8 w-8 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><RiInstagramFill/></a> 
                        <a className="h-8 w-8 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><FaFacebook/></a> 
                        <a className="h-8 w-8 rounded-full bg-gray-300 inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"><FaGithub/></a> 
                    </div>
                </div>
        </div>
        </footer>
    );
}
export default Footer;