

const CustomTooltip = ({ active, payload, label }) => {
console.log("toolLip", payload)

    if (active && payload && payload.length) {

      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
         
          <p className="intro">{`name : ${payload?.name}`}</p>
          <p className="desc">{`pv : ${payload?.pv}`}</p>
        </div>
      );
    }
  
    return null;
  };

export default CustomTooltip