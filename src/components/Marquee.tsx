// Skill items for the marquee strip
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "AI Apps",
  "LLM APIs",
  "Flask",
  "Streamlit",
  "MERN Stack",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Storybook",
  "SCORM",
  "Research",
  "Time-Series Forecasting"
];

export default function Marquee() {
  // Duplicate the list of items to ensure seamless loop covering the screen width
  const tripleItems = [...skills, ...skills, ...skills];

  return (
    <section className="bg-panel overflow-hidden border-b border-line">
      <div className="container-grid py-4 md:py-5 flex items-center bg-panel border-r border-l border-line-dark">
        <div className="relative flex w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {tripleItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center text-panel-text font-mono text-xs md:text-sm font-semibold tracking-wider uppercase select-none mr-12"
              >
                <span>{item}</span>
                <span className="text-accent ml-12 text-sm">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
