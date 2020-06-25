import React, { ReactElement } from "react";
import { RouteComponentProps } from "@reach/router";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup";

import { Flex, Card, Form, FileField, TextField, TextAreaField } from "../components";

import "./Settings.scss";
import { submitSEOForm, storeSocials } from "../api/Requests";

export default function Settings(props: RouteComponentProps): ReactElement {
	return <Flex flex={"1"} style={{ margin: "15px 0"}}>
		<Container fluid>
			<Row className={"p-2"}>
				<Col>
					<h2>Settings</h2>
				</Col>
			</Row>
			<Row className={"p-2"}>
				<Col xs lg={8}>
					<Card className={"SettingCard"}>
						<h4 className={"SettingCard-title"}>SEO</h4>
						<Flex className={"SettingCard-content"}>
							<Form
								initialValues={{
									title: "",
									description: "",
									ogImage: undefined,
									favicon: undefined,
								}}
								validationSchema={Yup.object({
									title: Yup.string()
										.required("Field required"),
									description: Yup.string()
										.required("Field required"),
									ogImage: Yup.object()
										.nullable(),
									favicon: Yup.object()
										.nullable(),
								})}
								onSubmit={values => submitSEOForm(values)}
							>
								<TextField label={"Site name"} name={"title"} placeholder={"Title"}/>
								<TextAreaField label={"Site description"} name={"description"} placeholder={"Description"} />
								<FileField label={"OG:Image"} type={"file"} name={"ogImage"} placeholder={"Select file"} />
								<FileField label={"Favicon"} type={"file"} name={"favicon"} placeholder={"Select file"} />
								<Button type={"submit"} variant={"outline-dark"}>
									Submit
								</Button>
							</Form>
						</Flex>
					</Card>
				</Col>
				<Col xs lg={4}>
					<Card className={"SettingCard"}>
						<h4 className={"SettingCard-title"}>Socials</h4>
						<Flex className={"SettingCard-content"} flexFlow={"column"}>
							<Form
								initialValues={{
									facebook: "",
									instagram: "",
								}}
								validationSchema={Yup.object({
									facebook: Yup.string(),
									instagram: Yup.string(),
								})}
								onSubmit={values => storeSocials(values)}
							>
								<TextField name={"facebook"} label={"Facebook"} placeholder={"Link to facebook"} />
								<TextField name={"instagram"} label={"Instagram"} placeholder={"Link to instagram"} />
								<Button type={"submit"} variant={"outline-dark"}>
									Save
								</Button>
							</Form>
						</Flex>
					</Card>
				</Col>
			</Row>
		</Container>
	</Flex>;
}
