import { useNavigate } from "react-router";

export function MapName(props: {name: string, path: string, bg: string}) {
    const navigate = useNavigate()

    const jumpToPath = () => {
        navigate(props.path)
    }
    return <div onClick={jumpToPath} className="w-[200px] rounded-[16px] h-[200px] flex justify-center items-center text-[#fff]" style={{background: props.bg}}>
        {props.name}
    </div>
}