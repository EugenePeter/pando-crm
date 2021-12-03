import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";

interface IDebounceParams {
  input: any;
  delay: number;
}

interface IState {
  [key: string]: any;
}

export const useDebounce = ({ input, delay }: IDebounceParams) => {
  const [state, setState] = useState<IState | null>(null);
  const ref = useRef(null);
  useEffect(() => {
    if (input) {
      const timeout = setTimeout(() => {
        Object.values(input).map((value) => {
          value !== "" && setState(input);
        });
      }, delay);
      ref.current = state;
      return () => {
        clearTimeout(timeout);
        setState(null);
      };
    }
  }, [input]);
  if (input !== ref.current) return state !== null && state;
};
