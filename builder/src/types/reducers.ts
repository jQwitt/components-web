import { HTMLPropertyPayload, StylePropertyPayload } from "./properties";

export type Dispatch = (action: Action) => void;

export type ActionPayload = HTMLPropertyPayload | StylePropertyPayload;

export enum ActionType {
  HTML = "HTML",
  STYLE = "STYLE",
}

export type Action = {
  type: ActionType;
  payload: ActionPayload;
};
