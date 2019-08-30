import { newpetinputResolvers } from './generated/newpetinput'
import { petResolvers } from './generated/pet'

import { customResolvers } from './custom'

export const resolvers = [newpetinputResolvers, petResolvers, ...customResolvers]
