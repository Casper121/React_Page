import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import '../DnD/User.css'

const User = ({user}: any) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: user.id
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return(
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            <h2>{user.name}</h2>
            <h2>{user.desc}</h2>
        </div>
    )

}

export default User