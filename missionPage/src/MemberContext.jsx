import { createContext, useContext } from "react";

const MemberContext = createContext();

export const useMemberContext = () => useContext(MemberContext);

export { MemberContext };
