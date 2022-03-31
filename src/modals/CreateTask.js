import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [taskReps, setTaskReps] = useState("");
  const [taskSets, setTaskSets] = useState("");
  const [taskRest, setTaskRest] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "taskReps") {
      setTaskReps(value);
    } else if (name === "taskSets") {
      setTaskSets(value);
    } else if (name === "taskRest") {
      setTaskRest(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Reps"] = taskReps;
    taskObj["Sets"] = taskSets;
    taskObj["Rest"] = taskRest;
    taskObj["Description"] = description;
    save(taskObj);
    setTaskName("");
    setTaskReps("");
    setTaskSets("");
    setTaskRest("");
    setDescription("");
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Exercise Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />

          {/* name,reps, set, rest time, weight */}
        </div>
        <div className="form-group">
          <label>Exercise Reps</label>
          <input
            type="text"
            className="form-control"
            value={taskReps}
            onChange={handleChange}
            name="taskReps"
          />
        </div>
        <div className="form-group">
          <label>Exercise Sets</label>
          <input
            type="text"
            className="form-control"
            value={taskSets}
            onChange={handleChange}
            name="taskSets"
          />
        </div>
        <div className="form-group">
          <label>Rest Time</label>
          <input
            type="text"
            className="form-control"
            value={taskRest}
            onChange={handleChange}
            name="taskRest"
          />
        </div>
        <div className="form-group">
          <label>Weight</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
