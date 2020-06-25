/* tslint:disable */

import React, { ReactElement } from "react";
import { useField } from "formik";
import { FieldProps } from "../../api/Types";

export default function FileField({label, ...props}: FieldProps): ReactElement {
  const [ field, meta, helpers ] = useField(props);

  return <div className={"form-group"}>
    <label htmlFor={field.name}>{label}</label>
    <input className={"form-control"} name={field.name} type={"file"} onChange={event => {
      if (event.currentTarget.files !== null) {
        helpers.setValue(event.currentTarget.files[0]);
      } else {
        helpers.setValue(null);
      }
    }}/>
    {meta.touched && meta.error ?
      <div>{meta.error}</div> : null
    }
  </div>;
}
