import React from "react";
import emojipedia from "./emojipedia";
import Emojiitem from "./Emojiitem";

function Emoji(emoji) {
  return (
    <Emojiitem key={emoji.id}  name={emoji.name} emoji={emoji.emoji} meaning={emoji.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Emoji)}</dl>
    </div>
  );
}

export default App;
