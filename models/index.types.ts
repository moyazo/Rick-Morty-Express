import { Sequelize } from 'sequelize'
import sequelize from 'sequelize-typescript';
import type { UserStatic } from './user'
import type { CharacterStatic } from './character'
import type { EpisodeStatic } from './episode'
import type { LocationStatic } from './location'
import type { Episodes_CharactersStatic } from './episodes_characters'

export type ModelsObject = {
  Sequelize: typeof Sequelize
  sequelize: typeof sequelize
  user: UserStatic
  character: CharacterStatic
  location: LocationStatic
  episode: EpisodeStatic
  episodesCharacters: Episodes_CharactersStatic
}