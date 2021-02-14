import Image from "next/image";

const MainImage = () => {
  return (
    <>
      <div style={{ position: "relative", height: "600px" }}>
        <Image
          src="/images/background/main-desktop.gif"
          layout="fill"
          objectFit="cover"
          objectPosition="85%"
          alt="Pixel art with a moon and a big yellow in jungle made by Name Nguyen"
        />
      </div>
    </>
  );
};

export default MainImage;
