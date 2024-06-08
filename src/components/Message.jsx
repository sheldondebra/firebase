import { showAlert } from "tailwind-toastify";

export default function Message() {
  const handleShowAlert = (type, title, message) => {
    showAlert(type, title, message);
  };

  return (
    <>
      <button
        type="button"
        onClick={() =>
          handleShowAlert(
            "success",
            "Success",
            "Showing success tailwind alert"
          )
        }
      >
        Show Alert Success
      </button>
    </>
  );
}
