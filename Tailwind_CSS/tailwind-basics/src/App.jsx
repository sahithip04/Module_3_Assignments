export default function App() {
  return (
    <div>

      <button className="rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
        Click Me
      </button>

    <div>
        <img
          src="https://picsum.photos/300/200"
          alt="Sample landscape"
          className="rounded shadow-lg hover:scale-105 transition"
        />
      </div>
      <h2
        className="text-xl md:text-3xl lg:text-5xl font-bold
                   bg-gradient-to-r from-blue-500 to-purple-500
                   bg-clip-text text-transparent"
      >
        Learning Tailwind CSS
      </h2>

      <ul className="list-disc list-inside pl-5">
        <li className="hover:text-blue-600">Utility-first styling</li>
        <li className="hover:text-blue-600">Responsive design</li>
        <li className="hover:text-blue-600">Hover and focus states</li>
      </ul>

      <div className="bg-white">
        <img
          src="https://picsum.photos/200/150"
          alt="Technology illustration"
        />
        <h3>Smart Dashboard</h3>
        <p>
          A simple dashboard interface designed using Tailwind CSS utilities.
        </p>
        <button className="rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
          View Details
        </button>
      </div>

      <table className="border">
        <tr className="border">
          <th className="border">Name</th>
          <th className="border">Role</th>
          <th className="border">Status</th>
        </tr>

        <tr className="border bg-gray-100 hover:bg-gray-200">
          <td className="border">Asha</td>
          <td className="border">Student</td>
          <td className="border">Active</td>
        </tr>

        <tr className="border hover:bg-gray-200">
          <td className="border">Ravi</td>
          <td className="border">Developer</td>
          <td className="border">Inactive</td>
        </tr>

        <tr className="border bg-gray-100 hover:bg-gray-200">
          <td className="border">Neha</td>
          <td className="border">Designer</td>
          <td className="border">Active</td>
        </tr>
      </table>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
          className="border rounded focus:outline-none focus:ring"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded focus:outline-none focus:ring"
        />

        <input
          type="password"
          placeholder="Create a password"
          className="border rounded focus:outline-none focus:ring"
        />

        <button className="rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
          Register
        </button>
      </form>

      <nav className="flex flex-col md:flex-row gap-4">
        <a>Home</a>
        <a>Features</a>
        <a>Contact</a>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white">Real-time updates</div>
        <div className="bg-white">Responsive layout</div>
        <div className="bg-white">Modern UI design</div>
        <div className="bg-white">Fast development</div>
        <div className="bg-white">Reusable components</div>
        <div className="bg-white">Clean code structure</div>
      </div>

      <nav className="flex flex-col md:flex-row gap-4">
        <a>Home</a>
        <a>Services</a>
        <a>Contact</a>
      </nav>

      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
        Welcome to Our Platform
      </h2>

      <img
        src="https://picsum.photos/400/250"
        alt="Hero section image"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white">Easy to use</div>
        <div className="bg-white">Fully responsive</div>
        <div className="bg-white">Built with Tailwind</div>
      </div>

      <table className="border">
        <tr className="border">
          <th className="border">Feature</th>
          <th className="border">Availability</th>
          <th className="border">Version</th>
        </tr>
      </table>

      <form>
        <input
          className="border rounded focus:ring"
          placeholder="Your name"
        />
        <input
          className="border rounded focus:ring"
          placeholder="Your email"
        />
        <input
          className="border rounded focus:ring"
          placeholder="Your message"
        />
      </form>

    </div>
  );
}
