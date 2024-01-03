import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  padding: 0 1rem;
`;

function Content({ selectedSection, selectedItem }) {
  return (
    <div>
      {selectedSection} - {selectedItem}
    </div>
  );
}

export default Content;
