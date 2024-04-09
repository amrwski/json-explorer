type JsonPrimitiveType = string | number | boolean | null;
type JsonObjectType = { [key: string]: JsonValueType };
type JsonArrayType = JsonValueType[];
export type JsonValueType = JsonPrimitiveType | JsonObjectType | JsonArrayType;
