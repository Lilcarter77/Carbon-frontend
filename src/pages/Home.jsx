import { useNavigate } from "react-router-dom";
import earthImage from "../assets/earth_image.png";
import childMaskImage from "../assets/child_mask.jpg";

import {
  FaChartLine,
  FaPlus,
  FaBullseye,
  FaTrophy,
  FaUser,
  FaListOl,
  FaLeaf,
} from "react-icons/fa";

import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  const quickActions = [
    { label: "Dashboard", icon: <FaChartLine />, path: "/dashboard" },
    { label: "Log Activity", icon: <FaPlus />, path: "/activity" },
    { label: "Goals", icon: <FaBullseye />, path: "/goals" },
    { label: "Achievements", icon: <FaTrophy />, path: "/achievements" },
    { label: "Leaderboard", icon: <FaListOl />, path: "/leaderboard" },
    { label: "Profile", icon: <FaUser />, path: "/profile" },
  ];

  const facts = [
    "Switching to LED bulbs can reduce electricity consumption in Cameroonian households.",
    "Using public transport in cities like Douala and Yaoundé lowers fuel emissions.",
    "Planting trees helps fight deforestation and climate change in Cameroon.",
    "Solar energy is a powerful renewable solution for rural communities.",
    "Reducing plastic waste protects Cameroon’s rivers and coastline.",
  ];

  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 6000);
    return () => clearInterval(id);
  }, [facts.length]);

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
            🇨🇲 Local Innovation · For a Sustainable Cameroon
          </span>

          <h1 className="text-4xl font-bold text-slate-900">
            Track your carbon footprint and adopt sustainable choices.
          </h1>

          <p className="text-lg text-slate-600">
            Monitor your daily activities, understand your environmental impact,
            and make energy choices adapted to the realities of Cameroon.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Start Tracking
            </button>

            <button
              onClick={() => navigate("/learn-more")}
              className="border-2 border-green-600 text-green-700 px-6 py-3 rounded-full font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img src={earthImage} alt="Environmental illustration" />
        </div>
      </section>

      {/* DID YOU KNOW */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          💡 Did You Know?
        </h2>

        <div className="bg-green-50 p-6 rounded-2xl text-lg">
          {facts[factIndex]}
        </div>
      </section>

      {/* CARBON SNAPSHOT */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-green-700 text-white p-8 rounded-3xl">
          <p className="text-sm uppercase tracking-wide">
            Average Monthly Carbon Footprint (Cameroon Estimate)
          </p>

          <p className="text-4xl font-bold mt-4">
            ~350 kg CO₂ / month
          </p>

          <p className="mt-3 text-green-200">
            Estimated values shown for awareness purposes.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={childMaskImage}
            alt="Impact of pollution on children"
            className="rounded-3xl"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Why This Matters for Cameroon
          </h2>

          <p className="text-lg text-slate-700">
            Air pollution directly affects children's health.
            Our daily choices shape the future of the next generation in Cameroon.
          </p>

          <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl">
            <FaLeaf className="text-green-600" />
            <p className="font-medium text-slate-700">
              Your sustainable decisions today protect Cameroon tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="bg-green-50 p-5 rounded-2xl shadow hover:shadow-lg"
            >
              <div className="text-green-700 text-2xl mb-2">
                {item.icon}
              </div>
              <p className="font-semibold">{item.label}</p>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Every small action counts toward a greener Cameroon.
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          Start logging your activities today and gradually reduce
          your environmental impact.
        </p>

        <button
          onClick={() => navigate("/activity")}
          className="bg-white text-green-700 px-8 py-3 rounded-full font-bold"
        >
          Log Your First Activity
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-10 text-center">
        <p className="mb-2 font-semibold">CarbonTracker Eco</p>

        <p className="text-sm text-slate-400">
          Empowering Cameroonians to reduce their carbon footprint and build a more sustainable future.
        </p>

        <div className="mt-6 text-sm text-slate-500">
          Douala, Cameroon · © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default Home;
