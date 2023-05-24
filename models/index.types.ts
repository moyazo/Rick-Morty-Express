import { Sequelize } from 'sequelize'
import sequelize from '../src/services/sequelize'
import type { UserStatic } from './user'
import type { CharacterStatic } from './character'
import type { EpisodeStatic } from './episode'
import type { LocationStatic } from './location'
import type { Episodes_CharactersStatic } from './episodes_characters'

export type ModelsObject = {
  Sequelize: typeof Sequelize
  sequelize: typeof sequelize
  User: UserStatic
  Character: CharacterStatic
  Location: LocationStatic
  Episode: EpisodeStatic
  EpisodesCharacters: Episodes_CharactersStatic
}