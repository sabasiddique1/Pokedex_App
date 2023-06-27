import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = ({ msg }) => {
  const [isFavorited, setIsFavorited] = useState(
    JSON.parse(localStorage.getItem("isFavorited")) || true
  );

  useEffect(() => {
    if (isFavorited) {
      toast.success(msg);
      localStorage.setItem("showMessage", true);
    }
  }, [isFavorited, msg]);

  return (
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
      />
     
  );
};

export default Message;
