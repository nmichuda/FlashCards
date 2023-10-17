import { React, useEffect, useState } from "react";
import CancelButton from "./CancelButton";



function FormComponent({firstLabel, firstHandler, firstValue, secondLabel, secondHandler, secondValue, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          {firstLabel}:
          <textarea
            id="cardFront"
            name="cardFront"
            value={firstValue}
            onChange={firstHandler}
          />
        </label>
      </div>
      <div>
        <label>
          {secondLabel}:
          <textarea
            id="cardBack"
            name="cardBack"
            value={secondValue}
            onChange={secondHandler}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <CancelButton />
    </form>
  );
}

export default FormComponent;
