"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const StudyGroup = () => {
  const [isGeneralClicked, setIsGeneralClicked] = useState(false);
  const [isStudyGuidesClicked, setIsStudyGuidesClicked] = useState(false);
  const [isNotesClicked, setIsNotesClicked] = useState(false);
  let courseName = "Study Group";
  if (typeof window !== "undefined") {
    courseName =
      window.localStorage.getItem("selectedCourse") || "Study Groups";
  }
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleSend = () => {
    const updatedMessages = [...messages, { user: "User 3", text: newMessage }];
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
    setNewMessage("");
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);
  const [image, setImage] = React.useState<File | null>(null);

  // Find the correct types
  const handleFileChange = (e: any) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleImageChange = (e: any) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setImage(fileList[0]);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  const cards = [
    {
      image: "/math.png",
      title: "Midterm Review 1",
      description:
        "Explore the depths of programming with this comprehensive guide. This resource is perfect for beginners and seasoned developers alike, offering insights and tips to enhance your coding skills.",
      downloadLink: "/mathReview.pdf",
    },
    {
      image: "/cosc.png",
      title: "Extra Credit Assignment 1",
      description:
        "Dive into the world of web development with this detailed tutorial. Learn how to build responsive, dynamic websites using modern technologies and best practices.",
      downloadLink: "/mathReview.pdf",
    },
  ];

  const notes = [
    {
      image: "/phys.png",
      title: "Lecture 14",
      description:
        "Covered units 12 - 14 in this lecture. Make sure to review the material before the next class.",
      downloadLink: "/mathReview.pdf",
    },
    {
      image: "/biol.png",
      title: "Lab 9",
      description:
        "This lab covers the basics of React. Make sure to complete the lab before the deadline.",
      downloadLink: "/mathReview.pdf",
    },
  ];

  return (
    <div
      className="min-h-screen w-screen overflow-hidden flex flex-col bg-gradient-radial from-[#19181C] to-[#161518]"
      style={{
        background:
          "linear-gradient(to bottom right, #161518 50%, #2F2656 100%)",
      }}
    >
      <div className="w-full bg-gradient-radial from-[#19181C] to-[#161518] text-white p-4 text-3xl ml-4 font-bold flex justify-between items-center border-b border-[#393939]">
        <Link href="/">
          <Image src="/logo.svg" alt="GitStudy" width={150} height={150} />
        </Link>
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
      </div>
      <div className="flex flex-grow">
        <div className="w-64 bg-gradient-radial from-[#19181C] to-[#161518] text-white p-4 flex flex-col border-r border-t border-[#393939] justify-between">
          <div>
            <p className="text-xl ml-4 my-6 font-bold">{courseName}</p>
            <Link href="#general" passHref>
              <div
                className={`flex items-center mb-4 pl-4 py-1 text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold ${
                  isGeneralClicked
                    ? "bg-[#3A3454] opacity-100 font-bold"
                    : "bg-transparent"
                }`}
              >
                <Image src="/bullet.svg" alt="bullet" width={15} height={15} />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsGeneralClicked(true);
                    setIsStudyGuidesClicked(false);
                    setIsNotesClicked(false);
                    if (typeof window !== "undefined") {
                    window.location.href = "#general";
                    }
                  }}
                  className="cursor-pointer ml-2"
                >
                  General
                </button>
              </div>
            </Link>
            <Link href="#study-guides" passHref>
              <div
                className={`flex items-center mb-4 pl-4 py-1 text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold ${
                  isStudyGuidesClicked
                    ? "bg-[#3A3454] opacity-100 font-bold"
                    : "bg-transparent"
                }`}
              >
                <Image src="/bullet.svg" alt="bullet" width={15} height={15} />
                <button
                  onClick={() => {
                    setIsGeneralClicked(false);
                    setIsStudyGuidesClicked(true);
                    setIsNotesClicked(false);
                  }}
                  className="cursor-pointer ml-2"
                >
                  Study Guides
                </button>
              </div>
            </Link>
            <Link href="#notes" passHref>
              <div
                className={`flex items-center mb-4 pl-4 py-1 text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold ${
                  isNotesClicked
                    ? "bg-[#3A3454] opacity-100 font-bold"
                    : "bg-transparent"
                }`}
              >
                <Image src="/bullet.svg" alt="bullet" width={15} height={15} />
                <button
                  onClick={() => {
                    setIsGeneralClicked(false);
                    setIsStudyGuidesClicked(false);
                    setIsNotesClicked(true);
                  }}
                  className="cursor-pointer ml-2"
                >
                  Notes
                </button>
              </div>
            </Link>
          </div>
          {/* Add more links for other pages within the dashboard here */}
          <div>
            <Link href="/dashboard" passHref>
              <div className="flex items-center pl-4 py-1 text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <a className="cursor-pointer ml-2">Back to Study Groups</a>
              </div>
            </Link>
            <Link href="/" passHref>
              <div className="flex items-center mb-4 pl-4 py-1 text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold">
                <Image src="/house.svg" alt="Back" width={15} height={15} />
                <a className="cursor-pointer ml-2">Back to Home</a>
              </div>
            </Link>
          </div>
        </div>
        {isGeneralClicked && (
          <main
            className="flex-1 p-4 border-t border-l border-[#393939]"
            style={{
              background:
                "linear-gradient(to bottom right, #161518 50%, #2F2656 100%)",
            }}
          >
            <div className="border-b border-[#393939]"></div>
            <div className="flex flex-col h-screen justify-between">
              <div className="flex justify-between items-center">
                <p className="text-3xl jersey-25 my-6 ml-6 font-bold">
                  General
                </p>
                <div className="relative mr-2">
                  <input
                    type="search"
                    placeholder="Search Messages"
                    className="border-2 border-[#393939] bg-transparent h-10 px-2 pr-10 rounded text-sm focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 rounded h-full w-10 bg-[#15EDA3] flex items-center justify-center"
                    title="Toggle Click"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search text-[#161518]"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <p className="ml-6 text-[#CCCCCC]">
              Find study groups that suit your necessities to improve your
              academic knowledge.
            </p>
            <div className="ml-6 mt-4">
              {messages.map(
                (message: { user: string; text: string }, index: number) => (
                  <div key={index} className="rounded p-2 mb-2">
                    <p>
                      <strong>{message.user}:</strong> {message.text}
                    </p>
                  </div>
                )
              )}
              <div className="flex items-center mt-4 ml-6">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="border-2 border-[#393939] bg-transparent h-10 px-2 rounded text-sm focus:outline-none flex-grow"
                />
                <button
                  type="submit"
                  onClick={handleSend}
                  className="ml-2 bg-[#15EDA3] h-10 px-4 rounded text-[#393939] font-bold hover:bg-[#393939] hover:text-[#15EDA3] transition-all duration-300 ease-in-out"
                >
                  Send
                </button>
              </div>
            </div>
          </main>
        )}

        {isStudyGuidesClicked && (
          <main
            className="flex-1 p-4 border-t border-l border-[#393939]"
            style={{
              background:
                "linear-gradient(to bottom right, #161518 50%, #2F2656 100%)",
            }}
          >
            <div className="flex justify-between items-center">
              <p className="text-3xl jersey-25 my-6 ml-6 font-bold">
                Study Guides
              </p>
              <div className="relative mr-2">
                <input
                  type="search"
                  placeholder="Search Study Guides"
                  className="border-2 border-[#393939] bg-transparent h-10 px-2 pr-10 rounded text-sm focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 rounded h-full w-10 bg-[#15EDA3] flex items-center justify-center"
                  title="Toggle Click"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search text-[#161518]"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-transparent rounded-xl shadow mb-4 mx-8 border border-[#393939] hover:border-[#15EDA3] transition-all duration-300 ease-in-out"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
                <a
                  href={card.downloadLink}
                  download
                  className="px-4 py-2 bg-[#15EDA3] text-[#393939] rounded font-bold hover:bg-[#393939] hover:text-[#15EDA3] transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            ))}
            <button
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              className="text-[#393939] bg-[#15EDA3] hover:bg-[#393939] hover:text-[#15EDA3] transition-all duration-300 ease-in-out font-bold"
              onClick={() => setIsOpen(true)}
            >
              Upload
            </button>
          </main>
        )}

        {isNotesClicked && (
          <main
            className="flex-1 p-4 border-t border-l border-[#393939]"
            style={{
              background:
                "linear-gradient(to bottom right, #161518 50%, #2F2656 100%)",
            }}
          >
            <div className="flex justify-between items-center">
              <p className="text-3xl jersey-25 my-6 ml-6 font-bold">Notes</p>
              <div className="relative mr-2">
                <input
                  type="search"
                  placeholder="Search Notes"
                  className="border-2 border-[#393939] bg-transparent h-10 px-2 pr-10 rounded text-sm focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 rounded h-full w-10 bg-[#15EDA3] flex items-center justify-center"
                  title="Toggle Click"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search text-[#161518]"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>
            {notes.map((card, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-transparent rounded-xl shadow mb-4 mx-8 border border-[#393939] hover:border-[#15EDA3] transition-all duration-300 ease-in-out"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
                <a
                  href={card.downloadLink}
                  download
                  className="px-4 py-2 bg-[#15EDA3] text-[#393939] rounded font-bold hover:bg-[#393939] hover:text-[#15EDA3] transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            ))}
            <button
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              className="text-[#393939] bg-[#15EDA3] hover:bg-[#393939] hover:text-[#15EDA3] transition-all duration-300 ease-in-out font-bold"
              onClick={() => setIsOpen(true)}
            >
              Upload
            </button>
          </main>
        )}
        {isOpen && (
          <>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(circle at top left, #15EDA3 10%, #15EDA3 20%, transparent 35%)",
                zIndex: 998,
              }}
            ></div>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
            ></div>
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                width: "50%",
                height: "75%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                backgroundColor: "#161518",
                padding: "30px",
                borderRadius: "10px",
                border: "1px solid #393939",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                }}
              >
                <label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleFileChange(e.dataTransfer.files[0]);
                    }}
                    style={{
                      width: "100%",
                      height: "100px",
                      border: "2px dashed #393939",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "10px",
                      opacity: 0.75,
                    }}
                  >
                    Upload your file here
                  </div>
                </label>
                <label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleImageChange(e.dataTransfer.files[0]);
                    }}
                    style={{
                      width: "100%",
                      height: "100px",
                      border: "2px dashed #393939",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0.75,
                      }}
                      className="text-nowrap flex-col"
                    >
                      Upload your image here
                    </div>
                  </div>
                </label>
                <label className="font-bold tracking-wide">
                  Title:
                  <div style={{ position: "relative" }}>
                    <textarea
                      value={description}
                      onChange={handleDescriptionChange}
                      maxLength={200}
                      style={{
                        width: "100%",
                        height: "100px",
                        backgroundColor: "transparent",
                        border: "1px solid #393939",
                        borderRadius: "5px",
                      }}
                      className="mt-2"
                    />
                    <p
                      style={{
                        position: "absolute",
                        bottom: 12,
                        right: 12,
                        opacity: 0.75,
                      }}
                    >
                      {description.length}/200
                    </p>
                  </div>
                </label>
                <label className="font-bold tracking-wide">
                  Description:
                  <div style={{ position: "relative" }}>
                    <textarea
                      value={description}
                      onChange={handleDescriptionChange}
                      maxLength={200}
                      style={{
                        width: "100%",
                        height: "175px",
                        backgroundColor: "transparent",
                        border: "1px solid #393939",
                        borderRadius: "5px",
                      }}
                      className="mt-2"
                    />
                    <p
                      style={{
                        position: "absolute",
                        bottom: 12,
                        right: 12,
                        opacity: 0.75,
                      }}
                    >
                      {description.length}/200
                    </p>
                  </div>
                </label>
                <p style={{ fontSize: "0.8rem", color: "#888" }}>
                  Note: All resources are checked by a moderator before going
                  public.
                </p>
              </form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                  marginBottom: "0px",
                }}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    backgroundColor: "#3A3454",
                    color: "#ffffff",
                    padding: "10px",
                    marginLeft: "10px",
                  }}
                  className="rounded-xl font-bold"
                >
                  Close
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#15EDA3",
                    color: "#161518",
                    padding: "5px",
                    marginLeft: "10px",
                  }}
                  className="rounded-xl font-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudyGroup;
