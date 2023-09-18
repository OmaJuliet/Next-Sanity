import Link from "next/link"
import { GrFormPreviousLink } from "react-icons/gr";


const StudioNavbar = (props: any) => {
    return (
        <>
            <div className="flex items-center justify-between p-5" >
                <Link href="/" className="text-blue-500 flex items-center">
                  <GrFormPreviousLink className="h-6 w-6 text-blue-500 mr-2" />
                  Go to website
                </Link>
            </div>
            {props.renderDefault(props)}
        </>
    )
}

export default StudioNavbar