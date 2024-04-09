import { FC, useState, ChangeEvent } from "react";
import get from "lodash.get";
import { PropertyInput, PrettyJson } from "..";
import { JsonValueType } from "../../types";

interface IJsonExplorer {
  jsonData: JsonValueType;
}

export const JsonExplorer: FC<IJsonExplorer> = ({ jsonData }) => {
  const [selectedPath, setSelectedPath] = useState("");
  const [selectedValue, setSelectedValue] = useState<JsonValueType>("");

  const handleSelect = (path: string, value: JsonValueType) => {
    setSelectedPath(path);
    setSelectedValue(value);
  };

  const handlePathChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPath = e.target.value;
    setSelectedPath(newPath);

    const newValue = get(jsonData, newPath.replace(/^res\./, ""));
    setSelectedValue(newValue ? newValue : "undefined");
  };

  const displayValue = (value: JsonValueType) => {
    if (typeof value === "string") {
      return value;
    }
    return JSON.stringify(value, null, 2);
  };

  return (
    <div className="explorer-container">
      <div>
        <PropertyInput value={selectedPath} onChange={handlePathChange} />
        <pre>{displayValue(selectedValue)}</pre>
        <span className="response-label">Response</span>
        <PrettyJson jsonData={jsonData} onSelect={handleSelect} />
      </div>
    </div>
  );
};
