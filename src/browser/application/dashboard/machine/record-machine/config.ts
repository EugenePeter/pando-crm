import { AnyStateNodeDefinition, MachineConfig } from "xstate";
import { IContext, IMachineEvents } from "./types";
const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> =
  {
    id: "sruvey-shell",
    initial: "get_config",

    states: {
      get_config: {},
    },
  };

export default config;
