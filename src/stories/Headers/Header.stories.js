import React from 'react';
import {HeaderA, HeaderB} from '../../components'
import DirSwitch from '../../utilites/dirSwitch'

export default {
	title: "Sections/Headers",
};

export const HeaderAExemple = () => <HeaderA />
export const HeaderA_RTLEnabled = () => {
  const [dirRTL, setDirRTL] = React.useState(false);

  React.useEffect(() => {
    document.dir = dirRTL ? "rtl" : "ltr";
  }, [dirRTL])

  return (
    <div>

      <div className="p-4 max-w-xs mx-auto bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3">
          <input onChange={e => setDirRTL(e.currentTarget.checked)} type="checkbox" name="checked-demo" className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">Direction: RTL</span>
        </label>
      </div>

      <HeaderA />
      <div className="mx-auto my-10 p-4 max-w-xs ltr:border-l rtl:border-r border-yellow">
        <input type="checkbox" /> Hello
      </div>
    </div>
  )
}

export const HeaderBExemple = () => <>
  <HeaderB />
  <DirSwitch />
</>
