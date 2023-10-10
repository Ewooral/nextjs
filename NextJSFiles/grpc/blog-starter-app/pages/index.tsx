// ("use client");
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

import Image from "next/image";

import { useEffect, useState } from "react";
import { GreeterServiceClient } from "./gen/ExampleServiceClientPb";
import { HelloRequest } from "./gen/example_pb";
import { Button } from "../@/components/ui/button";

type Props = {
  allPosts: Post[];
};



export default function Index({ allPosts }: Props) {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("");
  const client = new GreeterServiceClient(
    "http://192.168.10.28:8889",
    null,
    null
  );

  // say hello unary call
  let sayHelloUnary = () => {
    let request = new HelloRequest();
    request.setName("from Maclean & Elijah (Next.js)");
    client.sayHello(request, null, (err, response) => {
      setLoading(false);
      if (err) {
        console.log(err);
        alert(err.message);
        return;
      }

      // update greeting and refresh UI
      setGreeting(response.getGreeting());
    });
  };

  useEffect(() => {
    sayHelloUnary();
  }, []);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout> 
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <h4>
            Adding emojis: # This is a code comment with an emoji 😀
            print("Hello, World! 🌍")
            
          </h4>
          <Button className="">Knock Please</Button>

          
          {loading && <h3 className="text-xl">Loading... </h3>}
          {greeting && <h3 className="text-3xl">{greeting}</h3>}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
