import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Article({ className, children, backUrl }) {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl}>
        <AiOutlineArrowLeft />
      </Link>
      <div className={styles.article.content}>{children}</div>
    </article>
  );
}
