import React from "react";

function ProductSection({
  // Background elements configuration
  backgroundElements = [],

  // Content configuration
  iconSrc,
  iconAlt = "",
  title,
  description,

  // Button configuration
  buttons = [],

  // Image configuration
  imageSrc,
  imageAlt = "",

  // Layout configuration
  containerClasses = "",
  contentClasses = "md:ml-5",
  imageContainerClasses = "",

  // Custom content (for any specific needs)
  customContent = null
}) {
  return (
    <div className={`relative w-full px-4 py-8 sm:py-12 overflow-hidden ${containerClasses}`}>
      {/* Background Elements */}
      {backgroundElements.map((bg, index) => (
        <div
          key={index}
          className={`absolute ${bg.classes} z-0`}
          style={bg.styles || {}}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
        <div className={`w-full md:w-1/2 ${contentClasses} flex flex-col items-center md:items-start gap-4 md:gap-6 text-base sm:text-lg`}>
          {iconSrc && (
            <img
              src={iconSrc}
              alt={iconAlt}
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded bg-transparent transition-transform duration-300 hover:scale-105"
            />
          )}

          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-gray-700 max-w-2xl text-center md:text-left">
              {description}
            </p>
          )}

          {/* Custom content slot */}
          {customContent}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={button.classes || "px-5 sm:px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition"}
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={`w-full md:w-1/2 max-w-3xl mx-auto md:mx-0 flex justify-center md:justify-end ${imageContainerClasses}`}>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto max-h-[480px] sm:max-h-[560px] md:max-h-[640px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
