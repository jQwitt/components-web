import React from "react";
import { HTMLPropertyPayload, StylePropertyPayload } from "../types/properties";
import { Action, ActionType, Dispatch } from "../types/reducers";
import { html, style } from "./helpers";
export interface Properties {
  html: string;
  styles: Object;
}

type PropertiesContextType = {
  state: Properties;
  dispatch: Dispatch;
};

const DEFAULT: PropertiesContextType = {
  state: {
    html: "",
    styles: {},
  },
  dispatch: (action: Action) => null,
};

const PropertiesContext = React.createContext<PropertiesContextType>(DEFAULT);

const propertiesReducer = (state: Properties, action: Action) => {
  switch (action.type) {
    case ActionType.HTML: {
      return html(state, action.payload as HTMLPropertyPayload);
    }
    case ActionType.STYLE: {
      return style(state, action.payload as StylePropertyPayload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

type PropertiesProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

function PropertiesProvider({ children }: PropertiesProviderProps) {
  const [state, dispatch] = React.useReducer(propertiesReducer, DEFAULT.state);

  // TODO: memoize
  const value = { state, dispatch };
  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
}

function useProperties() {
  const context = React.useContext(PropertiesContext);
  if (!context) {
    throw new Error("useCount must be used within a PropertiesProvider");
  }
  return context;
}

export { PropertiesProvider, useProperties };
