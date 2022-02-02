export interface IContext {
  test: {};
  user: string;
}

export type SelectorType = "state" | "value" | "context";
export interface Selector {
  selector?: SelectorType;
  value?: any;
}

export interface IRecord<TEntry> {
  [key: string]: TEntry;
}
