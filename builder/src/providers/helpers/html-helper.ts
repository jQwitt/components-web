import { HTMLPropertyPayload } from "../../types/properties";
import { Properties } from "../properties-provider";

export function html(
  state: Properties,
  payload: HTMLPropertyPayload
): Properties {
  const { value } = payload;
  return {
    ...state,
    html: value,
  };
}
