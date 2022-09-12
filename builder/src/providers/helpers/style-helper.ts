import { Properties } from "../properties-provider";

export function style(state: Properties, action: Action): Properties {
  const { style, value, units } = action.payload;
  return { styles: { ...state.styles, [style]: `${value}${units ?? ""}` } };
}
