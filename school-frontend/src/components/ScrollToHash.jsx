import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ScrollToHash() {
  const location = useLocation()
  const navigate = useNavigate()
  const isFirstLoad = useRef(true)

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      window.scrollTo(0, 0)
      // Clean up any leftover hash from a previous session, without adding to history
      if (location.hash) {
        navigate(location.pathname, { replace: true })
      }
      return
    }

    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location, navigate])

  return null
}

export default ScrollToHash