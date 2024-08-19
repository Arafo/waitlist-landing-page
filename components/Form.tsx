"use client";

import { useState } from "react";
// config
import config from "@/config/general";
// components
import SuccessModal from "./SuccessModal";

const findRequestURL = (mail: string) => {
  const formURL = config.subscribeForm.split("/");
  const getNumbers = formURL.filter((item) => Number(item) && item);

  const accountID = getNumbers[0];
  const formID = getNumbers[1];

  const requestURL = `https://assets.mailerlite.com/jsonp/${accountID}/forms/${formID}/subscribe?fields[email]=${mail}`;

  return requestURL;
};

const Form = () => {
  const [mail, setMail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(findRequestURL(mail), {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubmittedEmail(mail);
          setShowSuccessModal(true);
          setMessage("");
        } else {
          setMessage("Something went wrong, please try again.");
        }
      })
      .catch(() => setMessage("Something went wrong, please try again."))
      .finally(() => {
        setLoading(false);
        setMail("");
      });
  };
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="fields[email]"
            autoComplete="email"
            aria-invalid="false"
            id="email"
            placeholder="Email address..."
            className="form-control neumorphic-input block w-full text-base text-white placeholder-appleGray"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="relative">
          <button
            type="submit"
            className="w-full bg-activeButton py-3 px-5 font-medium text-white disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            disabled={mail === "" || loading}
          >
            <span>Join the waitlist</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/>
            </svg>
          </button>
        </div>
        <span className="text-sm text-center font-normal text-appleGray">{message}</span>
      </form>
      
      {showSuccessModal && (
        <SuccessModal 
          email={submittedEmail} 
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </>
  );
};

export default Form;
