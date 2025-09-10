import { useEffect } from "react";

function Protect() {

  useEffect(() => {
    function handleCopyAndPast(e) {
      e.preventDefault();
      const marker = "OOPS! You can't copy the text";

      e.clipboardData.setData("text/plain", marker);
      
    }
    document.addEventListener("copy", handleCopyAndPast);
    document.addEventListener("paste", handleCopyAndPast);

    return () => {
      document.removeEventListener("copy", handleCopyAndPast);
      document.removeEventListener("paste", handleCopyAndPast);
    };
  }, []);
  
}

export default Protect;
