import React from "react";
import styles from "./Search.module.scss";

type SearchField = "email" | "companyName" | "name";

type SearchCriteria = {
  [key in SearchField]?: string;
};

const BasicInfo: React.FC<{
  searchCriteria: SearchCriteria;
  setSearchCriteria: (searchCriteria: SearchCriteria) => void;
}> = ({ searchCriteria, setSearchCriteria }) => {
  const searchFields = ["name", "companyName", "email"] as SearchField[];

  const camelCaseToPlainText = (camelCase: string) => {
    const pascalCase = camelCase[0].toUpperCase() + camelCase.slice(1);
    return pascalCase.replace(/([A-Z])/g, " $1");
  };

  const onFocusStyling = () => {
    return "styles.yellow";
  };

  return (
    <section className={styles.searchContainer}>
      {searchFields.map((searchField: SearchField, index) => {
        return (
          <div key={index}>
            <label> {camelCaseToPlainText(searchField)} </label>
            <input
              type="search"
              onFocus={() => onFocusStyling()}
              id={searchField}
              // placeholder={`${camelCaseToPlainText(searchField)} search`}
              aria-label={`${camelCaseToPlainText(searchField)} search`}
              onChange={(e) =>
                setSearchCriteria({
                  ...searchCriteria,
                  [searchField]: e.target.value,
                })
              }
            ></input>
          </div>
        );
      })}
    </section>
  );
};

export default BasicInfo;
