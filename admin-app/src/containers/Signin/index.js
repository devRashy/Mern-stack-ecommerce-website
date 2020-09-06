import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/layouts";
import Input from '../../components/UI/input'

export default function Signin() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "15px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Input
                  label="Email"
                  placeholder="email"
                  value=""
                  type="email"
                  onChange={() => {}}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                  onChange={() => {}}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
