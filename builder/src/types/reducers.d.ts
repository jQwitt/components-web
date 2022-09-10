type Dispatch = (action: Action) => void;
type Action = {
  type: string;
  payload: StyleProperty;
};
