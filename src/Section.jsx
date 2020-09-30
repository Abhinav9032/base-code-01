import React from "react";

function Section(props) {
  return (
    <div>
      <div class="myx-indexContainer">
        <div class="text-banner-container">
          <h4 class="text-banner-title">{props.title}</h4>
          <h4 class="text-banner-subtitle"></h4>
        </div>
      </div>
    </div>
  );
}

export default Section;
