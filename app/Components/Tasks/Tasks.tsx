"use client"
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import CreateContent from "../Modals/CreateContent";
import { title } from "process";
import TaskItem from "../TaskItem/TaskItem";

function Tasks() {
    const { theme } = useGlobalState();

    return ( 
    <TaskStyled theme={theme}>
<h1>{title}</h1>
<div className="tasks grid">
{Tasks.map((task) => (
    <TaskItem key={task.id} task={{...task}} />
))}
</div>
</TaskStyled>
    );
}
const TaskStyled = styled.main`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }


  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: ${(props) => props.theme.colorPrimaryGreen};
      border-radius: 0.5rem;
    }
  }
`;

export default Tasks;