import type {
  AnyAttribute,
  AnyOfAttribute,
  Attribute,
  ListAttribute,
  MapAttribute,
  PrimitiveAttribute,
  RecordAttribute,
  SetAttribute
} from '~/attributes/index.js'

import type { FormattedAnyOfAttrJSONSchema } from './anyOf.js'
import { getFormattedAnyOfAttrJSONSchema } from './anyOf.js'
import type { FormattedListAttrJSONSchema } from './list.js'
import { getFormattedListAttrJSONSchema } from './list.js'
import type { FormattedMapAttrJSONSchema } from './map.js'
import { getFormattedMapAttrJSONSchema } from './map.js'
import type { FormattedPrimitiveAttrJSONSchema } from './primitive.js'
import { getFormattedPrimitiveAttrJSONSchema } from './primitive.js'
import type { FormattedRecordAttrJSONSchema } from './record.js'
import { getFormattedRecordAttrJSONSchema } from './record.js'
import type { FormattedSetAttrJSONSchema } from './set.js'
import { getFormattedSetAttrJSONSchema } from './set.js'

export type FormattedAttrJSONSchema<ATTRIBUTE extends Attribute> = ATTRIBUTE extends AnyAttribute
  ? {}
  : ATTRIBUTE extends PrimitiveAttribute
    ? FormattedPrimitiveAttrJSONSchema<ATTRIBUTE>
    : ATTRIBUTE extends SetAttribute
      ? FormattedSetAttrJSONSchema<ATTRIBUTE>
      : ATTRIBUTE extends ListAttribute
        ? FormattedListAttrJSONSchema<ATTRIBUTE>
        : ATTRIBUTE extends MapAttribute
          ? FormattedMapAttrJSONSchema<ATTRIBUTE>
          : ATTRIBUTE extends RecordAttribute
            ? FormattedRecordAttrJSONSchema<ATTRIBUTE>
            : ATTRIBUTE extends AnyOfAttribute
              ? FormattedAnyOfAttrJSONSchema<ATTRIBUTE>
              : never

export const getFormattedAttrJSONSchema = <ATTRIBUTE extends Attribute>(
  attr: ATTRIBUTE
): FormattedAttrJSONSchema<ATTRIBUTE> => {
  type Response = FormattedAttrJSONSchema<ATTRIBUTE>

  switch (attr.type) {
    case 'any':
      return {} as Response
    case 'null':
    case 'boolean':
    case 'number':
    case 'string':
    case 'binary':
      return getFormattedPrimitiveAttrJSONSchema(attr) as Response
    case 'set':
      return getFormattedSetAttrJSONSchema(attr) as Response
    case 'list':
      return getFormattedListAttrJSONSchema(attr) as Response
    case 'map':
      return getFormattedMapAttrJSONSchema(attr) as Response
    case 'record':
      return getFormattedRecordAttrJSONSchema(attr) as Response
    case 'anyOf':
      return getFormattedAnyOfAttrJSONSchema(attr) as Response
  }
}
