import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./userSlice";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Input } from "antd";

const Step2 = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [college, setCollege] = useState(user && user.college);
  const [formValues, setFormValues] = useState(user && user.subjects);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i]["Subject"] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { Subject: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}>Step 2</h1>
      <Row justify="center">
        <Col span={8}>
          <Form name="basic" initialValues={{ ["college"]: user.college, remember: true }} autoComplete="off">
            <Form.Item placeholder={user.college} label="College" name="college" rules={[{ required: true, message: "Please input your college!" }]}>
              <Input name="college" onChange={(e) => setCollege(e.target.value)} />
            </Form.Item>
          </Form>
          <form style={{ marginBottom: "3rem" }}>
            {formValues.map((element, index) => (
              <div key={index} style={{ display: "flex" }}>
                <Form.Item label="Subject" rules={[{ required: true, message: "Please input your Subject!" }]}>
                  <Input type="text" name="subject" value={element.Subject || ""} onChange={(e) => handleChange(index, e)} onPressEnter={addFormFields} />
                </Form.Item>
                {formValues.length >= 1 ? (
                  <Button danger onClick={() => removeFormFields(index)} style={{ marginLeft: "1rem" }}>
                    Remove
                  </Button>
                ) : null}
              </div>
            ))}
            <div className="button-section">
              {formValues.length == 0 || (formValues.length >= 1 && formValues.length < 5 && formValues[formValues.length - 1].Subject !== "") ? (
                <Button type="primary" onClick={() => addFormFields()}>
                  Add
                </Button>
              ) : null}
            </div>
          </form>
          <Row justify="space-between">
            <Col>
              <Link to="/apply/step1">
                <Button type="primary">Prev</Button>
              </Link>
            </Col>
            <Col>
              {college !== "Enter College" && formValues.length >= 2 && formValues[formValues.length - 1].Subject !== "" ? (
                <Link to="/apply/step3">
                  <Button type="primary" onClick={() => dispatch(update({ ...user, college: college, subjects: formValues }))}>
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

export default Step2;
