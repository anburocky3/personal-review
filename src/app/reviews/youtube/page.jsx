"use client";

import TextArea from "@/components/forms/TextArea";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import ReactStars from "react-rating-stars-component";
import Label from "@/components/forms/Label";
import FormInput from "@/components/forms/FormInput";

const formSchema = z.object({
  contentQuality: z.string().min(3).max(200),
  howCanWeImprove: z.string().min(3).max(200),
  yourName: z.string().min(3),
});

function YouTubeReview() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const SendToFirebase = (data) => {
    console.log(data);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="bg-white m-3 p-5 rounded">
      <h4 className="font-semibold">Share your reviews</h4>

      <form
        action=""
        className="my-5 space-y-4"
        onSubmit={handleSubmit(SendToFirebase)}
      >
        <Label id="overallRatings" text="OverAll Ratings" required>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={50}
            activeColor="#ffd700"
          />
        </Label>

        <TextArea
          label="What do you think about the youtube content?"
          name="contentQuality"
          register={register("contentQuality")}
          placeholder="Explain briefly!"
          error={errors.contentQuality}
          required
        />
        <div>
          <TextArea
            label="How can we improve?"
            name="howCanWeImprove"
            register={register("howCanWeImprove")}
            error={errors.howCanWeImprove}
            required
          />
        </div>

        <div>
          <FormInput
            label="Your Name?"
            name="yourName"
            register={register("yourName")}
            error={errors.yourName}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <button className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default YouTubeReview;
