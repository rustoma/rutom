import { RefObject, useEffect, useRef } from 'react'

interface useClickOutsidePropsI {
  callback?: (e: MouseEvent | TouchEvent) => void
  exceptRef?: RefObject<Element> | RefObject<Element>[]
}

const useClickOutside = <T extends HTMLElement>({
  callback,
  exceptRef
}: useClickOutsidePropsI) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const onClick = (event: MouseEvent | TouchEvent) => {
      event.stopPropagation()
      if (exceptRef) {
        if (Array.isArray(exceptRef) && exceptRef.length > 0) {
          const isException = exceptRef.some(r =>
            r.current?.contains(event.target as Node)
          )
          if (isException) return
        } else if (
          !Array.isArray(exceptRef) &&
          exceptRef.current?.contains(event.target as Node)
        )
          return
      }
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      if (callback) callback(event)
    }

    document.addEventListener('mousedown', onClick)
    document.addEventListener('touchstart', onClick)

    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('touchstart', onClick)
    }
  }, [ref, exceptRef, callback])

  return { ref }
}

export default useClickOutside
