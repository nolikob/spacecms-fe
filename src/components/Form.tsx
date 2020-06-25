import React, { ReactElement, ReactNode, CSSProperties } from "react";

import { Formik, Form as FForm } from "formik";

export type FormProps = {
    initialValues: {[key: string]: any}
    onSubmit: (values: any) => void | Promise<any>,
    validationSchema: any,
    children?: ReactNode,
    style?: CSSProperties,
};

export default function Form(props: FormProps): ReactElement {
    const {initialValues, onSubmit, validationSchema, children, style} = props;

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        style={style}
    >
        <FForm>
            {children}
        </FForm>
    </Formik>;
}
