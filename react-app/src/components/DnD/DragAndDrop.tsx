import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import User from "./User";

const DragAndDrop = () => {

    const [people, setPeople] = useState([
        { id: 1, name: "John"},
        { id: 2, name: "Frieda" },
        { id: 3, name: "Thomas" },
    ]);

    const handleDragEnd = (event: { active: any; over: any; }) => {
        const { active, over } = event

        const oldIndex = people.findIndex(person => person.id === active.id)
        const newIndex = people.findIndex(person => person.id === over.id)
        setPeople(arrayMove(people, oldIndex, newIndex))
    }
    console.log(people)

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={people}
                strategy={verticalListSortingStrategy}
            >
                {people.map((user) => (
                    <User user={user} />
                ))}
            </SortableContext>
        </DndContext>
    )
}

export default DragAndDrop