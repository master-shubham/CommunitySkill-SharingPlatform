
import { useAuth } from "../context/AuthContext";

const mockUser = {
  id: "1",
  name: "Shubham",
  email: "coder@gmail.com",
  bio: "Frontend Developer passionate about building scalable apps.",
  location: "India",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
};

const mockSkills = [
  { id: 1, name: "React", level: "Advanced" },
  { id: 2, name: "TypeScript", level: "Intermediate" },
  { id: 3, name: "Node.js", level: "Beginner" },
];

const Profile = () => {
  

  const {isLoggedIn} = useAuth(); // later from context
  const isOwner = isLoggedIn;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img
            src={mockUser.avatar}
            alt="avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">{mockUser.name}</h2>
            <p className="text-gray-500">{mockUser.email}</p>
            <p className="mt-3 text-gray-700">{mockUser.bio}</p>
            <p className="mt-2 text-sm text-gray-500">📍 {mockUser.location}</p>

            {isOwner && (
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Skills</h3>

            {isOwner && (
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500">
                + Add Skill
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mockSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg">{skill.name}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Level: {skill.level}
                </p>

                {isOwner && (
                  <div className="flex gap-3 mt-4">
                    <button className="text-blue-600 text-sm">Edit</button>
                    <button className="text-red-600 text-sm">Delete</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
