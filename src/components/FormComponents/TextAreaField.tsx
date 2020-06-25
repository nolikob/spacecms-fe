import React, { ReactElement } from "react";
import { FieldProps } from "../../api/Types";
import { useField, Field } from "formik";

export default function TextAreaField({label, ...props}: FieldProps): ReactElement {

  const [ field, meta ] = useField(props);

  return <div className={"form-group"}>
    <label htmlFor={field.name}>{label}</label>
    <Field as={"textarea"} className={"form-control"} {...field} {...props}/>
    {meta.touched && meta.error ?
      <div>{meta.error}</div> : null
    }
  </div>;
}
