import Image from "next/image";

function Special() {
  const specialContent = [
    {
      title: "CREATIVE DESIGNS",
      content:
        "I am an experienced designer with knowledge of Figma. I specialize in creating modern and responsive designs for any device. I have experience using Figma, allowing me to quickly create custom designs. I strive to ensure my clients are satisfied with the end result.",
      isReverse: false,
      illustration: "/content/staticImages/illustration 2.png",
    },
    {
      title: "CREATIVE DESIGNS",
      content:
        "I am an experienced designer with knowledge of Figma. I specialize in creating modern and responsive designs for any device. I have experience using Figma, allowing me to quickly create custom designs. I strive to ensure my clients are satisfied with the end result.",
      isReverse: true,
      illustration: "/content/staticImages/illustration 1.png",
    },
  ];

  return (
    <div className="py-8">
      {specialContent.map((card) => (
        <SpecialCard
          key={card.title}
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
        isReverse
          ? "flex-row-reverse max-lg:flex-col "
          : "flex-row max-lg:flex-col"
      } flex items-center justify-around gap-4 mb-8 md:mb-4`}
    >
      <div className="text-left md:max-w-[50%]">
        <h4 className="lg:mb-1">{title}</h4>
        <p>{content}</p>
      </div>
      <div className="w-[500px] max-h-[400px] max-sm:w-[340px] max-md:px-6 my-auto">
        <Image
          src={illustration}
          width={500}
          height={400}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Special;
