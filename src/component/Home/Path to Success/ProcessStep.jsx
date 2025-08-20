import React from 'react';

const ProcessStep = ({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt = "",
  isReversed = false,
  imageOpacity = 1,
  cardOpacity = 1,
  cardHeight = "auto",
  hasDecorations = false
}) => {
  const stepContent = (
    <>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="shrink-0 h-[329px] w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:h-auto max-md:max-w-[250px] max-sm:max-w-[180px]"
        style={{ opacity: imageOpacity }}
      />
      <div className="flex relative justify-center items-center rounded-xl h-[70px] w-[70px] max-sm:h-[60px] max-sm:w-[60px]">
        <div className="flex absolute top-px left-px justify-center items-center bg-gray-900 rounded-xl h-[69px] w-[69px] max-sm:h-[59px] max-sm:w-[59px]">
          <span className="text-2xl font-bold leading-8 text-center text-white max-sm:text-xl">
            {stepNumber}
          </span>
        </div>
      </div>
      <article
        className="flex relative flex-col gap-4 items-start px-8 py-6 bg-gray-900 rounded-3xl border border-solid border-neutral-800 w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:max-w-[250px] max-sm:px-4 max-sm:py-3 max-sm:max-w-[180px]"
        style={{
          opacity: cardOpacity,
          height: cardHeight !== "auto" ? cardHeight : "auto"
        }}
      >
        <h2 className="text-2xl font-bold leading-7 text-white max-sm:text-xl max-sm:leading-6">
          {title}
        </h2>
        <div className="flex flex-col items-start w-96 max-md:w-full">
          {description.map((line, index) => (
            <p key={index} className="text-base leading-6 text-zinc-400 max-sm:text-sm max-sm:leading-5">
              {line}
            </p>
          ))}
        </div>
        {hasDecorations && (
          <>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e5cb5c7d1e2a4084693fbc5df80f84201a43508b"
              alt=""
              className="absolute -top-11 h-[70px] right-[41px] w-[70px]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/90869214f935c07f0e483399f402508fa8a1f8a2"
              alt=""
              className="absolute -bottom-10 h-[70px] right-[42px] w-[70px]"
            />
          </>
        )}
      </article>
    </>
  );

  // For steps 2, 4, 6 - reversed layout on desktop
  if (isReversed) {
    return (
  <div className="flex relative gap-7 items-center w-[1016px] max-xl:w-[900px] max-lg:w-[700px] z-[2] max-md:flex-col max-md:gap-5 max-md:w-full max-sm:gap-4">
  <article className="flex relative flex-col gap-4 items-start px-8 py-6 bg-gray-900 rounded-3xl border border-solid border-neutral-800 w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:max-w-[250px] max-sm:px-4 max-sm:py-3 max-sm:max-w-[180px]">
          <h2 className="text-2xl font-bold leading-7 text-white max-sm:text-xl max-sm:leading-6">
            {title}
          </h2>
          <div className="flex flex-col items-start w-96 max-md:w-full">
            {description.map((line, index) => (
              <p key={index} className="text-base leading-6 text-zinc-400 max-sm:text-sm max-sm:leading-5">
                {line}
              </p>
            ))}
          </div>
        </article>
        <div className="flex relative justify-center items-center rounded-xl h-[70px] w-[70px] max-sm:h-[60px] max-sm:w-[60px]">
          <div className="flex absolute top-px left-px justify-center items-center bg-gray-900 rounded-xl h-[69px] w-[69px] max-sm:h-[59px] max-sm:w-[59px]">
            <span className="text-2xl font-bold leading-8 text-center text-white max-sm:text-xl">
              {stepNumber}
            </span>
          </div>
        </div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="shrink-0 h-[329px] w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:h-auto max-md:max-w-[250px] max-sm:max-w-[180px]"
        />
      </div>
    );
  }

  // Special layout for steps 3, 5, 7
  if (stepNumber === "03" || stepNumber === "05" || stepNumber === "07") {
    const containerWidth = stepNumber === "07" ? "w-[1023px]" : stepNumber === "05" ? "w-[1029px]" : "w-[1024px]";

    return (
      <div className={`flex relative gap-7 justify-between items-center ${containerWidth} max-xl:w-[900px] max-lg:w-[700px] z-[2] max-md:flex-col max-md:gap-5 max-md:w-full max-sm:gap-4`}>
        {stepNumber === "03" && (
          <>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="shrink-0 h-[324px] w-[325px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-full max-md:h-auto max-md:max-w-[150px] max-sm:max-w-[120px]"
            />
            <div className="flex gap-6 items-center max-md:flex-col max-md:gap-5 max-sm:gap-4">
              <div className="flex shrink-0 justify-center items-center bg-gray-900 rounded-xl h-[70px] w-[70px] max-sm:h-[60px] max-sm:w-[60px]">
                <span className="text-2xl font-bold leading-8 text-center text-white max-sm:text-xl">
                  {stepNumber}
                </span>
              </div>
              <article className="flex relative flex-col gap-4 items-start px-8 py-6 bg-gray-900 rounded-3xl border border-solid border-neutral-800 w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:max-w-[250px] max-sm:px-4 max-sm:py-3 max-sm:max-w-[180px]">
                <h2 className="text-2xl font-bold leading-7 text-white max-sm:text-xl max-sm:leading-6">
                  {title}
                </h2>
                <div className="flex flex-col items-start w-96 max-md:w-full">
                  {description.map((line, index) => (
                    <p key={index} className="text-base leading-6 text-zinc-400 max-sm:text-sm max-sm:leading-5">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </>
        )}

        {stepNumber === "05" && (
          <>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="shrink-0 h-[329px] w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:h-auto max-md:max-w-[250px] max-sm:max-w-[180px]"
            />
            <div className="flex gap-6 items-center max-md:flex-col max-md:gap-5 max-sm:gap-4">
              <div className="flex relative justify-center items-center rounded-xl h-[70px] w-[70px] max-sm:h-[60px] max-sm:w-[60px]">
                <div className="flex absolute top-px left-px justify-center items-center bg-gray-900 rounded-xl h-[69px] w-[69px] max-sm:h-[59px] max-sm:w-[59px]">
                  <span className="text-2xl font-bold leading-8 text-center text-white max-sm:text-xl">
                    {stepNumber}
                  </span>
                </div>
              </div>
              <article className="flex relative flex-col gap-4 items-start px-8 py-6 bg-gray-900 rounded-3xl border border-solid border-neutral-800 w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:max-w-[250px] max-sm:px-4 max-sm:py-3 max-sm:max-w-[180px]">
                <h2 className="text-2xl font-bold leading-7 text-white max-sm:text-xl max-sm:leading-6">
                  {title}
                </h2>
                <div className="flex flex-col items-start w-96 max-md:w-full">
                  {description.map((line, index) => (
                    <p key={index} className="text-base leading-6 text-zinc-400 max-sm:text-sm max-sm:leading-5">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </>
        )}

        {stepNumber === "07" && (
          <>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="shrink-0 h-[329px] opacity-[0.9052] w-[433px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:h-auto max-md:max-w-[250px] max-sm:max-w-[180px]"
            />
            <div className="flex gap-6 items-center max-md:flex-col max-md:gap-5 max-sm:gap-4">
              <div className="flex shrink-0 justify-center items-center bg-gray-900 rounded-xl h-[70px] w-[70px] max-sm:h-[60px] max-sm:w-[60px]">
                <span className="text-2xl font-bold leading-8 text-center text-white max-sm:text-xl">
                  {stepNumber}
                </span>
              </div>
              <article className="flex relative flex-col gap-4 items-start px-8 py-6 bg-gray-900 rounded-3xl border border-solid border-neutral-800 h-[191px] opacity-[0.9545] w-[433px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:max-w-[250px] max-sm:px-4 max-sm:py-3 max-sm:max-w-[180px]">
                <h2 className="text-2xl font-bold leading-7 text-white max-sm:text-xl max-sm:leading-6">
                  {title}
                </h2>
                <div className="flex flex-col items-start w-96 max-md:w-full">
                  {description.map((line, index) => (
                    <p key={index} className="text-base leading-6 text-zinc-400 max-sm:text-sm max-sm:leading-5">
                      {line}
                    </p>
                  ))}
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e5cb5c7d1e2a4084693fbc5df80f84201a43508b"
                  alt=""
                  className="absolute -top-11 h-[70px] right-[41px] w-[70px]"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/90869214f935c07f0e483399f402508fa8a1f8a2"
                  alt=""
                  className="absolute -bottom-10 h-[70px] right-[42px] w-[70px]"
                />
              </article>
            </div>
          </>
        )}
      </div>
    );
  }

  // Special layout for steps 4, 6
  if (stepNumber === "04" || stepNumber === "06") {
    const containerWidth = stepNumber === "06" ? "w-[1097px]" : "w-[1024px]";

    return (
      <div className={`flex relative gap-7 justify-between items-center ${containerWidth} max-xl:w-[900px] max-lg:w-[700px] z-[2] max-md:flex-col max-md:gap-5 max-md:w-full max-sm:gap-4`}>
        <div className="flex gap-6 items-center max-md:flex-col max-md:gap-5 max-sm:gap-4">
          <article className="flex relative flex-col gap-4 items-start px-8 py-6 bg-gray-900 rounded-3xl border border-solid border-neutral-800 w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:max-w-[250px] max-sm:px-4 max-sm:py-3 max-sm:max-w-[180px]">
            <h2 className="text-2xl font-bold leading-7 text-white max-sm:text-xl max-sm:leading-6">
              {title}
            </h2>
            <div className="flex flex-col items-start w-96 max-md:w-full">
              {description.map((line, index) => (
                <p key={index} className="text-base leading-6 text-zinc-400 max-sm:text-sm max-sm:leading-5">
                  {line}
                </p>
              ))}
            </div>
          </article>
          <div className="flex shrink-0 justify-center items-center bg-gray-900 rounded-xl h-[70px] w-[70px] max-sm:h-[60px] max-sm:w-[60px]">
            <span className="text-2xl font-bold leading-8 text-center text-white max-sm:text-xl">
              {stepNumber}
            </span>
          </div>
        </div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`shrink-0 h-[329px] w-[450px] max-xl:w-[350px] max-lg:w-[300px] max-md:w-full max-md:h-auto max-md:max-w-[250px] max-sm:max-w-[180px] ${stepNumber === "04" ? "opacity-[0.7681] max-xl:w-[300px] max-lg:w-[200px] max-md:max-w-[150px] max-sm:max-w-[120px]" : ""}`}
        />
      </div>
    );
  }

  // Default layout for step 1
  return (
    <div className="flex relative gap-7 items-center w-full z-[2] max-md:flex-col max-md:gap-5 max-md:w-full max-sm:gap-4">
      {stepContent}
    </div>
  );
};

export default ProcessStep;
