import styled from "styled-components";

import React from "react";

const Sk = ({children}) => {
  const Wrapper = styled.div`
    transform: translateZ(30px);
    width: ${width};
    @media (max-width: 768px) {
      width: 3rem;
    }
  `;
    return (
        <Wrapper>
            {children}
      </Wrapper>
  );
};

export default Sk;
