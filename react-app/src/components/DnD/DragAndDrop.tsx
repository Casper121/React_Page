import { DndContext, closestCorners} from "@dnd-kit/core"
import { SortableContext, horizontalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import User from "./User";

const DragAndDrop = () => {
    
    const [people, setPeople] = useState([
        {id: 1, name: "John", desc: "Jung, 23 Jahre alt, Sportler"},
        {id: 2, name: "Frieda", desc: "Jung, 24 Jahre alt, Sportler"},
        {id: 3, name: "Thomas", desc: "Alt, 69 Jahre alt, Habibi"},
    ]);

    const handleDragEnd = (event: { active: any; over: any; }) => {
        const {active, over} = event
        
        const oldIndex = people.findIndex(person => person.id === active.id)
        const newIndex = people.findIndex(person => person.id === over.id)
        setPeople(arrayMove(people, oldIndex, newIndex))
    }

    return(
        <DndContext 
            collisionDetection={closestCorners} 
            onDragEnd={handleDragEnd}
        >
            <SortableContext 
                items={people} 
                strategy={horizontalListSortingStrategy} 
            >
                {people.map((user) => (
                    <User user={user}/>
                ))}
            </SortableContext>
        </DndContext>
    )
}

export default DragAndDrop