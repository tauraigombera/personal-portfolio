function Hero() {
  return (
    <section className="container min-h-screen flex justify-between items-center mx-auto px-8 mt-16 md:mt-0 md:px-14 lg:px-24 w-full">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-wrap justify-center md:justify-start max-w-xl mt-0 md:my-36">
          <h1 className="font-bold text-5xl text-center md:text-left">
            Exceptional Software
            <br /> Solutions with <span className="text-theme"> .NET </span>
          </h1>
          <p className="mt-12 text-lg text-center md:text-left">
            Hi{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="inline-block"
              style={{ transform: "scaleX(-1)" }} // Add this line to flip the SVG horizontally
            >
              <path
                fill="#e8b730"
                d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5zm7-2.68l-4.59 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.09c.49-.47.49-1.26 0-1.75a1.25 1.25 0 0 0-1.77 0l-4.42 4.42l-.71-.71l6.54-6.54c.49-.49.49-1.28 0-1.77s-1.29-.49-1.79 0L14.19 13l-.69-.73l6.87-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89l-.71-.7l5.5-5.48c.5-.49.5-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4 4 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.07-4.07c.49-.49.49-1.28 0-1.77c-.5-.48-1.29-.48-1.79.01"
              />
            </svg>
            , I'm Taurai Gombera. I build cool stuff with code—think C#, .NET,
            RESTful APIs, SQL Databases, Unit Testing, Resilience Engineering
            and more. My goal? To create digital solutions that make life a
            little easier for everyone.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-theme rounded text-white font-bold mt-12 flex items-center space-x-3"
            >
              <div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                    fill="white"
                  />
                  <path
                    d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>My Projects.</span>
            </a>
          </div>
        </div>
        <img
          src="profile.png"
          alt="Avatar"
          className="w-1/4 rounded-full mt-12 md:absolute md:mt-0 right-0 "
        />
      </div>
    </section>
  );
}

export default Hero;
