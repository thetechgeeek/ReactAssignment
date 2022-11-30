import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./userSlice";
import { Link } from "react-router-dom";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import { Select } from "antd";

const Step1 = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [gender, setGender] = useState(user.gender);
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}>Step1</h1>
      <Row justify="center">
        <Col span={6}>
          <Form name="basic" initialValues={{ ["username"]: user.name, ["password"]: "", ["gender"]: user.gender, remember: true }} autoComplete="off">
            <Form.Item placeholder={user.name} label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
              <Input name="username" onChange={(e) => setName(e.target.value)} disabled={user.name === "Enter Name" ? false : true} />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item label="Confirm Password" name="confirmPw" rules={[{ required: true, message: "Please input your password!" }]}>
              <Input.Password onChange={(e) => setConfirmPw(e.target.value)} />
            </Form.Item>

            <Form.Item label="Gender" name="gender" rules={[{ required: true, message: "Please input your Gender!" }]}>
              <Select
                style={{
                  width: 120,
                }}
                onChange={(value) => setGender(value)}
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                  {
                    value: "Other",
                    label: "Other",
                  },
                ]}
                disabled={user.gender === "Enter Gender" ? false : true}
              />
            </Form.Item>
          </Form>
          <Row justify="space-between">
            <Col>
              <Link to="/">
                <Button type="primary">Prev</Button>
              </Link>
            </Col>
            <Col>
              {name !== "" && gender !== "Enter Gender" && password !== "" && password === confirmPw ? (
                <Link to="/apply/step2">
                  <Button type="primary" onClick={() => dispatch(update({ ...user, name: name, gender: gender, pw: password }))}>
                    Next
                  </Button>
                </Link>
              ) : (
                <Button disabled>Next</Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Step1;
