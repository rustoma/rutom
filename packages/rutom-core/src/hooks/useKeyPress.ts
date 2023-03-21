import { useEffect } from 'react'

interface useKeyPressProps {
  targetKey: string
  onKeyDown: () => void
}

const useKeyPress = ({ targetKey, onKeyDown }: useKeyPressProps) => {
  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) onKeyDown()
    }

    window.addEventListener('keydown', downHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [targetKey, onKeyDown])

  return {}
}

export default useKeyPress
