import { Test } from "./test"

// 在这里随意触发热更新
export const ComponentA = ({ visible }) => {
  if (visible) return <Test/>

  return <h2>component A.</h2>
}
