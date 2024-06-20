import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

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

    //NEEDS STYLE
    return(
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            {user.name}
        </div>
    )

}

export default User