import { createMachine, interpret, ActorRef, State } from "xstate";
import { useInterpret, useActor, useSelector } from "@xstate/react";
import { IContext, Selector } from "./types";
import config from "./config";
import options from "./options";

const default_context: IContext = { test: {}, user: "ëugene" };

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

export const useClever = (machine: any = {}) => {
  const recordService = useInterpret(spawn(machine));
  const { send } = recordService;
  // const [state, send] = useActor<ActorRef<any, any>>(recordService);
  const current_state = (state) => state;
  const state = useSelector(recordService, current_state);
  return [state, send];
};

// export const usePandoSelect = (machine: any, data: Selector) => {
//   const current_state = (state) => {
//     if (data.selector === "state") return state;
//     return state[data.selector];
//   };
//   const compare = (curr_state, prev_state) => curr_state !== prev_state;
//   const state = useSelector(machine, current_state, compare);
//   return state;
// };

export * from "./types";
