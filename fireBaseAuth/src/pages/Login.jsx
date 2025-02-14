import { useContext } from "react";
import CommonForm from "../components/CommonForm";
import { loginFormControls } from "../config/index";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { loginFormData, setLoginFormData, loginWithFirebase, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  function handleLoginOnSubmit(event) {
    event.preventDefault();

    loginWithFirebase().then((result) => {
      if (result) {
        setLoading(false);
        navigate("/profile");
      }
    });
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-md">
      <div className="px-6 py-8">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          Welcome Back
        </h1>
        <p className="mt-2 text-center text-gray-600">Login Page</p>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText={"Login"}
          onSubmit={handleLoginOnSubmit}
        />
      </div>
    </div>
  );
}

export default LoginPage;
