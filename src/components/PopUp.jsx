// src/components/PopUp.jsx
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "architecturePopupClosed";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [modalMsg, setModalMsg] = useState("");

  // simple form state (uncontrolled is fine too)
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "1",
    phone: "",
  });

  const countries = useMemo(
    () => [
      { name: "United States", code: "1", flag: "🇺🇸" },
      { name: "Canada", code: "1", flag: "🇨🇦" },
      { name: "United Kingdom", code: "44", flag: "🇬🇧" },
      { name: "Australia", code: "61", flag: "🇦🇺" },
      { name: "India", code: "91", flag: "🇮🇳" },
      { name: "Germany", code: "49", flag: "🇩🇪" },
      { name: "France", code: "33", flag: "🇫🇷" },
      { name: "Japan", code: "81", flag: "🇯🇵" },
      { name: "Brazil", code: "55", flag: "🇧🇷" },
      { name: "China", code: "86", flag: "🇨🇳" },
      { name: "Mexico", code: "52", flag: "🇲🇽" },
      { name: "South Africa", code: "27", flag: "🇿🇦" },
      { name: "New Zealand", code: "64", flag: "🇳🇿" },
      { name: "Singapore", code: "65", flag: "🇸🇬" },
      { name: "United Arab Emirates", code: "971", flag: "🇦🇪" },
    ],
    []
  );

  useEffect(() => {
    // if user closed earlier, keep the tab visible but the card closed
    const closedBefore = localStorage.getItem(STORAGE_KEY) === "true";
    if (closedBefore) {
      setShowTab(true);
      setIsOpen(false);
    } else {
      // reveal the tab after a short delay
      const t = setTimeout(() => setShowTab(true), 500);
      return () => clearTimeout(t);
    }
  }, []);

  function openPopup() {
    setIsOpen(true);
    setShowTab(false);
  }

  function closePopup() {
    setIsOpen(false);
    setShowTab(true);
    localStorage.setItem(STORAGE_KEY, "true");
  }

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const allowed = /@(gmail|apple|yahoo|outlook|hotmail)\.com$/i;
    if (!allowed.test(form.email.trim())) {
      setEmailError(
        "Please use a popular email provider (@gmail.com, @yahoo.com, @outlook.com, @hotmail.com, @apple.com)."
      );
      return;
    }
    setEmailError("");

    // pretend to send
    console.log("Lead:", form);

    setModalMsg(
      "Thank you for your interest! We will contact you shortly to provide a quote."
    );
    closePopup(); // hide the card after submit
    // reset form (optional)
    setForm({ name: "", email: "", countryCode: "1", phone: "" });
  }

  return (
    <>
      {/* Floating tab button */}
      <AnimatePresence>
        {showTab && !isOpen && (
          <motion.button
            key="popup-tab"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={openPopup}
            className="fixed bottom-6 right-6 z-[1000] flex items-center bg-gray-900 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-800 transition"
            aria-label="Open quote form"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 5l-4 4m0 0l4 4m-4-4h8"
              />
            </svg>
            <span className="font-medium">Get a Quote</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Card */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* light mask for click outside feel on small screens */}
            <motion.div
              key="mask"
              className="fixed inset-0 z-[1000]"
              onClick={closePopup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              style={{ background: "#000" }}
            />
            <motion.div
              key="popup-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-6 right-6 z-[1001] w-72 md:w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              {/* header with close */}
              <div className="flex justify-end p-2">
                <button
                  onClick={closePopup}
                  className="text-gray-400 hover:text-gray-600 transition"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  GET QUOTE FOR YOUR PROJECT
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Enter your information below to receive a personalized quote.
                </p>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Project Type"
                      placeholder="Project Type"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="Site Area"
                      placeholder="Site Area in SqM"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    {emailError && (
                      <p className="text-sm text-red-500 mt-1">{emailError}</p>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={onChange}
                      className="w-1/3 px-2 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} +{c.code}
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={onChange}
                      required
                      className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sky-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition"
                  >
                    Request a Quote
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modalMsg && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalMsg("")}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-[90%] relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-600"
                onClick={() => setModalMsg("")}
                aria-label="Close modal"
              >
                &times;
              </button>
              <p className="text-gray-800 text-base">{modalMsg}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
