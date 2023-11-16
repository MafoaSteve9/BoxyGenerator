import {useSelector, useDispatch} from "react-redux"
import Shadow from "./Shadow"
import {addShadow} from "../../features/shawdows"

export default function ShadowList() {
  const dispatch = useDispatch()
  const shawdows = useSelector(state => state.shawdows)
  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p  className="font-bold text-lg">Customize Shadows</p>
        <button
        onClick={() => dispatch(addShadow())}
        className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none
        focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-white"
        >Add a shadow</button>
      </div>
      <ul>
        {shawdows.map((shawdow, index) => (
          <Shadow 
          panelNumber={index + 1}
          shawdow={shawdow}
          key={shawdow.id}
          />
        ))}
      </ul>
    </div>
  )
}