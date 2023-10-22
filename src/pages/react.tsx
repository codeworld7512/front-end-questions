import Head from "next/head";

import { DynamicQuestionList } from "@/components/questions/QuestionList";
import { reactQuestionsData } from "@/questionsData/reactQuestions";

export default function Home() {
  return (
    <>
      <Head>
        <title>React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicQuestionList questions={reactQuestionsData} tech="React" />
    </>
  );
}