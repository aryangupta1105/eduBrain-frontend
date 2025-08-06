import React from 'react';
import PowerBIIcon from './PowerBIIcon';
import CourseFeature from './CourseFeature';


const CourseCard = ({
  title,
  description,
  features,
  currentPrice,
  originalPrice,
  discountPercentage,
  isFeatured = true
}) => {
// Utility to fix SVG attributes for React
function fixSvgAttributes(svgString) {
  return svgString
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stop-color/g, 'stopColor')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/flood-opacity/g, 'floodOpacity')
    .replace(/color-interpolation-filters/g, 'colorInterpolationFilters');
}

  return (
    <article className="relative rounded-xl bg-[#0E121B] border border-[#2E2E2E] overflow-hidden">
      <header className="flex relative justify-center items-center h-[200px]">
        <div className="absolute top-3 right-2 px-2 py-2 px-3 text-xs font-semibold bg-rose-500 rounded text-[white]">
          {discountPercentage} Off
        </div>
        {isFeatured && (
          <div className="absolute top-3 right-2 px-2 py-2 px-3 text-xs font-semibold bg-green-500 rounded text-[white]">
            Featured
          </div>
        )}
        <div className="flex gap-3 items-center max-sm:gap-2">
          <img src="/powerbi.png" alt="Course" className=" object-contain rounded" />
        </div>
      </header>

      <div className="p-6">
        <h2 className="mb-3 text-lg font-semibold leading-6 text-slate-50">
          {title}
        </h2>
        <p className="mb-5 text-sm leading-5 text-zinc-400">
          {description}
        </p>

        <div className="flex flex-wrap  mb-6 max-sm:gap-3">
          {features.map((feature, index) => (
            <span key={index} className="flex items-center gap-1 text-zinc-400 px-2 py-1 rounded -ml-2 text-sm font-medium">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-2 items-center mb-5">
          <span className="text-xl font-bold text-slate-50">{currentPrice}</span>
          <span className="text-md line-through text-zinc-400">{originalPrice}</span>
        </div>

        <button className="p-3 w-full text-base font-semibold rounded-lg cursor-pointer bg-slate-50 border-[none] text-neutral-950">
          View Course
        </button>
      </div>
    </article>
  );
};

// Patch DecorativeVectors if used inline in this file (for example, if you have SVGs with dangerouslySetInnerHTML)
// Example usage:
// <div dangerouslySetInnerHTML={{ __html: fixSvgAttributes(svgString) }} />

export default CourseCard;
