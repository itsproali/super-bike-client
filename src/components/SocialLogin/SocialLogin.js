import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";
import "./SocialLogin.css";
import toast from "react-hot-toast";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [singInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  useEffect(() => {
    if (googleUser || fbUser || githubUser) {
      let userId;
      if (googleUser) {
        userId = googleUser.userId;
      } else if (fbUser) {
        userId = fbUser.uid;
      } else {
        userId = githubUser.uid;
      }
      axios
        .post(`${process.env.REACT_APP_SERVER}/getToken`, {
          userId,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("accessToken", res.data.accessToken);
        });
      navigate(from, { replace: true });
    }
  }, [googleUser, fbUser, githubUser, navigate, from]);

  useEffect(() => {
    if (googleError) {
      toast.error(`${googleError.message}`);
    } else if (fbError) {
      toast.error(`${fbError.message}`);
    } else if (githubError) {
      toast.error(`${githubError.message}`);
    }
  }, [googleError, fbError, githubError]);

  if (googleLoading || fbLoading || githubLoading) {
    return <Spinner />;
  }
  return (
    <div className="mt-6">
      <div className="or-container">
        <div className="or-line"></div>
        <p className="text-gray-600">Or</p>
        <div className="or-line"></div>
      </div>
      <button
        className="social-btn google-btn"
        onClick={() => singInWithGoogle()}
      >
        <img src="https://i.ibb.co/s3GpLz5/google-logo.png" alt="Google" />
        <p className="google-text">Continue with Google</p>
      </button>
      <button
        className="social-btn fb-btn"
        onClick={() => signInWithFacebook()}
      >
        <img src="https://i.ibb.co/HKCqP2d/facebook-new.png" alt="Facebook" />
        <p className="fb-text">Continue with Facebook</p>
      </button>
      <button
        className="social-btn github-btn"
        onClick={() => signInWithGithub()}
      >
        <img src="https://i.ibb.co/KqGjRQt/github.png" alt="GitHub" />
        <p className="github-text">Continue with GitHub</p>
      </button>
    </div>
  );
};

export default SocialLogin;
