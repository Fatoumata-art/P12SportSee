

function renderLegend (props){
    const { payload } = props;

    payload.map((entry) => {
      
            entry.dataKey = "toto"
        return (
            <p>{entry.dataKey}</p>

        )
            
    
    })
  
     
    
  } export default renderLegend

  
  
