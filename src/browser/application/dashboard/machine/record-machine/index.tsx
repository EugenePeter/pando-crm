import {
  createMachine,
  interpret,
  ActorRef,
  State,
  Subscribable,
} from "xstate";
import { useInterpret, useSelector } from "@xstate/react";
import { IContext } from "./types";
import config from "./config";
import options from "./options";

const default_context: IContext = {
  test: {
    name: "agaga",
  },
  user: "ëugene",
};

export const spawn = (context: Partial<IContext>) => {
  const machine_config = {
    ...config,
    context: {
      ...default_context,
      ...context,
    },
  };
  return createMachine(machine_config, options);
};

export const Interpret = (context: Partial<IContext>) => {
  const machine = spawn(context);
  const service = interpret(machine).onTransition((state: any): any =>
    console.log("state interpret", state.context)
  );
  return service;
};

export interface Slice<Y> {
  selector?: "state" | "context" | "state_value";
  value?: Y;
}

export interface UseClever<X, Y> {
  context?: X;
  slice?: Slice<Y>;
}

export const useClever = <X, Y>(
  params: UseClever<X, Y>
): [State<IContext>, any] => {
  const { context = {}, slice } = params;
  const { selector, value } = slice ?? {};
  const recordService = useInterpret(spawn(context));
  const { send } = recordService;
  const current_state = <
    TActor extends ActorRef<any, any>,
    T,
    TEmitted = TActor extends Subscribable<infer Emitted> ? Emitted : never
  >(
    state: State<IContext, any, any> | TEmitted
  ) => {
    if (!slice) return state;
    if (selector === "state_value") return state.value;
    if (selector === "context" && !value) return state.context;
    if (selector && value) return state[selector][value];
  };
  const state = useSelector(recordService, current_state) as State<IContext>;
  return [state, send];
};

export * from "./types";
