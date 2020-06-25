import React, { ReactElement } from "react";
import { Modal, Button } from "react-bootstrap";
import * as Yup from "yup";

import { Form, TextField, CheckboxField } from "../../components";

import { createUser } from "../../api/Requests";

export type AddUserModalProps = {
  show: boolean,
  onHide: () => void,
};

export default function AddUserModal(props: AddUserModalProps): ReactElement {
  const { show, onHide } = props;

  return <Modal show={show} onHide={onHide}>
    <Form initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        permissions: {
          settings: false,
          files: false,
          pages: false,
          templates: false,
          users: false,
        },
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("First name must be filled"),
        lastName: Yup.string()
          .required("Last name must be filled"),
        username: Yup.string()
          .required("Username must be filled"),
        password: Yup.string()
          .required("Password must be filled")
          .min(6, "Password must be at least 6 characters"),
      })}
      onSubmit={values => {
        createUser(values);
        onHide();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextField name={"firstName"} label={"First name"} placeholder={"First name"}/>
        <TextField name={"lastName"} label={"Last name"} placeholder={"Last name"}/>
        <TextField name={"username"} label={"Username"} placeholder={"Username"}/>
        <TextField name={"password"} type={"password"} label={"Password"} placeholder={"Password"}/>
        <CheckboxField name={"permissions.settings"} label={"Settings"} />
        <CheckboxField name={"permissions.files"} label={"Files"} />
        <CheckboxField name={"permissions.pages"} label={"Pages"} />
        <CheckboxField name={"permissions.templates"} label={"Templates"} />
        <CheckboxField name={"permissions.users"} label={"Users"} />
      </Modal.Body>
      <Modal.Footer>
        <Button type={"button"} variant={"light"} onClick={() => onHide()}>
          Cancel
        </Button>
        <Button type={"submit"} variant={"success"}>
          Create
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>;
}
