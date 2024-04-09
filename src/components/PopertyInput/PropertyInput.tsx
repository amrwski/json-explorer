import { FC, ChangeEvent } from "react";

interface IPropertyInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const PropertyInput: FC<IPropertyInput> = ({ value, onChange }) => (
  <div className="input-container">
    <label htmlFor="prop-input">Property</label>
    <input id="prop-input" className="input-field" type="text" value={value} onChange={onChange} />
  </div>
);
