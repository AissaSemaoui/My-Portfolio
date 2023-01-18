import Image from "next/image";

function Special() {
  const specialContent = [
    {
      title: "CREATIVE DESIGNS",
      content:
        "I am an experienced designer with knowledge of Figma. I specialize in creating modern and responsive designs for any device. I have experience using Figma, allowing me to quickly create custom designs. I strive to ensure my clients are satisfied with the end result.",
      isReverse: false,
      illustration: require("../../assets/illustration 2.png"),
    },
    {
      title: "CREATIVE DESIGNS",
      content:
        "I am an experienced designer with knowledge of Figma. I specialize in creating modern and responsive designs for any device. I have experience using Figma, allowing me to quickly create custom designs. I strive to ensure my clients are satisfied with the end result.",
      isReverse: true,
      illustration: require("../../assets/illustration 1.png"),
    },
  ];

  return (
    <div>
      {specialContent.map((card) => (
        <SpecialCard
          illustration={card.illustration}
          title={card.title}
          content={card.content}
          isReverse={card.isReverse}
        />
      ))}
    </div>
  );
}

function SpecialCard({ illustration, title, content, isReverse }) {
  return (
    <div
      className={`${
        isReverse ? "flex-row-reverse" : ""
      } flex items-center justify-around`}
    >
      <div className="text-left max-w-2xl">
        <h3 className="mb-4">{title}</h3>
        <p>{content}</p>
      </div>
      <Image src={illustration} width={600} height={600} objectFit="contain" />
    </div>
  );
}

export default Special;
