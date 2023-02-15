import Image from "next/image";

function Skills() {
  const mainTechs = [
    {
      name: "HTML5",
      img: "/content/techs/html.png",
      isMain: true,
    },
    { name: "CSS3", img: "/content/techs/css.png", isMain: true },
    {
      name: "JAVASCRIPT",
      img: "/content/techs/javascript.png",
      isMain: true,
    },
    {
      name: "TAILWINDCSS",
      img: "/content/techs/tailwindcss.png",
      isMain: false,
    },
    {
      name: "REACT JS",
      img: "/content/techs/react.png",
      isMain: false,
    },
    {
      name: "NEXT JS",
      img: "/content/techs/next.png",
      isMain: false,
    },
  ];

  const subTechs = [
    {
      name: "Webpack",
      img: "/content/techs/webpack.png",
    },
    {
      name: "Bootsrap",
      img: "/content/techs/bootstrap.png",
    },
    {
      name: "NPM",
      img: "/content/techs/npm.png",
    },
    {
      name: "Firebase",
      img: "/content/techs/firebase.png",
    },
    {
      name: "Sass",
      img: "/content/techs/sass.png",
    },
  ];

  return (
    <div className="pt-8">
      <div className="flex mb-4 w-full justify-center gap-4 flex-wrap">
        {mainTechs.map((tech) => (
          <PrimaryCard
            name={tech.name}
            isMain={tech.isMain}
            img={tech.img}
            key={tech.name}
          />
        ))}
      </div>
      <div className="flex gap-2 lg:gap-6 justify-center flex-wrap">
        {subTechs.map((tech) => (
          <SecondaryCard name={tech.name} img={tech.img} key={tech.name} />
        ))}
      </div>
    </div>
  );
}

export function PrimaryCard({ name, img, isMain }) {
  return (
    <div
      className={`
       ${isMain ? "" : ""}
       text-center w-32 py-2 lg:py-4 rounded-md shadow-sm hover:shadow-md duration-75 hover:bg-white/40 `}
    >
      <div className="w-20 lg:w-24 h-20  lg:h-24 mx-auto">
        <Image
          src={img}
          layout="responsive"
          width={96}
          height={80}
          objectFit="contain"
        />
      </div>
      <h3 className="text-base lg:text-lg font-medium">{name}</h3>
    </div>
  );
}

function SecondaryCard({ name, img }) {
  return (
    <div className={` text-center p-4 w-24`}>
      <Image src={img} width={80} height={80} objectFit="contain" />
      <h4 className="text-base lg:text-lg font-medium">{name}</h4>
    </div>
  );
}

export default Skills;
