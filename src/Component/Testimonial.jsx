import React from 'react'

const Testimonial = () => {
  return (
    <div>
    <section className="py-12  sm:py-16 lg:py-20">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="flex flex-col items-center">

      {/* Heading */}
      <div className="text-center text-base-content">
        <p className="text-lg font-medium opacity-70">
          2,157 people have said how good Rareblocks
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl xl:text-5xl">
          Our happy clients say about us
        </h2>
      </div>

      {/* Link */}
      {/* <div className="mt-8 text-center md:mt-16 md:order-3">
        <a
          href="#"
          className="pb-2 text-base font-bold border-b-2 border-primary text-primary hover:opacity-80 transition"
        >
          Check all 2,157 reviews
        </a>
      </div> */}

      {/* Cards */}
      <div className="relative mt-10 md:mt-24 md:order-2">
        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">

          {/* Card */}
          <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl bg-base-100">
            <div className="flex flex-col justify-between flex-1 p-6 lg:p-8 text-base-content">

              {/* Stars */}
              <div className="flex gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8">
                <p className="text-lg leading-relaxed">
                  “You made it so simple. My new site is so much faster and easier
                  to work with than my old site.”
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center mt-8">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Leslie Alexander</p>
                  <p className="text-sm opacity-70">Freelance React Developer</p>
                </div>
              </div>
 
            </div>
          </div>


                              <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl bg-base-100">
            <div className="flex flex-col justify-between flex-1 p-6 lg:p-8 text-base-content">

              {/* Stars */}
              <div className="flex gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8">
                <p className="text-lg leading-relaxed">
                  “You made it so simple. My new site is so much faster and easier
                  to work with than my old site.”
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center mt-8">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Leslie Alexander</p>
                  <p className="text-sm opacity-70">Freelance React Developer</p>
                </div>
              </div>
 
            </div>
          </div>

                    <div className="flex flex-col overflow-hidden shadow-xl rounded-2xl bg-base-100">
            <div className="flex flex-col justify-between flex-1 p-6 lg:p-8 text-base-content">

              {/* Stars */}
              <div className="flex gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8">
                <p className="text-lg leading-relaxed">
                  “You made it so simple. My new site is so much faster and easier
                  to work with than my old site.”
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center mt-8">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Leslie Alexander</p>
                  <p className="text-sm opacity-70">Freelance React Developer</p>
                </div>
              </div>
 
            </div>
          </div>
          {/* Duplicate card → reuse same structure for others */}
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  )
}

export default Testimonial