"use client";
import React from "react";

interface Props {
    task: any;
}

function TaskItem({task} Props) {
    const{ title, description, date, Completed, important } = Props;

export default TaskItem;