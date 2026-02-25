import { useState } from "react";
import { skillsData } from "../data/skills";
import SkillCard from "../components/profile/SkillCard";

const categories = ["All", "Programming", "Design"];

const Home = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skillsData.filter((skill) => {
    const matchCategory =
      activeCategory === "All" || skill.category === activeCategory;

    const matchSearch = skill.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Find Skills</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search skills..."
        className="w-full p-3 rounded-lg border mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Categories */}
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Home;
