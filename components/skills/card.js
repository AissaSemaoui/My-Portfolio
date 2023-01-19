import Image from "next/image";

function Skills() {
  const mainTechs = [
    {
      name: "HTML5",
      img: require("../../assets/techs/html.png"),
      isMain: true,
    },
    { name: "CSS3", img: require("../../assets/techs/css.png"), isMain: true },
    {
      name: "JAVASCRIPT",
      img: require("../../assets/techs/javascript.png"),
      isMain: true,
    },
    {
      name: "TAILWINDCSS",
      img: require("../../assets/techs/tailwindcss.png"),
      isMain: false,
    },
    {
      name: "REACT JS",
      img: require("../../assets/techs/react.png"),
      isMain: false,
    },
    {
      name: "NEXT JS",
      img: require("../../assets/techs/next.png"),
      isMain: false,
    },
  ];

  const subTechs = [
    {
      name: "Webpack",
      img: require("../../assets/techs/webpack.png"),
    },
    {
      name: "Bootsrap",
      img: require("../../assets/techs/bootstrap.png"),
    },
    {
      name: "NPM",
      img: require("../../assets/techs/npm.png"),
    },
    {
      name: "Firebase",
      img: require("../../assets/techs/firebase.png"),
    },
    {
      name: "Sass",
      img: require("../../assets/techs/sass.png"),
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
      <div className="flex gap-4 justify-center flex-wrap">
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
      className={`${
        isMain ? "border border-gray-200 " : ""
      } text-center w-48 p-4 rounded-md shadow-sm hover:shadow-md duration-75 bg-white`}
    >
      <Image src={img} width={130} height={130} objectFit="contain" />
      <h3>{name}</h3>
    </div>
  );
}

function SecondaryCard({ name, img }) {
  return (
    <div className={` text-center p-4`}>
      <Image src={img} width={80} height={80} objectFit="contain" />
      <h4>{name}</h4>
    </div>
  );
}

export default Skills;
