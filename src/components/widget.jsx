import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Widget = ({icon}) => {
  return (
    <div className="widget">
        <LocalFireDepartmentIcon  className="icon" sx={{ fontSize: 40 }}/>
        <div className='widget-text'>
        <h3>Calorie</h3>
        <span>text</span>
        </div>
    </div>
  )
}

export default Widget