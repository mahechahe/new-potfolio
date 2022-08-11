import React from "react";

export const NavigationDocs = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          key={item + index}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};
