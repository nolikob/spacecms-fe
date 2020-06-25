import React, { ReactElement } from "react";
import { useField, Field } from "formik";

import { FieldProps } from "../../api/Types";

export default function SelectField({label, ...props}: FieldProps): ReactElement {
  const [ field, meta ] = useField(props);

  return <div className={"form-group"}>
    <label htmlFor={field.name}>{label}</label>
    <Field className={"form-control"} as={"select"} {...props} {...field} />
    {meta.touched && meta.error ?
      <div>{meta.error}</div> : null
    }
  </div>;
}
