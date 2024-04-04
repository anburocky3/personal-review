"use client";

import TextArea from "@/components/forms/TextArea";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import ReactStars from "react-rating-stars-component";
import Label from "@/components/forms/Label";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";
import {
  addSimpleFeedback,
  getAllColleges,
} from "@/firebase/services/institution";

const formSchema = z.object({
  institution: z.string().min(3).max(200),
  studentName: z.string().min(3).max(200),
  overallRating: z.string().min(1).max(200),
  feedback: z.string().min(3).max(200),
});

// const colleges = [
//   {
//     id: 1,
//     value: "DMICE",
//     text: "DMI College of Engineering",
//   },
//   {
//     id: 2,
//     value: "SKCET",
//     text: "Sri Krishna College of Engineering and Technology",
//   },
//   {
//     id: 3,
//     value: "FIREBIRD",
//     text: "Firebird Institute of Research in Management",
//   },
//   {
//     id: 4,
//     value: "VIDYASAGAR-COLLEGE",
//     text: "Vidyasagar College of Arts and Science",
//   },
//   {
//     id: 5,
//     value: "kongu.ac.in",
//     text: "Kongu Engineering College",
//   },
//   {
//     id: 6,
//     value: "rrase",
//     text: "RRase College of Engineering",
//   },
//   {
//     id: 7,
//     value: "vistas.ac.in",
//     text: "Vels University",
//   },
//   {
//     id: 8,
//     value: "sathyabama.ac.in",
//     text: "Sathyabama University",
//   },
//   {
//     id: 9,
//     value: "psnacet.edu.in",
//     text: "PSNA College of Engineering & Technology",
//   },
//   {
//     id: 10,
//     value: "vit.ac.in",
//     text: "VIT - Vellore Institute of Technology",
//   },
// ];

function EventsPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: "vistas.ac.in",
      studentName: "Anonymous",
      overallRating: "",
    },
  });

  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // const db = firebase.firestore();
    // return db.collection('posts').onSnapshot((snapshot) => {
    //   const postData = [];
    //   snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
    //   console.log(postData);  // <------
    //   setPosts(postData);
    // });
    async function getColleges() {
      const institutions = await getAllColleges();

      setColleges(institutions);
    }

    getColleges();
  }, []);

  const SendToFirebase = async (data) => {
    try {
      await addSimpleFeedback(data);
      alert("Thank you for your feedback!");

      reset();
    } catch (e) {
      alert("Something went wrong!");
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="bg-white m-3 p-5 rounded">
      {/* <ol className="flex justify-center mx-auto   items-center w-full mb-4 sm:mb-5 ">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg
              className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </div>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
              <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
            </svg>
          </div>
        </li>
        <li className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg
              className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
          </div>
        </li>
      </ol> */}
      <form action="#" onSubmit={handleSubmit(SendToFirebase)}>
        <h4 className="mb-4 text-lg leading-none font-medium flex space-x-4 items-center">
          <span>Select your Institutions</span>
          {/* <span className="bg-green-500 hover:bg-green-600 px-2 py-1 text-white rounded text-sm font-semibold mr-3">
            STEP - 01
          </span> */}
        </h4>
        <div className="mb-4 space-y-5">
          <FormSelect
            label="Institution"
            name="institution"
            register={register("institution")}
            placeholder="Institution"
            options={[
              ...colleges.map((college) => ({
                id: college.code,
                value: college.code,
                text: college.name,
              })),
            ]}
            error={errors.institution}
            required
            disabled
          />

          <div>
            <FormInput
              label="Student Name"
              name="studentName"
              register={register("studentName")}
              error={errors.studentName}
              placeholder="Student Name"
              required
            />
          </div>

          <FormSelect
            label="Session Overall Rating"
            name="overallRating"
            register={register("overallRating")}
            placeholder="Rating"
            options={Array.from(Array(10).keys(), (n) => n + 1).map((no) => ({
              id: no,
              value: no,
              text: no,
            }))}
            error={errors.overallRating}
            required
          />

          <div>
            <TextArea
              label="Student Feedback"
              name="feedback"
              register={register("feedback")}
              error={errors.feedback}
              placeholder="Enter briefly!"
              required
            ></TextArea>
          </div>

          {/* <div>
            <FormInput
              label="Institution Code"
              name="institutionCode"
              register={register("institutionCode")}
              error={errors.institutionCode}
              placeholder="InstitutionCode"
              required
            />
          </div> */}
        </div>
        {/* <div className="mb-4 space-y-5">
          <FormSelect
            label="Event"
            name="event"
            register={register("event")}
            placeholder="Event"
            options={colleges}
            error={errors.event}
            required
          />

          <div>
            <FormInput
              label="Event Code"
              name="eventCode"
              register={register("eventCode")}
              error={errors.eventCode}
              placeholder="Event Code"
              required
            />
          </div>
        </div> */}
        {/* <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next Step: Payment Info
        </button> */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventsPage;
