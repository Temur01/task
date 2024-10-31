import TopOfSection from "../components/TopOfSection";
import useTheme from "../hooks/useTheme";

const DiagnosticSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-dark-gray-light text-dark-white-slate"
          : "bg-white-slate text-gray-text"
      }`}
    >
      <div className="container p-6">
        <TopOfSection title="Психологик диагностика" />
        <p
          className={`leading-relaxed ${
            theme === "dark" ? "text-dark-gray-text" : "text-gray-text"
          }`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of...
        </p>
      </div>
    </section>
  );
};

export default DiagnosticSection;
