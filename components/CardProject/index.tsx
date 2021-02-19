import styles from "../../styles/CardProject.module.scss";
import Link from "next/link";
import Image from "next/image";

export interface CardProjectProps {
  image: string;
  title: string;
  description: string;
  alt: string;
  link: string;
}
const CardProject: React.FC<CardProjectProps> = ({
  image,
  title,
  description,
  alt,
  link,
}) => {
  return (
    <Link href={link}>
      <a>
        <div className={styles["card"]}>
          <span className="fill"></span>
          <section>
            <Image
              src={image}
              alt={alt}
              objectFit="cover"
              width={250}
              height={170}
              quality={35}
            />
            <h2>{title}</h2>
            <p>{description}</p>
          </section>
        </div>
      </a>
    </Link>
  );
};

export default CardProject;
