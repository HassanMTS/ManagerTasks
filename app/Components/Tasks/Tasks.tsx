"use client"
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import CreateContent from "../Modals/CreateContent";
import { title } from "process";

function Tasks() {
    const { theme } = useGlobalState();

    return ( 
    <TaskStyled theme={theme}>
<h1>{title}</h1>
<div className="tasks grid">
{Tasks.map((task) => (
    <div className="task" key={task._id}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.date}</p>
        <p>{task.completed}</p>
        <p>{task.important}</p>
        </div>
))}
</div>
</TaskStyled>
    );
}

const TaskStyled = styled.div`
    padding: 2rem;
    width: 100%;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    height: 100%;


    overflow-y auto;

    %::webkit-scrollbar {
        width: 0.5rem;
    }
`;

export default Tasks;