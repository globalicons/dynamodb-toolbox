import type { ErrorBlueprint } from 'v1/errors/blueprint'

type ReservedAttributeNameErrorBlueprint = ErrorBlueprint<{
  code: 'reservedAttributeName'
  hasPath: true
  payload: undefined
}>

export type EntityUtilsErrorBlueprints = ReservedAttributeNameErrorBlueprint
