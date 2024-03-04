import { MutableRefObject } from 'react'

type RETURN_HOOK<T> = [T, boolean, string]

type REF = MutableRefObject<HTMLDivElement | null>
type OBSERVER = IntersectionObserver | null

export type { RETURN_HOOK, REF, OBSERVER }
