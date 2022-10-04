import { StylePropertyPayload } from "../../types/properties";
import { Properties } from "../properties-provider";

export function style(
  state: Properties,
  payload: StylePropertyPayload
): Properties {
  const { style, value, units } = payload;
  return {
    ...state,
    styles: { ...state.styles, [style]: `${value}${units ?? ""}` },
  };
}
