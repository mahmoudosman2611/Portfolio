import React from "react";

export default function PageMetaData({
  title = "Mahmoud Osman-Frontend Developer",
  description = "Portfolio of Mahmoud Osman showcasing modern web development projects using React, TypeScript, and TailwindCSS.",
  keywords = "Mahmoud Osman, Frontend Developer, React, TypeScript, JavaScript, Portfolio, Web Development, UI, UX",
  author = "Mahmoud Osman",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
