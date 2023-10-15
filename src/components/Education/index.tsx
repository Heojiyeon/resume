import React from "react";
import { FONT_HIGHLIGHT } from "../../utils/constants";
import { educations } from "../../utils/educationData";
import EducationHeader from "./EducationHeader";

export default function Education() {
    return (
    <div>
    <h1 style={{ color: FONT_HIGHLIGHT, marginBottom: '2rem' }}>
      Educations.
    </h1>
    {educations.map(education => (
      <div
        key={education._id}
        style={{
          marginBottom: '1rem',
        }}
      >
        <EducationHeader header={education.header}/>
      </div>
    ))}
  </div>
    )
}