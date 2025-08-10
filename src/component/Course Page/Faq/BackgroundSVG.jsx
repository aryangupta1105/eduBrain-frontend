import React from 'react';

const BackgroundSVG = ({ position }) => {
  if (position === 'left') {
    return (
      <div
        className="absolute left-0 top-[73px] w-[340px] h-[187px] z-[1]"
        dangerouslySetInnerHTML={{
          __html: `<svg width="340" height="187" viewBox="0 0 340 187" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 75.0836H56.1481L95.974 37.2153H193.907L231.121 1.30566H320.566M0 94.6707H63.9827L103.156 55.4965H211.535L236.997 30.0334H338.847M0 116.216H63.9827L99.8913 79.6539H236.997M320.566 135.151H143.635L118.825 160.614H285.311M223.939 116.216H126.007L79.6519 160.614H33.2971M33.2971 141.027H70.5115L113.602 94.6707H274.212M0 135.151H22.1981V174.325H249.402M0 149.514H10.4462V185.424H138.412" stroke="url(#paint0_linear_left)" stroke-opacity="0.2"/>
            <defs>
              <linearGradient id="paint0_linear_left" x1="242.672" y1="93.7776" x2="-2.03727" y2="106.449" gradientUnits="userSpaceOnUse">
                <stop stop-color="#04D5FF"/>
                <stop offset="1" stop-color="#246BFD"/>
              </linearGradient>
            </defs>
          </svg>`
        }}
      />
    );
  }

  return (
    <div
      className="absolute right-0 top-[245px] w-[339px] h-[107px] z-[1]"
      dangerouslySetInnerHTML={{
        __html: `<svg width="339" height="107" viewBox="0 0 339 107" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.2993 0.547363H208.572L239.781 19.5716H339.5M69.2702 19.5716H208.572L239.781 37.2369H339.5M0 43.3518H199.437L208.572 54.2228H339.5M339.5 71.2087H250.438L230.647 84.118H83.7332M339.5 78.0031H270.991L250.438 90.2329M339.5 90.2329H290.021L264.14 105.86H124.839" stroke="url(#paint0_linear_right)" stroke-opacity="0.2"/>
          <defs>
            <linearGradient id="paint0_linear_right" x1="96.3611" y1="53.4397" x2="340.192" y2="75.5558" gradientUnits="userSpaceOnUse">
              <stop stop-color="#04D5FF"/>
              <stop offset="1" stop-color="#246BFD"/>
            </linearGradient>
          </defs>
        </svg>`
      }}
    />
  );
};

export default BackgroundSVG;
