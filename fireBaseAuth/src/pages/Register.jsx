import { useContext } from "react";
import CommonForm from "../components/CommonForm";
import { AuthContext } from "../context/AuthContext";
import { registerFormControls } from "../config/index";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../assets/fireBaseConfig";

function RegisterPage() {
  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleRegisterFormSubmit(event) {
    event.preventDefault();

    registerWithFirebase()
      .then((result) => {
        updateProfile(result.user, {
          displayName: registerFormData.name,
        }).then(() => {
          console.log(
            auth.currentUser.displayName,
            "auth.currentUser.displayName"
          );

          if (auth.currentUser.displayName) {
            setLoading(false);
            navigate("/profile");
          }
        });

        // navigate("/profile");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-md">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-5">
          <h3 className="text-xl font-semibold text-gray-700 text-center">
            Welcome Back
          </h3>
          <p className="text-gray-600 text-center mb-4">Register Page</p>
          <CommonForm
            formControls={registerFormControls}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            onSubmit={handleRegisterFormSubmit}
            buttonText={"Save"}
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
