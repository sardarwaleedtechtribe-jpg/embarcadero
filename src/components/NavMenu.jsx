
const navItems = [
    { title: 'My Downloads', links: ['RAD Studio', 'Delphi', 'C++Builder'] },
    { title: 'Upgrade Center', links: ["Pricing", "What's New", 'License FAQ'] },
    { title: 'My Customer Portal', links: ['Manage Licenses', 'Support Cases', 'Downloads'] },
    { title: 'Contact Us', links: ['Sales', 'Technical Support', 'Community'] }
];

const NavMenu = () => {
    return (
        <nav className="flex items-center gap-8 text-sm font-medium">
            {navItems.map((item, idx) => (
                <div key={idx} className="relative group">
                    <button className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors focus:outline-none">
                        {item.title}
                    </button>
                    
                    <div className="absolute left-0 pt-2 hidden group-hover:block bg-white/95 backdrop-blur-sm border border-gray-100 rounded-lg shadow-lg min-w-44 z-20">
                        <ul className="py-2">
                            {item.links.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors rounded">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </nav>
    );
};

export default NavMenu;