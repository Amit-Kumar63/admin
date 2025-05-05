import { InputLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

const SwitchButton = ({labelText, value, handleChange, name}) => {
const label = { inputProps: { 'aria-label': labelText } };
  return (
    <div className='flex items-center gap-2 border-[1.5px] border-solid border-white py-2 px-4 rounded-sm'>
        <InputLabel sx={{color: 'white', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', userSelect: 'none'}} htmlFor={name}>{labelText}</InputLabel>
      <Switch {...label} defaultChecked color="warning" value={value} onChange={handleChange} name={name} id={name} />
    </div>
  )
}

export default SwitchButton
