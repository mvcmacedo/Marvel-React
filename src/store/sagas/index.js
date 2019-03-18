import { all, takeLatest } from 'redux-saga/effects';

import { Types as CharactersTypes } from '../ducks/characters';
import { addCharacter } from './characters';

export default function* rootSaga() {
  yield all([takeLatest(CharactersTypes.ADD_REQUEST, addCharacter)]);
}
