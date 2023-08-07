import { styled } from '@mui/joy/styles';
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';

interface DarkModeToggleProps{
    checked: boolean
    onChange: ()=>void
}

const DarkModeToggle = (props: DarkModeToggleProps) => {
    const {checked, onChange} = props

    return (
        <Switch
            variant='soft'
            slotProps={{
                input: { 'aria-label': 'Dark mode toggle' },
                thumb: {
                    children: checked ? <DarkMode/> : <LightMode />,
                },
            }}
            sx={{
                '--Switch-thumbSize': '28px',
            }}
            checked={checked}
            onChange={onChange}
        />
    );
}

export default DarkModeToggle