import React from "react";

type StylePayload = {
  style: string;
  value: string;
  units: string | null;
};

type Dispatch = (action: Action) => void;

interface Action {
  type: string;
  payload: StylePayload;
}

interface Properties {
  styles: Object;
}

type PropertiesContextType = {
  state: Properties;
  dispatch: Dispatch;
};

const DEFAULT: PropertiesContextType = {
  state: {
    styles: {},
  },
  dispatch: (action: Action) => null,
};

const PropertiesContext = React.createContext<PropertiesContextType>(DEFAULT);

const propertiesReducer = (state: Properties, action: Action) => {
  switch (action.type) {
    case "style": {
      const { style, value, units } = action.payload;
      return { styles: { ...state.styles, [style]: `${value}${units ?? ""}` } };
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
