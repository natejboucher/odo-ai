import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Join Campaign | ODO AI" },
    { name: "description", content: "Join an existing campaign" },
  ];
};

export default function JoinCampaign() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">ODO AI</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/dashboard"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/join-campaign"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Join Campaign
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Join a Campaign
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter the campaign code provided by your Dungeon Master
            </p>
          </div>

          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="campaign-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Campaign Code
                </label>
                <div className="mt-1">
                  <input
                    id="campaign-code"
                    name="campaign-code"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your campaign code"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="character-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Character Name
                </label>
                <div className="mt-1">
                  <input
                    id="character-name"
                    name="character-name"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your character name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="character-sheet"
                  className="block text-sm font-medium text-gray-700"
                >
                  Character Sheet URL (Optional)
                </label>
                <div className="mt-1">
                  <input
                    id="character-sheet"
                    name="character-sheet"
                    type="url"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="https://dndbeyond.com/characters/..."
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Supports D&D Beyond character sheets
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Join Campaign
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or create your own
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/dashboard"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create a New Campaign
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
