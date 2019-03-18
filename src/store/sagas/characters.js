import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as CharactersActions } from '../ducks/characters';

export function* addCharacter(action) {
  if (!action.payload.character) {
    yield put(CharactersActions.addCharacterFailure('Type a hero name please!'));
    toast.warn('Type a hero name please!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else {
    try {
      const {
        data: { data },
      } = yield call(
        api.get,
        `/characters?name=${action.payload.character}&apikey=${
          process.env.REACT_APP_API_KEY
        }&hash=${process.env.REACT_APP_HASH}&ts=${process.env.REACT_APP_TS}`,
      );

      if (!data.results.length) {
        yield put(CharactersActions.addCharacterFailure('Hero not found!'));
        toast.warn('Hero not found!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const isDuplicated = yield select(state => state.characters.data.find(character => character.id === data.results[0].id));

        if (isDuplicated) {
          yield put(CharactersActions.addCharacterFailure('Hero already exists!'));
          toast.warn('Hero already exists!', {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          const characterData = data.results.map(result => ({
            id: result.id,
            name: result.name,
            description: result.description || 'No description.',
            avatar: `${result.thumbnail.path}/portrait_xlarge.${result.thumbnail.extension}`,
            series: result.series.available,
            comics: result.comics.available,
            events: result.events.available,
            stories: result.stories.available,
            showDescription: false,
          }));

          yield put(CharactersActions.addCharacterSuccess(characterData));
          toast.success('Hero added successfully!', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    } catch (err) {
      yield put(CharactersActions.addCharacterFailure('Error, try again!'));
      toast.error('Error, try again!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
}
