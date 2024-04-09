import { FC } from "react";
import { JsonValueType } from "../../types";
import { JsonValue } from "..";

interface IJsonNode {
  data: JsonValueType;
  basePath: string;
  onSelect: (path: string, value: JsonValueType) => void;
}

export const JsonNode: FC<IJsonNode> = ({ data, basePath, onSelect }) => {
  const constructPath = (key: string, isParentArray: boolean) => {
    return isParentArray ? `${basePath}[${key}]` : `${basePath}.${key}`;
  };

  if (data && typeof data === "object") {
    const elements = Object.entries(data).map(([key, value], index) => {
      const isLastElement = index === Object.entries(data).length - 1;
      const path = constructPath(key, Array.isArray(data));
      const handleClick = () => onSelect(path, value);

      return (
        <div key={key} className="node-container">
          {!Array.isArray(data) && (
            <span className="jsonKey" onClick={handleClick}>
              {key}:{" "}
            </span>
          )}
          {typeof value === "object" ? (
            <JsonNode data={value} basePath={path} onSelect={onSelect} />
          ) : (
            <JsonValue value={value} onSelect={handleClick} />
          )}
          {!isLastElement && ","}
        </div>
      );
    });

    return (
      <>
        {Array.isArray(data) ? "[" : "{"}
        {elements}
        {Array.isArray(data) ? "]" : "}"}
      </>
    );
  }

  return <JsonValue value={data} onSelect={() => onSelect(basePath, data)} />;
};
