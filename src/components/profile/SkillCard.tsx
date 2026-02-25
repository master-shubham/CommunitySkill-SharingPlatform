import type { Skill } from "../../data/skills";

interface Props {
  skill: Skill;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={skill.image}
        alt={skill.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{skill.title}</h3>
        <p className="text-gray-500 text-sm">{skill.author}</p>
        <p className="text-gray-600 mt-2 text-sm">{skill.description}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {skill.category}
          </span>

          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-500">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
