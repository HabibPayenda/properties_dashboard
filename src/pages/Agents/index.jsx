import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAgents } from '../../data/agentsSlice';

import styles from './agents.module.css'

function Agents() {
  const agents = useSelector((state) => state.agents.agents)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAgents())
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.agentsListContainer}>
        Agents List
      </div>
      <div className={styles.addNewAgentContainer}>
        Add new agent
      </div>

    </div>
  )
}

export default Agents