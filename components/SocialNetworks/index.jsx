import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import ScreenEgg from "../ScreenEgg";

const SocialNetworks = ({ className }) => {
  const socialNetworks = [
    { id: 1, href: "https://vk.com", icon: AiOutlineLinkedin },
    { id: 2, href: "https://vk.com", icon: AiFillGithub },
  ];

  return (
    <ScreenEgg type="left">
      {/* <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetwork) => {
          <li key={socialNetwork.id} className={styles.listItem}>
            <a
              href={socialNetwork.href}
              taget="blank"
              className={styles.listLink}
            >
              {React.createElement(socialNetwork.icon, {
                color: "black",
                size: 50,
              })}
            </a>
          </li>;
        })}
      </ul>*/}
    </ScreenEgg>
  );
};

export default SocialNetworks;
