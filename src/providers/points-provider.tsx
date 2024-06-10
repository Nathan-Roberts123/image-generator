import { trpc } from "@/trpc";
import React, { useReducer, createContext, useEffect } from "react";

export const PointsContext = createContext<number | null>(null);
export const PointsDispatchContext = createContext<any>(null);

type TAction = {
  type: "increment" | "decrement" | "set";
  count: number | null;
};

function pointsReducer(points: number | null, action: TAction) {
  switch (action.type) {
    case "set": {
      return action.count;
    }
    case "decrement": {
      if (!points || !action.count) {
        return null;
      }
      return points - action.count;
    }
    case "increment": {
      if (!points || !action.count) {
        return null;
      }
      return points + action.count;
    }
    default: {
      throw new Error("Unknown action type");
    }
  }
}

const PointsProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, refetch } = trpc.user.getPoints.useQuery();
  const [points, dispatch] = useReducer(pointsReducer, null);

  useEffect(() => {
    dispatch({ type: "set", count: data ? data : null });
    refetch();
  }, [data, refetch, points]);

  return (
    <PointsContext.Provider value={points}>
      <PointsDispatchContext.Provider value={dispatch}>
        {children}
      </PointsDispatchContext.Provider>
    </PointsContext.Provider>
  );
};

export default PointsProvider;
