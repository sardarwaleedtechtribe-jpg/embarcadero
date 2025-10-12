import React, { useState, useCallback, useMemo } from "react";

const DROPDOWN_CONTENT = {
  products: {
    columns: [
      {
        title: "Development Tools",
        tools: [
          { 
            name: "RAD Studio", 
            description: "RAD Studio® is the ultimate IDE for building multi-platform high-performance native applications in Delphi® and modern C++ with powerful visual design tools and integrated toolchains." 
          },
          { 
            name: "Delphi", 
            description: "Delphi® is the world's most advanced integrated IDE for rapidly developing native high-performance multi-platform applications using powerful visual design tools and features developers love." 
          },
          { 
            name: "C++ Builder", 
            description: "C++Builder® is an advanced integrated IDE for modern C++, with robust features empowering blazingly fast, stunning responsive native applications for Windows and iOS." 
          }
        ]
      },
      {
        title: "Database & Server Solutions",
        tools: [
          { 
            name: "InterBase", 
            description: "Ultrafast, scalable, embeddable SQL database with commercial-grade data security, disaster recovery and change synchronization" 
          },
          { 
            name: "RAD Server", 
            description: "Turn-key application server that provides a robust 'out of the box' back-end platform on which to build and deploy Delphi and C++Builder application services." 
          }
        ]
      }
    ]
  },
  freeTools: {
    title: "Learn",
    items: [
      'C++ Compiler', 
      'Delphi Community Ed.', 
      'C++ Builder Community Ed.',
      'Rest Debugger', 
      'InterBase Developer Edition', 
      'FMX Stencils', 
      'Dev-C++', 
      'PyScripter', 
      'CPP Check', 
      'Python Libraries'
    ]
  },
  resources: {
    sections: [
      {
        title: "Learn",
        items: ['Videos', 'Blogs', 'White Papers', 'Solutions']
      },
      {
        title: "Engage",
        items: ['Events', 'Webinars', 'Success Stories', 'For Educators']
      },
      {
        title: "Partner",
        items: ['Partners', 'MVP programs', 'Web App Development', 'Embarcadero Academy']
      },
      {
        title: "Support",
        items: ['Migration and Upgrade', 'Product Documentation', 'Support', 'Previous Versions', 'FAQs']
      }
    ]
  }
};

// Navigation items configuration
const NAV_ITEMS = [
  { label: "Products", hasDropdown: true },
  { label: "Free Tools", hasDropdown: true },
  { label: "Blog", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Getit", hasDropdown: false },
  { label: "New Tools", hasDropdown: false },
];

const ProductsDropdown = () => (
  <div className="p-6 w-150 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {DROPDOWN_CONTENT.products.columns.map((column, index) => (
      <div key={column.title} className={index > 0 ? "md:mt-0 mt-4" : ""}>
        <h3 className="font-medium text-lg mb-3 text-gray-900">
          {column.title}
        </h3>
        <div className="space-y-3 w-70">
          {column.tools.map((tool) => (
            <div key={tool.name}>
              <h4 className="font-medium text-base text-gray-800 mb-1">
                {tool.name}
              </h4>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const FreeToolsDropdown = () => (
  <div className="p-4 w-64">
    <h3 className="font-medium text-lg text-gray-900 mb-3">
      {DROPDOWN_CONTENT.freeTools.title}
    </h3>
    <ul className="space-y-2">
      {DROPDOWN_CONTENT.freeTools.items.map((tool) => (
        <li key={tool}>
          <a
            href="#"
            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
          >
            {tool}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ResourcesDropdown = () => (
  <div className="p-4 w-[780px] flex gap-8">
    {DROPDOWN_CONTENT.resources.sections.map((section) => (
      <div key={section.title} className="flex-1 min-w-0">
        <h3 className="font-medium text-lg text-gray-900 mb-3">
          {section.title}
        </h3>
        <ul className="space-y-2">
          {section.items.map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

/**
 * NavMenu Component
 * A responsive navigation menu with dropdown functionality
 * @param {Object} props - Component props
 * @param {boolean} props.isSidebar - Whether the menu is in sidebar mode
 * @param {Function} props.onItemClick - Callback when a menu item is clicked (for sidebar)
 * @returns {JSX.Element} The navigation menu component
 */
export default function NavMenu({ isSidebar = false, onItemClick }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Memoized event handlers for better performance
  const handleMouseEnter = useCallback((label) => {
    if (!isSidebar) {
      setOpenDropdown(label);
    }
  }, [isSidebar]);

  const handleMouseLeave = useCallback(() => {
    if (!isSidebar) {
      setOpenDropdown(null);
    }
  }, [isSidebar]);

  const handleClick = useCallback((label) => {
    if (isSidebar) {
      // In sidebar mode, toggle dropdown and call onItemClick for non-dropdown items
      if (NAV_ITEMS.find(item => item.label === label)?.hasDropdown) {
        setOpenDropdown(openDropdown === label ? null : label);
      } else {
        onItemClick?.();
      }
    } else {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  }, [openDropdown, isSidebar, onItemClick]);

  // Memoized dropdown content renderer
  const renderDropdownContent = useCallback((label) => {
    switch (label) {
      case "Products":
        return <ProductsDropdown />;
      case "Free Tools":
        return <FreeToolsDropdown />;
      case "Resources":
        return <ResourcesDropdown />;
      default:
        return null;
    }
  }, []);

  // Different layouts for desktop vs sidebar
  if (isSidebar) {
    return (
      <div className="flex flex-col space-y-1">
        {NAV_ITEMS.map((item) => {
          const isOpen = item.hasDropdown && openDropdown === item.label;

          return (
            <div key={item.label} className="relative">
              <button
                aria-expanded={item.hasDropdown ? isOpen : undefined}
                aria-haspopup={item.hasDropdown ? "menu" : undefined}
                aria-controls={item.hasDropdown ? `${item.label.toLowerCase()}-menu` : undefined}
                className="w-full text-left px-4 py-3 rounded-md transition-colors flex items-center justify-between text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => handleClick(item.label)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick(item.label);
                  }
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {isOpen && (
                <div 
                  id={`${item.label.toLowerCase()}-menu`}
                  role="menu"
                  aria-labelledby={`${item.label.toLowerCase()}-button`}
                  className="mt-2 ml-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  {renderDropdownContent(item.label)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Desktop layout
  return (
    <nav className="hidden sm:flex items-center gap-2 relative z-40">
      {NAV_ITEMS.map((item) => {
        const isOpen = item.hasDropdown && openDropdown === item.label;

        return (
          <div 
            key={item.label} 
            className="relative"
            onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            <button 
              aria-expanded={item.hasDropdown ? isOpen : undefined} 
              aria-haspopup={item.hasDropdown ? "menu" : undefined}
              aria-controls={item.hasDropdown ? `${item.label.toLowerCase()}-menu` : undefined}
              className="w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between text-sm font-medium text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => item.hasDropdown && handleClick(item.label)}
              onKeyDown={(e) => {
                if (item.hasDropdown && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleClick(item.label);
                }
              }}
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {isOpen && (
              <div 
                id={`${item.label.toLowerCase()}-menu`}
                role="menu"
                aria-labelledby={`${item.label.toLowerCase()}-button`}
                className="absolute top-full left-0 mt-1 min-w-max bg-white rounded-lg shadow-lg border border-gray-200 z-50"
              >
                {renderDropdownContent(item.label)}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}