"use client";

import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { useCallback } from "react";
import { LayeredDarkPanelless } from "survey-core/themes/layered-dark-panelless";
// import { addSurveyFeedback } from "@/firebase/services/institution";
import { addSurveyFeedback } from "../../../firebase/services/institution";
// ...
const surveyJson = {
  pages: [
    {
      elements: [
        // {
        //   type: "dropdown",
        //   name: "institution",
        //   title: "Institution",
        //   isRequired: true,
        //   choices: ["Kongu Engineering College - KEC"],
        // },
        {
          name: "institution",
          type: "text",
          title: "Institution",
          placeholder: "Institution Name",
          minLength: 3,
          maxLength: 25,
          isRequired: true,
          defaultValue: "Vels University - VISTAS",
        },
        {
          name: "name",
          type: "text",
          title: "Full Name",
          placeholder: "Enter your full name",
          minLength: 3,
          maxLength: 25,
          isRequired: true,
          defaultValue: "Anonymous",
        },
        {
          type: "rating",
          name: "rate-instructor",
          title: "How would you rate the workshop instructor?",
          description: "Please rate the instructor.",
          rateType: "smileys",
          scaleColorMode: "colored",
          rateCount: 5,
          rateMax: 5,
          displayMode: "buttons",
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          type: "comment",
          name: "workshop-like",
          title: "What did you like about the workshop?",
          placeholder: "It helps us to know what we are doing right.",
          rows: 2,
          autoGrow: true,
          allowResize: false,
          isRequired: true,
        },
        {
          type: "comment",
          name: "workshop-dislike",
          title: "What did you dislike about the workshop?",
          placeholder: "It helps us to know what we are doing wrong.",
          rows: 2,
          autoGrow: true,
          allowResize: false,
          isRequired: true,
        },
        {
          type: "comment",
          name: "workshop-improve",
          title:
            "Is there anything else you’d like to share about the workshop?",
          placeholder: "It helps us to know what we are doing wrong.",
          rows: 2,
          autoGrow: true,
          allowResize: false,
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "workshop-recommend",
          title:
            "How likely is it that you would recommend the workshop to a friend or colleague?",
          type: "rating",
          rateMin: 0,
          rateMax: 10,
        },
        {
          name: "workshop-overall-rating",
          title: "Overall, how would you rate the workshop?",
          type: "radiogroup",
          choices: [
            { value: 3, text: "Excellent" },
            { value: 2, text: "Good" },
            { value: 1, text: "Poor" },
          ],
          isRequired: true,
        },
      ],
    },
  ],
  completeText: "Submit your feedback",
  completedHtml: `<div>
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/thank-you-mail-3178492-2670455.png?f=webp" class="mx-auto alt="Thank you for sharing your feedback!" />
      <h4>Thank you for sharing your feedback! Visit <span class="text-orange-500 font-semibold">cyberdude</span> at YouTube</h4>
      <p class="mt-2">
        If you want to learn more about technology visit cyberdude at YouTube.
      </p>
    </div>`,
};

const SurveyForm = () => {
  const survey = new Model(surveyJson);

  survey.applyTheme(LayeredDarkPanelless);

  const surveyComplete = useCallback(async (survey) => {
    survey.setValue("code", "vistas.ac.in");

    try {
      await addSurveyFeedback(survey.data);
    } catch (e) {
      console.log(e);
      alert("Something went wrong!");
    }

    // saveSurveyResults("https://your-web-service.com/" + SURVEY_ID, survey.data);
  }, []);

  survey.onComplete.add(surveyComplete);

  return (
    <div>
      <Survey model={survey} />
    </div>
  );
};

export default SurveyForm;
