import { FC } from "react";
import { JsonNode } from "..";
import { JsonValueType } from "../../types";

interface IPrettyJson {
  jsonData: JsonValueType;
  onSelect: (path: string, value: JsonValueType) => void;
}

export const PrettyJson: FC<IPrettyJson> = ({ jsonData, onSelect }) => {
  return (
    <pre className="response-wrapper">
      <JsonNode data={jsonData} basePath="res" onSelect={onSelect} />
    </pre>
  );
};
