import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">
        {user?.displayName}
      </h3>
      <p className="text-gray-600 mb-6">{user?.email}</p>
      <button
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
