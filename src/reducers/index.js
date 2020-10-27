import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "All Star", duration: "3:15" },
    { title: "Macarena", duration: "2:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type !== "SONG_SELECTED") return selectedSong;

  return action.payload;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
