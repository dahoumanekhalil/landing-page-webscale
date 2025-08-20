// src/components/registration/SectionTitle.jsx
const SectionTitle = ({ title, subtitle }) => {
    return (
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
    );
  };
  
  export default SectionTitle;
  