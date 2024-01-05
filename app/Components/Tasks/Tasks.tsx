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