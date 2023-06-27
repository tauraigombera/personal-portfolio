function Projects() {
  return (
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
              <h3 className="text-white text-3xl font-semibold">BugTracker</h3>

              <p className="text-secondary mt-6">
                A robust and efficient BugTracker application designed to
                streamline bug reporting and resolution for software development
                teams.
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
  );
}

export default Projects;
