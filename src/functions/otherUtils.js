import { lazy } from 'react'

export function lazily(loader) {
    return new Proxy(({}), {
        get: (target, componentName) => {
            if (typeof componentName === 'string') {
                return lazy(() => loader(componentName).then((x) => ({
                    default: (x[componentName]),
                })))
            }
        },
    })
}