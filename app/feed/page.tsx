/* eslint-disable @next/next/no-img-element */
"use client";
import Login from "@/app/components/login";
import Modal from "@/app/components/modal";
import Signup from "@/app/components/signup";
import { Mode } from "@/app/helpers/login-helper";
import ContentWrapper from "@/app/layouts/contentWrapper";
import PostWrapper from "@/app/layouts/postWrapper";
import { faEllipsis, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Feed: React.FC = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(Mode.SIGNUP);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePost = () => {
    setActiveItem(Mode.SIGNUP);
    setIsModalOpen(true);
  };

  const handleLogin = () => {
    setActiveItem(Mode.LOGIN);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <Modal show={isModalOpen} onClose={handleModalClose}>
        {activeItem === Mode.SIGNUP && (
          <Signup handleLogin={handleLogin} handleSubmit={handleSubmit} />
        )}
        {activeItem === Mode.LOGIN && (
          <Login handleRegister={handlePost} handleSubmit={handleSubmit} />
        )}
      </Modal>
      <div className="lg:w-1/2 md:w-2/3 xs:px-2 md:px-0 p-2 xs:mt-10 md:mt-20 bg-black h-screen space-y-8">
        <p className="text-4xl text-[#C5C7CA]">Hello Jane</p>
        <p className="text-base text-[#7F8084] lg:mr-40">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <div className="space-y-4">
          <PostWrapper>
            <p className="text-lg text-gray-300">Create post</p>
            <ContentWrapper>
              <div className="w-10 h-10 rounded-full bg-[#35373B] flex items-center justify-center">
                <p className="text-center">💬</p>
              </div>
              <p className="text-base text-center text-[#7F8084]">
                How are you feeling today?
              </p>
            </ContentWrapper>
            <div className="flex justify-end">
              <button
                className="bg-[#4A96FF] rounded-sm py-2 px-8 text-gray-100"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          </PostWrapper>
          <PostWrapper>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/profile1.png"
                  alt="Rounded avatar"
                />
                <div className="">
                  <p className="text-base text-[#C5C7CA]">Theresa Webb</p>
                  <p className="text-xs text-[#7F8084]">5mins ago</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faEllipsis} className="text-[#C5C7CA]" />
            </div>
            <ContentWrapper>
              <div className="w-20 h-10 mx-auto rounded-full bg-[#35373B] flex items-center justify-center">
                <p className="text-center">👋</p>
              </div>
              <p className="text-md text-[#7F8084]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </ContentWrapper>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMessage} className="text-[#7F8084] " />
              <p className="text-sm text-[#7F8084]">24 comments</p>
            </div>
          </PostWrapper>
          <PostWrapper>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/profile2.png"
                  alt="Rounded avatar"
                />
                <div className="">
                  <p className="text-base text-[#C5C7CA]">Marvin McKinney</p>
                  <p className="text-xs text-[#7F8084]">8mins ago • Edited</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faEllipsis} className="text-[#C5C7CA]" />
            </div>
            <ContentWrapper>
              <div className="w-20 h-10 mx-auto rounded-full bg-[#35373B] flex items-center justify-center">
                <p className="text-center">😞</p>
              </div>
              <p className="text-md text-[#7F8084]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </ContentWrapper>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMessage} className="text-[#7F8084] " />
              <p className="text-sm text-[#7F8084]">24 comments</p>
            </div>
          </PostWrapper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Feed;
