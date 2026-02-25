const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">My Skills</h2>
          <p className="text-gray-500 mt-2">
            Manage the skills you offer to others.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Requests</h2>
          <p className="text-gray-500 mt-2">View skill exchange requests.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-gray-500 mt-2">Chat with other members.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;