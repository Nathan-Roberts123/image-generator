import { trpc } from "@/trpc";
import React, { useReducer, createContext, useEffect } from "react";

export const PointsContext = createContext<number>(0);
export const PointsDispatchContext = createContext<any>(null);

type TAction = {
  type: "increment" | "decrement" | "set";
  count: number;
};

function pointsReducer(points: number, action: TAction) {
  switch (action.type) {
    case "set": {
      return action.count;
    }
    case "decrement": {
      return points - action.count;
    }
    case "increment": {
      return points + action.count;
    }
    default: {
      throw new Error("Unknown action type");
    }
  }
}

const PointsProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, refetch } = trpc.user.getPoints.useQuery();
  const [points, dispatch] = useReducer(pointsReducer, 0);

  console.log({ data });
  useEffect(() => {
    dispatch({ type: "set", count: data ? data : 0 });
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
