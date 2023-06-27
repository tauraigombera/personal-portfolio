function App() {
  return (
    <>
      <body className="bg-body text-white font-poppins pb-12">
        <header className="py-6">
          <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg">Taurai Gombera</div>
            <div className="hidden md:flex space-x-12 items-centre">
              <a href="#" className="text-selected-text">
                Home
              </a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#hire">
                <button className="px-6 py-2 bg-theme font-bold">
                  Hire me
                </button>
              </a>
            </div>
            <button
              id="menu-btn"
              className="block hamburger md:hidden focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <div>
            <ul
              id="menu"
              className="hidden pb-6 relative text-white container mx-auto px-6 md:hidden"
            >
              <li>
                <a href="#" className="block py-2 px-4 text-selected-text">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-4">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="block py-2 px-4">
                  Project
                </a>
              </li>

              <li>
                <a href="#hire" className="block py-2 px-4">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div className="flex flex flex-wrap md:flex-nowrap">
            <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
              <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                <a
                  href="#"
                  className="arrow selected-arrow block w-4 h-4 border-4 border-nav bg-body"
                >
                  <span className="bg-black px-2 py-1 ml-10 rounded-md opacity-0 up">
                    Home
                  </span>
                </a>
                <a
                  href="#about"
                  className="arrow block w-4 h-4 border-4 border-nav bg-body"
                >
                  <span className="bg-black px-2 py-1 ml-10 rounded-md opacity-0 up">
                    About
                  </span>
                </a>
                <a
                  href="#projects"
                  className="arrow block w-4 h-4  border-4 border-nav bg-body"
                >
                  <span className="bg-black px-2 py-1 ml-10 rounded-md opacity-0 up">
                    Projects
                  </span>
                </a>
                <a
                  href="#hire"
                  className="arrow block w-4 h-4  border-4 border-nav bg-body"
                >
                  <span className="bg-black px-2 py-1 ml-10 rounded-md opacity-0 up">
                    Hire
                  </span>
                </a>
              </div>
            </nav>

            <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
                Exceptional
                <br /> solutions with .NET/C#.
              </h1>
              <div className="w-full flex justify-center md:justify-start">
                <button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
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
                </button>
              </div>
            </div>
            <img
              src="img/tau.png"
              alt="Man"
              className="w-3/4 mt-12 md:absolute md:mt-0 right-0 -z-1"
            />
          </div>
        </div>

        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 id="about" className="secondary-title">
              About Me
            </h2>
            <p className="section-paragraph">
              Delivering exceptional solutions with .NET/C#.
            </p>
            <div className="space-y-12 my-16">
              <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold">
                    Software Developer
                  </h3>

                  <p className="text-secondary mt-6">
                    Hi there! I'm Taurai Gombera, a C# and .NET developer with a
                    passion for creating innovative software solutions. I have
                    experience working with technologies such as Laravel,
                    TailwindCSS, and JavaScript, which allows me to bring a
                    unique blend of technical skill and creative flair to each
                    project I work on. I honed my skills as a software developer
                    at Kamuzu University of Health Sciences, and I'm always
                    eager to take on new challenges. If you're interested in
                    working together, don't hesitate to get in touch.
                  </p>

                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                    <div className="badge">ASP.NET</div>
                    <div className="badge">Laravel(PHP)</div>
                    <div className="badge">TailwindCSS</div>
                    <div className="badge">JavaScript</div>
                    <div className="badge">UI/UX (Figma)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 id="projects" className="secondary-title">
              Projects
            </h2>
            <p className="section-paragraph">
              Discover my work: Follow the links to explore my portfolio and
              experience.
            </p>
            <div className="space-y-12 my-16">
              <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                <div className="mb-6 lg:mb-0">
                  <img src="img/blog.png" alt="Blog" />
                </div>

                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold">Blog</h3>

                  <p className="text-secondary mt-6">
                    A comprehensive blog project showcasing my expertise in web
                    development using Laravel, TailwindCss and a user-centered
                    design approach.
                  </p>

                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                    <div className="badge">Laravel(PHP)</div>
                    <div className="badge">TailwindCss</div>
                    <div className="badge">Postgresql</div>
                  </div>
                </div>
              </div>
              <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                <div className="mb-6 lg:mb-0">
                  <img src="img/bugtracker.png" alt="BugTracker" />
                </div>

                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                  <h3 className="text-white text-3xl font-semibold">
                    BugTracker
                  </h3>

                  <p className="text-secondary mt-6">
                    A robust and efficient BugTracker application designed to
                    streamline bug reporting and resolution for software
                    development teams.
                  </p>

                  <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                    <div className="badge">ASP.NET</div>
                    <div className="badge">MYSQL</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <section className="w-full">
            <h2 id="hire" className="secondary-title">
              Hire me
            </h2>
            <p className="section-paragraph">
              Like my work? Reach out to me through any method below.
            </p>

            <div className="mt-12">
              <p className="text-secondary">+265 888 70 11 10</p>
              <a
                href="mailto:tauraigombera@gmail.com"
                className="text-secondary underline mt-3 block"
              >
                tauraigombera@gmail.com
              </a>

              <div className="flex mt-20 space-x-6">
                <a href="#">
                  <svg
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9995 0.110352C5.39986 0.110352 0.860001 4.65047 0.860001 10.2509C0.860001 14.7309 3.76472 18.5316 7.79446 19.8717C8.30198 19.9655 8.48658 19.6533 8.48658 19.3836C8.48658 19.1434 8.47774 18.5061 8.47332 17.6591C5.65258 18.2724 5.05744 16.2995 5.05744 16.2995C4.5962 15.1282 3.93138 14.8167 3.93138 14.8167C3.01072 14.1881 4.00132 14.2003 4.00132 14.2003C5.01896 14.2723 5.55456 15.245 5.55456 15.245C6.45884 16.7946 7.9281 16.3461 8.50556 16.0881C8.59734 15.4316 8.85994 14.9857 9.14932 14.7317C6.89798 14.4759 4.53094 13.6059 4.53094 9.72047C4.53094 8.61313 4.92588 7.70781 5.57432 6.99879C5.47058 6.74347 5.12192 5.71257 5.6739 4.31585C5.6739 4.31585 6.52514 4.04337 8.46266 5.35611C9.271 5.13017 10.1386 5.01733 11.001 5.01395C11.8622 5.01759 12.73 5.13017 13.5394 5.35611C15.4756 4.04337 16.3256 4.31585 16.3256 4.31585C16.8789 5.71257 16.5305 6.74347 16.4265 6.99879C17.0765 7.70781 17.4685 8.61313 17.4685 9.72047C17.4685 13.615 15.0981 14.473 12.8392 14.7231C13.2027 15.0364 13.5272 15.6565 13.5272 16.6027C13.5272 17.9575 13.515 19.0508 13.515 19.3834C13.515 19.6551 13.6972 19.971 14.212 19.8704C18.2374 18.5275 21.14 14.7296 21.14 10.2509C21.14 4.65047 16.6001 0.110352 10.9995 0.110352V0.110352Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>

        <script src="main.js"></script>
      </body>
    </>
  );
}

export default App;
