import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-6">Welcome! You are now logged in.</p>
          <Link
            to="/"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
