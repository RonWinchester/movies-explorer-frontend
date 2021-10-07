import {
  LARGE_SCREEN,
  MEDIUM_SCREEN,
  MAX_MOVIES,
  MID_MOVIES,
  MIN_MOVIES,
  ADD_MAX_MOVIES,
  ADD_MID_MOVIES,
  ADD_MIN_MOVIES,
} from "../../constants/constants";

export function dependentValues(
  sizeWindow,
  setFilmsNumber,
  setDownloadableMovies
) {
  if (sizeWindow >= LARGE_SCREEN) {
    setFilmsNumber(MAX_MOVIES);
    setDownloadableMovies(ADD_MAX_MOVIES);
  } else if (sizeWindow < LARGE_SCREEN && sizeWindow >= MEDIUM_SCREEN) {
    setFilmsNumber(MID_MOVIES);
    setDownloadableMovies(ADD_MID_MOVIES);
  } else if (sizeWindow < MEDIUM_SCREEN) {
    setFilmsNumber(MIN_MOVIES);
    setDownloadableMovies(ADD_MIN_MOVIES);
  }
}
