import { ConditionPredicate } from "xstate";
import { IContext, IRecord } from "../types";

const guards: IRecord<ConditionPredicate<IContext, any>> = {};

export default guards;
