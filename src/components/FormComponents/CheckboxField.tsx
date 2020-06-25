import React, { ReactElement } from "react";
import { FieldProps } from "../../api/Types";
import { useField } from "formik";
import { Flex } from "..";

import "./CheckboxField.scss";

export default function CheckboxField({label, ...props}: FieldProps): ReactElement {
  const [ field, , helper ] = useField(props);

  return <div className={"CheckboxField"}>
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <span className={"CheckboxField-name"}>{label}</span>
      <div onClick={() => helper.setValue(!field.value)}
        className={`CheckboxField-switch ${field.value ? "CheckboxField-switch--selected" : ""}`}></div>
    </Flex>
  </div>;
}
