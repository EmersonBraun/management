'use strict'

class NoTimestamp {
  register (Model) {
    Object.defineProperties(Model, {
      createdAtColumn: {
        get: () => null,
      },
      updatedAtColumn: {
        get: () => null,
      }
    })
  }
}

export default NoTimestamp
