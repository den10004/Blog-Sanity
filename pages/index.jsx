import React, { useState } from "react";
import Head from "next/head";
import { Button, Post, PostGrid, Section, Title } from "../components";
import Cover from "../components/Cover";
import { loadPosts } from "./api/posts";

const LOAD_MORE_STEP = 4;
export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Head>
        <title>My blog</title>
      </Head>
      <Section>
        <h3>beta-версия</h3>
        <Cover title="Личный блог о путешествиях и не только" />
      </Section>
      <Section>
        <Title>Посты</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post}></Post>
          ))}
        </PostGrid>
        {isLoadButton && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={getMorePosts} disabled={loading}>
              Загрузить больше
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
