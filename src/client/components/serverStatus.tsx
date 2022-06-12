import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/types'

export const ServerStatus = () => {
  const status = useSelector((state: RootState) => state.healthCheck.status)
  const statusError = useSelector((state: RootState) => state.healthCheck.error)

  return (
    <div className="server-status">
      Server Status: {status ? '🟢' : '🔴'}
      {statusError != null
        ? `(${statusError})`
        : null}
    </div>
  )
}

export default ServerStatus
