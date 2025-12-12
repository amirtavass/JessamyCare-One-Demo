import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-jessamy-dark mb-4">
            Welcome, John Smith
          </h1>

          {/* Role Badge - Shows Task #2: Role Mapping */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-jessamy-purple text-white">
              Role: Employee Portal User
            </span>
          </div>

          <p className="text-gray-600 mb-6">You are successfully logged in.</p>

          <Link
            to="/"
            className="inline-block bg-jessamy-purple hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
