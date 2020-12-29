import React from 'react'
import axios from 'axios';
import { USER_INFO } from 'API';
import { QuestionListType, } from 'response/user_questions';
import { SubmissionType } from 'types'

const handle = 'rishgod';

const Dashboard = () => {
  const handleClick = async () => {
    const response = await axios
      .get(USER_INFO, {
        params: {
          handles: handle,
        },
      })
      .catch((error) => console.log(error.response.request._response));

    console.log(response);
  };

  const parseFile = () => {
    const questionList = { result: [] };
    const extractedQuestions = questionList.result.map(
      (element: QuestionListType) => {
        return element.problem;
      }
    );
    console.log(extractedQuestions);
  };

};