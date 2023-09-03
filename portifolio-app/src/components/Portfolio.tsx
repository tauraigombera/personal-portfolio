function Portfolio() {
  const projects = [
    {
      title: "Charity Donations",
      description:
        "A .NET Minimal API project aims to provide a platform for facilitating online donations to charitable organizations in Malawi.",
      imageUrl: "project.jpg",
      demoLink: "#",
      codeLink: "https://github.com/tauraigombera/charity-donations",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "project.jpg",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "project.jpg",
      demoLink: "#",
      codeLink: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section className="container mx-auto bg-gray px-8 md:px-14 lg:px-24 w-full">
      <h2 className="text-3xl text-primary pt-16 font-semibold mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-theme rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline mr-4"
                >
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
