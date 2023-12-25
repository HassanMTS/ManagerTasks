"use client";
import React, {useState} from "react";

function CreateContent() {
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [date, setDate] = useState("");
        const [completed, setCompleted] = useState(false);
        const [important, setImportant] = useState(false);
        return (
        <div>
        <h1>Create a Task</h1>
        <div className="input-control">
                <label htmlFor="title">Title</label>
                <input type="text"
                id="title"
                value={title}
                onChange={handleChange("title")}
                placeholder="e.g, Watch a video"

                />
        </div>
        <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
                value={description}
                onChange={handleChange("description")}
                name="description"
                id="description"
                rows={4}
                placeholder="e.g, Watch a video about Next.js Auth"
        ></textarea>
        </div>
        </div>
        );
}

export default CreateContent;