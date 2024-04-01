import React from "react";

function YouTubeReview() {
  return (
    <div className="bg-white m-3 p-5 rounded">
      <h4 className="font-semibold">Share your reviews</h4>

      <form action="" className="my-5">
        <div>
          <label htmlFor="improve" className="block text-gray-600 mb-2">
            How we can improve?
          </label>
          <textarea
            placeholder="Enter information briefly!"
            className="bg-gray-100 w-full px-4 py-2 rounded"
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default YouTubeReview;
