import DarkMode from "@mui/icons-material/DarkMode"
import LightMode from "@mui/icons-material/LightMode"
import Switch from "@mui/joy/Switch"

interface DarkModeToggleProps {
    checked: boolean
    onChange: () => void
}

const DarkModeToggle = (props: DarkModeToggleProps) => {
    const { checked, onChange } = props

    return (
        <Switch
            variant="soft"
            size="lg"
            slotProps={{
                input: { "aria-label": "Dark mode toggle" },
                thumb: {
                    children: checked ? <DarkMode /> : <LightMode />,
                },
                track: {
                    style: {
                        backgroundColor: "#ffffff",
                        border: "2px solid",
                        borderColor: "#DFDFDF",
                    },
                },
            }}
            sx={{
                "--Switch-thumbSize": "32px",
                "--Switch-trackWidth": "64px",
                "--Switch-trackHeight": "32px",
            }}
            checked={checked}
            onChange={onChange}
        />
    )
}

export default DarkModeToggle
