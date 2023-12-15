import React from "react";
import styled from "styled-components";
import HeadCombo from "../helpers/HeadCombo";
import TestBox from "../helpers/TestBox";

const Testimonials = () => {
  return (
    <Wrapper>
      <HeadCombo
        heading={"Testimonials"}
        description={"More than 10.000 positive testimonial from our members."}
      />
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <TestBox 
          name={"Paul Starr"}
          review={"I'm incredibly grateful for the React course from Codex. The content was well-structured and the hands-on projects were invaluable. The instructors' clear explanations made complex concepts easy to understand."}
          img={"d"}
          star={4}/>

          <TestBox 
          name={"Linda Swayne"}
          review={"The Docker course was exceptional. The content was practical and insightful, and the instructors' guidance was invaluable. The hands-on projects provided real-world application, and the support from the community was prompt and constructive."}
          img={"e"}
          star={5}/>

          <TestBox 
          name={"Amir Sandhu"}
          review={"AWS course exceeded my expectations. The content was comprehensive, and the hands-on experience was truly valuable. The instructors' expertise made complex AWS concepts understandable, and the support from the community was fantastic."}
          img={"h"}
          star={4}/>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem;
`;

export default Testimonials;
