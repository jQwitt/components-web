type Dispatch = (action: Action) => void;

type ActionPayload = StylePropertyPayload;
type Action = {
  type: string;
  payload: ActionPayload;
};
