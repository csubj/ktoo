import React, { useCallback,CSSProperties } from "react";

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])


  return (
    <li className="tab-list-item">
      <button className="button" onClick={onClick}>{title}</button>
    </li>
  )
}

export default TabTitle