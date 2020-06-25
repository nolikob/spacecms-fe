import React, { ReactElement } from "react";
import { useField } from "formik";
import { FieldProps } from "../../api/Types";

TextField.defaultProps = {
  type: "text",
};

export default function TextField({label, ...props}: FieldProps): ReactElement {
  const [ field, meta ] = useField(props);

  return <div className={"form-group"}>
    <label htmlFor={props.name}>{label}</label>
    <input className={"form-control"} {...field} {...props} />
    {meta.touched && meta.error ?
      <div>{meta.error}</div> : null
    }
  </div>;
}
