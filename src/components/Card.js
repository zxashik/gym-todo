import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div class="card-wrapper ms-5">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div class="task-holder">
        <h6 class="card-title">
          <span>Workout: </span>
          {taskObj.Name}
        </h6>

        {/* <span
          class="card-heade "
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "10px",
          }}
        >
          <span className="py-5">
            <span className="font-italic">Workout: </span>
            {taskObj.Name}
          </span>
        </span> */}

        <p className="">
          <span className="font-italic">Reps: </span> {taskObj.Reps}
        </p>
        <p className="">
          <span className="font-italic">Sets: </span> {taskObj.Sets}
        </p>
        <p className="">
          <span className="font-italic">Rest: </span> {taskObj.Rest}
        </p>
        <p className="">
          <span className="font-italic">weight: </span>
          {taskObj.Description}
        </p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit mr-3"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></i>

          <i
            class="fas fa-trash-alt ms-3"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
