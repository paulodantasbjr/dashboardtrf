import { Toast } from '../Toast'
import { useContext } from 'react'
import { DataContext } from '../../store/globalState'
import Loading from '../Loading'

export const Notify = () => {
  const { state, dispatch } = useContext(DataContext)
  const { notify } = state
  return (
    <>
      {notify.loading && <Loading />}

      {notify.error && (
        <Toast
          info={{ msg: notify.error, title: 'error' }}
          handleClose={() => dispatch({ type: 'NOTIFY', payload: {} })}
        />
      )}

      {notify.success && (
        <Toast
          info={{ msg: notify.success, title: 'success' }}
          handleClose={() => dispatch({ type: 'NOTIFY', payload: {} })}
        />
      )}

      {notify.info && (
        <Toast
          info={{ msg: notify.info, title: 'info' }}
          handleClose={() => dispatch({ type: 'NOTIFY', payload: {} })}
        />
      )}
    </>
  )
}
