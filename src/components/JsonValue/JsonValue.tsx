import { FC } from "react";
import { JsonValueType } from "../../types";

interface IJsonValue {
  value: JsonValueType;
  onSelect: () => void;
}

export const JsonValue: FC<IJsonValue> = ({ value, onSelect }) => {
  let formattedValue = JSON.stringify(value, null, 2);
  if (typeof value === "string") {
    formattedValue = `"${value}"`;
  }

  return (
    <span className="jsonValue" onClick={onSelect}>
      {formattedValue}
    </span>
  );
};
