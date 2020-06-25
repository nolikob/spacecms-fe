import React, { ReactElement } from "react";
import { Modal, Button } from "react-bootstrap";

import { Form, TextField } from "../../components";
import { updateUserPassword } from "../../api/Requests";

import * as Yup from "yup";

export type ChangePasswordModalProps = {
  show: boolean,
  onHide: () => void,
  userId: string,
};

export default function ChangePasswordModal(props: ChangePasswordModalProps): ReactElement {
  const { show, onHide, userId } = props;

  return <Modal show={show} onHide={onHide}>
    <Form initialValues={{
        password: "",
        passwordCheck: "",
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required("This field is required")
          .min(6, "Minimal length is 6 characters"),
        passwordCheck: Yup.string()
          .required("This field is required")
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={values => {
        updateUserPassword(userId, values);
        onHide();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Change password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField name={"password"} type={"password"} label={"Password"}/>
        <TextField name={"passwordCheck"} type={"password"} label={"Confirm password"}/>
      </Modal.Body>
      <Modal.Footer>
        <Button type={"button"} variant={"secondary"}>
          Cancel
        </Button>
        <Button type={"submit"} variant={"success"}>
          Submit
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>;
}
