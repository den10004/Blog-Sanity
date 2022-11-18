import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import cl from "classnames";
import { urlFor } from "../../lib/client";
import Title from "../Title";

const Post = ({ className, image, title, slug, description }) => {
  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.post)}
    >
      {title}
      <Title>
        <div className={styles.postContent}>
          <Image
            src={urlFor(image).url()}
            alt={image.caption}
            width="100"
            height="100"
          />
          <p className={styles.postDescription}>{description}</p>
        </div>
      </Title>
    </Link>
  );
};

export default Post;
