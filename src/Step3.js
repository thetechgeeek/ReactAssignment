import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./userSlice";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Input } from "antd";

const Step3 = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [phone, setPhone] = useState(user.phone);
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}>Step 3</h1>
      <Row justify="center">
        <Col span={4}>
          <Form.Item
            label="Phone"
            rules={[
              { required: true, message: "Please input your phone!" },
              { min: 5, message: "Username must be minimum 5 characters." },
            ]}
            initialValues={{ ["phone"]: user.phone, remember: true }}
          >
            <Input type="text" name="phone" onChange={(e) => setPhone(e.target.value)}></Input>
          </Form.Item>{" "}
          <Row justify="space-between">
            <Col>
              <Link to="/apply/step2">
                <Button type="primary">Prev</Button>
              </Link>
            </Col>
            <Col>
              {phone !== "" ? (
                <Link to="/">
                  <Button type="primary" onClick={() => dispatch(update({ ...user, phone: phone }))}>
                    Submit
                  </Button>
                </Link>
              ) : (
                <Button disabled>Submit</Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Step3;
