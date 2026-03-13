import { type SchemaTypeDefinition } from 'sanity'
import { adType } from './ad'
import request from './request'
import announcement from './announcement'
import schedule from './schedule'
import { heroType } from './hero'
import staff from './staff'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [adType, request, announcement, schedule, heroType, staff],
}