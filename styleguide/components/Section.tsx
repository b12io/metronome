

import React from "react";
import { Node } from "react";

type SectionProps = {
  name: string;
  slug: string;
  content: Node;
  sections: Node;
  components: Node;
  description: Node;
};

const Section = ({
  slug,
  content,
  components,
  sections
}: SectionProps) => {
  return <div className="app__body-content">
      {content}
      {sections}
      {components}
    </div>;
};

export default Section;