function About() {
  return (
    <>
      <section className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
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
                  TailwindCSS, and JavaScript, which allows me to bring a unique
                  blend of technical skill and creative flair to each project I
                  work on. I honed my skills as a software developer at Kamuzu
                  University of Health Sciences, and I'm always eager to take on
                  new challenges. If you're interested in working together,
                  don't hesitate to get in touch.
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
      </section>
    </>
  );
}

export default About;
